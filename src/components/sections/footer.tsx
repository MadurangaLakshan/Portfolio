import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-white/10 md:backdrop-blur p-4">
      <div className="p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Icon Links */}
          <div className="flex space-x-6 justify-center p-6 ">
            <Link href="https://github.com/yourusername" target="_blank">
              <FaGithub className="h-6 w-6 hover:text-brand-light hover:text-[#181717] transition-all duration-250" />
            </Link>
            <Separator orientation="vertical" />
            <Link href="https://twitter.com/yourusername" target="_blank">
              <FaLinkedin className="h-6 w-6 hover:text-brand-light hover:text-[#0077B5] transition-all duration-250" />
            </Link>
            <Separator orientation="vertical" />
            <Link href="mailto:you@example.com" target="_blank">
              <FaInstagram className="h-6 w-6 hover:text-brand-light hover:text-[#b5005b] transition-all duration-250" />
            </Link>
          </div>
          <div className=" flex flex-col text-sm text-white mb-4 md:mb-0 justify-center items-center">
            <span>© 2025 Made By Maduranga ❤️</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white hover:text-gray-300">
              Privacy
            </a>
            <Separator orientation="vertical" />
            <a href="#" className="text-sm text-white hover:text-gray-300">
              Terms
            </a>
            <Separator orientation="vertical" />
            <a href="#" className="text-sm text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
