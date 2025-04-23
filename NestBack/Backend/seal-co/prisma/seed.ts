import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'sealco@seal.com',
      name: 'seal-co',
      password: '$2b$10$dEb6nXTEbOUxV9vpHWe/Mezx9paA8My1AF77.DakZ5Z3Z9Y0ief1i',
      level: 5,
      profile_img: 'base64',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
