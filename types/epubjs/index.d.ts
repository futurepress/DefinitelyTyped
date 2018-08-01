// Type definitions for epubjs 0.3
// Project: https://github.com/futurepress/epub.js#readme
// Definitions by: Fred Chasen <https://github.com/fchasen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class ePub {
  constructor(url: any, options: any);
}

export class Book {
    constructor(url: any, options: any);

    canonical(path: any): any;

    coverUrl(): any;

    destroy(): void;

    determineType(input: any): any;

    emit(type: any, ...args: any[]): void;

    getRange(cfiRange: any): any;

    key(identifier: any): any;

    load(path: any): any;

    loadNavigation(opf: any): any;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

    open(input: any, what: any): any;

    openContainer(url: any): any;

    openEpub(data: any, encoding: any): any;

    openManifest(url: any): any;

    openPackaging(url: any): any;

    renderTo(element: any, options: any): any;

    replacements(): any;

    resolve(path: any, absolute: any): any;

    section(target: any): any;

    setRequestCredentials(credentials: any): void;

    setRequestHeaders(headers: any): void;

    unarchive(input: any, encoding: any): any;

    unpack(opf: any): void;

}

export class Contents {
    constructor(doc: any, content: any, cfiBase: any, sectionIndex: any);

    addClass(className: any): void;

    addEventListeners(): void;

    addScript(src: any): any;

    addSelectionListeners(): void;

    addStylesheet(src: any): any;

    addStylesheetRules(rules: any): any;

    cfiFromNode(node: any, ignoreClass: any): any;

    cfiFromRange(range: any, ignoreClass: any): any;

    columns(width: any, height: any, columnWidth: any, gap: any): void;

    contentHeight(h: any): any;

    contentWidth(w: any): any;

    css(property: any, value: any, priority: any): any;

    destroy(): void;

    direction(dir: any): void;

    emit(type: any, ...args: any[]): void;

    epubReadingSystem(name: any, version: any): any;

    expand(): void;

    fit(width: any, height: any): void;

    fontLoadListeners(target: any): void;

    height(h: any): any;

    imageLoadListeners(target: any): void;

    layoutStyle(style: any): any;

    linksHandler(): void;

    listeners(): void;

    locationOf(target: any, ignoreClass: any): any;

    map(layout: any): any;

    mapPage(cfiBase: any, layout: any, start: any, end: any, dev: any): any;

    mediaQueryListeners(): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    onSelectionChange(e: any): void;

    once(type: any, listener: any, ...args: any[]): any;

    overflow(_overflow: any): any;

    overflowX(overflow: any): any;

    overflowY(overflow: any): any;

    range(_cfi: any, ignoreClass: any): any;

    removeClass(className: any): void;

    removeEventListeners(): void;

    removeListeners(): void;

    removeSelectionListeners(): void;

    resizeCheck(): void;

    resizeListeners(): void;

    resizeObservers(): void;

    root(): any;

    scaler(scale: any, offsetX: any, offsetY: any): void;

    scrollHeight(): any;

    scrollWidth(): any;

    size(width: any, height: any): void;

    textHeight(): any;

    textWidth(): any;

    transitionListeners(): void;

    triggerEvent(e: any): void;

    triggerSelectedEvent(selection: any): void;

    viewport(options: any): any;

    width(w: any): any;

    writingMode(mode: any): any;

    static listenedEvents: string[];

}

export class EpubCFI {
    constructor(cfiFrom: any, base: any, ignoreClass: any);

    checkType(cfi: any): any;

    collapse(toStart: any): void;

    compare(cfiOne: any, cfiTwo: any): any;

    equalStep(stepA: any, stepB: any): any;

    filter(anchor: any, ignoreClass: any): any;

    filteredPosition(anchor: any, ignoreClass: any): any;

    filteredStep(node: any, ignoreClass: any): any;

    findNode(steps: any, _doc: any, ignoreClass: any): any;

    fixMiss(steps: any, offset: any, _doc: any, ignoreClass: any): any;

    fromNode(anchor: any, base: any, ignoreClass: any): any;

    fromRange(range: any, base: any, ignoreClass: any): any;

    generateChapterComponent(_spineNodeIndex: any, _pos: any, id: any): any;

    getChapterComponent(cfiStr: any): any;

    getCharecterOffsetComponent(cfiStr: any): any;

    getPathComponent(cfiStr: any): any;

    getRange(cfiStr: any): any;

    isCfiString(str: any): any;

    joinSteps(steps: any): any;

    normalizedMap(children: any, nodeType: any, ignoreClass: any): any;

