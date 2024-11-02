import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  console.log(email)

  // İstifadəçiyi Control Et
  const existuser = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (!existuser) {
    return NextResponse.json({ message: "İstifadəçi tapılmadı" }, { status: 400 });
  }

  // 6 Rəqəmli Bir Kod Yaradır
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Kodun Tarix 10 deq
  const expiryTime = new Date();
  expiryTime.setMinutes(expiryTime.getMinutes() + 10);

  // Kodu və Tarixi Yadda saxla
  await prisma.user.update({
    where: {
      email: email
    },
    data: {
      verificationCode: verificationCode,
      verificationCodeExpiry: expiryTime,
    },
  });

  // Kodu E-poşta ile göndər
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: 'Təstiqləmə Kodu',
    text: `Sizin kodunuz: ${verificationCode} (Bu kod 10 dəqiqə ərzində keçərlidir.)`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Təstiq kodu mailinizə göndərildi!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Serverdə Bir Problem Yarandı.", error }, { status: 500 });
  }
}
