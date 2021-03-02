/**
 * Use this in subtable edit view in process designer.
 *
 * @returns
 */
function GenerateColumnDefinition() {
    var definition = "";
    var view = document.querySelector("form#form_subtableviews_editsubtableviewdetails input[name='subtableview']").value;
    definition += `
/**
 * Column definitions of '${view}' subtable view.
 *
 * @export
 * @enum {string} The column id.
 */
export enum ${view.charAt(0).toUpperCase() + view.slice(1)}Columns {`;
    document.getElementById("subtableview_elements").querySelectorAll("tbody tr").forEach((element, key) => {
        if (key > 1) {
            var value = element.querySelector("td:nth-child(1) input:last-child").value;
            var enumName = value.charAt(0).toUpperCase() + value.slice(1);
            var elementId = value;
            definition += `\n    ${enumName} = "${elementId}",`
        }
    });
    definition += `\n}`;

    return definition;
}

/**
 * Use it in dialog designer.
 *
 * @returns
 */
function GenerateDialogDefinition() {

    /**
     * Create the header for given dialog an type.
     *
     * @param {string} dialog The dialog name.
     * @param {string} type The type id.
     * @returns
     */
    function CreateHeader(dialog, type) {
        return `
/**
* ${type} definitions of dialog '${dialog}'.
*
* @export
* @enum {string} The ${type.charAt(0).toLowerCase() + type.slice(1)} id.
*/
export enum ${dialog}${type}s {`;
    }
    var name = dialogIdentifier.dialog;
    var pageDefinition = CreateHeader(name, "Page");
    var sectionDefinition = CreateHeader(name, "Section");
    var rowDefinition = CreateHeader(name, "Row");
    var columnDefinition = CreateHeader(name, "Column");

    var elementDefinitionInterface = `
    /**
     * Interface for element definitions of dialog '${name}' to get type definition support durring development.
     *
     * @interface I${name}ElementDefinitions
     * @extends {IElementDefinitions}
     */
    interface I${name}ElementDefinitions extends IElementDefinitions {`;
    var elementDefinitionObject = `const mainDialogElementDefinitions = {`;

    $JR_DESIGNER_ELEMENTS.forEach((element, key) => {
        switch (element.type) {
            case "Page":
                pageDefinition += `\n    ${element.name} = "${element.name}",`;

                break;
            case "Section":
                sectionDefinition += `\n    ${element.name} = "${element.name}",`;

                break;
            case "Row":
                rowDefinition += `\n    ${element.name} = "${element.name}",`;

                break;
            case "Column":
                columnDefinition += `\n    ${element.name} = "${element.name}",`;

                break;
            default:
                elementDefinitionInterface += `\n    ${element.name.charAt(0).toUpperCase() + element.name.slice(1)}: IElementDefinition;`;
                elementDefinitionObject += `\n    ${element.name.charAt(0).toUpperCase() + element.name.slice(1)}: { Id: "${element.name}", Type: "${element.type}"},`;
                break;
        }
    });

    pageDefinition += `\n}`;
    sectionDefinition += `\n}`;
    rowDefinition += `\n}`;
    columnDefinition += `\n}`;
    elementDefinitionInterface += `\n}`;
    elementDefinitionObject += `\n} as I${name}ElementDefinitions;`

    return {
        pages: pageDefinition,
        sections: sectionDefinition,
        rows: rowDefinition,
        columns: columnDefinition,
        elementInterface: elementDefinitionInterface,
        elementDefintionObject: elementDefinitionObject
    };
}