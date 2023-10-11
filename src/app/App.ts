import { type App, type AppScript } from '../interfaces/App'
import { type AppElement } from '../interfaces/AppElement'

class Application implements App {
  content: AppElement | null
  scripts: Record<string, AppScript>
  constructor (content?: AppElement, scripts?: Record<string, AppScript>) {
    this.content = content ?? null
    this.scripts = Object.assign({}, scripts ?? null)
  }
}

class Element implements AppElement {
  application: App | null
  parent: AppElement | null
  private _active: boolean
  constructor (application?: App, parent?: AppElement) {
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

export { Application, Element }
