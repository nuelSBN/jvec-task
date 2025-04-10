import { useState } from "react";
import { Button, Logo, Navbar } from "@/components";
import { icons } from "@/constants";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full h-[80px] flex items-center justify-center z-10 shadow-md">
      <div className="w-[90%] flex justify-between items-center">
        <Logo />

        <nav className="hidden lg:flex">
          <Navbar direction="row" />
        </nav>

        <div className="hidden lg:block">
          <Button
            icon={icons.phoneIcon}
            hasIcon
            children="+234 818 444 1404"
            size="medium"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#05071E] shadow-md lg:hidden z-20">
          <Navbar direction="column" />
          <div className="p-4">
            <Button
              icon={icons.phoneIcon}
              hasIcon
              children="+234 818 444 1404"
              size="small"
            />
          </div>
        </div>
      )}
    </header>
  );
}
