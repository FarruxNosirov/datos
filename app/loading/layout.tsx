import { notFound } from "next/navigation";
import React from "react";

const title = "Loading";

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div className="self-start"></div>
      </div>

      <div>{children}</div>
    </div>
  );
}
