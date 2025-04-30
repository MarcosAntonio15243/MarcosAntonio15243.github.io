import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Source_Serif_4 } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['300', '500', '600'],
  subsets: ['latin'],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  weight: ['300', '400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Portfólio de Marcos Antonio",
  description: "Website dedicado ao meu portfólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${sourceSerif4.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
