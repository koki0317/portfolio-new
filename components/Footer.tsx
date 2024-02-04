import React from "react";

import Linkedin from "@/public/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 lg:px-6 h-[56px]">
      <div className="h-full flex items-center justify-end">
        <Link
          href="https://www.linkedin.com/in/koki-webdeveloper/"
          className="hover:opacity-75 text-sm flex items-center"
        >
          <span className="mr-2">My LinkedIn account</span>
          <Linkedin className="h-6 w-6 fill-black dark:fill-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
