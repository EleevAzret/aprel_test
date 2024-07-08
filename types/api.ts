export interface ApiOptions {
  params?: Record<string, unknown>
}

export interface ResponseData<ModelT = Record<string, unknown>> {
  docs?: Record<string, unknown>[]
  items?: ModelT[]
  page?: number
  pages?: number
  total?: number
}
