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
    const { email, verificationCode, newPassword, confirmPassword }: ResetPasswordRequest = await req.json();

    await passwordValidationSchema.validate({ newPassword, confirmPassword });

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: 'İstifadəçi Tapılmadı' }, { status: 404 });
    }

    if (user.verificationCode !== verificationCode || !user.verificationCodeExpiry || user.verificationCodeExpiry < new Date()) {
      return NextResponse.json({ message: 'Ya Səhv Kod Yazırsan Yada Surokun Keçib' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email: email },
      data: {
        password: hashedPassword,
        verificationCode: null,
        verificationCodeExpiry: null
      },
    });

    return NextResponse.json({ message: 'Şifrə Dəyişdirildi' }, { status: 200 });
  } catch (error: unknown) {
  
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Bir hata oluştu' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Səbuhi serverdə problem var' }, { status: 500 });
  }
}
