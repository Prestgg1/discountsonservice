import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request:Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const type = searchParams.get('type');

  if (!slug || !type) {
    return NextResponse.json(
      { message: 'Slug Və Type Lazımdı' },
      { status: 400 }
    );
  }

  try {
    // Abunəliyi Slug ilə Tapır
    const subscription = await prisma.subscription.findUnique({
      where: { slug },
      include: {
        types: {
          where: { name: type },
          include: {
            durations: true,
          },
        },
      },
    });

    if (!subscription) {
      return NextResponse.json(
        { message: 'Abunəlik Tapılmadı.' },
        { status: 404 }
      );
    }

    const durations = subscription.types[0]?.durations || [];
    return NextResponse.json(durations, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Sunucu hatası' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
