import { NextResponse, NextRequest } from 'next/server'
import nodemailer from "nodemailer"

export async function POST(req: NextRequest ) {
  const { SMTP_EMAIL,SMTP_PASSWORD } = process.env
  console.log('Isledi')
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD
    }
  })

  let {body} = await req.json()
  body = JSON.parse(body)
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: "Bütün məlumatları daxil edin" }, { status: 400 })
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: "prestgg56@gmail.com",
      subject: `${body.name} Sene Yazdı`,
      html: `<h1>${body.name}</h1><p>${body.message}</p>`
    })
    console.log(sendResult)
  } catch (error) {
    console.error("Mail Göndərilmədi:", error)
    return NextResponse.json({ message: "Maildə Nəsə Problem Oldu" }, { status: 401 })
  }

  return NextResponse.json({ message: "Mesaj ugurla gonderildi" }, { status: 201 });
}
