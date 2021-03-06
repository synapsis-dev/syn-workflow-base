import { RadioValueDefinition } from "./RadioValueDefinition";

export type RadioValues<T extends string> = {
    [K in T]: RadioValueDefinition;
};
