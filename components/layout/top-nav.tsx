import Link from "next/link";
import { FolderGit2, BarChart2 } from "lucide-react";

const links = [
  { name: "PERFORMANCE", href: "#", primary: true },
  { name: "INFRASTRUCTURE", href: "#" },
  { name: "REVENUE", href: "#" },
  { name: "CONTACT", href: "#" },
];

export function TopNav() {
  return (
    <header className="fixed top-0 right-0 z-50 flex w-full justify-end md:w-[calc(100%-16rem)] p-6">
      <div className="glass-panel flex items-center justify-between rounded-full px-8 py-3 w-full max-w-2xl shadow-xl">
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                link.primary ? "text-primary-fixed underline decoration-primary-fixed/50 underline-offset-4" : "text-on-surface hover:text-primary-fixed"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4 text-primary-fixed">
          <Link href="#" className="hover:text-primary-container transition-colors">
            <FolderGit2 className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-primary-container transition-colors">
            <BarChart2 className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
