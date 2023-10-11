import { type App } from '../interfaces/App';
import { AppBlockElement, type AppElement } from '../interfaces/AppElement';

class Element implements AppElement {
  application: App | null;
  parent: AppElement | null;
  private _active: boolean;
  constructor(application?: App, parent?: AppElement) {
    this.application = application ?? null;
    this.parent = parent ?? null;
    this._active = true;
  }

  show(): void {
    this._active = true;
  }

  hide(): void {
    this._active = false;
  }

  toggle(): void {
    this._active = !this._active;
  }

  get active(): boolean {
    return this._active;
  }
}

class BlockElement extends Element implements AppBlockElement {
  private _children: AppElement[];
  constructor(application?: App, parent?: AppElement, children?: AppElement[]) {
    super(application, parent)
    this._children = children ?? []
  }

  get children(): readonly AppElement[] { return this._children }

  apply(...elements: AppElement[]): void { 
    this._children.push(...elements)
    elements.forEach((elem) => {
      elem.parent = this
    })
  }

  detach(...elements: AppElement[]): void {
    elements.forEach((elem) => {
      if (this._children.includes(elem)) {
        this._children.splice(this._children.indexOf(elem), 1)
        elem.parent = null
      } else {
        console.warn('Children element not found')
      }
    })
  }

  dropChildren():void {
    this._children.forEach((elem) => {elem.parent = null})
    this._children = []
  };
}

export { Element, BlockElement }