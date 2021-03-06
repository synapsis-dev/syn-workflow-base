import { ElementType } from "../ElementTypes";

/**
 * Simple elemnent with only id and type properties.
 *
 * @export
 * @interface IBaseElementDefinition
 */
export interface IBaseElementDefinition {
    /**
     * Get the id of this element.
     *
     * @type {string}
     * @memberof IBaseElementDefinition
     */
    readonly Id: string;

    /**
     * Get the type of this element.
     *
     * @type {ElementType}
     * @memberof IBaseElementDefinition
     */
    readonly Type: ElementType;
}
