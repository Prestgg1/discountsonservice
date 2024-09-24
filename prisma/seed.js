import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.subscription.create({
    data: {
      name: 'Netflix',
      slug: 'netflix',
      image: "/images/netflix-logo.jpg",
      description: { en: 'Netflix subscription plan', az: 'Netflix abonelik planı' },
      types: {
        create: [
          {
            name: 'Basic',
            features: { en: ['Ad-free music', 'Offline'], az: ['Reklamsız müzik', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 45,
                },
                {
                  duration: 12,
                  price: 80,
                },
              ],
            },
          },
          {
            name: 'Standard',
            features: { en: ['HD available', 'Offline'], az: ['HD mevcut', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 60,
                },
                {
                  duration: 12,
                  price: 110,
                },
              ],
            },
          },
          {
            name: 'Premium',
            features: { en: ['Ultra HD', 'Offline'], az: ['Ultra HD', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 80,
                },
                {
                  duration: 12,
                  price: 150,
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.subscription.create({
    data: {
      name: 'Youtube',
      slug: 'youtube-premium',
      image:"/images/youtube-logo.png",
      description: { en: 'Spotify subscription plan', az: 'Spotify abonelik planı' },
      types: {
        create: [
          {
            name: 'Basic',
            features: { en: ['Ad-free music', 'Offline'], az: ['Reklamsız müzik', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 30,
                },
                {
                  duration: 12,
                  price: 55,
                },
              ],
            },
          },
          {
            name: 'Premium',
            features: { en: ['Ultra HD audio', 'Offline'], az: ['Ultra HD ses', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 70,
                },
                {
                  duration: 12,
                  price: 130,
                },
              ],
            },
          },
        ],
      },
    },
  });
  await prisma.subscription.create({
    data: {
      name: 'Spotify',
      slug: 'spotify',
      image:"/images/spotify-logo.jpg",
      description: { en: 'Spotify subscription plan', az: 'Spotify abonelik planı' },
      types: {
        create: [
          {
            name: 'Basic',
            features: { en: ['Ad-free music', 'Offline'], az: ['Reklamsız müzik', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 30,
                },
                {
                  duration: 12,
                  price: 55,
                },
              ],
            },
          },
          {
            name: 'Premium',
            features: { en: ['Ultra HD audio', 'Offline'], az: ['Ultra HD ses', 'Çevrimdışı'] },
            durations: {
              create: [
                {
                  duration: 6,
                  price: 70,
                },
                {
                  duration: 12,
                  price: 130,
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
