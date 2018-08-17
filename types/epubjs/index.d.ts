// Type definitions for epubjs 0.3
// Project: https://github.com/futurepress/epub.js#readme
// Definitions by: Fred Chasen <https://github.com/fchasen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BookOptions {
  requestMethod?: (url: string, type: string, withCredentials: object, headers: object) => Promise<object>;
  requestCredentials?: object,
  requestHeaders?: object,
  encoding?: string,
  replacements?: string,
  canonical?: (path: string) => string,
  openAs?: string
}

interface RenditionOptions {
  width?: number,
  height?: number,
  ignoreClass?: string,
  manager?: string | Function | object,
  view?: string | Function | object,
  layout?: string,
  spread?: string,
  minSpreadWidth?: number,
  stylesheet?: string,
  script?: string
}

interface Location {

}

interface DisplayedLocation {
  index: number,
  href: string,
  cfi: string,
  displayed: {
    page: number,
    total: number
  }
}

interface DisplayedLocationRange {
  start: DisplayedLocation,
	end: DisplayedLocation
}

interface ViewportSettings {
  width: string,
  height: string,
  scale: string,
  scalable: string,
  minimum: string,
  maximum: string
}

interface EpubCFISegment {
  steps: Array<object>,
  terminal: {
    offset: number,
    assertion: string
  }
}

interface EpubCFIStep {
	id: string,
	tagName: string,
	type: number,
	index: number
}

export as namespace ePub;

export default function ePub(url: string, options?: BookOptions) : Book;

export default function ePub(options?: BookOptions) : Book;

export class Book {
    constructor(url: string, options?: BookOptions);
    constructor(options?: BookOptions);

    canonical(path: string): string;

    coverUrl(): string;

    destroy(): void;

    determineType(input: string): string;

    getRange(cfiRange: string): Range;

    key(identifier: string): string;

    load(path: string): Promise<object>;

    loadNavigation(opf: XMLDocument): Promise<Navigation>;

    open(input: string, what?: string): Promise<object>;
    open(input: ArrayBuffer, what?: string): Promise<object>;

    openContainer(url: string): Promise<string>;

    openEpub(data: BinaryType, encoding?: string): Promise<Book>;

    openManifest(url: string): Promise<Book>;

    openPackaging(url: string): Promise<Book>;

    renderTo(element: Element, options?: RenditionOptions): Rendition;
    renderTo(element: string, options?: RenditionOptions): Rendition;

    private replacements(): Promise<void>;

    resolve(path: string, absolute?: boolean): string;

    section(target: string): Section;
    section(target: int): Section;

    setRequestCredentials(credentials: object): void;

    setRequestHeaders(headers: object): void;

    unarchive(input: BinaryType, encoding?: string): Promise<Archive>;

    unpack(opf: XMLDocument): Promise<Book>;

    // Event emitters
    emit(type: any, ...args: any[]): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

}

export class Rendition {
    constructor(book: Book, options: RenditionOptions);

    adjustImages(contents: Contents): Promise<void>;

    attachTo(element: Element): Promise<void>;

    clear(): void;

    currentLocation(): DisplayedLocation;
    currentLocation(): Promise<DisplayedLocation>;

    destroy(): void;

    determineLayoutProperties(metadata: object): object;

    direction(dir: string): void;

    display(target?: string): Promise<void>;
    display(target?: number): Promise<void>;

    flow(flow: string): void;

    getContents(): Contents;

    getRange(cfi: string, ignoreClass?: string): Range;

    handleLinks(contents: Contents): void;

    injectIdentifier(doc: Document, section: Section): void;

    injectScript(doc: Document, section: Section): void;

    injectStylesheet(doc: Document, section: Section): void;

    layout(settings: any): any;

    located(location: Location): DisplayedLocation;

    moveTo(offset: number): void;

    next(): Promise<void>;

    onOrientationChange(orientation: string): void;

    passEvents(contents: Contents): void;

    prev(): Promise<void>;

    reportLocation(): Promise<void>;

    requireManager(manager: string | Function | object): any;

    requireView(view: string | Function | object): any;

    resize(width: number, height: number): void;

    setManager(manager: Function): void;

    spread(spread: string, min?: number): void;

    start(): void;

    views(): Array<View>;

    // Event emitters
    emit(type: any, ...args: any[]): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

    private triggerMarkEvent(cfiRange: string, data: object, contents: Contents): void;

    private triggerSelectedEvent(cfirange: string, contents: Contents): void;

    private triggerViewEvent(e: Event, contents: Contents): void;

    private onResized(size: { width: number, height: number }): void;

    private afterDisplayed(view: any): void;

    private afterRemoved(view: any): void;

}

export class Contents {
    constructor(doc: Document, content: Element, cfiBase: string, sectionIndex: number);

    static listenedEvents: string[];

    addClass(className: string): void;

    addScript(src: string): Promise<boolean>;

    addStylesheet(src: string): Promise<boolean>;

    addStylesheetRules(rules: Array<object> | object): Promise<boolean>;

