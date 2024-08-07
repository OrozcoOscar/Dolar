declare module 'dolar-js';
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
export {

    $TagType,
    $ObjType,
    InputsElementsTypes,
    ResourceElements,
    CallbackType,
    EllipseOptionsType,
    ArcOptionsType
}