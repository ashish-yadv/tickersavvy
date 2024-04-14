'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";


const HEADER = () => {

    const menuItems = [
        {
            text: "Home",
            link: "/",
        },
        {
            text: "Market",
            link: "/market",
        },
        {
            text: "IPO",
            link: "/ipo",
        },
        {
            text: "Screener",
            link: "/screener",
        },
        {
            text: "Sector",
            link: "/sector",
        },
    ];

    return (
        <main className={`flex justify-between items-center p-2`}>
            <p className={`text-2xl`}>LOGO</p>
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        menuItems.map((menuItem, key) => (
                            <NavigationMenuItem key={key}>
                                <Link href={`${menuItem.link}`} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {menuItem.text}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>

        </main>
    )
}

export default HEADER;