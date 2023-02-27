import config from "./config.js"
export const createDb = () => {
  const {dbName} = config
  const oldDb = localStorage.getItem(dbName)
  if(!oldDb) {
    localStorage.setItem(dbName, JSON.stringify({}))
  }
}

const getDb = () => {
  const {dbName} = config
  return JSON.parse(localStorage.getItem(dbName))
}

export const get = key => {
  const currentDb = getDb()
  return currentDb[key]
}

export const insert = (key, value) => {
  const {dbName} = config
  const currentDb = getDb()
  currentDb[key] = value
  localStorage.setItem(dbName, JSON.stringify(currentDb))
}