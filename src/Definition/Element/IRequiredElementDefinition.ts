import { IBaseElementDefinition } from "./IBaseElementDefinition";

/**
 * Element with id, type and required properties.
 *
 * @export
 * @interface IRequiredElementDefinition
 * @extends {IBaseElementDefinition}
 */
export interface IRequiredElementDefinition extends IBaseElementDefinition {
    /**
     * Gets or sets the 'required' state of this element.
     *
     * @type {boolean}
     * @memberof IRequiredElementDefinition
     */
    Required: boolean;
}
