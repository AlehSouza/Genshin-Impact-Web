export function setItem (key, value) {
  const savedItems = getItem(key)
  let itemToStore = []
  if (savedItems) {
    itemToStore = JSON.stringify(Array.from(new Set([value, ...savedItems])))
  } else {
    itemToStore = JSON.stringify([value])
  }
  localStorage.setItem(key, itemToStore)
}

export function getItem (key) {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
}

export function removeItem (key, value) {
  const savedItems = getItem(key)
  const itemToStore = savedItems.filter(item => item !== value)
  localStorage.setItem(key, JSON.stringify(itemToStore))
}

export default {
  setItem,
  getItem
}
