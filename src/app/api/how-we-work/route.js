import { NextResponse } from "next/server";
import { howWeWorkData } from "@/lib/data";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: howWeWorkData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
