import * as Utils from "./Utils";
import { FieldStateManager } from './FieldStateManager';

/**
 * Base class for dialog logics.
 *
 * @export
 * @abstract
 * @class DialogLogicBase
 * @template TSteps The string enum of steps.
 * @template TFieldsType The string enum of fields.
 */
export abstract class DialogLogicBase<TSteps, TFieldsType, TFields extends string> {
    private readonly fields: TFieldsType;
    private readonly steps: TSteps;
    private readonly fieldStateManager: FieldStateManager<TFields>;

    /**
     * Creates a new instance of this class.
     */
    constructor(steps: TSteps, fields: TFieldsType) {
        this.steps = steps;
        this.fields = fields as never;
        this.fieldStateManager = new FieldStateManager<TFields>();
    }



    /**
     * Available dialog fields.
     *
     * @readonly
     * @protected
     * @type {TFieldsType}
     * @memberof DialogLogicBase
     */
    protected get Fields(): TFieldsType {
        return this.fields;
    }

    /**
     * Available steps.
     *
     * @readonly
     * @protected
     * @type {TSteps}
     * @memberof DialogLogicBase
     */
    protected get Steps(): TSteps {
        return this.steps;
    }

    protected get FSN(): FieldStateManager<TFields> {
        return this.fieldStateManager;
    }

    /**
     * Indicates if dialog is in edit mode.
     *
     * @readonly
     * @type {boolean}
     * @memberof DialogLogicBase
     */
    protected get IsEditMode(): boolean {
        return Utils.IsEditMode();
    }

    /**
     * Indicates if dialog is in view mode.
     *
     * @readonly
     * @type {boolean}
     * @memberof DialogLogicBase
     */
    protected get IsViewMode(): boolean {
        return Utils.IsViewMode();
    }
}

