"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/helpers/utils";
import { APP_CONFIG, ROUTER_ITEMS } from "@/config";
import { RouterItem } from "@/common/types";

const TabItem = ({ label, href, icon, isActive, iconSize }: RouterItem) => {
  const Icon: any = icon;

  const textColor = isActive ? "text-iron-950" : "text-iron-600";

  return (
    <Link href={href}>
      <div className="flex flex-col text-center items-center justify-center gap-1">
        <Icon
          size={iconSize || APP_CONFIG.FOOTER_ICON_SIZE}
          className={cn("duration-200", textColor)}
        />
        <span
          className={cn(
            "duration-200 delay-100 text-sm font-bold mt-auto leading-5",
            textColor
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const AppFooter = () => {
  const pathname = usePathname();

  return (
    <footer
      id="footer"
      className="fixed border-t border-iron-50 w-full bottom-0 mt-4 z-[50]"
    >
      <div
        className="bg-white md:container grid bottom-0 py-3 xs:pt-[17px] xs:pb-[13px]"
        style={{
          gridTemplateColumns: `repeat(${ROUTER_ITEMS.length}, 1fr)`,
        }}
      >
        {ROUTER_ITEMS?.map((route, index) => {
          const pathParts = route.href.split("/").filter(Boolean);
          const isHome = pathname === "/" && route.href === "/";

          // is home or the first part of the path matches the first part of the href
          const isActive =
            isHome ||
            (pathname !== null && pathParts[0] === pathname.split("/")[1]);

          return <TabItem key={index} {...route} isActive={isActive} />;
        })}
      </div>
    </footer>
  );
};

AppFooter.displayName = "AppFooter";
export { AppFooter };
