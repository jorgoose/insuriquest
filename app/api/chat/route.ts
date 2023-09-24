// app/api/chat/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  console.log(req.body);
  
  return NextResponse.json({ data: 'I worked' });
}
