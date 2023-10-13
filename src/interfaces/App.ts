import type { AppElement } from './AppElement'
import { type Observer } from './Observer'

interface App {
  rootElement: AppElement | null
  elements: Observer<AppElement>
  scripts: Record<string, AppScript>
};

type AppEvents = Record<string, unknown>

type AppScript = (...arg: any[]) => any | null

export type { App, AppScript, AppEvents }
