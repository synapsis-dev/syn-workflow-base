import * as Utils from '../../Utils';

/**
 * Value definition of radio elements.
 *
 * @export
 * @class RadioValueDefinition
 */
export class RadioValueDefinition {
    private readonly element: string;
    private readonly value: string;

    /**
     * Creates an instance of RadioValueDefinition.
     *
     * @param {string} element
     * @param {string} value
     * @memberof RadioValueDefinition
     */
    public constructor(element: string, value: string) {
        this.element = element;
        this.value = value;
    }

    /**
     * Get the id of this element.
     *
     * @readonly
     * @type {string}
     * @memberof RadioValueDefinition
     */
    public get Id(): string {
        return Utils.GetRadioId(this.element, this.value);
    }

    /**
     * Get the value of this element.
     *
     * @readonly
     * @type {string}
     * @memberof RadioValueDefinition
     */
    public get Value(): string {
        return this.value;
    }

    /**
     * Gets the 'disabled' state of this element.
     *
     * @type {boolean}
     * @memberof RadioValueDefinition
     */
    public get Disabled(): boolean {
        return jr_is_disabled(Utils.GetRadioId(this.element, this.value));
    }

    /**
     * Sets the 'disabled' state of this element.
     *
     * @memberof RadioValueDefinition
     */
    public set Disabled(value: boolean) {
        jr_set_disabled(Utils.GetRadioId(this.element, this.value));
    }

    /**
     * Gets the 'required' state of this element.
     *
     * @type {boolean}
     * @memberof RadioValueDefinition
     */
    public get Required(): boolean {
        return jr_is_required(Utils.GetRadioId(this.element, this.value));
    }

    /**
     * Sets the 'required' state of this element.
     *
     * @memberof RadioValueDefinition
     */
    public set Required(value: boolean) {
        jr_set_required(Utils.GetRadioId(this.element, this.value));
    }

    /**
     * Get the 'visible' state of this element.
     *
     * @type {boolean}
     * @memberof RadioValueDefinition
     */
    public get Visible(): boolean {
        return jr_is_visible(Utils.GetRadioId(this.element, this.value));
    }

    /**
     * Sets the 'visible' state of this element.
     *
     * @memberof RadioValueDefinition
     */
    public set Visible(value: boolean) {
        if (value) {
            jr_show(Utils.GetRadioId(this.element, this.value));
        } else {
            jr_hide(Utils.GetRadioId(this.element, this.value));
        }
    }
}
