import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.facebook.com/dariel.avila.129"
              target="_blank"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/_darielavila/"
              target="_blank"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <BsInstagram />
            </a>

            <a
              href="https://github.com/git-dariel"
              target="_blank"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Dariel Avila. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
