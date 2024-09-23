import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const subscriptions = await prisma.subscription.findMany({
    /*   include: {
        types: {
          include: {
            durations: {
              include: {
                prices: true, // Qiymetleri Almaq Üçün
              },
            },
          },
        },
      }, */
    });

    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Səbuhi Gənə Problem Oldu.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