    parse(cfiStr: any): any;

    parseComponent(componentStr: any): any;

    parseStep(stepStr: any): any;

    parseTerminal(termialStr: any): any;

    patchOffset(anchor: any, offset: any, ignoreClass: any): any;

    pathTo(node: any, offset: any, ignoreClass: any): any;

    position(anchor: any): any;

    segmentString(segment: any): any;

    step(node: any): any;

    stepsToQuerySelector(steps: any): any;

    stepsToXpath(steps: any): any;

    textNodes(container: any, ignoreClass: any): any;

    toRange(_doc: any, ignoreClass: any): any;

    toString(): any;

    walkToNode(steps: any, _doc: any, ignoreClass: any): any;

}

export class Layout {
    constructor(settings: any);

    calculate(_width: any, _height: any, _gap: any): void;

    count(totalLength: any, pageLength: any): any;

    emit(type: any, ...args: any[]): void;

    flow(_flow: any): any;

    format(contents: any): any;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any, ...args: any[]): any;

    spread(_spread: any, min: any): any;

    update(props: any): void;

}

export class Rendition {
    constructor(book: any, options: any);

    adjustImages(contents: any): any;

    afterDisplayed(view: any): any;

    afterRemoved(view: any): void;

    attachTo(element: any): any;

    clear(): void;

    currentLocation(): any;

    destroy(): void;

    determineLayoutProperties(metadata: any): any;

    direction(dir: any): void;

    display(target: any): any;

    emit(type: any, ...args: any[]): void;

    flow(_flow2: any): void;

    getContents(): any;

    getRange(cfi: any, ignoreClass: any): any;

    handleLinks(contents: any): void;

    injectIdentifier(doc: any, section: any): void;

    injectScript(doc: any, section: any): void;

    injectStylesheet(doc: any, section: any): void;

    layout(settings: any): any;

    located(location: any): any;

    moveTo(offset: any): void;

    next(): any;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    onOrientationChange(orientation: any): void;

    onResized(size: any): void;

    once(type: any, listener: any, ...args: any[]): any;

    passEvents(contents: any): any;

    prev(): any;

    reportLocation(): any;

    requireManager(manager: any): any;

    requireView(view: any): any;

    resize(width: any, height: any): void;

    setManager(manager: any): void;

    spread(_spread: any, min: any): void;

    start(): void;

    triggerMarkEvent(cfiRange: any, data: any, contents: any): void;

    triggerSelectedEvent(cfirange: any, contents: any): void;

    triggerViewEvent(e: any, contents: any): void;

    views(): any;

}

export namespace Book {
    namespace prototype {
        function canonical(path: any): any;

        function coverUrl(): any;

        function destroy(): void;

        function determineType(input: any): any;

        function emit(type: any, ...args: any[]): void;

        function getRange(cfiRange: any): any;

        function key(identifier: any): any;

        function load(path: any): any;

        function loadNavigation(opf: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any, ...args: any[]): any;

        function open(input: any, what: any): any;

        function openContainer(url: any): any;

        function openEpub(data: any, encoding: any): any;

        function openManifest(url: any): any;

        function openPackaging(url: any): any;

        function renderTo(element: any, options: any): any;

        function replacements(): any;

        function resolve(path: any, absolute: any): any;

        function section(target: any): any;

        function setRequestCredentials(credentials: any): void;

        function setRequestHeaders(headers: any): void;

        function unarchive(input: any, encoding: any): any;

        function unpack(opf: any): void;

        namespace canonical {
            const prototype: {
            };

        }

        namespace coverUrl {
            const prototype: {
            };

        }

        namespace destroy {
            const prototype: {
            };

        }

        namespace determineType {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace getRange {
            const prototype: {
            };

        }

        namespace key {
            const prototype: {
            };

        }

        namespace load {
            const prototype: {
            };

        }

        namespace loadNavigation {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace open {
            const prototype: {
            };

        }

        namespace openContainer {
            const prototype: {
            };

        }

        namespace openEpub {
            const prototype: {
            };

        }

        namespace openManifest {
            const prototype: {
            };

        }

        namespace openPackaging {
            const prototype: {
            };

        }

        namespace renderTo {
            const prototype: {
            };

        }

        namespace replacements {
            const prototype: {
            };

        }

        namespace resolve {
            const prototype: {
            };

        }

        namespace section {
            const prototype: {
            };

        }

        namespace setRequestCredentials {
            const prototype: {
            };

        }

        namespace setRequestHeaders {
            const prototype: {
            };

        }

