import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const defaultUrl = config.public.baseUrl || 'localhost:8080/'
  const api = axios.create({
    baseURL: defaultUrl,
    headers: {
      'X-API-KEY': config.public.apiKey,
    },
  })
  return {
    provide: {
      api: api,
    },
  }
})
