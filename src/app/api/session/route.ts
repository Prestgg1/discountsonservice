import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  
  const {token}:string|any = req.cookies;
  if(!token){
    return NextResponse.json({ message: "İstifadəçi tapılmadı" }, { status: 400 });
  }
  else{
    const { email, name } = await req.json();
    return NextResponse.json({ user: { name, email} }, { status: 200 });
  }
}
