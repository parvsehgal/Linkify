import { ReactNode } from "react";
import Link from "next/link";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 E-Card Maker. All rights reserved.</p>
      </footer>
    </div>
  );
}
