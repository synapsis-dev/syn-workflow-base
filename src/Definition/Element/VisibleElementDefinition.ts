import { BaseElementDefinition } from "./BaseElementDefinition";
import { IVisibleElementDefinition } from './IVisibleElementDefinition';

/**
 * Element definition for elements that only have the 'visible' state for elements like pages, section, rows, columns and blanks etc.
 *
 * @export
 * @class VisibleElementDefinition
 * @extends {BaseElementDefinition}
 * @implements {IVisibleElementDefinition}
 */
export class VisibleElementDefinition extends BaseElementDefinition implements IVisibleElementDefinition {
    /**
     * Get the 'visible' state of this element.
     *
     * @type {boolean}
     * @memberof VisibleElementDefinition
     */
    public get Visible(): boolean {
        return jr_is_visible(this.Id);
    }

    /**
     * Sets the 'visible' state of this element.
     *
     * @memberof VisibleElementDefinition
     */
    public set Visible(value: boolean) {
        if (value) {
            jr_show(this.Id);
        } else {
            jr_hide(this.Id);
        }
    }
}
