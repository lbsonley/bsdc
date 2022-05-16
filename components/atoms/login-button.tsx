import { useSession, signIn, signOut } from 'next-auth/react';
const LoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    );
  }
  return (
    <button onClick={() => signIn('auth0', { callbackUrl: '/resume' })}>
      Sign in
    </button>
  );
};

export default LoginButton;
