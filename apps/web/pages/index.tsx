import { createConfig } from "@typesafe-forms/core";

const config = createConfig();

config
	.createForm()
	.addInput({
		name: "email",
		type: "text",
	})
	.addInput({
		name: "password",
		type: "password",
	})
	.addInput({
		name: "remember",
		type: "checkbox",
	});

export default function Web() {
	return (
		<div>
			<h1>Web</h1>
		</div>
	);
}
