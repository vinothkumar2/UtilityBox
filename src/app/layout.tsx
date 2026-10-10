import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "UtilityBox — Financial Tools",
  description: "Simple, private financial calculators and money-planning tools.",
  applicationName: "UtilityBox",
  manifest: "/manifest.webmanifest"
};
export const viewport: Viewport = { themeColor: "#f7f8fb", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
