import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gareth MacLeod',
  description: 'Personal website and blog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7b0927d506dc414eab84439edc8a3c29"}'
        />
      </body>
    </html>
  );
}
