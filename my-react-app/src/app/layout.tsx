// app/layout.tsx

import '../styles/globals.css'; // Optional: Add if using global styles
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '10px', background: '#f5f5f5' }}>
          <h2>My Store</h2>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
