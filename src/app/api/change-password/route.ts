import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { passwordValidationSchema } from '@/app/schema/resetpassword';

const prisma = new PrismaClient();

interface ResetPasswordRequest {
  email: string;
  verificationCode: string;
  newPassword: string;
  confirmPassword: string;
}

export async function POST(req: NextRequest) {
  try {
    // Gelen JSON verisini tipleyin
    const { email, verificationCode, newPassword, confirmPassword }: ResetPasswordRequest = await req.json();

    // Şifre validasyonu yap
    await passwordValidationSchema.validate({ newPassword, confirmPassword });

    // Kullanıcıyı kontrol et
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: 'Kullanıcı bulunamadı' }, { status: 404 });
    }

    // Doğrulama kodunu ve süresini kontrol et
    if (user.verificationCode !== verificationCode || !user.verificationCodeExpiry || user.verificationCodeExpiry < new Date()) {
      return NextResponse.json({ message: 'Geçersiz veya süresi dolmuş doğrulama kodu' }, { status: 400 });
    }

    // Yeni şifreyi hashle
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Şifreyi güncelle
    await prisma.user.update({
      where: { email: email },
      data: {
        password: hashedPassword,
        verificationCode: null, // Kullanılan doğrulama kodunu temizle
        verificationCodeExpiry: null, // Bitiş tarihini sıfırla
      },
    });

    return NextResponse.json({ message: 'Şifre başarıyla güncellendi' }, { status: 200 });
  } catch (error: unknown) {
    // Hata kontrolü
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Bir hata oluştu' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Bilinmeyen bir hata oluştu' }, { status: 500 });
  }
}
