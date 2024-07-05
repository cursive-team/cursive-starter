import { Inter } from "next/font/google";
import { RouterItem } from "@/common/types";
import { Icons } from "./components/Icons";

export const fontBase = Inter({ subsets: ["latin"], variable: "--font-base" });

export const APP_CONFIG = {
  APP_NAME: "Cursive Starter",
  APP_DESCRIPTION: "A starter template for Cursive",
  SUPPORT_EMAIL: "example@gmail.com",
  ALLOW_INCOGNITO: false, // Set to false if you want to disable incognito mode
  IS_MOBILE_ONLY: true, // Set to true if you want to disable the web version
  FOOTER_ICON_SIZE: 20,
};

export const ROUTER_ITEMS: RouterItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Icons.Home,
    iconSize: 20,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Icons.Settings,
    iconSize: 20,
  },
  {
    label: "Components",
    href: "/components",
    icon: Icons.Profile,
    iconSize: 20,
  },
];
