"use client";

import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-40 h-40",
  md: "w-64 h-64",
  lg: "w-80 h-80 md:w-96 md:h-96",
};

const ProfilePhoto = ({ src, alt = "Profile photo", className, imgClassName, size = "lg" }: ProfilePhotoProps) => {
  return (
    <div className={cn("relative flex justify-center", className)}>
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30" />
      <img
        src={src}
        alt={alt}
        className={cn(
          sizeMap[size],
          "relative rounded-full object-cover border-4 border-white/10 shadow-2xl",
          imgClassName
        )}
      />
    </div>
  );
};

export default ProfilePhoto;