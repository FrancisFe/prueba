"use client";
import { products } from "@/app/api/db";

import type {Product} from "@/app/api/db";
import { useState } from "react";

interface ProductsListProps {
    addToCart: (product: Product) => void;
    productList: Product[];
}

function ProductsList({addToCart, productList}: ProductsListProps) {

    return (
        <div>
            {productList.map((product: Product) => (
                <div key={product.id}>  
                <h1>{product.category}</h1>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Stock: {product.stock}</p>
                <button onClick={() => addToCart(product)}>Add cart</button>
                </div>))
                }
        </div>
    )
}


export default function Products(){
    const [cart , setCart] = useState<Product[]>([]);

    function addToCart(product: Product){
        setCart([...cart, product]);
    }

    console.log(cart);
    return (
        <div>
            <ProductsList addToCart={addToCart} productList={products} />
            <ProductsList addToCart={() => {}} productList={cart} />
        </div>

    )
}