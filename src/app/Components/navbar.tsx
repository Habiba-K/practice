
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, MenuIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full h-[20px] p-4 ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
        <div className="hidden lg:flex gap-4 text-sm font-bold text-[#737373]">
          <Link href={"#"} className="text-sm font-bold">
            Home
          </Link>
          <Link href={"#"} className="text-sm font-bold">
            <select>
              <option value="">Shop</option>
            </select>
          </Link>
          <Link href={"#"} className="text-sm font-bold">
            About
          </Link>
          <Link href={"#"} className="text-sm font-bold">
            Blog
          </Link>
          <Link href={"#"} className="text-sm font-bold">
            Contact
          </Link>
          <Link href={"#"} className="text-sm font-bold">
            Pages
          </Link>
        </div>

        <div className="hidden md:flex gap-3 text-[#23A6F0]  text-sm">
          <Button size={"icon"} color={"#23A6F0"} className="rounded-full mr-10 font-bold">
            <MdPersonOutline />
            Login / Register
          </Button>

          <Button size={"icon"} className="rounded-full ">
            <FiSearch />
          </Button>
          <Button size={"icon"} className="rounded-full ">
            <Heart />
          </Button>

          <Button size={"icon"} className="rounded-full">
            <ShoppingCart />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="flex lg:hidden ">
            <Button
              color={"#252B42"}
              size={"icon"}
              className=" font-bold rounded-full mr-5"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center text-[#252B42]">
                Bandage
                <div className="relative ml-10"></div>
                <div className="space-x-2">
                  <Button size={"icon"} className="rounded-full ">
                    <FiSearch />
                  </Button>

                  <Button size={"icon"} className="rounded-full">
                    <ShoppingCart />
                  </Button>
                </div>
              </SheetTitle>
              <SheetDescription className="text-center">
                <div className="flex flex-col gap-6 mt-6 text-[#737373] text-sm">
                  <Link href={"#"} className="text-sm font-normal">
                    Home
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Product
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Pricing
                  </Link>
                  <Link href={"#"} className="text-sm font-normal">
                    Contact
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
