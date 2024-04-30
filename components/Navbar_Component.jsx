/* eslint-disable @next/next/no-img-element */
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

const Navbar_Component = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeItem, setActiveSection] = useState("Home");
  // console.log(activeSection);
  // const handleMenuBar = (item) => {
  //   setIsMenuOpen(false);
  //   setActiveSection(item);
  // };
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "w-full mb-4 pb-4 z-50",
        wrapper:
          "flex justify-between items-center flex-col gap-1.5 !h-auto ",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          //  "data-[active=true]: text-primary",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:-bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        menuItem: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          //  " data-[active=true]: text-primary",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-3",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:w-[5rem]",
          "data-[active=true]:after:mx-auto",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          {/* <div className="relative w-20 h-20 md:w-28 md:h-28">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              fill
              className="mt-3.5 md:mt-0 hover:animate-appearance-in cursor-pointer"
              priority
            />
          </div> */}
          <img
            loading="eager"
            src={"/cne.svg"}
            alt="Logo"
            className="my-3.5 md:my-2 hover:animate-appearance-in cursor-pointer w-20 h-20 md:w-24 md:h-24"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:gap-12 lg:gap-24 xl:gap-32 md:flex font-Prata "
        justify="center"
      >
        {NavLink.map((i, idx) => (
          <NavbarItem
            key={idx}
            className={`text-lg xl:text-[23px] hover:animate-appearance-in ${
              activeSection === i ? "text-primary" : "text-black"
            }`}
            isActive={activeSection === i}
          >
            <Link
              to={`${i}`}
              href={`${i}`}
              title={i}
              spy={true}
              offset={-200}
              smooth={true}
              duration={1000}
              onClick={() => setActiveSection(i)}
            >
              {i}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="flex col-span-2 gap-2.5 sm:gap-5 md:hidden font-Prata"
        justify="center"
      >
        {NavLink.slice(1).map((i, idx) => (
          <NavbarItem
            key={idx}
            className={`text-sm sm:text-base hover:animate-appearance-in ${
              activeSection === i ? "text-primary" : "text-black"
            }`}
            isActive={activeSection === i}
          >
            <Link
              to={`${i}`}
              href={`${i}`}
              title={i}
              spy={true}
              offset={-200}
              smooth={true}
              duration={1000}
              onClick={() => setActiveSection(i)}
            >
              {i}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
            {/* <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-4 md:hidden"
        />
      </NavbarContent> */}
      {/* <NavbarMenu className="mt-10 text-center bg-white bg-opacity-85 z-[1000]">
        {NavLink.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className={`h-16 text-lg font-semibold font-Plus_Jakarta_Sans hover:animate-appearance-in ${
              activeSection === item ? "text-primary" : "text-black"
            }`}
            isActive={activeSection === item}
          >
            <Link
              to={item}
              href={item}
              title={item}
              spy={true}
              offset={-100}
              smooth={true}
              duration={1000}
              className="w-full"
              size="lg"
              onClick={() => handleMenuBar(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
};

export default Navbar_Component;
