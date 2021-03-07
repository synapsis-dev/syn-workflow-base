import { ElementType } from "../ElementTypes";
import { IElementDefinition } from "./IElementDefinition";
import { SimpleValueElementDefinition } from './SimpleValueElementDefinition';

/**
 * Element definition with id, type, disabled, readonly, required and visible properties for elements like textbox, decimal and date etc.
 *
 * @export
 * @class ElementDefinition
 * @extends {SimpleValueElementDefinition<T>}
 * @implements {IElementDefinition<T>}
 * @template T
 */
export class ElementDefinition<T extends ElementType> extends SimpleValueElementDefinition<T> implements IElementDefinition<T> {
    /**
     * Gets the 'disabled' state of this element.
     *
     * @type {boolean}
     * @memberof ElementDefinition
     */
    public get Disabled(): boolean {
        return jr_is_disabled(this.Id);
    }

    /**
     * Sets the 'disabled' state of this element.
     *
     * @memberof ElementDefinition
     */
    public set Disabled(value: boolean) {
        jr_set_disabled(this.Id, value);
    }

    /**
     * Get the 'readonly' state of this element.
     *
     * @type {boolean}
     * @memberof ElementDefinition
     */
    public get Readonly(): boolean {
        return jr_is_readonly(this.Id);
    }

    /**
     * Sets the 'readonly' state of this element.
     *
     * @memberof ElementDefinition
     */
    public set Readonly(value: boolean) {
        jr_set_readonly(this.Id, value);
    }

    /**
     * Gets the 'required' state of this element.
     *
     * @type {boolean}
     * @memberof ElementDefinition
     */
    public get Required(): boolean {
        return jr_is_required(this.Id);
    }

    /**
     * Sets the 'required' state of this element.
     *
     * @memberof ElementDefinition
     */
    public set Required(value: boolean) {
        jr_set_required(this.Id, value);
    }
}
