import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export async function POST(req: NextRequest, res: NextResponse) {
 /*  const { email, token } = req.body; */

/*   const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Şifre Sıfırlama İsteği',
    text: `Şifrenizi sıfırlamak için bu bağlantıya tıklayın: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Şifre sıfırlama e-postası gönderildi!' },{status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Email gönderende bir problem yarandı." }, { status: 500 });
  } */
    return NextResponse.json({ message: 'Şifre sıfırlama e-postası gönderildi!' },{status: 200});
}
