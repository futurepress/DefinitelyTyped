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

interface DisplayedLocation {
  index: number,
  href: string,
  cfi: string,
  displayed: {
    page: number,
    total: number
  }
}

interface Location {
  start: DisplayedLocation,
	end: DisplayedLocation,
  atStart: boolean,
  atEnd: boolean
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

interface HooksObject {
  [key: string]: Hook
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

export class Annotations {
  constructor(rendition: Rendition);

  add(type: string, cfiRange: string, data?: object, cb?: Function, className?: string, styles?: object): Annotation;

  remove(cfiRange: string, type: string): void;

  highlight(cfiRange: string, data?: object, cb?: Function, className?: string, styles?: object): void;

	underline(cfiRange: string, data?: object, cb?: Function, className?: string, styles?: object): void;

	mark(cfiRange: string, data?: object, cb?: Function): void;

  each(): Array<Annotation>

  private _removeFromAnnotationBySectionIndex(sectionIndex: number, hash: string): void;

  private _annotationsAt(index: number): void;

  private inject(view: View): void;

  private clear(view: View): void;
}

export class Annotation {
  constructor(options: {
		type: string,
		cfiRange: string,
		data?: object,
		sectionIndex?: number,
		cb?: Function,
		className?: string,
		styles?: object
	});

  update(data: object): void;

  attach(view: View): any;

  detach(view: View): any;

  // Event emitters
  emit(type: any, ...args: any[]): void;

  off(type: any, listener: any): any;

  on(type: any, listener: any): any;

  once(type: any, listener: any, ...args: any[]): any;
}

export class Container {
  constructor(containerDocument: Document);

  parse(containerDocument: Document): void;

  destroy(): void;
}

export class Locations {
  constructor(spine: Spine, request?: Function, pause?: number);

  generate(chars: number): object;

  process(section: Section): Promise<Array<string>>;

	locationFromCfi(cfi: string | EpubCFI): Location;

	percentageFromCfi(cfi: string | EpubCFI): number;

  percentageFromLocation(loc: number): number;

  cfiFromLocation(loc: number): string;

  cfiFromPercentage(percentage: number): string;

	load(locations: JSON): Array<string>;

  save(): JSON;

  currentLocation(): Location;
  currentLocation(curr: string | number): void;

  length(): number;

  destroy(): void;

  private createRange(): {
    startContainer: Element,
    startOffset: number,
    endContainer: Element,
    endOffset: number
  };

  private parse(contents: Node, cfiBase: string, chars: number) : Array<string>;
}

interface EpubCFIPair {
  start: string,
  end: string
}

interface RangePair {
  start: Range,
  end: Range
}

export class Mapping {
  constructor(layout: Layout, direction?: string, axis?: string, dev?: boolean);

  page(contents: Contents, cfiBase: string, start: number, end: number): EpubCFIPair;

  axis(axis: string): boolean;

  private walk(root: Node, func: Function);

  private findStart(root: Node, start: number, end: number): Range;

  private findEnd(root: Node, start: number, end: number): Range;

  private findTextStartRange(node: Node, start: number, end: number): Range;

  private findTextEndRange(node: Node, start: number, end: number): Range;

  private splitTextNodeIntoRanges(node: Node, _splitter?: string): Array<Range>;

  private rangePairToCfiPair(cfiBase: string, rangePair: RangePair): EpubCFIPair;
}

export interface NavItem {
  id?: string,
  href?: string,
  label?: string,
  subitems?: Array<NavItem>,
  parent?: NavItem
}

export interface LandmarkItem {
  href?: string,
  label?: string,
  type?: string
}

export class Navigation {
  constructor(xml: XMLDocument);

  parse(xml: XMLDocument): void;

  get(target: string) : NavItem;

  landmark(type: string) : LandmarkItem;

  load(json: JSON): Array<NavItem>;

  forEach(fn: (item: NavItem) => {}): any;

  private unpack(toc: Array<NavItem>): void;

  private parseNav(navHtml: XMLDocument): Array<NavItem>;

  private navItem(item: Element): NavItem;

  private parseLandmarks(navHtml: XMLDocument): Array<LandmarkItem>;

  private landmarkItem(item: Element): LandmarkItem;

  private parseNcx(navHtml: XMLDocument): Array<NavItem>;

  private ncxItem(item: Element): NavItem;
}

export interface PackagingObject {
  metadata: MetadataObject,
  spine: SpineArray,
  manifest: ManifestObject,
  navPath: string,
  ncxPath: string,
  coverPath: string,
  spineNodeIndex: number
}

export interface PackagingMetadataObject {
  title: string,
  creator: string,
  description: string,
  pubdate: string,
  publisher: string,
  identifier: string,
  language: string,
  rights: string,
  modified_date: string,
  layout: string,
  orientation: string,
  flow: string,
  viewport: string
}

export interface PackagingSpineItem {
  idref: string,
  properties: Array<string>,
  index: number
}

export interface PackagingManifestItem {
  href: string,
  type: string,
  properties: Array<string>
}

export interface PackagingManifestObject {
  [key: string]: PackagingManifestItem
}

export class Packaging {
  constructor(packageDocument: XMLDocument);

  parse(packageDocument: XMLDocument): PackagingObject;

  load(json: JSON): PackagingObject;

  destroy(): void;

  private parseMetadata(xml: Node): PackagingMetadataObject;

  private parseManifest(xml: Node): PackagingManifestObject;

  private parseSpine(xml: Node, manifest: PackagingManifestObject): Array<PackagingSpineItem>;

  private findNavPath(manifestNode: Node): string | false;

