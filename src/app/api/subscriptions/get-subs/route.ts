import { NextResponse, NextRequest } from 'next/server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const subscriptions = await prisma.subscription.findMany();
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Səbuhi Gənə Problem Oldu.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function DELETE(req: NextRequest) {
  const reqBody = await req.json();
  try{
    const subscription = await prisma.subscription.delete({
      where: { id: reqBody.id },
    });
    return NextResponse.json(subscription);
  }catch(error){
    console.error(error);
    return NextResponse.json({ error: 'Səbuhi Gənə Problem Oldu.' }, { status: 500 });
  }
}
