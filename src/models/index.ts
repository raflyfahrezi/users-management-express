export type TResponseSchema<T> = {
  code: number
  data: T
  message: string
}
