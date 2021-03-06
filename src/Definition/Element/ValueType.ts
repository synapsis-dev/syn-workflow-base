import { ElementType } from "../ElementTypes";


export type ValueType<T extends ElementType> = T extends ElementType.Decimal ? number : T extends ElementType.Date ? Date : string;
