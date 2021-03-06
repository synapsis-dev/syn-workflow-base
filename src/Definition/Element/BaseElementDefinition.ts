import { ElementType } from "../ElementTypes";
import { IBaseElementDefinition } from "./IBaseElementDefinition";

/**
 * Base element with only id and type properties.
 *
 * @export
 * @class BaseElementDefinition
 * @implements {IBaseElementDefinition}
 */
export class BaseElementDefinition implements IBaseElementDefinition {
    private readonly id: string;
    private readonly type: ElementType;

    /**
     * Creates an instance of BaseElementDefinition.
     *
     * @param {string} id The id of the element.
     * @param {ElementType} type The element type.
     * @memberof BaseElementDefinition
     */
    public constructor(id: string, type: ElementType) {
        this.id = id;
        this.type = type;
    }

    /**
     * @inheritdoc
     */
    public get Id(): string {
        return this.id;
    }

    /**
     * @inheritdoc
     */
    public get Type(): ElementType {
        return this.type;
    }
}
