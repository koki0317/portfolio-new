"use client";

import { cn } from "@/lib/utils";
import {
  CircleUserRound,
  Hammer,
  Home,
  NotebookTabs,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  // const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "#hero",
      label: "home",
    },
    {
      icon: CircleUserRound,
      href: "#about-me",
      label: "About Me",
    },
    {
      icon: Hammer,
      href: "#skills",
      label: "Skills",
    },
    {
      icon: Presentation,
      href: "#projects",
      label: "Projects",
    },
    {
      icon: NotebookTabs,
      href: "#contact",
      label: "Contact",
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition"
              }
            >
              <Link
                href={route.href}
                className="flex flex-col gap-y-2 items-center flex-1"
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
