interface Observer<K> {
  sub: (...elements: K[]) => void
  unsub: (...elements: K[]) => void
  publish: (func: (...args: unknown[]) => void) => void
}

interface PublicObserver<K> extends Observer<K> {
  getElements: () => readonly K[]
}

export type { Observer, PublicObserver }
