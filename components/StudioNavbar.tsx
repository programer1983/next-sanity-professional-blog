"use client";

import { NavbarProps } from "sanity";
import Link from "next/link";
import { ArrowLeftIcon } from "@sanity/icons";

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center px-4 py-3">
        <Link
          href="/"
          className="flex gap-2 items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon />
          <span className="text-[20px]">Go To Website</span>
        </Link>
        <h1 className="hidden md:block text-white text-3xl font-bold uppercase">
          My Blog Studio
        </h1>
        <p className="hidden md:inline-block text-white">
          Studio for blog content
        </p>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  );
};

export default StudioNavbar;
