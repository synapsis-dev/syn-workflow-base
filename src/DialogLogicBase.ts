import * as Utils from "./Utils";
import { FieldStateManager } from './FieldStateManager';
import { IDialogDefinition } from "./IDialogDefinition";

/**
 * Base class for dialog logics.
 *
 * @export
 * @abstract
 * @class DialogLogicBase
 * @template TSteps The string enum of steps.
 * @template TFieldsType The type of fields enum.
 * @template TFields The string enum of fields 
 * @template TDefinition
 */
export abstract class DialogLogicBase<TSteps, TDefinition extends IDialogDefinition> {
    private readonly definition: TDefinition;
    private readonly fieldStateManager: FieldStateManager;
    private readonly steps: TSteps;

    /**
     * Creates an instance of DialogLogicBase.
     * 
     * @param {TSteps} steps
     * @param {TFieldsType} fields
     * @memberof DialogLogicBase
     */
    protected constructor(steps: TSteps, definition: TDefinition) {
        this.steps = steps;
        this.definition = definition;

        this.fieldStateManager = new FieldStateManager();
    }

    /**
     * The definition for this dialog.
     *
     * @readonly
     * @type {TDefinition}
     * @memberof DialogLogicBase
     */
    public get Definition(): TDefinition {
        return this.definition;
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

    protected get FSN(): FieldStateManager {
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