import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.scss";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "Alexandre Fonseca Borges",
  description: "Meu Portifolio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
