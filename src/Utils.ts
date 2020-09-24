
/**
 * Indicates if dialog is in edit mode.
 *
 * @export
 * @type {boolean}
 */
export function IsEditMode(): boolean {
    return $JRSTEP.stepData._object.common._object.jr_mode === "1";
}

/**
 * Indicates if dialog is in view mode.
 *
 * @export
 * @type {boolean}
 */
export function IsViewMode(): boolean {
    return $JRSTEP.stepData._object.common._object.jr_mode === "2";
}

/**
 * Return the data folder url from the running process
 *
 * @export
 * @returns {string} Return the data folder url from the runnning process.
 */
export function GetProcessDataUrl(): string {
    if ($JRSTEP.processname && $JRSTEP.version) {
        return "data/" + $JRSTEP.processname + "/" + $JRSTEP.version;
    }

    const url = new URL(window.location.href);
    const processname = url.searchParams.get("jrprocessname");
    const version = url.searchParams.get("jrversion");

    return "data/" + processname + "/" + version;
}

/**
 * Append the required stylesheet to the page.
 *
 * @export
 * @param {string} css
 */
export function AppendLink(css: string): void {
    const link = document.createElement("link");
    link.href = GetProcessDataUrl() + "/css/" + css;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}

/**
 * Get the id of an subtable field.
 *
 * @export
 * @template TSFields
 * @param {TSubtable} subtable The subtable.
 * @param {number} rowId The rowId.
 * @param {TSFields} column The column name.
 * @returns {string} Returns the subtable field id.
 */
export function GetSubtableFieldId<TSubtable extends string, TSFields>(subtable: TSubtable | string, rowId: number, column: TSFields | string): string {
    return `${subtable}_${column}_${rowId}`;
}

/**
 * Shows subtable columns.
 *
 * @export
 * @param {string} subtable Name of subtable
 * @param {...string[]} columns Array of column names
 * @memberof CheckDialog
 */
export function ShowSubtableColumn(subtable: string, ...columns: string[]): void {
    columns?.forEach(column => {
        jr_show_subtable_column(subtable, column);
    });
}

/**
 * Hides subtable clumns.
 *
 * @export
 * @param {string} subtable Name of subtable
 * @param {...string[]} columns Array of column names
 */
export function HideSubtableColumn(subtable: string, ...columns: string[]): void {
    columns?.forEach(column => {
        jr_hide_subtable_column(subtable, column);
    });
}

/**
 * Sets or unsets subtable columns to readonly.
 *
 * @export
 * @param {TSubtable} subtable Name of subtable
 * @param {string[]} columns Array of column names
 * @param {boolean} [readonly=true]
 */
export function SetSubtableColumnReadonly<TSubtable extends string>(subtable: TSubtable, columns: string[], readonly = true): void {
    jr_loop_table(subtable, (s, rowId: number) => {
        columns?.forEach((column) => {
            jr_set_readonly(GetSubtableFieldId(subtable, rowId, column), readonly);
        });
    });
}

/**
 * Sets or unsets subtable columns to required.
 *
 * @export
 * @param {TSubtable} subtable Name of subtable
 * @param {string[]} columns Columns Array of column names
 * @param {boolean} [required=true]
 */
export function SetSubtableColumnRequired<TSubtable extends string>(subtable: TSubtable, columns: string[], required = true): void {
    jr_loop_table(subtable, (s, rowid: number) => {
        columns?.forEach(column => {
            jr_set_required(GetSubtableFieldId(subtable, rowid, column), required);
        });
    });
}

/**
 * Sets or unsets subtable columns to disabled.
 *
 * @export
 * @param {TSubtable} subtable Name of subtable
 * @param {string[]} columns Columns Array of column names
 * @param {boolean} [disabled=true]
 */
export function SetSubtableColumnDisabled<TSubtable extends string>(subtable: TSubtable, columns: string[], disabled = true): void {
    jr_loop_table(subtable, (s, rowid: number) => {
        columns?.forEach(column => {
            jr_set_disabled(GetSubtableFieldId(subtable, rowid, column), disabled);
        });
    });
}

