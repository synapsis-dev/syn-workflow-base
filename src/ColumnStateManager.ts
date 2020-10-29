import * as Utils from "./Utils";

/**
 * Manage dialog column states like required, visible and readonly.
 *
 * @export
 * @class ColumnStateManager
 * @template TColumns
 */
export class ColumnStateManager<TColumns extends string> {
    private subtable: string;
    private disabledColumns: Set<TColumns>;
    private readonlyColumns: Set<TColumns>;
    private requiredColumns: Set<TColumns>;
    private visibleColumns: Set<TColumns>;

    /**
     * Creates an instance of ColumnStateManager.
     * @memberof ColumnStateManager
     */
    constructor(subtable: string) {
        this.subtable = subtable;
        this.disabledColumns = new Set<TColumns>();
        this.readonlyColumns = new Set<TColumns>();
        this.requiredColumns = new Set<TColumns>();
        this.visibleColumns = new Set<TColumns>();
    }

    /**
     * A list of disabled columns.
     *
     * @readonly
     * @type {ReadonlyArray<TColumns>}
     * @memberof ColumnStateManager
     */
    public get DisabledColumns(): ReadonlyArray<TColumns> {
        return Array.from(this.disabledColumns);
    }

    /**
     * A list of readonly columns.
     *
     * @readonly
     * @type {ReadonlyArray<TColumns>}
     * @memberof ColumnStateManager
     */
    public get ReadonlyColumns(): ReadonlyArray<TColumns> {
        return Array.from(this.readonlyColumns);
    }

    /**
     * A list of required columns.
     *
     * @readonly
     * @type {ReadonlyArray<TColumns>}
     * @memberof ColumnStateManager
     */
    public get RequiredColumns(): ReadonlyArray<TColumns> {
        return Array.from(this.requiredColumns);
    }

    /**
     * A list of visible columns.
     *
     * @readonly
     * @type {ReadonlyArray<TColumns>}
     * @memberof ColumnStateManager
     */
    public get VisibleColumns(): ReadonlyArray<TColumns> {
        return Array.from(this.visibleColumns);
    }

    /**
     * Unset all required columns temporary. With ResetRequiredColumns they will be reseted.
     *
     * @memberof ColumnStateManager
     */
    public UnsetRequiredColumnsTemporary(): void {
        this.requiredColumns.forEach((field) => {
            if (document.getElementById(field)) {
                jr_set_required(field, false);
            }
        });
    }

    /**
     * Resets the temporary unset required columns.
     *
     * @memberof ColumnStateManager
     */
    public ResetRequiredcolumns(): void {
        this.requiredColumns.forEach((field) => {
            if (document.getElementById(field)) {
                jr_set_required(field, true);
            }

        });
    }

    /**
     * Unset the given columns as disabled.
     *
     * @param {...TColumns[]} columns The columns which will be unset as disabled.
     * @memberof ColumnStateManager
     */
    public UnsetDisabled(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsDisabled(columns, false);
    }

    /**
     * Unset the given columns as readonly.
     *
     * @param {...TColumns[]} columns The columns which will be unset as readonly.
     * @memberof ColumnStateManager
     */
    public UnsetReadonly(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsReadonly(columns, false);
    }

    /**
     * Unset given columns as required.
     *
     * @param {...TColumns[]} columns The given columns which will be unset as required.
     * @memberof ColumnStateManager
     */
    public UnsetRequired(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsRequired(columns, false);
    }

    /**
     * Unset the given columns as visible.
     *
     * @param {...TColumns[]} columns The columns which will be unset as visible.
     * @memberof ColumnStateManager
     */
    public UnsetVisibilty(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsVisibilty(columns, false);
    }

    /**
     * Set the given columns as disabled.
     *
     * @param {...TColumns[]} columns The columns which will be disabled.
     * @memberof ColumnStateManager
     */
    public SetDisabled(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsDisabled(columns, true);
    }

    /**
     * Set the given columns as readonly.
     *
     * @param {...TColumns[]} columns The columns which will be set as readonly.
     * @memberof ColumnStateManager
     */
    public SetReadonly(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsReadonly(columns, true);
    }

    /**
     * Set the given columns as required.
     *
     * @param {...TColumns[]} columns The columns which will be set as required.
     * @memberof ColumnStateManager
     */
    public SetRequired(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsRequired(columns, true);

    }

    /**
     * Set the given columns as visible.
     *
     * @param {...TColumns[]} columns The columns wich will be set visible.
     * @memberof ColumnStateManager
     */
    public SetVisibilty(...columns: TColumns[]): void {
        if (!columns) {
            throw new Error("'columns' parameter is null, but expected an array of TColumns.");
        }

        if (!Array.isArray(columns)) {
            throw new Error("'columns' parameter is not an array.");
        }

        this.SetColumnsVisibilty(columns, true);
    }

    /**
     * Set the given field as disabled or enabled.
     *
     * @private
     * @param {TColumns[]} columns The columns to set.
     * @param {boolean} disabled True disables the given columns, false will enable these.
     * @memberof ColumnStateManager
     */
    private SetColumnsDisabled(columns: TColumns[], disabled: boolean): void {
        columns.forEach((column) => {
            if (document.getElementById(column)) {
                if (disabled) {
                    this.disabledColumns.add(column);
                } else {
                    this.disabledColumns.delete(column);
                }

                jr_loop_table(this.subtable, (subtable, rowId) => {
                    jr_set_disabled(Utils.GetSubtableFieldId(subtable, rowId, column), disabled);
                });
            }
        });
    }

    /**
     * Set given columns as readonly or as writable.
     *
     * @private
     * @param {TColumns[]} columns The columns to set.
     * @param {boolean} readonly True set the given columns to required, false to not required.
     * @memberof ColumnStateManager
     */
    private SetColumnsReadonly(columns: TColumns[], readonly: boolean): void {
        columns?.forEach((column) => {
            if (document.getElementById(column)) {
                if (readonly) {
                    this.readonlyColumns.add(column);
                } else {
                    this.readonlyColumns.delete(column);
                }

                jr_loop_table(this.subtable, (subtable, rowId) => {
                    jr_set_readonly(Utils.GetSubtableFieldId(subtable, rowId, column), readonly);
                });
            }
        });
    }

    /**
     * Set the given columns as required or not required.
     *
     * @private
     * @param {TColumns[]} columns The columns to set.
     * @param {boolean} required True set the given columns to required, false to not required.
     * @memberof ColumnStateManager
     */
    private SetColumnsRequired(columns: TColumns[], required: boolean): void {
        columns?.forEach((column) => {
            if (document.getElementById(column)) {
                if (required) {
                    this.requiredColumns.add(column);
                } else {
                    this.requiredColumns.delete(column);
                }

                jr_loop_table(this.subtable, (subtable, rowId) => {
                    jr_set_required(Utils.GetSubtableFieldId(subtable, rowId, column), required);
                });
            }
        });
    }

    /**
     * Set the given columns as visible or hidden.
     *
     * @private 
     * @param {TColumns[]} columns The columns to set.
     * @param {boolean} visible True set the given columns as visible, false will set these as hidden.
     * @memberof ColumnStateManager
     */
    private SetColumnsVisibilty(columns: TColumns[], visible: boolean): void {
        columns.forEach((column) => {
            if (document.getElementById(column)) {
                if (visible) {
                    this.visibleColumns.add(column);
                    jr_show_subtable_column(this.subtable, column);
                } else {
                    this.visibleColumns.delete(column);
                    jr_hide_subtable_column(this.subtable, column);
                }
            }
        });
    }
}