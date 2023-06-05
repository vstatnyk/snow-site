import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snow Club At Sac State",
  link: "/mtn.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Snow Club At Sac State | Home</title>
        <link rel="shotcut icon" href="/mtn.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
