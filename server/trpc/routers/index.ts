import { router } from '../trpc'
import { profileRouter } from './profile'
import { tweetRouter } from './tweet'

export const appRouter = router({
  tweet: tweetRouter,
  profile: profileRouter
})
// export type definition of API
export type AppRouter = typeof appRouter
