import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug Yoxdu.' }, { status: 400 });
  }

  try {
    const subscription = await prisma.subscription.findFirst({
      where: { slug },
      include: {
        types: {
          include: {
            durations: true,
          },
        },
      }
    });

    if (!subscription) {
      return NextResponse.json({ error: 'Məlumat Tapılmadı.' }, { status: 404 });
    }

    return NextResponse.json(subscription, { status: 200 });

  } catch (error) {
    console.error('Hata:', error);
    return NextResponse.json({ error: 'Serverdə Problem Oldu.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
