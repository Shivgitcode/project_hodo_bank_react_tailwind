import { navLinks } from "../../constants";
import { logo } from "../../assets";
import NavbarItems from "./NavbarItems";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  // const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleChange = (id) => {
    setActive(id);
  };

  return (
    <div className="mx-auto w-[70%] flex flex-row justify-between items-center py-6 ">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />
      <ul className="flex flex-row  gap-[40px] justify-end">
        {navLinks.map((el) => {
          return (
            <NavbarItems
              key={el.id}
              el={el}
              handleChange={handleChange}
              active={active}
            ></NavbarItems>
          );
        })}
      </ul>
    </div>
  );
}
