import { TResponseSchema } from '@/models'

export const responseSchema = <T>({
  code,
  data,
  message,
}: TResponseSchema<T>): TResponseSchema<T> => {
  return {
    code,
    data,
    message,
  }
}
