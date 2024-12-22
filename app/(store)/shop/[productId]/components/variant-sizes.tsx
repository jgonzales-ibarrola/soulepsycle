import { Button } from "@/components/ui/button";

export const VariantSizes = ({ sizes }: { sizes: string[] }) => {
	return (
		<div className="flex items-center gap-4">
			<h3>Size:</h3>

			<div className="flex gap-3">
				{sizes.map((size) => {
					return (
						<Button type="button" variant={"secondary"} key={size}>
							{size}
						</Button>
					);
				})}
			</div>
		</div>
	);
};