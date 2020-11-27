import classnames from "classnames";
import { WrapperComponent } from "../types/WrapperComponent";

export type OrbitItemProperties = {
	readonly rotationAngle?: number;
	readonly rotationDuration?: number;
};

export const OrbitItem: WrapperComponent<"li", OrbitItemProperties> = ({
	class: className,
	rotationAngle = 0,
	rotationDuration = 0,
	...properties
}) => (
	<li
		class={classnames(
			// eslint-disable-next-line max-len
			"block left-1/2 opacity-100 absolute text-right top-1/2 origin-left-center w-180 transform -translate-y-1/2 animation animation-rotating animation-infinite animation-linear",
			className
		)}
		style={{
			["--animation-duration" as string]: `${rotationDuration}s`,
			["--transform-rotate" as string]: `${rotationAngle}deg`
		}}
		{...properties}
	/>
);