/**
 * Set header color for subtables with given ids.
 *
 * @export
 * @param {...string[]} subtableId Ids of subtables.
 */
export function SetSubtableHeaderColor(subtableId: string, background = "#3b3e4d", text = "#dddddd"): void {
    const id = `div_${subtableId}_header`;
    const element = document.getElementById(id);
    element.style.backgroundColor = background;
    element.style.color = text;
}

/**
 * Sets the subtable field color.
 *
 * @export
 * @template TSubtable
 * @param {TSubtable} subtable
 * @param {string} column The column in which the field is.
 * @param {number} rowId The rowId where the field is.
 * @param {string} backgroundColor The background color to set.
 * @param {string} forgroundColor The forgound color of the field.
 */
export function SetSubtableFieldColor<TSubtable extends string>(subtable: TSubtable, column: string, rowId: number, backgroundColor: string, forgroundColor: string): void {
    const element = document.getElementById(GetSubtableFieldId(subtable, rowId, column));
    element.style.backgroundColor = backgroundColor;
    element.style.color = forgroundColor;
}

/**
 * Check if input is a Date object.
 *
 * @export
 * @param {unknown} input The input value checked.
 * @returns {boolean} Returns true when input is a Date.
 */
export function IsDate(input: unknown): boolean {
    if (Object.prototype.toString.call(input) === "[object Date]") {
        return true;
    } else {
        return false;
    }
}

/**
 * Gets the locale date string for given date.
 *
 * @export
 * @param {Date} date Date which will be used to create the locale string
 * @returns {string} Returns a local date string.
 */
export function GetFullDateTime(date: Date): string {
    return date.toLocaleString("de-DE", { hour12: false });
}

/**
 * Get the label element id of given field.
 *
 * @export
 * @param {TDialogField} field The dialog field.
 * @returns {string} Returns the field label id of given field.
 */
export function GetFieldLabelId<TDialogField>(field: TDialogField): string {
    return `${field}_label`;
}

/**
 * Get the radio action id of given field.
 *
 * @export
 * @param {DialogField} field The dialog field.
 * @param {DialogAction} action The radio action.
 * @returns {string} Returns the radio action id of given field.
 */
export function GetRadioId<TDialogField, TDialogAction>(field: TDialogField, action: TDialogAction): string {
    return `${field}_${action}`;
}

/**
 * Indicates whether a specified string is `null`, empty, or consists only of white-space characters.
 *
 * @export
 * @param {string} value The string to test.
 * @returns {boolean} Returns true if the `value` parameter is `null` or Empty, or if `value` consists exclusively of white-space characters.
 */
export function IsNullOrWhitespace(value: string): boolean {
    return !value || !value.trim();
}

/**
 * Indicates if current step is a request step.
 *
 * @export
 * @returns {boolean} Returns true when current step is arequest step.
 */
export function IsRequest(): boolean {
    // todo: try to find a better way to check for isRequest and isAnswer. I know there a php functions for that.
    return $JRSTEP.answerStep !== $JRSTEP.__proto__.answerStep;
}

/**
 * Indicates if given step action is available.
 *
 * @export
 * @param {JR_STEP_ACTION} action The step action that will be checked for availablity.
 * @returns {boolean} Return true when given step action is available.
 */
export function IsStepActionAvailable(action: JR_STEP_ACTION): boolean {
    switch (action) {
        case "abort":
            return $JRSTEP.abortStep !== $JRSTEP.__proto__.abortStep;
            break;
        case "assign":
            return $JRSTEP.assignStep !== $JRSTEP.__proto__.assignStep;
            break;
        case "back":
            return $JRSTEP.backStep !== $JRSTEP.__proto__.backStep;
            break;
        case "finish":
            return $JRSTEP.finishStep !== $JRSTEP.__proto__.finishStep;
            break;
        case "jumpTo":
            return $JRSTEP.jumpToStep !== $JRSTEP.__proto__.jumpToStep;
            break;
        case "request":
            return $JRSTEP.requestStep !== $JRSTEP.__proto__.requestStep;
            break;
        case "resubmission":
            return $JRSTEP.resubmissionStep !== $JRSTEP.__proto__.resubmissionStep;
            break;
        case "save":
            return $JRSTEP.saveStep !== $JRSTEP.__proto__.saveStep;
            break;
        case "send":
            return $JRSTEP.sendStep !== $JRSTEP.__proto__.sendStep;
            break;
        default:
            break;
    }
}

