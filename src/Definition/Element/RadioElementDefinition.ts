import { ElementType } from "../ElementTypes";
import { IRadioElementDefinition } from "./IRadioElementDefinition";
import { RadioValueDefinition } from "./RadioValueDefinition";
import { RadioValues } from "./RadioValues";
import { ValueType } from "./ValueType";
import { VisibleElementDefinition } from "./VisibleElementDefinition";

/**
 * Radio element definition.
 *
 * @export
 * @class RadioElementDefinition
 * @extends {BaseElementDefinition}
 * @implements {IRadioElementDefinition}
 */
export class RadioElementDefinition<T extends RadioValues<string>> extends VisibleElementDefinition implements IRadioElementDefinition<T> {
    private readonly values: T;

    /**
     * Creates an instance of RadioElementDefinition.
     *
     * @param {string} id
     * @param {ElementType} type
     * @param {{ [key: string]: string }} actions
     * @memberof RadioElementDefinition
     */
    public constructor(id: string, actions: { [key: string]: string; }) {
        super(id, ElementType.Radio);
        const ac = {};

        for (const key in actions) {
            if (Object.prototype.hasOwnProperty.call(actions, key)) {
                const value = actions[key];
                ac[key] = new RadioValueDefinition(this.Id, value);
            }
        }

        this.values = ac as T;
    }
    
    /**
     * @inheritdoc
     */
    public get Values(): T {
        return this.values;
    }

    /**
     * Gets the 'disabled' state of this element.
     *
     * @type {boolean}
     * @memberof RadioElementDefinition
     */
    public get Disabled(): boolean {
        return jr_is_disabled(this.Id);
    }

    /**
     * Sets the 'disabled' state of this element.
     *
     * @memberof RadioElementDefinition
     */
    public set Disabled(value: boolean) {
        jr_set_disabled(this.Id, value);
    }

    /**
     * Gets the 'required' state of this element.
     *
     * @type {boolean}
     * @memberof RadioElementDefinition
     */
    public get Required(): boolean {
        return jr_is_required(this.Id);
    }

    /**
     * Sets the 'required' state of this element.
     *
     * @memberof RadioElementDefinition
     */
    public set Required(value: boolean) {
        jr_set_required(this.Id, value);
    }

    /**
     * Get the element value.
     *
     * @readonly
     * @type {ValueType<T>}
     * @memberof RadioElementDefinition
     */
     public get Value(): ValueType<ElementType.Radio> {
        return jr_get_value(this.Id) as never;
    }

    /**
     * Sets the element value to given value.
     *
     * @memberof RadioElementDefinition
     */
    public set Value(value: ValueType<ElementType.Radio>) {
        jr_set_value(this.Id, value);
    }
}
