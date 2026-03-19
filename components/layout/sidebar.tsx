import Link from "next/link";
import { LayoutDashboard, BarChart2, Banknote, Layers, Network, Code, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "#", icon: LayoutDashboard, active: true },
  { name: "Analytics", href: "#", icon: BarChart2, active: false },
  { name: "Capital", href: "#", icon: Banknote, active: false },
  { name: "Stack", href: "#", icon: Layers, active: false },
  { name: "Network", href: "#", icon: Network, active: false },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col justify-between bg-surface-container-low md:flex">
      {/* Top Profile Section */}
      <div className="p-8">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-md bg-surface-container-highest">
            {/* Assume there's a profile image or a placeholder here */}
            <img src="/placeholder-avatar.png" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-on-surface">System Admin</h2>
            <div className="text-[10px] font-bold uppercase tracking-wider text-primary-fixed">
              Revenue: $2.4M ROI
            </div>
          </div>
        </div>

        {/* Navigation Map */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 py-3 pl-4 pr-4 transition-colors ${
                item.active
                  ? "border-l-2 border-primary-fixed bg-surface-container-highest text-primary-fixed"
                  : "text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface"
              }`}
            >
              <item.icon className={`h-4 w-4 ${item.active ? "text-primary-fixed" : "text-on-surface-variant"}`} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-8 mb-4 flex flex-col items-center">
        <Button className="w-full mb-6 py-6" size="lg">BOOK CONSULT</Button>

        <div className="flex w-full justify-between px-2 text-on-surface-variant">
          <Link href="#" className="hover:text-primary-fixed transition-colors">
            <Code className="h-4 w-4" />
          </Link>
          <Link href="#" className="hover:text-primary-fixed transition-colors">
            <Github className="h-4 w-4" />
          </Link>
          <Link href="#" className="hover:text-primary-fixed transition-colors">
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
