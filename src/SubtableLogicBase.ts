import * as Utils from "./Utils";

/**
 * Base class for subtable logic.
 *
 * @export
 * @abstract
 * @class SubtableLogicBase
 * @template TSteps The string enum of steps.
 * @template TSubtable The id of subtable.
 * @template TFields The string enum of subtable fields.
 */
export abstract class SubtableLogicBase<TSteps, TSubtable extends string, TFields> {
    private readonly columns: TFields;
    private readonly name: TSubtable;
    private readonly steps: TSteps;

    /**
     * Creates a new instance of this type.
     */
    constructor(steps: TSteps, name: TSubtable, fields: TFields) {
        this.steps = steps;
        this.name = name;
        this.columns = fields;
    }

    /**
     * Name of the subtable.
     *
     * @readonly
     * @type {TSubtable}
     * @memberof SubtableLogicBase
     */
    protected get Name(): TSubtable {
        return this.name;
    }

    /**
     * Available field in subtable.
     *
     * @readonly
     * @type {TFields}
     * @memberof SubtableLogicBase
     */
    protected get Column(): TFields {
        return this.columns;
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

    /**
     * Indicates if dialog is in edit mode.
     *
     * @readonly
     * @type {boolean}
     * @memberof SubtableLogicBase
     */
    protected get IsEditMode(): boolean {
        return Utils.IsEditMode();
    }

    /**
     * Indicates if dialog is in view mode.
     *
     * @readonly
     * @type {boolean}
     * @memberof SubtableLogicBase
     */
    protected get IsViewMode(): boolean {
        return Utils.IsViewMode();
    }

    /**
     * Set the given columns as disabled or enabled.
     *
     * @protected
     * @param {string[]} columns The columns to set.
     * @param {boolean} [disabled=true] True disables the given columns, false will enable these.
     * @memberof SubtableLogicBase
     */
    protected SetDisabledColumns(columns: string[], disabled = true): void {
        jr_loop_table(this.Name, (subtable, rowid: number) => {
            columns?.forEach(column => {
                jr_set_disabled(Utils.GetSubtableFieldId(subtable, rowid, column), disabled);
            });
        });
    }

    /**
     * Set given columns as readonly or as writable.
     *
     * @protected
     * @param {string[]} columns The columns to set.
     * @param {boolean} [readonly=true] True set the given columns to readonly, false will set them as writable.
     * @memberof SubtableLogicBase
     */
    protected SetReadOnlyColumns(columns: string[], readonly = true): void {
        jr_loop_table(this.Name, (subtable, rowid: number) => {
            columns?.forEach(column => {
                jr_set_readonly(Utils.GetSubtableFieldId(subtable, rowid, column), readonly);
            });
        });
    }

    /**
     * Set the given columns as required or not required.
     *
     * @protected
     * @param {string[]} columns The columns to set.
     * @param {boolean} [required=true] True set the given columns to required, false to not required.
     * @memberof SubtableLogicBase
     */
    protected SetRequiredColumns(columns: string[], required = true): void{
        jr_loop_table(this.Name, (subtable, rowid: number) => {
            columns?.forEach(column => {
                jr_set_required(Utils.GetSubtableFieldId(subtable, rowid, column), required);
            });
        });
    }

    /**
     * Set the given columns as visible or hidden.
     *
     * @protected
     * @param {string[]} columns The columns to set.
     * @param {boolean} [visible=true] True set the given columns as visible, false will set these as hidden.
     * @memberof SubtableLogicBase
     */
    protected SetVisibleColumns(columns: string[], visible = true): void {
        columns?.forEach((column) => {
            if (visible) {
                jr_show_subtable_column(this.Name, column);
            } else {
                jr_hide_subtable_column(this.Name, column);
            }
        });
    }
}
