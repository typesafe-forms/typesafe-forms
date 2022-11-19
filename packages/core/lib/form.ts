import { InputType } from "../types/InputType";
import { Config } from "./config";

export interface FormInputProps {
	name: string;
	required?: boolean;
	type: InputType;
}

export class FormInput implements FormInputProps {
	name: string;
	required: boolean;
	type: InputType;

	constructor(props: FormInputProps) {
		this.name = props.name;
		this.required = !!props.required;
		this.type = props.type;
	}
}

export class Form {
	private config: Config;
	private inputs: FormInput[];

	constructor(config: Config) {
		this.config = config;
		this.inputs = [];
	}

	public addInput(props: FormInputProps): Form {
		this.inputs.push(new FormInput(props));
		return this;
	}
}
