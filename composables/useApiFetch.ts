import type { AxiosResponse } from 'axios'

export function useApiFetch() {
  const { $api } = useNuxtApp()

  function transformResponse({ data }: AxiosResponse) {
    return data
  }

  $api.interceptors.response.use(transformResponse)

  return $api
}
