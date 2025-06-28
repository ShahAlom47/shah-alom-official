import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const { publicId } = await req.json();

    if (!publicId) {
      return NextResponse.json(
        { success: false, message: "publicId is required" },
        { status: 400 }
      );
    }

    let result;
    try {
      result = await cloudinary.uploader.destroy(publicId);
      console.log("result ",result)
    } catch (err) {
      // যদি cloudinary API কল এ কোনো error হয়
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete image due to Cloudinary error",
          error: err instanceof Error ? err.message : String(err),
        },
        { status: 500 }
      );
    }

    if (result.result !== "ok") {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete image",
          result,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
