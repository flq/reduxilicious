import { getDb } from "./utils";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function findProduct(term: string): Product[] {
  return getDb()
    .products
    .filter(p => p.name.match(term) || p.description.match(term));
}
