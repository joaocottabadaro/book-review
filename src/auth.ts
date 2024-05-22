import NextAuth from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
import Discord from 'next-auth/providers/discord'

import { authConfig } from './auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Discord],
})
