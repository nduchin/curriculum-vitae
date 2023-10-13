import type * as InterfaceApp from '../interfaces/App'
import type * as InterfaceElement from '../interfaces/AppElement'

class Element implements InterfaceElement.AppElement {
  application: InterfaceApp.App | null
  parent: InterfaceElement.AppElement | null
  private _active: boolean
  constructor (application?: InterfaceApp.App, parent?: InterfaceElement.AppElement) {
    this.application = application ?? null
    this.parent = parent ?? null
    this._active = true
  }

  show (): void {
    this._active = true
  }

  hide (): void {
    this._active = false
  }

  toggle (): void {
    this._active = !this._active
  }

  get active (): boolean {
    return this._active
  }
}

class BlockElement extends Element implements InterfaceElement.AppBlockElement {
  private _children: InterfaceElement.AppElement[]
  constructor (application?: InterfaceApp.App, parent?: InterfaceElement.AppElement, children?: InterfaceElement.AppElement[]) {
    super(application, parent)
    this._children = children ?? []
  }

  get children (): readonly InterfaceElement.AppElement[] { return this._children }

  apply (...elements: InterfaceElement.AppElement[]): void {
    this._children.push(...elements)
    elements.forEach((elem) => {
      elem.parent = this
    })
  }

  detach (...elements: InterfaceElement.AppElement[]): void {
    elements.forEach((elem) => {
      if (this._children.includes(elem)) {
        this._children.splice(this._children.indexOf(elem), 1)
        elem.parent = null
      } else {
        console.warn('Children element not found')
      }
    })
  }

  dropChildren (): void {
    this._children.forEach((elem) => { elem.parent = null })
    this._children = []
  };
}

export { Element, BlockElement }