/**
 * Will hide all step actions.
 *
 * @export
 */
export function HideStepActions(): void {
    const actions: JR_STEP_ACTION[] = ["send", "save", "assign", "request", "back", "release", "jumpTo", "abort", "resubmission", "finish"];

    actions.forEach((action) => {
        if (IsStepActionAvailable(action)) {
            jr_hide_step_action(action);
        }
    });
}

type SubtableActions = "delete" | "add" | "add_value" | "template" | "copy";
/**
 * Will show or hide subtable actions.
 *
 * @param {TSubtable} subtable The subtable.
 * @param {SubtableActions[]} actions Actions to show or hide.
 * @param {boolean} [show=true] When true given actions of given subtable will be shown.
 */
function ShowOrHideSubtableActions<TSubtable extends string>(subtable: TSubtable, actions: SubtableActions[], show = true): void {
    actions.forEach((field) => {
        const element = document.getElementById(`${subtable}_${field}`);
        if (element) {
            if (show) {
                element.style.display = "inline";
            } else {
                element.style.display = "none";
            }
        }
    });
}

/**
 * Will hide subtable actions.
 *
 * @export
 * @param {TSubtable} subtable The subtable.
 * @param {SubtableActions[]} actions Actinos to show.
 */
export function HideSubtableActions<TSubtable extends string>(subtable: TSubtable, actions: SubtableActions[]): void {
    ShowOrHideSubtableActions(subtable, actions, false);
}

/**
 * Will show subtable actions.
 *
 * @export
 * @param {TSubtable} subtable The subtable.
 * @param {SubtableActions[]} actions Actions to hide.
 */
export function ShowSubtableActions<TSubtable extends string>(subtable: TSubtable, actions: SubtableActions[]): void {
    ShowOrHideSubtableActions(subtable, actions, true);
}

/**
 * Check if the given date is valid.
 *
 * @export
 * @param {Date} date The date to check.
 * @returns {boolean} Return true when date is valid.
 */
export function IsValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getDate());
}

/**
 * Disabled the jr section collapse function.
 *
 * @export
 */
export function DisableSectionCollapse(): void {
    document.querySelectorAll<HTMLLegendElement>(".jr-section-title").forEach((element) => {
        element.style.cursor = "default";
        element.querySelector<HTMLElement>(".jr-section-icon").style.display = "none";

        const clone = element.cloneNode(true);
        element.parentNode.replaceChild(clone, element);
    });
}

/**
 * Set default dialog style.
 *
 * @export
 * @param {string} [accent="#f07724"]
 * @param {string} [background="#fff"]
 * @param {string} [text="#fff"]
 * @param {string} [label="#778899"]
 */
export function SetDefaultStyle(accent = "#f07724", background = "#fff", text = "#fff", label = "#778899"): void {
    document.querySelectorAll<HTMLLegendElement>(".jr-section-title").forEach((element) => {
        element.parentElement.style.borderRadius = "0px";
        element.style.borderRadius = "0px";
        element.style.backgroundColor = accent;
        element.style.color = text;
    });

    document.querySelectorAll<HTMLElement>(".jr-section-content").forEach((element) => {
        element.style.backgroundColor = background;
    });

    document.querySelectorAll<HTMLElement>(".jr-section-content").forEach((element) => {
        element.style.backgroundColor = background;
    });

    document.querySelectorAll<HTMLElement>("tr[id$='label']").forEach((element) => {
        element.style.backgroundColor = label;
        element.style.color = text;
    });
}