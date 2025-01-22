"use client";
import React from "react";
import { IconType } from "react-icons";
import clsx from "clsx";
import Link from "next/link";

interface MobilebarItemProps {
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobilebarItem: React.FC<MobilebarItemProps> = ({
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        "group w-full flex gap-x-3 text-sm leading-6 font-semibold justify-center p-4 hover:bg-gray-100 hover:text-black",
        active && "text-black bg-gray-100"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobilebarItem;
