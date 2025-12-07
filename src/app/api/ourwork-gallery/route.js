import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression("folder: rocksmasonry_ourwork") // Specify your Cloudinary folder
      .sort_by("public_id", "desc")
      .max_results(12) // Adjust as needed
      .execute();

    const images = resources.map((resource) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      display_name: resource.display_name,
      // Add other relevant properties you need
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
