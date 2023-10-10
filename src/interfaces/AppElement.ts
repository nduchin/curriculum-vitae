import { type AppDataTypeMap } from './AppData'
import type { AppEvents, App } from './App'

interface AppElement {
  application: App
  parent?: AppElement
  events: AppEvents
  show: () => void
  hide: () => void
  toggle: () => void
}

interface AppBlockElement extends AppElement {
  children: AppElement[]
  apply: (...elements: AppElement[]) => void
  detach: (element: AppElement) => void
  dropChildren: () => void
}

interface AppContentElement extends AppElement {
  data: AppDataTypeMap[keyof AppDataTypeMap]
  setData: (dataObject: Record<string, any>) => void
  update: (src?: URL) => void
  clear: () => void
}

interface AppElementTypeMap {
  'block': AppBlockElement
  'concent': AppContentElement
}

export type { AppElement, AppBlockElement, AppContentElement, AppElementTypeMap }
