/**
 * Manage dialog field states like required, visible and readonly.
 *
 * @export
 * @class FieldStateManager
 * @template TFields
 */
export class FieldStateManager<TFields extends string> {
    private disabledFields: Set<TFields>;
    private readonlyFields: Set<TFields>;
    private requiredFields: Set<TFields>;
    private visibleFields: Set<TFields>;

    /**
     * Creates an instance of FieldStateManager.
     * @memberof FieldStateManager
     */
    constructor() {
        this.disabledFields = new Set<TFields>();
        this.readonlyFields = new Set<TFields>();
        this.requiredFields = new Set<TFields>();
        this.visibleFields = new Set<TFields>();
    }

    /**
     * A list of disabled fields.
     *
     * @readonly
     * @type {ReadonlyArray<TFields>}
     * @memberof FieldStateManager
     */
    public get DisabledFields(): ReadonlyArray<TFields> {
        return Array.from(this.disabledFields);
    }

    /**
     * A list of readonly fields.
     *
     * @readonly
     * @type {ReadonlyArray<TFields>}
     * @memberof FieldStateManager
     */
    public get ReadonlyFields(): ReadonlyArray<TFields> {
        return Array.from(this.readonlyFields);
    }

    /**
     * A list of required fields.
     *
     * @readonly
     * @type {ReadonlyArray<TFields>}
     * @memberof FieldStateManager
     */
    public get RequiredFields(): ReadonlyArray<TFields> {
        return Array.from(this.requiredFields);
    }

    /**
     * A list of visible fields.
     *
     * @readonly
     * @type {ReadonlyArray<TFields>}
     * @memberof FieldStateManager
     */
    public get VisibleFields(): ReadonlyArray<TFields> {
        return Array.from(this.visibleFields);
    }

    /**
     * Unset all required fields temporary. With ResetRequiredFields they will be reseted.
     *
     * @memberof FieldStateManager
     */
    public UnsetRequiredFieldsTemporary(): void {
        this.requiredFields.forEach((field) => {
            if (document.getElementById(field)) {
                jr_set_required(field, false);
            }
        });
    }

    /**
     * Resets the temporary unset required fields.
     *
     * @memberof FieldStateManager
     */
    public ResetRequiredFields(): void {
        this.requiredFields.forEach((field) => {
            if (document.getElementById(field)) {
                jr_set_required(field, true);
            }
        });
    }

    /**
     * Unset the given fields as disabled.
     *
     * @param {...TFields[]} fields The fields which will be unset as disabled.
     * @memberof FieldStateManager
     */
    public UnsetDisabled(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsDisabled(fields, false);
    }

    /**
     * Unset the given fields as readonly.
     *
     * @param {...TFields[]} fields The fields which will be unset as readonly.
     * @memberof FieldStateManager
     */
    public UnsetReadonly(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsReadonly(fields, false);
    }

    /**
     * Unset given fields as required.
     *
     * @param {...TFields[]} fields The given fields which will be unset as required.
     * @memberof FieldStateManager
     */
    public UnsetRequired(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsRequired(fields, false);
    }

    /**
     * Unset the given fields as visible.
     *
     * @param {...TFields[]} fields The fields which will be unset as visible.
     * @memberof FieldStateManager
     */
    public UnsetVisibilty(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsVisibilty(fields, false);
    }

    /**
     * Set the given fields as disabled.
     *
     * @param {...TFields[]} fields The fields which will be disabled.
     * @memberof FieldStateManager
     */
    public SetDisabled(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsDisabled(fields, true);
    }

    /**
     * Set the given fields as readonly.
     *
     * @param {...TFields[]} fields The fields which will be set as readonly.
     * @memberof FieldStateManager
     */
    public SetReadonly(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsReadonly(fields, true);
    }

    /**
     * Set the given fields as required.
     *
     * @param {...TFields[]} fields The fields which will be set as required.
     * @memberof FieldStateManager
     */
    public SetRequired(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsRequired(fields, true);

    }

    /**
     * Set the given fields as visible.
     *
     * @param {...TFields[]} fields The fields wich will be set visible.
     * @memberof FieldStateManager
     */
    public SetVisibilty(...fields: TFields[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsVisibilty(fields, true);
    }

    /**
     * Set the given field as disabled or enabled.
     *
     * @private
     * @param {TFields[]} fields The fields to set.
     * @param {boolean} disabled True disables the given fields, false will enable these.
     * @memberof FieldStateManager
     */
    private SetFieldsDisabled(fields: TFields[], disabled: boolean): void {
        fields.forEach((field) => {
            if (document.getElementById(field)) {
                if (disabled) {
                    this.disabledFields.add(field);
                } else {
                    this.disabledFields.delete(field);
                }

                jr_set_disabled(field, disabled);
            }
        });
    }

    /**
     * Set given fields as readonly or as writable.
     *
     * @private
     * @param {TFields[]} fields The fields to set.
     * @param {boolean} readonly True set the given fields to required, false to not required.
     * @memberof FieldStateManager
     */
    private SetFieldsReadonly(fields: TFields[], readonly: boolean): void {
        fields?.forEach((field) => {
            if (document.getElementById(field)) {
                if (readonly) {
                    this.readonlyFields.add(field);
                } else {
                    this.readonlyFields.delete(field);
                }

                jr_set_readonly(field, readonly);
            }
        });
    }

    /**
     * Set the given fields as required or not required.
     *
     * @private
     * @param {TFields[]} fields The fields to set.
     * @param {boolean} required True set the given fields to required, false to not required.
     * @memberof FieldStateManager
     */
    private SetFieldsRequired(fields: TFields[], required: boolean): void {
        fields?.forEach((field) => {
            if (document.getElementById(field)) {
                if (required) {
                    this.requiredFields.add(field);
                } else {
                    this.requiredFields.delete(field);
                }

                jr_set_required(field, required);
            }
        });
    }

    /**
     * Set the given fields as visible or hidden.
     *
     * @private 
     * @param {TFields[]} fields The fields to set.
     * @param {boolean} visible True set the given fields as visible, false will set these as hidden.
     * @memberof FieldStateManager
     */
    private SetFieldsVisibilty(fields: TFields[], visible: boolean): void {
        fields.forEach((field) => {
            if (document.getElementById(field)) {
                if (visible) {
                    this.visibleFields.add(field);
                    jr_show(field);
                } else {
                    this.visibleFields.delete(field);
                    jr_hide(field);
                }
            }
        });
    }
}