type appDataObject<K> = Record<string, K> & Record<string, unknown>

interface AppData<K> {
  get: () => K
  set: (setData: K | appDataObject<K>) => void
  src?: URL
  fetch: (url?: URL) => Promise<K | appDataObject<K> | Error>
}

interface AppTextContent extends AppData<string> {}

interface AppURLContent extends AppData<URL> {}

interface AppCustomContent extends AppData<unknown> {}

interface AppDataTypeMap {
  'text': AppTextContent
  'source': AppURLContent
  'custom': AppCustomContent
}

export type { AppData, AppTextContent, AppURLContent, AppCustomContent, AppDataTypeMap, appDataObject }
