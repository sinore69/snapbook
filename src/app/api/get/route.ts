import axios from "axios";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const resp = await fetch("http://api.coincap.io/v2/assets")
  console.log(resp.body)
  return new NextResponse(resp.body);
}
