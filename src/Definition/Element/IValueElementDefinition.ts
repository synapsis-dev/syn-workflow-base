import { ElementType } from "../ElementTypes";
import { ValueType } from "./ValueType";
import { IBaseElementDefinition } from "./IBaseElementDefinition";

/**
 * Element with id, type and value properties.
 *
 * @export
 * @interface IValueElementDefinition
 * @extends {IBaseElementDefinition}
 * @template T
 */
export interface IValueElementDefinition<T extends ElementType> extends IBaseElementDefinition {
    /**
     * Gets or sets the value of this element.
     *
     * @type {ValueType<T>}
     * @memberof IValueElementDefinition
     */
    Value: ValueType<T>;
}