    cfiFromNode(node: Node, ignoreClass?: string): string;

    cfiFromRange(range: Range, ignoreClass?: string): string;

    columns(width: number, height: number, columnWidth: number, gap: number): void;

    contentHeight(h: number): number;

    contentWidth(w: number): number;

    css(property: string, value: string, priority?: boolean): string;

    destroy(): void;

    direction(dir: string): void;

    fit(width: number, height: number): void;

    height(h: number): number;

    locationOf(target: string | EpubCFI, ignoreClass?: string): Promise<{ top: number, left: number }>;

    map(layout: any): any;

    mapPage(cfiBase: string, layout: object, start: number, end: number, dev: boolean): any;

    overflow(overflow: string): string;

    overflowX(overflow: string): string;

    overflowY(overflow: string): string;

    range(cfi: string, ignoreClass?: string): Range;

    removeClass(className: any): void;

    root(): Element;

    scaler(scale: number, offsetX: number, offsetY: number): void;

    scrollHeight(): number;

    scrollWidth(): number;

    size(width: number, height: number): void;

    textHeight(): number;

    textWidth(): number;

    viewport(options: ViewportSettings): ViewportSettings;

    width(w: number): number;

    writingMode(mode: string): string;

    // Event emitters
    emit(type: any, ...args: any[]): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

    private addEventListeners(): void;

    private addSelectionListeners(): void;

    private epubReadingSystem(name: string, version: string): object;

    private expand(): void;

    private fontLoadListeners(): void;

    private imageLoadListeners(): void;

    private layoutStyle(style: string): string;

    private linksHandler(): void;

    private listeners(): void;

    private mediaQueryListeners(): void;

    private onSelectionChange(e: Event): void;

    private removeEventListeners(): void;

    private removeListeners(): void;

    private removeSelectionListeners(): void;

    private resizeCheck(): void;

    private resizeListeners(): void;

    private resizeObservers(): void;

    private transitionListeners(): void;

    private triggerEvent(e: Event): void;

    private triggerSelectedEvent(selection: Selection): void;
}

export class EpubCFI {
    constructor(cfiFrom?: string | Range | Node, base?: string | object, ignoreClass?: string);

    isCfiString(str: string): boolean;

    fromNode(anchor: Node, base: string | object, ignoreClass?: string): EpubCFI;

    fromRange(range: Range, base: string | object, ignoreClass?: string): EpubCFI;

    parse(cfiStr: string): EpubCFI;

    collapse(toStart?: boolean): void;

    compare(cfiOne: string | EpubCFI, cfiTwo: string | EpubCFI): number;

    equalStep(stepA: object, stepB: object): boolean;

    filter(anchor: Element, ignoreClass?: string): Element | false;

    toRange(_doc?: Document, ignoreClass?: string): Range;

    toString(): string;

    private filteredStep(node: Node, ignoreClass?: string): any;

    private findNode(steps: Array<EpubCFIStep>, _doc?: Document, ignoreClass?: string): Node;

    private fixMiss(steps: Array<EpubCFIStep>, offset: number, _doc?: Document, ignoreClass?: string): any;

    private checkType(cfi: string | Range | Node): string | false;

    private generateChapterComponent(_spineNodeIndex: number, _pos: number, id: string): string;

    private getChapterComponent(cfiStr: string): string;

    private getCharecterOffsetComponent(cfiStr: string): string;

    private getPathComponent(cfiStr: string): string;

    private getRange(cfiStr: string): string;

    private joinSteps(steps: Array<EpubCFIStep>): Array<EpubCFIStep>;

    private normalizedMap(children: Array<Node>, nodeType: number, ignoreClass?: string): object;

    private parseComponent(componentStr: string): object;

    private parseStep(stepStr: string): object;

    private parseTerminal(termialStr: string): object;

    private patchOffset(anchor: Node, offset: number, ignoreClass?: string): number;

    private pathTo(node: Node, offset: number, ignoreClass?: string): EpubCFISegment;

    private position(anchor: Node): number;

    private segmentString(segment: EpubCFISegment): string;

    private step(node: Node): EpubCFIStep;

    private stepsToQuerySelector(steps: Array<EpubCFIStep>): string;

    private stepsToXpath(steps: Array<EpubCFIStep>): string;

    private textNodes(container: Node, ignoreClass?: string): Array<Node>;

    private walkToNode(steps: Array<EpubCFIStep>, _doc?: Document, ignoreClass?: string): Node;

}

export class Layout {
    constructor(settings: {
      name?: string,
      spread?: string,
      minSpreadWidth?: number,
      evenSpreads?: boolean,
      flow?: string
    });

    calculate(_width: number, _height: number, _gap: number): void;

    count(totalLength: number, pageLength: number): { spreads: number, pages: number };

    flow(flow: string): string;

    format(contents: Contents): Promise<any>;

    spread(spread: boolean, min: number): boolean;

    // Event emitters
    emit(type: any, ...args: any[]): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

}


