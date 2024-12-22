"use client";

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

type ImagePreviewsSectionProps = {
	images: number[];
};

const ImagePreviewsSection = ({ images }: ImagePreviewsSectionProps) => {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);
	return (
		<section>
			<Carousel
				plugins={[plugin.current]}
				className="w-full max-w-xs"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{images.map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex h-96 aspect-square items-center justify-center p-6">
										<span className="text-4xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-4" />
				<CarouselNext className="right-4" />
			</Carousel>
		</section>
	);
};

export default ImagePreviewsSection;
