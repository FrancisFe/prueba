import {products} from '../db';
export async function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}