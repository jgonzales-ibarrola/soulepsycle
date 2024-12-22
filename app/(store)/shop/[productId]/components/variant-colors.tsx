import { Button } from "@/components/ui/button";

export const VariantColors = ({ colors }: { colors: string[] }) => {
	return (
		<div className="flex items-center gap-4">
			<h3>Color:</h3>

			<div className="flex gap-3">
				{colors.map((color) => {
					return (
						<Button type="button" variant={"secondary"} key={color}>
							{color}
						</Button>
					);
				})}
			</div>
		</div>
	);
};