import type * as InterfaceApp from '../interfaces/App'
import type * as InterfaceElement from '../interfaces/AppElement'
import type * as InterfaceObserver from '../interfaces/Observer'
import * as ClassObserver from '../utils/Observer'

class Application implements InterfaceApp.App {
  rootElement: InterfaceElement.AppElement | null
  scripts: Record<string, InterfaceApp.AppScript>
  elements: InterfaceObserver.Observer<InterfaceElement.AppElement>
  constructor (root?: InterfaceElement.AppElement, scripts?: Record<string, InterfaceApp.AppScript>) {
    this.rootElement = root ?? null
    this.elements = new ClassObserver.Observer<InterfaceElement.AppElement>()
    if (root != null) { this.elements.sub(root) }
    this.scripts = Object.assign({}, scripts ?? null)
  }
}

export { Application }
