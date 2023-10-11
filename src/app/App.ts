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

export { Application }
