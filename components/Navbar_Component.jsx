"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "react-scroll";
import { NavLink } from "@/libs/data";
import Image from "next/image";

const Navbar_Component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
    position="static"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "max-w-[1440px] mx-auto",
        wrapper:
          "flex flex-row justify-between items-center md:flex-col md:gap-2 !h-auto",
        item: ["data-[active=true]:text-primary"],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="relative w-20 h-20 md:w-32 md:h-32">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              fill
              className="mt-3.5 md:mt-0"
              priority
            />
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden text-lg md:gap-16 lg:gap-24 md:flex font-Prata md:text-xl"
        justify="center"
      >
        {NavLink.map((i, idx) => (
          <NavbarItem key={idx} className="hover:text-primary">
            <Link
              to={`${i}`}
              href={`${i}`}
              title={i}
              spy={true}
              offset={0}
              smooth={true}
              duration={500}
              aria-current="page"
            >
              {i}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="h-auto md:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="pt-5 bg-primary bg-opacity-60">
        {NavLink.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className="mt-5 text-lg font-semibold text-white font-Plus_Jakarta_Sans"
          >
            <Link
              to={item}
              href={item}
              title={item}
              spy={true}
              offset={0}
              smooth={true}
              duration={500}
              className="w-full"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbar_Component;
