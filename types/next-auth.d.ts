import NextAuth, { Awaitable, CallbacksOptions } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface CallbacksOptions {
    authorized: (params: { req: any; token: any }) => Awaitable<boolean>;
  }
}
