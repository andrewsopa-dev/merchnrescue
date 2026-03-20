import { PrismaClient } from '@prisma/client'
import { PRODUCT_CATALOG } from '../src/lib/catalog'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding Database from catalog.ts...');
    
    // Clear existing to prevent duplicates during seed dev
    await prisma.productColor.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    
    for (const cat of PRODUCT_CATALOG) {
        const category = await prisma.category.create({
            data: {
                name: cat.group,
                sortOrder: PRODUCT_CATALOG.indexOf(cat)
            }
        });

        for (const item of cat.items) {
            const product = await prisma.product.create({
                data: {
                    id: item.id,
                    title: item.title,
                    brand: item.brand,
                    tier: item.tier,
                    categoryId: category.id,
                    label: item.label,
                    blurb: item.blurb,
                    description: item.description,
                    msrp: item.msrp,
                    imageScale: item.imageScale,
                    sortOrder: item.sortOrder,
                    image: item.image
                }
            });

            // Handle colors
            if (item.availableColors) {
                for (const colorName of item.availableColors) {
                    const imageUrl = item.colorImages?.[colorName];
                    await prisma.productColor.create({
                        data: {
                            productId: product.id,
                            name: colorName,
                            hasImage: !!imageUrl,
                            imageUrl: imageUrl || null
                        }
                    });
                }
            } else if (item.colorImages) {
                 // Fallback if availableColors was omitted but images exist
                 for (const [colorName, imageUrl] of Object.entries(item.colorImages)) {
                    await prisma.productColor.create({
                        data: {
                            productId: product.id,
                            name: colorName,
                            hasImage: true,
                            imageUrl: imageUrl as string
                        }
                    });
                }
            }
        }
    }
    console.log('Seeding complete.');
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
