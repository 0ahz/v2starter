export async function injectScript(url: string): Promise<void> {
  let el: HTMLScriptElement | null = document.querySelector(
    `script[src="${url}"]`,
  )
  if (el) return Promise.resolve()
  return new Promise((resolve, reject) => {
    el = document.createElement('script')
    el.type = 'text/javascript'
    el.async = true
    el.src = url
    el.addEventListener('load', () => resolve())
    el.addEventListener('error', reject)
    el.addEventListener('abort', reject)
    document.head.appendChild(el)
  })
}

export async function loadScript(url: string, name: string): Promise<any> {
  if (!url || !name) return Promise.reject()
  const getModule = () => window[<any>name]
  if (getModule()) return Promise.resolve(getModule())
  return new Promise((resolve, reject) => {
    injectScript(url)
      .then(() => {
        let count = 0
        let timer = setInterval(() => {
          if (getModule()) {
            clearInterval(timer)
            resolve(getModule())
          } else if (count >= 100) {
            clearInterval(timer)
            reject()
          }
          count++
        }, 100)
      })
      .catch(error => reject(error))
  })
}
