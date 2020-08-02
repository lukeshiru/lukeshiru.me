import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";
import { IconProperties } from "./Icon";

export const OrbitNavigation: WrapperComponent<"nav", IconProperties> = ({
	class: className,
	...properties
}) => (
	<nav
		class={classnames(
			// eslint-disable-next-line max-len
			"rounded-full left-1/2 pointer-events-none absolute top-1/2 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 h-screen-min w-screen-min",
			className
		)}
		{...properties}
	/>
);