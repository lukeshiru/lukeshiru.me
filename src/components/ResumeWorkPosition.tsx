import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeWorkPosition: WrapperComponent<"li"> = ({
	class: className,
	...properties
}) => (
	<li class={classnames("flex flex-col mb-4", className)} {...properties} />
);
