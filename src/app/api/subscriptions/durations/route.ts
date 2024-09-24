import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request:Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const type = searchParams.get('type');

  if (!slug || !type) {
    return NextResponse.json(
      { message: 'Slug ve type parametreleri gereklidir.' },
      { status: 400 }
    );
  }

  try {
    // Aboneliği slug ile bul
    const subscription = await prisma.subscription.findUnique({
      where: { slug },
      include: {
        types: {
          where: { name: type },
          include: {
            durations: true, // Süreleri dahil et
          },
        },
      },
    });

    if (!subscription) {
      return NextResponse.json(
        { message: 'Abonelik bulunamadı.' },
        { status: 404 }
      );
    }

    // Süreleri döndür
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
