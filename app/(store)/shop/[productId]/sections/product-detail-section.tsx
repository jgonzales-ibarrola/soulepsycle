import { Badge } from "@/components/ui/badge";
import React from "react";
import { VariantColors } from "../components/variant-colors";
import { VariantSizes } from "../components/variant-sizes";
import { Button } from "@/components/ui/button";

type ProductDetailSectionProps = {
	title: string;
	category: string;
	price: string;
	colors: string[];
	sizes: string[];
};

const ProductDetailSection = ({
	title,
	category,
	price,
	colors,
	sizes,
}: ProductDetailSectionProps) => {
	return (
		<section className="flex-1 bg-background shadow-xl p-6 rounded-md">
			<div>
				<h1>{title}</h1>
				<Badge>{category}</Badge>
				<h2>₱{price}</h2>
				<div className="grid gap-6">
					<VariantColors colors={colors} />
					<VariantSizes sizes={sizes} />
          <Button>
            Add to Bag
          </Button>
				</div>
			</div>
		</section>
	);
};

export default ProductDetailSection;
