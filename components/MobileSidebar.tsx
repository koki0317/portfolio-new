import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./Sidebar";
// import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <span className="sr-only">Open mobile menu</span>
        <Menu className="text-gray-300" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
