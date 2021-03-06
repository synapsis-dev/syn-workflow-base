import { IBaseElementDefinition } from "./IBaseElementDefinition";

/**
 * Element with id, type and readonly properties.
 *
 * @export
 * @interface IReadonlyElementDefinition
 * @extends {IBaseElementDefinition}
 */
export interface IReadonlyElementDefinition extends IBaseElementDefinition {
    /**
     * Get or sets the 'readonly' state of this element.
     *
     * @type {boolean}
     * @memberof IReadonlyElementDefinition
     */
    Readonly: boolean;
}
