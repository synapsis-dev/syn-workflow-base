/**
 * Test whether a string is camel-case.
 */
const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 */
export function NoCaseIt(str: string): string {
    if (hasSpace.test(str)) {
        return str.toLowerCase();
    }

    if (hasSeparator.test(str)) {
        return (Unseparate(str) || str).toLowerCase();
    }

    if (hasCamel.test(str)) {
        return Uncamelize(str).toLowerCase();
    }

    return str.toLowerCase();
}

/**
 * Separator splitter.
 */
const separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 */
function Unseparate(str: string): string {
    return str.replace(separatorSplitter, (m, next) => (next ? " " + next : ""));
}

/**
 * Camelcase splitter.
 */
const camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 */
function Uncamelize(str: string): string {
    return str.replace(camelSplitter, (m, previous, uppers) => previous + " " + uppers.toLowerCase().split("").join(" "));
}

/**
 * Convert a `string` to space case.
 */
export function SpaceCaseIt(str: string): string {
    return NoCaseIt(str).replace(/[\W_]+(.|$)/g, (matches, match) => (match ? " " + match : "")).trim();
}

/**
 * Convert a `string` to pascal case.
 */
export function PascalCaseIt(str: string): string {
    return SpaceCaseIt(str).replace(/(?:^|\s)(\w)/g, (matches, letter) => letter.toUpperCase());
}

/**
 * Convert a `string` to camel case.
 */
export function CamelCaseIt(str: string): string {
    return SpaceCaseIt(str).replace(/\s(\w)/g, (matches, letter) => letter.toUpperCase());
}

/**
 * Convert a `string` to constant case.
 */
export function ConstantCaseIt(str: string): string {
    return SnakeCaseIt(str).toUpperCase();
}

/**
 * Convert a `string` to snake case.
 */
export function SnakeCaseIt(str: string): string {
    return SpaceCaseIt(str).replace(/\s/g, "_");
}
