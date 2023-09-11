import { NextResponse } from 'next/server'
 
export async function fetch_hain() {
  return NextResponse.json({ data:"Hello user" })
}