"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-between items-center bg-blue-600 text-white h-[70px] w-full mx-auto shadow-lg px-4">
      <Link href="/">
      <Logo />
      </Link>

      {/* Profile dropdown and hamburger menu */}
      <div className="flex flex-row items-center gap-4">
        
        {/* <div className="hidden md:block mr-10">
          <Search />
        </div> */}

        <div className="hidden md:block">
          <ul className="flex flex-row items-center justify-between gap-7 text-[16px] mr-3">
            <li className="hover:text-gray-900 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-900 transition">
              <Link href="/findexpert">Find Expert</Link>
            </li>
            <li className="hover:text-gray-900 transition">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-gray-900 transition">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="block md:hidden">
          <IconButton onClick={toggleMenu} color="inherit">
            <MenuIcon />
          </IconButton>
        </div>

        <ProfileDropdown />
      </div>

      {/* Hamburger menu content */}
      <Menu
        anchorEl={null}
        open={menuOpen}
        onClose={toggleMenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={toggleMenu}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link href="/findexpert">Find Expert</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link href="/about">About Us</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link href="/contact">Contact Us</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
