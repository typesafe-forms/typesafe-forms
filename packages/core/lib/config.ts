import { Form } from "./form";

export class Config {
	public createForm(): Form {
		const form = new Form(this);

		return form;
	}
}

export const createConfig = (): Config => {
	const config: Config = new Config();

	return config;
};
