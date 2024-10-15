
declare module 'dolar-js' {
    export function $(argument: string):$Type;
    export function throttle(callback: CallbackType, delay: number): CallbackType;
    export function debounce(callback: CallbackType, delay: number): CallbackType;
    export function distanceBetweenPoints(x1: number, y1: number, x2: number, y2: number): number;
    export function createMatriz(rows: number, cols: number): number[][];
    export function Random(min: number, max: number) : number;
    export function Get(): object | null;
    export function solveEquations(M: number[][], equality: number[]) : number[];
    export function calcularAnguloCuadrante(p1: { x: number, y: number }, p2: { x: number, y: number }): number;
    export function slope(p1: { x: number, y: number }, p2: { x: number, y: number }): number
    export function angleSlope(m: number): number;
    export function det(M: number[][]): number;
    export function toRad(deg: number): number;
    export function toGrad(rad: number): number;
    export function binToASCII(bin: string): string;
    export function numToBin(num: number): string;
    export function asciiToText(ascii: string): string;
    export function textToAscii(text: string): string;
    export function textToBin(text: string): string;
    export function binToText(bin: string): string;
    export function binToNum(bin: string): number;
    export function moveTo(obj: string | NodeListOf<Element>, x: number, y: number, type: string): void;
    export class GESTOR {
        constructor(tag: string);
        start(): void;
    }
    export class Canvas {
        constructor(obj?: string);
        clear(n:number[]): void;
        save() : void;
        restore() : void;
        getCanvas(): HTMLCanvasElement;
        polygon(points: number[], c?: string, f?: boolean): void;
        rect(x: number, y: number, w: number, h: number, c?: string, f?: boolean, r?: number | number[] | boolean) : void;
        circle(x: number, y: number, r: number, c?: string, f?: boolean): void;
        arc(...options: ArcOptionsType): void;
        ellipse(...options: EllipseOptionsType): void;
        line(x1: number, y1: number, x2: number, y2: number, c: string, w: number): void;
        vector(x: number, y: number, xf: number, yf: number, w: number , c: string): void;
        rotate(cx: number, cy: number, a: number): void;
        text(t: string, x: number, y: number, s:number, c: string): void;
        size(w: number | null, h: number | null): void;
        fill() : void;
        on(e: string, f: Function): void;
        off(e: string, f: Function): void;
        img(src: string, x: number, y: number, w: number, h: number): void;
        setResponsive(px: number, py: number): [number, number];
        getResponsive(px: number, py: number): [number, number];
        getMousePosition(evt: MouseEvent): { x: number, y: number };
        createRadialGradient(centerX:number, centerY:number, innerRadius:number, outerRadius:number, colorStops: { offset: number, color: string }[]) : CanvasGradient;
        intersectionCircles(h: number, k: number, r: number, a: number, b: number, c: number) : [{ x: number, y: number }, { x: number, y: number }];
    }

    export class Vector {
        constructor(x: number, y: number, mod: number, ang: number);
        getDataJson() : any;
        getDataArray(): number[];
        paint(canvas: any, w: number, c: string): void;
        setOrigin(x: number, y: number): void;
        setMod(mod: number): void;
        setAngle(ang: number): void;
    }
}
type $TagType = HTMLElement | Element | InputsElementsTypes | ResourceElements
type $ObjType = $TagType | $TagType[]
type InputsElementsTypes = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
type ResourceElements = HTMLImageElement | HTMLScriptElement | HTMLIFrameElement | HTMLAudioElement | HTMLVideoElement;
type CallbackType = (...args: any[]) => void;
type EllipseOptionsType = [
    x: number,
    y: number,
    w: number,
    h: number,
    c: string,
    f?: boolean
]
type ArcOptionsType = [
    x: number,
    y: number,
    r: number,
    ang: number,
    angf: number,
    c: string,
    f: boolean
]

interface $Type {
    tag: $ObjType
    _current: $Type[]
}

export {
    $Type,
    $TagType,
    $ObjType,
    InputsElementsTypes,
    ResourceElements,
    CallbackType,
    EllipseOptionsType,
    ArcOptionsType
}

