import { InputType } from "../types/InputType";
import { Config } from "./config";

export interface FormInputProps {
	name: string;
	required?: boolean;
	type: InputType;
}

export class Form {
	private config: Config;

	constructor(config: Config) {
		this.config = config;
	}

	public addInput(input: FormInputProps): Form {
		return this;
	}
}
