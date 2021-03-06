import { RadioValues } from "./RadioValues";
import { IDisabledElementDefinition } from "./IDisabledElementDefinition";
import { IRequiredElementDefinition } from "./IRequiredElementDefinition";
import { IValueElementDefinition } from './IValueElementDefinition';
import { ElementType } from '../ElementTypes';

/**
 * Radio element definition.
 *
 * @export
 * @interface IRadioElementDefinition
 * @extends {IDisabledElementDefinition}
 * @extends {IRequiredElementDefinition}
 */
export interface IRadioElementDefinition<T extends RadioValues<string>> extends IDisabledElementDefinition, IRequiredElementDefinition, IValueElementDefinition<ElementType.Radio> {
    /**
     * Values of the radio element.
     *
     * @type {T}
     * @memberof IRadioElementDefinition
     */
    readonly Values: T;

    /**
     * Get or sets the 'disabled' state of this element.
     *
     * @type {boolean}
     * @memberof IRadioElementDefinition
     */
    Disabled: boolean;

    /**
     * Get or sets the 'required' state of this element.
     *
     * @type {boolean}
     * @memberof IRadioElementDefinition
     */
    Required: boolean;
}
