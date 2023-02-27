import { lazy } from "react"

const lazyLoad = (path, namedExport) => {
  return lazy(() => {
    const promise = import(`./${path}.jsx`)
    if (namedExport) {
      return promise.then(mod => ({
        default: mod[namedExport]
      }))
    } else {
      return promise
    }
  })
}

export default lazyLoad