  private findNcxPath(manifestNode: Node, spineNode: Node): string | false;

  private findCoverPath(packageXml: Node): string;

  private getElementText(xml: Node, tag: string): string

  private getPropertyText(xml: Node, property: string): string
}


export interface PageListItem {
  href: string,
  page: string,
  cfi?: string,
  packageUrl?: string
}

export class Pagelist {
  constructor(xml: XMLDocument);

  parse(xml: XMLDocument): Array<PageListItem>;

  pageFromCfi(cfi: string): number;

  cfiFromPage(pg: string | number): string;

  pageFromPercentage(percent: number): number;

  percentageFromPage(pg: number): number;

  destroy(): void;

  private parseNav(navHtml: Node): Array<PageListItem>;

  private item(item: Node): PageListItem;

  private process(pageList: Array<PageListItem>): void;

}

export class Resources {
  constructor(manifest: PackagingManifestObject, options: {
    replacements?: string,
    archive?: Archive,
    resolver?: Function,
    request?: Function
  });

  createUrl(url: string): Promise<string>;

  replacements(): Promise<Array<string>>;

  relativeTo(absolute: boolean, resolver?: Function): Array<string>;

  get(path: string): string;

  substitute(content: string, url?: string): string;

  destroy(): void;

  private split(): void;

  private splitUrls(): void;

  private replaceCss(archive: Archive, resolver?: Function): Promise<Array<string>>;

  private createCssFile(href: string): Promise<string>;
}

export interface GlobalLayout {
  layout: string,
  spread: string,
  orientation: string
}

export interface LayoutSettings {
  layout: string,
  spread: string,
  orientation: string
}

export class Section {
  constructor(item: SpineItem, hooks: HooksObject);

  load(_request?: Function): Document;

  render(_request?: Function): string;

  find(_query: string): Array<Element>;

  reconcileLayoutSettings(globalLayout: GlobalLayout): LayoutSettings;

  cfiFromRange(_range: Range): string;

  cfiFromElement(el: Element): string;

  unload(): void;

  destroy(): void;

  private base(): void;
}

export interface SpineItem {
  index: number,
  cfiBase: string,
  href?: string,
  url?: string,
  canonical?: string,
  properties?: Array<string>,
  linear?: string,
  next: () => SpineItem,
  prev: () => SpineItem,
}

export class Spine {
  constructor();

  unpack(_package: Packaging, resolver: Function, canonical: Function): void;

  get(target?: string | number): Section;

  each(...args: any[]): any;

  first(): Section;

  last(): Section;

  destroy(): void;

  private append(section: Section): number;

  private prepend(section: Section): number;

  private remove(section: Section): number;
}

export class Themes {
  constructor(rendition: Rendition);

   register( themeObject: object ): void;

   register( theme: string, url: string ): void;

   register( theme: string, themeObject: object ): void;

   default( theme: object | string ): void;

   registerThemes( themes: object ): void;

   registerUrl( name: string, input: string ): void;

   registerRules( name: string, rules: object ): void;

   select( name: string ): void;

   update( name: string ): void;

   inject( content: Contents ): void;

   add( name: string, contents: Contents ): void;

   override(name: string, value: string, priority: boolean): void;

   overrides(contents: Contents): void;

   fontSize(size: string): void;

   font(f: string): void;

   destroy(): void;
}

export namespace Core {
  export function uuid(): string;

  export function documentHeight(): number;

  export function isElement(obj): boolean;

  export function isNumber(n: any): boolean;

  export function isFloat(n: any): boolean;

  export function prefixed(unprefixed: string): string;

  export function defaults(obj: object): object;

  export function extend(target: object): object;

  export function insert(item: any, array: Array<any>, compareFunction: Function): number;

  export function locationOf(item: any, array: Array<any>, compareFunction: Function, _start: Function, _end: Function): number;

  export function indexOfSorted(item: any, array: Array<any>, compareFunction: Function, _start: Function, _end: Function): number;

  export function bounds(el: Element): { width: Number, height: Number};

  export function borders(el: Element): { width: Number, height: Number};

  export function nodeBounds(node: Node): object;

  export function windowBounds(): { width: Number, height: Number, top: Number, left: Number, right: Number, bottom: Number };

  export function indexOfNode(node: Node, typeId: string): number;

  export function indexOfTextNode(textNode: Node): number;

  export function indexOfElementNode(elementNode: Element): number;

  export function isXml(ext: string): boolean;

  export function createBlob(content: any, mime: string): Blob;

  export function createBlobUrl(content: any, mime: string): string;

  export function revokeBlobUrl(url: string): void;

  export function createBase64Url(content: any, mime: string): string

  export function type(obj: object): string;

  export function parse(markup: string, mime: string, forceXMLDom: boolean): Document;

  export function qs(el: Element, sel: string): Element;

  export function qsa(el: Element, sel: string): ArrayLike<Element>;

  export function qsp(el: Element, sel: string, props: Array<object>): ArrayLike<Element>;

  export function sprint(root: Node, func: Function): void;

  export function treeWalker(root: Node, func: Function, filter: object | Function): void;

  export function walk(node: Node, callback: Function): void;

  export function blob2base64(blob: Blob): string;

  export function defer(): Promise<any>;

  export function querySelectorByType(html: Element, element: string, type: string): Array<Element>;

  export function findChildren(el: Element): Array<Element>;

  export function parents(node: Element): Array<Element>;

  export function filterChildren(el: Element, nodeName: string, single: boolean): Array<Element>;

  export function getParentByTagName(node: Element, tagname: string): Array<Element>;

  export class RangeObject extends Range {

  }

}