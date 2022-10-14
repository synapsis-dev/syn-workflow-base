import { ElementType } from '../Definition/ElementTypes';
import * as Utils from '../Utils';

export async function GenerateDefinitions(): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dialog = (window as any).dialogIdentifier.dialog;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const process = (window as any).dialogIdentifier.process;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const version = (window as any).dialogIdentifier.version;

    const dialogElements = await GetDialogElements(process, version, dialog);
    const dialogDefinition = GenerateDialogDefinition(dialog, dialogElements);


    const subtableViews = await GetSubtableViews(process, version, dialog);


    const subtableDefinitions = await Promise.all(Object.keys(subtableViews).map(async (subtableView) => {
        const subtableViewElements = await GetSubtableViewElements(process, version, subtableView);
        return GenerateSubtableDedinition(subtableView, subtableViewElements);
    }));

    return `${subtableDefinitions.join(`\n`)}\n\n${dialogDefinition}`;
}

export interface IDesignerBaseResultData {
    label: string;
}

export interface IDesignerResultData extends IDesignerBaseResultData {
    type: ElementType;
}
export interface IDesignerResults<T extends IDesignerBaseResultData> {
    [key: string]: T;
}

async function GetSubtableViews(process: string, version: string, dialog: string): Promise<IDesignerResults<IDesignerBaseResultData>> {
    return new Promise<IDesignerResults<IDesignerBaseResultData>>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).$JRDESIGNER.getSubtableViews(process, version, dialog, resolve, reject);
    });
}

async function GetSubtableViewElements(process: string, version: string, view: string): Promise<IDesignerResults<IDesignerResultData>> {
    return new Promise<IDesignerResults<IDesignerResultData>>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).$JRDESIGNER.getSubtableViewElements(process, version, view, resolve, reject);
    });
}

async function GetDialogElements(process: string, version: string, dialog: string): Promise<IDesignerResults<IDesignerResultData>> {
    return new Promise<IDesignerResults<IDesignerResultData>>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).$JRDESIGNER.getDialogElements(process, version, dialog, resolve, reject);
    });
}

function GetRadioValues(id: string): string[] {
    const result: string[] = [];
    const elements = document.querySelectorAll(`input#${id}[type='radio']`) as NodeListOf<HTMLInputElement>;
    elements.forEach((element) => {
        result.push(element.value);
    });

    return result;
}
function GenerateDialogDefinition(dialog: string, elements: IDesignerResults<IDesignerResultData>): string {
    let interfaceDefinition = ``;
    interfaceDefinition += `/**`;
    interfaceDefinition += `\n * Dialog definition for ${dialog}.`;
    interfaceDefinition += `\n *`;
    interfaceDefinition += `\n * @export`;
    interfaceDefinition += `\n * @interface I${Utils.PascalCaseIt(dialog)}Definition`;
    interfaceDefinition += `\n */`;
    interfaceDefinition += `\nexport interface I${Utils.PascalCaseIt(dialog)}Definition {`;

    let objectDefinition = `export const ${Utils.PascalCaseIt(dialog)}Definition: I${Utils.PascalCaseIt(dialog)}Definition = {`;
    let typeDefinitions = ``;

    for (const key in elements) {
        if (Object.prototype.hasOwnProperty.call(elements, key)) {
            const element = elements[key];
            const name = key as string;
            const type = ElementType[element.type as string] as ElementType;

            const radioValues = (type === ElementType.Radio) ? GetRadioValues(name) : [];

            interfaceDefinition += `\n    ${Utils.PascalCaseIt(name)}: `;
            objectDefinition += `\n    ${Utils.PascalCaseIt(name)}: `;
            switch (type) {
                case ElementType.Blank:
                case ElementType.Column:
                case ElementType.Page:
                case ElementType.Row:
                case ElementType.Section:
                    interfaceDefinition += `IVisibleElementDefinition;`;
                    objectDefinition += `new VisibleElementDefinition("${name}", ElementType.${type}),`;

                    break;
                case ElementType.Radio:
                    typeDefinitions += `\ntype ${Utils.PascalCaseIt(dialog)}${Utils.PascalCaseIt(name)}RadioValues = ${radioValues.map((value) => `"${Utils.PascalCaseIt(value)}"`).join(` | `)};`;
                    typeDefinitions += `\ntype ${Utils.PascalCaseIt(dialog)}${Utils.PascalCaseIt(name)}Radio = RadioValues<${Utils.PascalCaseIt(dialog)}${Utils.PascalCaseIt(name)}RadioValues>;`;

                    interfaceDefinition += `IRadioElementDefinition<${Utils.PascalCaseIt(dialog)}${Utils.PascalCaseIt(name)}Radio>;`;
                    objectDefinition += `new RadioElementDefinition<${Utils.PascalCaseIt(dialog)}${Utils.PascalCaseIt(name)}Radio>("${name}", { ${radioValues.map((value) => `${Utils.PascalCaseIt(value)}: "${value}"`).join(`, `)} }),`;

                    break;
                case ElementType.Description:
                case ElementType.Text:
                case ElementType.Image:
                    interfaceDefinition += `IValueElementDefinition<ElementType.${type}>;`;
                    objectDefinition += `new SimpleValueElementDefinition<ElementType.${type}>("${name}", ElementType.${type}),`;

                    break;
                default:
                    interfaceDefinition += `IElementDefinition<ElementType.${type}>;`;
                    objectDefinition += `new ElementDefinition("${name}", ElementType.${type}),`;

                    break;
            }
        }
    }

    interfaceDefinition += `\n}`;
    objectDefinition += `\n};`;

    return `${typeDefinitions}\n\n${interfaceDefinition}\n\n${objectDefinition}`;
}

function GenerateSubtableDedinition(subtable: string, elements: IDesignerResults<IDesignerResultData>): string {
    let typeDefinition = ``;
    typeDefinition += `/**`;
    typeDefinition += `\n * Definition of ${subtable} subtable view.`;
    typeDefinition += `\n *`;
    typeDefinition += `\n * @export`;
    typeDefinition += `\n * @enum {string}`;
    typeDefinition += `\n */\n`;
    typeDefinition += `export enum ${Utils.PascalCaseIt(subtable)}Definition {`;
    for (const key in elements) {
        if (Object.prototype.hasOwnProperty.call(elements, key)) {
            const element = elements[key];
            const name = key as string;
            const type = ElementType[element.type as string] as ElementType;

            typeDefinition += `\n    ${Utils.PascalCaseIt(name)} = "${name}",`;
        }
    }

    typeDefinition += `\n}`;

    return typeDefinition;
}
