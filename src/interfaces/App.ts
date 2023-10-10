import type { AppElement } from './AppElement'

interface App {
  content: AppElement
  scripts: Record<string, AppScript>
};

type AppEvents = Record<string, unknown>

type AppScript = (...arg: any[]) => any | null

export type { App, AppScript, AppEvents }
