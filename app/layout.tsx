import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Print Conflict | T-Shirt Designs for Punk Bands',
  description: 'Custom t-shirt designs for punk bands, hardcore, and underground acts. From concept to print.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent-1 selection:text-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
