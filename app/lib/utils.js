import { compose, incr, foldl } from 'Fjs'

const getHigherId = (acc, {id}) =>
	Math.max(acc, id)

export const getNextId = xs => 
	compose ([incr, foldl (getHigherId) (-1)]) (xs)

