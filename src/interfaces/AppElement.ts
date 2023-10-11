import { type AppDataTypeMap } from './AppData'
import type { App } from './App'

interface AppElement {
  application: App | null
  parent: AppElement | null
  show: () => void
  hide: () => void
  toggle: () => void
}

interface AppBlockElement extends AppElement {
  get children(): readonly AppElement[]
  apply: (...elements: AppElement[]) => void
  detach: (...element: AppElement[]) => void
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
