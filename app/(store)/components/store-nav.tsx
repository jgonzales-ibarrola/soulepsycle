"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "@/public/logo.jpg";

const StoreNav = () => {
	const links = [
		{
			href: "/",
			label: "Home",
			icon: Home,
			isActive: "/",
		},
		{
			href: "/shop",
			label: "Shop",
			icon: Store,
			isActive: "/shop",
		},
	];

	const pathname = usePathname();

	return (
		<header className="container flex items-center justify-between py-4">
			<div className="relative h-20 aspect-square">
				<Image
					src={Logo}
					alt="Logo-of-SoulePsycle"
					fill
					className="object-contain"
				/>
			</div>
			<nav>
				<ul className="flex items-center gap-12">
					{links.map((link) => {
						const { href, icon: Icon, isActive, label } = link;

						return (
							<li key={href}>
								<Button
									variant={"link"}
									className={cn(
										isActive === pathname && "underline"
									)}
									asChild
								>
									<Link href={href}>
										<Icon />
										{label}
									</Link>
								</Button>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default StoreNav;
