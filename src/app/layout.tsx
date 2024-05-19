import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream homes | Top notch real-state",
  description: "The Leading platform to choose your next living space. like never before! only the best real-state provided and evaluated by our experts at Dream homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}