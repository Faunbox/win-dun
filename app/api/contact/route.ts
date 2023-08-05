import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  console.log(req.body);
  let message;
  try {
    message = "tak";
    return new NextResponse(JSON.stringify({ message }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    message = "Fail";
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 402, headers: { "content-type": "application/json" } }
    );
  }
}
