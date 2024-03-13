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
import { motion } from "framer-motion";

const Navbar_Component = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      position="static"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "max-w-[1440px] mx-auto mb-5",
        wrapper:
          "flex flex-row justify-between items-center md:flex-col md:gap-2 !h-auto",
        item: ["data-[active=true]:text-primary"],
      }}
    >
      <NavbarContent>
        <NavbarBrand
          as={motion.div}
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="relative w-20 h-20 md:w-32 md:h-32">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              fill
              className="mt-3.5 md:mt-0 hover:animate-appearance-in cursor-pointer"
              priority
            />
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        as={motion.div}
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, delay: 0.25 }}
        className="hidden md:gap-20 lg:gap-28 xl:gap-40 md:flex font-Prata "
        justify="center"
      >
        {NavLink.map((i, idx) => (
          <NavbarItem
            key={idx}
            className="text-lg hover:text-primary md:text-xl xl:text-2xl hover:animate-appearance-in"
          >
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
          className="p-4 md:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="pt-5 mt-8 bg-primary bg-opacity-60">
        {NavLink.map((item, index) => (
          <NavbarMenuItem
            as={motion.div}
            variants={variants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 2, delay: 1 }}
            key={index}
            className="mt-5 text-lg font-semibold text-white font-Plus_Jakarta_Sans hover:animate-appearance-in"
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
