// import axios from 'axios'
import axios from 'axios'
import md5 from 'md5'

const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY
const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const ts = new Date().getTime()
const hash = md5(ts + privateKey + publicKey)

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
})

// create an api instance with fetch
// const baseURL = 'https://gateway.marvel.com/v1/public'
// export const api = {
//   async get<T>(url: string) {
//     const res = await fetch(`${baseURL}/${url}?apikey=${publicKey}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//     return await (res.json() as Promise<T>)
//   },
// }
