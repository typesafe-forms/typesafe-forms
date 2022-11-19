import { FunctionComponent } from "react";
import { TextInputProps } from "../lib/default/TextInput";
import { ButtonProps } from "../lib/default/Button";

const InputType = {
	button: "button",
	checkbox: "checkbox",
	color: "color",
	date: "date",
	email: "email",
	file: "file",
	hidden: "hidden",
	image: "image",
	month: "month",
	number: "number",
	password: "password",
	radio: "radio",
	range: "range",
	reset: "reset",
	search: "search",
	submit: "submit",
	tel: "tel",
	text: "text",
	time: "time",
	url: "url",
	week: "week",
} as const;

export type InputType = typeof InputType[keyof typeof InputType];

export type InputConfig = {
	text: FunctionComponent<TextInputProps>;
	button: FunctionComponent<ButtonProps>;
};
