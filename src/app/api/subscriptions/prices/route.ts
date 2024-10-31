import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const duration = parseInt(searchParams.get('duration')||'12');
  if (!slug || typeof slug !== 'string' || isNaN(duration)) {
    return NextResponse.json(
      { message: 'Slug Və Duration Lazımdı.' },
      { status: 400 }
    );
  }

  try {
    const subscription = await prisma.subscription.findUnique({
      where: { slug },
      include: {
        types: {
          orderBy: {
            id: 'asc'
          },
          include: {
            durations: {
              where: { duration },
              include: {
                subscriptionType: true
              },
            },
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

    const result = subscription.types.map(type => ({
      type: type.name,
      features: type.features, 
      durations: type.durations.map(d => ({
        duration: d.duration,
        price: d.price,
      })),
    }));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Serverdə Problem Var' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
