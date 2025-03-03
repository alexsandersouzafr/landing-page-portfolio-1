"use client";
import {
  Facebook,
  Instagram,
  MailPlus,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import animateNavBar from "@/animations/nav-bar";

const navbar = ["HOME", "ABOUT", "FEATURE", "SCREENSHOT", "DOWNLOAD"];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  useGSAP(() => {
    animateNavBar();
  });

  return (
    <div className="navbar absolute flex w-full justify-center px-2 text-white">
      <div className="flex w-full max-w-[1170px] flex-col gap-4 py-4">
        <div className="hidden justify-between lg:flex">
          <div className="contacts flex gap-8">
            <div className="flex items-center gap-2">
              <MailPlus />
              contato@email.com
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              +1 (122) 123 9876
            </div>
          </div>
          <div className="icons flex items-center gap-8">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
        <div className="relative flex h-[60px] items-center justify-between overflow-visible rounded-md bg-white p-4 text-navy lg:hidden">
          <button
            className="z-50 shrink-0"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X /> : <Menu />}
          </button>
          <img src="./logo.png" alt="logo" />
          <div
            data-open={openMenu}
            className="absolute top-16 z-50 hidden w-72 flex-col items-start justify-start bg-white shadow-2xl transition-all duration-300 data-[open=true]:flex"
          >
            {navbar.map((item, i) => (
              <button key={i} className="p-4">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden h-[60px] items-center justify-between overflow-visible rounded-md bg-white p-4 text-navy lg:flex">
          <div className="flex gap-4">
            {navbar.slice(0, 3).map((item, i) => (
              <button
                className="nav-button text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal hover:text-white"
                key={i}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="logo h-24 shrink-0 rounded-md bg-white p-8 shadow-sm">
            <img src="./logo.png" alt="logo" />
          </button>
          <div className="flex gap-4">
            {navbar.slice(3).map((item, i) =>
              item === "DOWNLOAD" ? (
                <button
                  className="nav-button text-md rounded-md bg-royal px-4 py-2 text-white"
                  key={i}
                >
                  {item}
                </button>
              ) : (
                <button
                  className="nav-button text-md rounded-md px-4 py-2 transition-all duration-300 hover:bg-royal hover:text-white"
                  key={i}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
