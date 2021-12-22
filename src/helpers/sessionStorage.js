export const storeItem = (key, item) => {
  sessionStorage.setItem(key, JSON.stringify(item))
}

export const getItem = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}

export const removeItem = (key) => {
  sessionStorage.removeItem(key)
}
