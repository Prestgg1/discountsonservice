
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; 

export async function PUT(req: Request) {
  const prisma = new PrismaClient();
  
  try {
    const body = await req.json();
    const { email, name, userId } = body;
    if (!email || !name) {
      return NextResponse.json({ message: 'Email və ad tələb olunur' }, { status: 400 });
    }
    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        email: email,
        name: name,
      },
    });
    prisma.$disconnect();
    return NextResponse.json({ message: 'Məlumatlar uğurla yeniləndi', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Bilinməyən xəta baş verdi' }, { status: 500 });
  }

}
