import { DB_ROUTES } from "../consts"
import { Volounteer } from "../types"

export const updateVolounteers = async (body: Omit<Volounteer, 'id'>) => {
  const res = await fetch(DB_ROUTES.VOLOUNTEERS, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  if (!res.ok) {
    throw new Error('Failed to update volounteers')
  }
}
export const getVolounteers = async (): Promise<Volounteer[] | undefined> => {
  const res = await fetch(DB_ROUTES.VOLOUNTEERS)
  if (res.ok) {
    const volounteers = await res.json() as Volounteer[]
    return volounteers
  }
}
