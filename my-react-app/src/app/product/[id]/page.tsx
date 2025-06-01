// app/product/[id]/page.tsx

import { notFound } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

const products: Record<string, { name: string; price: string }> = {
  '1': { name: 'iPhone 15', price: '₹80,000' },
  '2': { name: 'Samsung S23', price: '₹70,000' },
  '3': { name: 'OnePlus 12', price: '₹60,000' },
};

export default function ProductPage({ params }: Params) {
  const product = products[params.id];

  if (!product) {
    return notFound(); // renders not-found.tsx
  }

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p>Price: {product.price}</p>
    </div>
  );
}
