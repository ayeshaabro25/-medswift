// Import environment variables from .env.local
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // Ensure variables are loaded

// Import the Sanity client to interact with the Sanity backend
import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Import the JSON data (correct the path to the root directory)
import data from '../medswift-data.json' assert { type: 'json' };

// Load required environment variables
const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_AUTH_TOKEN,
} = process.env;

// Debugging: Check if environment variables are loaded
console.log("Sanity Project ID:", NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity Dataset:", NEXT_PUBLIC_SANITY_DATASET);

// Check if the required environment variables are provided
if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
  console.error("❌ Missing required environment variables. Please check your .env.local file.");
  process.exit(1);
}

// Create a Sanity client instance
const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2023-01-01", // Sanity API version
  token: NEXT_PUBLIC_SANITY_AUTH_TOKEN,
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const uploadedAsset = await targetClient.assets.upload("image", imageBuffer, {
      filename: path.basename(imagePath),
    });
    return uploadedAsset._id; // Return the asset ID
  } catch (error) {
    console.error("❌ Error uploading image:", error.message);
    return null;
  }
}

// Main function to migrate data from medswift-data.json to Sanity
async function migrateData() {
  console.log("🚀 Starting data migration for Q-Commerce...");

  try {
    const categoriesData = data.categories;
    const productsData = data.products;

    const categoryIdMap = {}; // To map category IDs for product references

    // Migrate categories
    for (const category of categoriesData) {
      console.log(`🔹 Migrating category: ${category.title}`);
      const imagePath = path.join("public", "images", `${category.title.toLowerCase()}-category.jpg`);
      const imageId = await uploadImageToSanity(imagePath);

      const newCategory = {
        _id: category._id,
        _type: "categories",
        title: category.title,
        image: imageId ? { _type: "image", asset: { _ref: imageId } } : undefined,
      };

      // Save the category to Sanity
      const result = await targetClient.createOrReplace(newCategory);
      categoryIdMap[category._id] = result._id;
      console.log(`✅ Migrated category: ${category.title} (ID: ${result._id})`);
    }

    // Migrate products
    for (const product of productsData) {
      console.log(`🔹 Migrating product: ${product.title}`);
      const imagePath = path.join("public", "images", `product-${product._id}.jpg`);
      const imageId = await uploadImageToSanity(imagePath);

      const newProduct = {
        _type: "products",
        title: product.title,
        price: product.price,
        priceWithoutDiscount: product.priceWithoutDiscount,
        badge: product.badge,
        image: imageId ? { _type: "image", asset: { _ref: imageId } } : undefined,
        category: {
          _type: "reference",
          _ref: categoryIdMap[product.category._id],
        },
        description: product.description,
        inventory: product.inventory,
        tags: product.tags,
      };

      // Save the product to Sanity
      const result = await targetClient.create(newProduct);
      console.log(`✅ Migrated product: ${product.title} (ID: ${result._id})`);
    }

    console.log("🎉 Data migration completed successfully!");
  } catch (error) {
    console.error("❌ Error during migration:", error.message);
    process.exit(1);
  }
}

// Run the migration
migrateData();
