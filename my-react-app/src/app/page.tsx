// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        <li><Link href="/product/1">iPhone 15</Link></li>
        <li><Link href="/product/2">Samsung S23</Link></li>
        <li><Link href="/product/3">OnePlus 12</Link></li>
        <li><Link href="/product/999">Invalid Product</Link></li>
      </ul>
    </div>
  );
}
