import { ElementType } from '../ElementTypes';
import { IDisabledElementDefinition } from "./IDisabledElementDefinition";
import { IRequiredElementDefinition } from "./IRequiredElementDefinition";
import { RadioValues } from "./RadioValues";
import { ValueType } from "./ValueType";

/**
 * Radio element definition.
 *
 * @export
 * @interface IRadioElementDefinition
 * @extends {IDisabledElementDefinition}
 * @extends {IRequiredElementDefinition}
 */
export interface IRadioElementDefinition<T extends RadioValues<string>> extends IDisabledElementDefinition, IRequiredElementDefinition {
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

    /**
     * Gets or sets the value of this element.
     *
     * @type {ValueType<T>}
     * @memberof IValueElementDefinition
     */
     Value: ValueType<ElementType.Radio>;
}
