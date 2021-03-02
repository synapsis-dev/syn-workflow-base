import { IDialogDefinition } from "./IDialogDefinition";
import { IElementDefinitions } from "./IElementDefinitions";

/**
 * Definition base.
 *
 * @export
 * @abstract
 * @class DialogDefinitionBase
 * @template TElements
 * @template TPages
 * @template TSections
 * @template TRows
 * @template TColumns
 */
export abstract class DialogDefinitionBase<TElements extends IElementDefinitions, TPages, TSections, TRows, TColumns> implements IDialogDefinition {
    private readonly columns: TColumns;
    private readonly elements: TElements;
    private readonly pages: TPages;
    private readonly rows: TRows;
    private readonly sections: TSections;
    
    /**
     * Creates an instance of DialogDefinitionBase.
     * 
     * @param {TElements} elementDedifition
     * @param {TPages} pages
     * @param {TSections} sections
     * @param {TRows} rows
     * @param {TColumns} columns
     * @memberof DialogDefinitionBase
     */
    protected constructor(elementDedifition: TElements, pages: TPages, sections: TSections, rows: TRows, columns: TColumns) {
        this.elements = elementDedifition;
        this.pages = pages;
        this.sections = sections;
        this.rows = rows;
        this.columns = columns;
    }

    /**
     * Page ids for this dialog.
     *
     * @readonly
     * @type {TPages}
     * @memberof DialogDefinitionBase
     */
    public get Pages(): TPages {
        return this.pages;
    }

    /**
     * Section ids for this dialog.
     *
     * @readonly
     * @type {TSections}
     * @memberof DialogDefinitionBase
     */
    public get Sections(): TSections {
        return this.sections;
    }

    /**
     * Row ids for this dialog.
     *
     * @readonly
     * @type {TRows}
     * @memberof DialogDefinitionBase
     */
    public get Rows(): TRows {
        return this.rows;
    }

    /**
     * Column ids for this dialog.
     *
     * @readonly
     * @type {TColumns}
     * @memberof DialogDefinitionBase
     */
    public get Columns(): TColumns {
        return this.columns;
    }

    /**
     * Element definitions for this dialog.
     *
     * @readonly
     * @type {TElements}
     * @memberof DialogDefinitionBase
     */
    public get Elements(): TElements {
        return this.elements;
    }
}
