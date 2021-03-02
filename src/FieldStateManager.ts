/**
 * Manage dialog field states like required, visible and readonly.
 *
 * @export
 * @class FieldStateManager
 * @template TFields
 */
export class FieldStateManager {
    private disabledFields: Set<string>;
    private readonlyFields: Set<string>;
    private requiredFields: Set<string>;
    private visibleFields: Set<string>;

    /**
     * Creates an instance of FieldStateManager.
     * @memberof FieldStateManager
     */
    constructor() {
        this.disabledFields = new Set<string>();
        this.readonlyFields = new Set<string>();
        this.requiredFields = new Set<string>();
        this.visibleFields = new Set<string>();
    }

    /**
     * A list of disabled fields.
     *
     * @readonly
     * @type {ReadonlyArray<string>}
     * @memberof FieldStateManager
     */
    public get DisabledFields(): ReadonlyArray<string> {
        return Array.from(this.disabledFields);
    }

    /**
     * A list of readonly fields.
     *
     * @readonly
     * @type {ReadonlyArray<string>}
     * @memberof FieldStateManager
     */
    public get ReadonlyFields(): ReadonlyArray<string> {
        return Array.from(this.readonlyFields);
    }

    /**
     * A list of required fields.
     *
     * @readonly
     * @type {ReadonlyArray<string>}
     * @memberof FieldStateManager
     */
    public get RequiredFields(): ReadonlyArray<string> {
        return Array.from(this.requiredFields);
    }

    /**
     * A list of visible fields.
     *
     * @readonly
     * @type {ReadonlyArray<string>}
     * @memberof FieldStateManager
     */
    public get VisibleFields(): ReadonlyArray<string> {
        return Array.from(this.visibleFields);
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
     * Set the given fields as disabled.
     *
     * @param {...string[]} fields The fields which will be disabled.
     * @memberof FieldStateManager
     */
    public SetDisabled(...fields: string[]): void {
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
     * @param {...string[]} fields The fields which will be set as readonly.
     * @memberof FieldStateManager
     */
    public SetReadonly(...fields: string[]): void {
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
     * @param {...string[]} fields The fields which will be set as required.
     * @memberof FieldStateManager
     */
    public SetRequired(...fields: string[]): void {
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
     * @param {...string[]} fields The fields wich will be set visible.
     * @memberof FieldStateManager
     */
    public SetVisibilty(...fields: string[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsVisibilty(fields, true);
    }

    /**
     * Unset the given fields as disabled.
     *
     * @param {...string[]} fields The fields which will be unset as disabled.
     * @memberof FieldStateManager
     */
    public UnsetDisabled(...fields: string[]): void {
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
     * @param {...string[]} fields The fields which will be unset as readonly.
     * @memberof FieldStateManager
     */
    public UnsetReadonly(...fields: string[]): void {
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
     * @param {...string[]} fields The given fields which will be unset as required.
     * @memberof FieldStateManager
     */
    public UnsetRequired(...fields: string[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsRequired(fields, false);
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
     * Unset the given fields as visible.
     *
     * @param {...string[]} fields The fields which will be unset as visible.
     * @memberof FieldStateManager
     */
    public UnsetVisibilty(...fields: string[]): void {
        if (!fields) {
            throw new Error("'fields' parameter is null, but expected an array of TFields.");
        }

        if (!Array.isArray(fields)) {
            throw new Error("'fields' parameter is not an array.");
        }

        this.SetFieldsVisibilty(fields, false);
    }

    /**
     * Set the given field as disabled or enabled.
     *
     * @private
     * @param {string[]} fields The fields to set.
     * @param {boolean} disabled True disables the given fields, false will enable these.
     * @memberof FieldStateManager
     */
    private SetFieldsDisabled(fields: string[], disabled: boolean): void {
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
     * @param {string[]} fields The fields to set.
     * @param {boolean} readonly True set the given fields to required, false to not required.
     * @memberof FieldStateManager
     */
    private SetFieldsReadonly(fields: string[], readonly: boolean): void {
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
     * @param {string[]} fields The fields to set.
     * @param {boolean} required True set the given fields to required, false to not required.
     * @memberof FieldStateManager
     */
    private SetFieldsRequired(fields: string[], required: boolean): void {
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
     * @param {string[]} fields The fields to set.
     * @param {boolean} visible True set the given fields as visible, false will set these as hidden.
     * @memberof FieldStateManager
     */
    private SetFieldsVisibilty(fields: string[], visible: boolean): void {
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