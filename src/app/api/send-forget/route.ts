import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, verificationCode } = await req.json();
  console.log(email, verificationCode)
  // İstidacəki varmı
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (!user) {
    console.log("İstifadəçi tapılmadı")
    return NextResponse.json({ message: "İstifadəçi tapılmadı" }, { status: 400 });
  }

  // Testiq Kodunun Vaxtı Keçibmi?
  const now = new Date();
  if (user.verificationCodeExpiry && user.verificationCodeExpiry < now) {
    console.log("Təstiq Kodunun Vaxtı Keçib")
    return NextResponse.json({ message: "Təstiq Kodunun Vaxtı Keçib." }, { status: 400 });
  }

  // Təstiq Kodu Düzdümü?
  if (user.verificationCode == verificationCode) {
    console.log("Təstiq Kodu Düzdür")
    return NextResponse.json({ message: 'Təstiq Olundu' }, { status: 200 });
  } else {
    console.log("Təstiq Kodu Yanlış")
    return NextResponse.json({ message: 'Təstiq Kodu Yanlış' }, { status: 400 });
  }
}