        namespace unarchive {
            const prototype: {
            };

        }

        namespace unpack {
            const prototype: {
            };

        }

    }

}

export namespace Contents {
    namespace prototype {
        function addClass(className: any): void;

        function addEventListeners(): void;

        function addScript(src: any): any;

        function addSelectionListeners(): void;

        function addStylesheet(src: any): any;

        function addStylesheetRules(rules: any): any;

        function cfiFromNode(node: any, ignoreClass: any): any;

        function cfiFromRange(range: any, ignoreClass: any): any;

        function columns(width: any, height: any, columnWidth: any, gap: any): void;

        function contentHeight(h: any): any;

        function contentWidth(w: any): any;

        function css(property: any, value: any, priority: any): any;

        function destroy(): void;

        function direction(dir: any): void;

        function emit(type: any, ...args: any[]): void;

        function epubReadingSystem(name: any, version: any): any;

        function expand(): void;

        function fit(width: any, height: any): void;

        function fontLoadListeners(target: any): void;

        function height(h: any): any;

        function imageLoadListeners(target: any): void;

        function layoutStyle(style: any): any;

        function linksHandler(): void;

        function listeners(): void;

        function locationOf(target: any, ignoreClass: any): any;

        function map(layout: any): any;

        function mapPage(cfiBase: any, layout: any, start: any, end: any, dev: any): any;

        function mediaQueryListeners(): void;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function onSelectionChange(e: any): void;

        function once(type: any, listener: any, ...args: any[]): any;

        function overflow(_overflow: any): any;

        function overflowX(overflow: any): any;

        function overflowY(overflow: any): any;

        function range(_cfi: any, ignoreClass: any): any;

        function removeClass(className: any): void;

        function removeEventListeners(): void;

        function removeListeners(): void;

        function removeSelectionListeners(): void;

        function resizeCheck(): void;

        function resizeListeners(): void;

        function resizeObservers(): void;

        function root(): any;

        function scaler(scale: any, offsetX: any, offsetY: any): void;

        function scrollHeight(): any;

        function scrollWidth(): any;

        function size(width: any, height: any): void;

        function textHeight(): any;

        function textWidth(): any;

        function transitionListeners(): void;

        function triggerEvent(e: any): void;

        function triggerSelectedEvent(selection: any): void;

        function viewport(options: any): any;

        function width(w: any): any;

        function writingMode(mode: any): any;

        namespace addClass {
            const prototype: {
            };

        }

        namespace addEventListeners {
            const prototype: {
            };

        }

        namespace addScript {
            const prototype: {
            };

        }

        namespace addSelectionListeners {
            const prototype: {
            };

        }

        namespace addStylesheet {
            const prototype: {
            };

        }

        namespace addStylesheetRules {
            const prototype: {
            };

        }

        namespace cfiFromNode {
            const prototype: {
            };

        }

        namespace cfiFromRange {
            const prototype: {
            };

        }

        namespace columns {
            const prototype: {
            };

        }

        namespace contentHeight {
            const prototype: {
            };

        }

        namespace contentWidth {
            const prototype: {
            };

        }

        namespace css {
            const prototype: {
            };

        }

        namespace destroy {
            const prototype: {
            };

        }

        namespace direction {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace epubReadingSystem {
            const prototype: {
            };

        }

        namespace expand {
            const prototype: {
            };

        }

        namespace fit {
            const prototype: {
            };

        }

        namespace fontLoadListeners {
            const prototype: {
            };

        }

        namespace height {
            const prototype: {
            };

        }

        namespace imageLoadListeners {
            const prototype: {
            };

        }

        namespace layoutStyle {
            const prototype: {
            };

        }

        namespace linksHandler {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace locationOf {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace mapPage {
            const prototype: {
            };

        }

        namespace mediaQueryListeners {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace onSelectionChange {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace overflow {
            const prototype: {
            };

        }

        namespace overflowX {
            const prototype: {
            };

        }

        namespace overflowY {
            const prototype: {
            };

        }

        namespace range {
            const prototype: {
            };

        }

        namespace removeClass {
            const prototype: {
            };

        }

        namespace removeEventListeners {
            const prototype: {
            };

        }

        namespace removeListeners {
            const prototype: {
            };

        }

        namespace removeSelectionListeners {
            const prototype: {
            };

        }

        namespace resizeCheck {
            const prototype: {
            };

        }

        namespace resizeListeners {
            const prototype: {
            };

        }

        namespace resizeObservers {
            const prototype: {
            };

        }

        namespace root {
            const prototype: {
            };

        }

