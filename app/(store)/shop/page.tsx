import React from "react";
import FilterSection from "./sections/filter-section";
import ProductsSection from "./sections/products-section";

const Shop = () => {
	return (
		<>
			<div className="container flex gap-8">
				<FilterSection />
				<ProductsSection />
			</div>
		</>
	);
};

export default Shop;
