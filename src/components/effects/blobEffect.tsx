import React from "react";
import { cn } from "@/lib/utils";

interface BlobAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const BlobAvatar = ({ src, alt, className }: BlobAvatarProps) => {
  return (
    <div className={cn("relative h-32 w-32", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-[70%_30%_70%_30%/30%_30%_70%_70%] animate-blob-slow"></div>
      <div className="absolute inset-1 overflow-hidden rounded-[65%_35%_65%_35%/35%_35%_65%_65%]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default BlobAvatar;
