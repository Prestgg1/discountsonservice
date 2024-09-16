import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, name, password } = await request.json();

    // Şifreyi hash'le
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Kullanıcı oluşturuldu", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Bir hata oluştu", error: error.message }, { status: 400 });
  }
}