        namespace scaler {
            const prototype: {
            };

        }

        namespace scrollHeight {
            const prototype: {
            };

        }

        namespace scrollWidth {
            const prototype: {
            };

        }

        namespace size {
            const prototype: {
            };

        }

        namespace textHeight {
            const prototype: {
            };

        }

        namespace textWidth {
            const prototype: {
            };

        }

        namespace transitionListeners {
            const prototype: {
            };

        }

        namespace triggerEvent {
            const prototype: {
            };

        }

        namespace triggerSelectedEvent {
            const prototype: {
            };

        }

        namespace viewport {
            const prototype: {
            };

        }

        namespace width {
            const prototype: {
            };

        }

        namespace writingMode {
            const prototype: {
            };

        }

    }

}

export namespace EpubCFI {
    namespace prototype {
        function checkType(cfi: any): any;

        function collapse(toStart: any): void;

        function compare(cfiOne: any, cfiTwo: any): any;

        function equalStep(stepA: any, stepB: any): any;

        function filter(anchor: any, ignoreClass: any): any;

        function filteredPosition(anchor: any, ignoreClass: any): any;

        function filteredStep(node: any, ignoreClass: any): any;

        function findNode(steps: any, _doc: any, ignoreClass: any): any;

        function fixMiss(steps: any, offset: any, _doc: any, ignoreClass: any): any;

        function fromNode(anchor: any, base: any, ignoreClass: any): any;

        function fromRange(range: any, base: any, ignoreClass: any): any;

        function generateChapterComponent(_spineNodeIndex: any, _pos: any, id: any): any;

        function getChapterComponent(cfiStr: any): any;

        function getCharecterOffsetComponent(cfiStr: any): any;

        function getPathComponent(cfiStr: any): any;

        function getRange(cfiStr: any): any;

        function isCfiString(str: any): any;

        function joinSteps(steps: any): any;

        function normalizedMap(children: any, nodeType: any, ignoreClass: any): any;

        function parse(cfiStr: any): any;

        function parseComponent(componentStr: any): any;

        function parseStep(stepStr: any): any;

        function parseTerminal(termialStr: any): any;

        function patchOffset(anchor: any, offset: any, ignoreClass: any): any;

        function pathTo(node: any, offset: any, ignoreClass: any): any;

        function position(anchor: any): any;

        function segmentString(segment: any): any;

        function step(node: any): any;

        function stepsToQuerySelector(steps: any): any;

        function stepsToXpath(steps: any): any;

        function textNodes(container: any, ignoreClass: any): any;

        function toRange(_doc: any, ignoreClass: any): any;

        function toString(): any;

        function walkToNode(steps: any, _doc: any, ignoreClass: any): any;

        namespace checkType {
            const prototype: {
            };

        }

        namespace collapse {
            const prototype: {
            };

        }

        namespace compare {
            const prototype: {
            };

        }

        namespace equalStep {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace filteredPosition {
            const prototype: {
            };

        }

        namespace filteredStep {
            const prototype: {
            };

        }

        namespace findNode {
            const prototype: {
            };

        }

        namespace fixMiss {
            const prototype: {
            };

        }

        namespace fromNode {
            const prototype: {
            };

        }

        namespace fromRange {
            const prototype: {
            };

        }

        namespace generateChapterComponent {
            const prototype: {
            };

        }

        namespace getChapterComponent {
            const prototype: {
            };

        }

        namespace getCharecterOffsetComponent {
            const prototype: {
            };

        }

        namespace getPathComponent {
            const prototype: {
            };

        }

        namespace getRange {
            const prototype: {
            };

        }

        namespace isCfiString {
            const prototype: {
            };

        }

        namespace joinSteps {
            const prototype: {
            };

        }

        namespace normalizedMap {
            const prototype: {
            };

        }

        namespace parse {
            const prototype: {
            };

        }

        namespace parseComponent {
            const prototype: {
            };

        }

        namespace parseStep {
            const prototype: {
            };

        }

        namespace parseTerminal {
            const prototype: {
            };

        }

        namespace patchOffset {
            const prototype: {
            };

        }

        namespace pathTo {
            const prototype: {
            };

        }

        namespace position {
            const prototype: {
            };

        }

        namespace segmentString {
            const prototype: {
            };

        }

        namespace step {
            const prototype: {
            };

        }

        namespace stepsToQuerySelector {
            const prototype: {
            };

        }

        namespace stepsToXpath {
            const prototype: {
            };

        }

        namespace textNodes {
            const prototype: {
            };

        }

