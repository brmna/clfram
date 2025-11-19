"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function LayoutClient({ children }) {
  const pathName = usePathname();
  const hiddePaths = ["/login", "/register"];
  const hidde = hiddePaths.includes(pathName);

  return (
    <div className="flex flex-col min-h-screen">
      {!hidde && <Header />}
      <main className="flex-1">{children}</main>
      {!hidde && <Footer />}
    </div>
  );
}
