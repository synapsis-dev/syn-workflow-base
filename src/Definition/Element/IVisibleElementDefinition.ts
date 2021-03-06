import { IBaseElementDefinition } from './IBaseElementDefinition';
/**
 * Element with id, type and visible properties.
 *
 * @export
 * @interface IVisibleElementDefinition
 */
export interface IVisibleElementDefinition extends IBaseElementDefinition {
    /**
     * Get or sets the 'visible' state of this element.
     *
     * @type {boolean}
     * @memberof IBaseElementDefinition
     */
    Visible: boolean;
}