        namespace toRange {
            const prototype: {
            };

        }

        namespace toString {
            const prototype: {
            };

        }

        namespace walkToNode {
            const prototype: {
            };

        }

    }

}

export namespace Layout {
    namespace prototype {
        function calculate(_width: any, _height: any, _gap: any): void;

        function count(totalLength: any, pageLength: any): any;

        function emit(type: any, ...args: any[]): void;

        function flow(_flow: any): any;

        function format(contents: any): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any, ...args: any[]): any;

        function spread(_spread: any, min: any): any;

        function update(props: any): void;

        namespace calculate {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace flow {
            const prototype: {
            };

        }

        namespace format {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace spread {
            const prototype: {
            };

        }

        namespace update {
            const prototype: {
            };

        }

    }

}

export namespace Rendition {
    namespace prototype {
        function adjustImages(contents: any): any;

        function afterDisplayed(view: any): any;

        function afterRemoved(view: any): void;

        function attachTo(element: any): any;

        function clear(): void;

        function currentLocation(): any;

        function destroy(): void;

        function determineLayoutProperties(metadata: any): any;

        function direction(dir: any): void;

        function display(target: any): any;

        function emit(type: any, ...args: any[]): void;

        function flow(_flow2: any): void;

        function getContents(): any;

        function getRange(cfi: any, ignoreClass: any): any;

        function handleLinks(contents: any): void;

        function injectIdentifier(doc: any, section: any): void;

        function injectScript(doc: any, section: any): void;

        function injectStylesheet(doc: any, section: any): void;

        function layout(settings: any): any;

        function located(location: any): any;

        function moveTo(offset: any): void;

        function next(): any;

        function off(type: any, listener: any): any;

        function on(type: any, listener: any): any;

        function onOrientationChange(orientation: any): void;

        function onResized(size: any): void;

        function once(type: any, listener: any, ...args: any[]): any;

        function passEvents(contents: any): any;

        function prev(): any;

        function reportLocation(): any;

        function requireManager(manager: any): any;

        function requireView(view: any): any;

        function resize(width: any, height: any): void;

        function setManager(manager: any): void;

        function spread(_spread: any, min: any): void;

        function start(): void;

        function triggerMarkEvent(cfiRange: any, data: any, contents: any): void;

        function triggerSelectedEvent(cfirange: any, contents: any): void;

        function triggerViewEvent(e: any, contents: any): void;

        function views(): any;

        namespace adjustImages {
            const prototype: {
            };

        }

        namespace afterDisplayed {
            const prototype: {
            };

        }

        namespace afterRemoved {
            const prototype: {
            };

        }

        namespace attachTo {
            const prototype: {
            };

        }

        namespace clear {
            const prototype: {
            };

        }

        namespace currentLocation {
            const prototype: {
            };

        }

        namespace destroy {
            const prototype: {
            };

        }

        namespace determineLayoutProperties {
            const prototype: {
            };

        }

        namespace direction {
            const prototype: {
            };

        }

        namespace display {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace flow {
            const prototype: {
            };

        }

        namespace getContents {
            const prototype: {
            };

        }

        namespace getRange {
            const prototype: {
            };

        }

        namespace handleLinks {
            const prototype: {
            };

        }

        namespace injectIdentifier {
            const prototype: {
            };

        }

        namespace injectScript {
            const prototype: {
            };

        }

        namespace injectStylesheet {
            const prototype: {
            };

        }

        namespace layout {
            const prototype: {
            };

        }

        namespace located {
            const prototype: {
            };

        }

        namespace moveTo {
            const prototype: {
            };

        }

        namespace next {
            const prototype: {
            };

        }

        namespace off {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace onOrientationChange {
            const prototype: {
            };

        }

        namespace onResized {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace passEvents {
            const prototype: {
            };

        }

        namespace prev {
            const prototype: {
            };

        }

        namespace reportLocation {
            const prototype: {
            };

        }

        namespace requireManager {
            const prototype: {
            };

        }

        namespace requireView {
            const prototype: {
            };

        }

        namespace resize {
            const prototype: {
            };

        }

        namespace setManager {
            const prototype: {
            };

        }

        namespace spread {
            const prototype: {
            };

        }

        namespace start {
            const prototype: {
            };

        }

        namespace triggerMarkEvent {
            const prototype: {
            };

        }

        namespace triggerSelectedEvent {
            const prototype: {
            };

        }

        namespace triggerViewEvent {
            const prototype: {
            };

        }

        namespace views {
            const prototype: {
            };

        }

    }

}
