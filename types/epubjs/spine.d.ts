import Packaging from "./packaging";
import Section from "./section";

export default class Spine {
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
