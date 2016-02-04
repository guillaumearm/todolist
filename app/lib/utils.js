import { incr, compose, foldl } from 'Fjs'

const getHigher = (acc, {id}) =>
	Math.max(acc, id)

export const getNextId = 
	compose ( incr ) ( foldl (getHigher) (-1) )
