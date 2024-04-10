import React from "react";
//* import navigation data
import { navigationData } from "../data";
const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="flex gap-x-8">
          {navigationData.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className=" hover:text-primary transition-all"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
