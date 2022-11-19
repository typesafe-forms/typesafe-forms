import { InputConfig } from "../types/InputType";
import { Form } from "./form";
import TextInput from "./default/TextInput";
import Button from "./default/Button";

export class Config {
	private inputConfig: InputConfig;

	constructor(inputConfig: InputConfig) {
		this.inputConfig = inputConfig;
	}

	public createForm(): Form {
		const form = new Form(this);

		return form;
	}
}

const baseConfig: InputConfig = {
	button: (props) => <Button {...props} />,
	text: (props) => <TextInput {...props} />,
};

export const createConfig = (propsConfig?: InputConfig): Config => {
	const inputConfig: InputConfig = { ...baseConfig, ...propsConfig };

	const config: Config = new Config(inputConfig);

	return config;
};
