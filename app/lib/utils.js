import { incr, compose, foldl } from 'Fjs'

const getHigherId = (acc, {id}) =>
	Math.max(acc, id)

export const getNextId = 
	compose ( incr ) ( foldl (getHigherId) (-1) )
