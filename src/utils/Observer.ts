import type * as InterfaceObserver from '../interfaces/Observer'

class Observer<K> implements InterfaceObserver.Observer<K> {
  protected _elements: K[]
  constructor (...elements: K[]) {
    this._elements = elements
  }

  sub (...elements: K[]): void {
    this._elements.push(...elements)
  }

  unsub (...elements: K[]): void {
    elements.forEach((elem) => {
      if (this._elements.includes(elem)) {
        this._elements.splice(this._elements.indexOf(elem), 1)
      }
    })
  }

  publish (func: (...args: unknown[]) => void): void {
    this._elements.forEach((elem) => {
      func.call(elem)
    })
  }
}

class PublicObserver<K> extends Observer<K> implements InterfaceObserver.PublicObserver<K> {
  getElements (): readonly K[] {
    return this._elements
  }
}

export { Observer, PublicObserver }
