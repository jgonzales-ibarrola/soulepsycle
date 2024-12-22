import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
	return (
		<section className="bg-background">
			<div className="container py-40 flex items-center justify-center">
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-6xl">Hello World SoulePsycle!</h1>
					<Button size={'lg'}>Shop Now!</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
