import classnames from "classnames";
import { h } from "preact";
import { WrapperComponent } from "../types/WrapperComponent";

export const ResumeCertification: WrapperComponent = ({
	class: className,
	...properties
}) => <div class={classnames("mb-2 list-item", className)} {...properties} />;