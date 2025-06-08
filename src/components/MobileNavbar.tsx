"use client";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CgMenuHotdog } from "react-icons/cg";
import ThemeChanger from "./ThemeChanger";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const MobileNavBar = () => {

  return (
    <div className=" flex items-center justify-between bg-color-primary text-white w-full ">
      <div className=" flex items-center gap-2 justify-between ">
        <Drawer direction="left">
          <DrawerTrigger className=" cursor-pointer pt-1 my-auto">
            <CgMenuHotdog size={30} />
          </DrawerTrigger>
          <DrawerContent className="left-0 top-0 bottom-0 w-[40%] h-full rounded-r-md border bg-color-primary rounded-sm text-white ">
            <DialogTitle></DialogTitle>
           <NavLinks/>
          </DrawerContent>
        </Drawer>
      <Logo></Logo>
      </div>
      <div className="flex items-center gap-1 ">
        {/* <BookmarkContainer></BookmarkContainer> */}
        <ThemeChanger></ThemeChanger>
        {/* <NavAuthMenu></NavAuthMenu> */}
      </div>
    </div>
  );
};

export default MobileNavBar;
