import { IBaseElementDefinition } from "./IBaseElementDefinition";

/**
 * Element with id, type and disabled properties.
 *
 * @export
 * @interface IDisabledElementDefinition
 * @extends {IBaseElementDefinition}
 */

export interface IDisabledElementDefinition extends IBaseElementDefinition {
    /**
     * Gets or sets the 'disabled' state of this element.
     *
     * @type {boolean}
     * @memberof IDisabledElementDefinition
     */
    Disabled: boolean;
}
