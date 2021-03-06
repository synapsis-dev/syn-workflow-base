import { ElementType } from "../ElementTypes";
import { ValueType } from "./ValueType";
import { IValueElementDefinition } from './IValueElementDefinition';
import { BaseElementDefinition } from "./BaseElementDefinition";

/**
 * Simple element with only id, type and value properties for elements like text and description etc.
 *
 * @export
 * @class SimpleValueElementDefinition
 * @extends {BaseElementDefinition}
 * @implements {IValueElementDefinition<T>}
 * @template T
 */
export class SimpleValueElementDefinition<T extends ElementType> extends BaseElementDefinition implements IValueElementDefinition<T> {
    /**
     * Creates an instance of SimpleValueElementDefinition.
     * 
     * @param {string} id The id of the element.
     * @param {T} type The element type.
     * @memberof SimpleValueElementDefinition
     */
    constructor(id :string, type: T) {
        super(id, type);
    }
    
    /**
     * Get the element value.
     *
     * @readonly
     * @type {ValueType<T>}
     * @memberof SimpleValueElementDefinition
     */
    public get Value(): ValueType<T> {
        return jr_get_value(this.Id) as never;
    }

    /**
     * Sets the element value to given value.
     *
     * @memberof SimpleValueElementDefinition
     */
    public set Value(value: ValueType<T>) {
        jr_set_value(this.Id, value);
    }
}
