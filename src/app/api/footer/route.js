import { NextResponse } from "next/server";
import { footerData } from "@/lib/data";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: footerData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
