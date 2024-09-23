// prisma/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // İstifadəcı yaratmaq üçün
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'securepassword',
    },
  });

  // Abunəlik Yaratmaq Üçün
  const subscription = await prisma.subscription.create({
    data: {
      name: 'Netflix',
      image: "null"
    },
  });

  // Abonelik tipleri oluştur
  const basicType = await prisma.subscriptionType.create({
    data: {
      name: 'Basic',
      subscriptionId: subscription.id,
    },
  });

  const standardType = await prisma.subscriptionType.create({
    data: {
      name: 'Standard',
      subscriptionId: subscription.id,
    },
  });

  // Vaxt Bildirmək Üçün
  const durations = [
    { duration: 30, price: 10.00, subscriptionTypeId: basicType.id },
    { duration: 180, price: 50.00, subscriptionTypeId: basicType.id },
    { duration: 365, price: 90.00, subscriptionTypeId: basicType.id },
    { duration: 30, price: 15.00, subscriptionTypeId: standardType.id },
    { duration: 180, price: 70.00, subscriptionTypeId: standardType.id },
    { duration: 365, price: 120.00, subscriptionTypeId: standardType.id },
  ];

  // Vaxtları Databaseye Elavə etmək Üçün
  for (const { duration, price, subscriptionTypeId } of durations) {
    await prisma.subscriptionDuration.create({
      data: {
        duration,
        subscriptionTypeId,
        prices: {
          create: [
            {
              price,
            },
          ],
        },
      },
    });
  }

  // İstifadəçiyi Subscribə etmək üçün
  await prisma.subscriptionUser.create({
    data: {
      userId: user1.id,
      subscriptionId: subscription.id,
    },
  });

  console.log('Seed Qurtardı.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
