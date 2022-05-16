import classNames from 'classnames';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HeaderThemes } from '../layouts/partials/header';

const LoginButton: React.FC<LoginButtonProps> = ({ theme }) => {
  const { data: session } = useSession();

  const buttonClasses = classNames({
    btn: true,
    'btn-primary-inverted': theme === HeaderThemes.light,
    'btn-primary': theme === HeaderThemes.dark,
  });

  return session ? (
    <button
      className={buttonClasses}
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign out
    </button>
  ) : (
    <button
      className={buttonClasses}
      onClick={() => signIn('auth0', { callbackUrl: '/resume' })}
    >
      Sign in
    </button>
  );
};

interface LoginButtonProps {
  theme: HeaderThemes;
}

export default LoginButton;
