import { icons, navItems } from "@/constants";
import { useState } from "react";

interface NavbarProps {
  direction?: "row" | "column";
}

export function Navbar({ direction = "row" }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <nav
      className={`flex gap-4 ${
        direction === "column" ? "flex-col p-4" : "flex-row items-center"
      }`}
    >
      {navItems.map((item, i) => (
        <div
          key={i}
          className={`relative ${direction === "row" ? "group" : ""}`}
        >
          <a
            href={item.url}
            onClick={(e) => {
              if (direction === "column" && item.hasSubRoute) {
                e.preventDefault();
                toggleDropdown(i);
              }
            }}
            className={`px-4 py-2 capitalize flex items-center justify-between ${
              item.active ? "text-white font-semibold " : "text-[#CFCFCF]"
            }`}
          >
            {item.name}
            {item.hasSubRoute && (
              <img
                src={icons.dropdownIcon}
                alt="dropdown"
                className={`ml-2 transition-transform ${
                  direction === "row"
                    ? "inline"
                    : openDropdown === i
                    ? "rotate-180"
                    : ""
                }`}
              />
            )}
          </a>

          {item.hasSubRoute && item.subItems && (
            <div
              className={`bg-white w-48 shadow-md rounded-md z-10 transition-all ${
                direction === "row"
                  ? "absolute left-0 mt-2 opacity-0 group-hover:opacity-100"
                  : openDropdown === i
                  ? "max-h-[500px] overflow-auto mt-2"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {item.subItems.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={"#"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
