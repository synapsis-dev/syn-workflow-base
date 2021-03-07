import { ElementType } from "../ElementTypes";
import { IDisabledElementDefinition } from './IDisabledElementDefinition';
import { IReadonlyElementDefinition } from './IReadonlyElementDefinition';
import { IRequiredElementDefinition } from './IRequiredElementDefinition';
import { IValueElementDefinition } from './IValueElementDefinition';

/**
 * Element definition with id, type, disabled, readonly, required and visible properties for elements like textbox, decimal and date etc.
 *
 * @export
 * @interface IElementDefinition
 * @extends {IDisabledElementDefinition}
 * @extends {IReadonlyElementDefinition}
 * @extends {IRequiredElementDefinition}
 * @extends {IValueElementDefinition<T>}
 * @extends {IVisibleElementDefinition}
 * @template T
 */
export interface IElementDefinition<T extends ElementType> extends IDisabledElementDefinition, IReadonlyElementDefinition, IRequiredElementDefinition, IValueElementDefinition<T> {

}
