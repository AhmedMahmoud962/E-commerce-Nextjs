import React from "react";
import { assets } from "../assets/assets";
import Link from "next/link";
import Image from "next/image";

const Banner = ({ title, description, buttonText }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-5 md:py-12 bg-[#E6E9F2] mt-0 md:mt-8 rounded-xl overflow-hidden ">
      <Image
        className="max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
        width={900}
        height={900}
        quality={100}
        priority
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-3xl text-red-600 font-bold max-w-[290px]">
          {title}
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          {description}
        </p>
        <Link href="/products" className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-red-600 rounded text-white">
          {buttonText}
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </Link>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.md_controller_image}
        alt="md_controller_image"
        width={900}
        height={900}
        quality={100}
        priority
      />
      <Image
        className="md:hidden"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
        width={900}
        height={900}
        quality={100}
        priority
      />
    </div>
  );
};

export default Banner;