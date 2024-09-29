import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, name, password,captchaToken } = await request.json();
    /* User Varsa  */
    const existUser = await prisma.user.findUnique({
      where: { email: email }
    })
    if(!captchaToken){
      return NextResponse.json({ message: "Captcha Tələb Olunur" }, { status: 400 });
    }
    if(existUser) {
      return NextResponse.json({ message: "Istidadəcinin Hesabı Onsuzda Var" }, { status: 400 });
    }
    /* Yeni Hesap Yaratmaq Üçün  */
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ message: "İstifadeçi yaradıldı", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Səbuhi Serverdə Problem Var", error: error.message }, { status: 400 });
  }
}
