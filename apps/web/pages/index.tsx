import { createConfig } from "@typesafe-forms/core";
import useForm from "@typesafe-forms/core/lib/useForm";

const config = createConfig();

const loginForm = config
	.createForm()
	.addInput({
		name: "email",
		type: "text",
	})
	.addInput({
		name: "password",
		type: "text",
	})
	.addInput({
		name: "login",
		type: "button",
	});

export default function Web() {
	const LoginForm = useForm(loginForm);

	return (
		<div>
			<h1>Web</h1>
		</div>
	);
}
