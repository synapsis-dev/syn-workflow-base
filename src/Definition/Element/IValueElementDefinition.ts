import { ElementType } from "../ElementTypes";
import { IVisibleElementDefinition } from './IVisibleElementDefinition';
import { ValueType } from "./ValueType";

/**
 * Element with id, type, visible and value properties.
 *
 * @export
 * @interface IValueElementDefinition
 * @extends {IBaseElementDefinition}
 * @template T
 */
export interface IValueElementDefinition<T extends ElementType> extends IVisibleElementDefinition {
    /**
     * Gets or sets the value of this element.
     *
     * @type {ValueType<T>}
     * @memberof IValueElementDefinition
     */
    Value: ValueType<T>;
}
