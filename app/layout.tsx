import LeftNavbar from "@/ui/LeftNavbar";
import "@/styles/globals.css";
import { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: {
    default: "Datos",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "Next.js App Router Playground",
    description:
      "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <div style={{ margin: "0 auto", width: 1400 }}>
            <LeftNavbar />

            <div>{children}</div>
          </div>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
