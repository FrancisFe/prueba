import { NextResponse } from "next/server";
import { getProducts } from "./actions";

export async function GET(request: Request) {
    const products = await getProducts();
    return NextResponse.json(products);
}