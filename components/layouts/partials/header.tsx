import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import classNames from 'classnames';
import { Pyramid } from '../../icons';
import LoginButton from '../../atoms/login-button';

const Header: React.FC<HeaderProps> = ({ theme = HeaderThemes.dark }) => {
  const { data: session } = useSession();

  const headerClasses = classNames({
    flex: true,
    relative: true,
    'print:hidden': true,
    'z-40': true,
    'flex-row': true,
    'flex-nowrap': true,
    'items-center': true,
    'my-4': true,
    'mx-6': true,
    'text-xl': true,
    'text-slate-200': theme === HeaderThemes.light,
    'text-slate-900': theme === HeaderThemes.dark,
  });

  return (
    <header className={headerClasses}>
      <div className="flex-none">
        <Link href="/" passHref>
          <a>
            <Pyramid height="36px" width="36px" />
          </a>
        </Link>
      </div>
      <nav className="flex flex-1 w-80">
        <ul className="flex flex-row flex-nowrap flex-1 justify-end w-full text-right">
          <li className="flex items-center mx-4">
            <a
              href="https://github.com/lbsonley"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          {session ? (
            <li className="flex items-center mx-4">
              <Link href="/resume" passHref>
                <a>Resume</a>
              </Link>
            </li>
          ) : null}
          <li className="mx-4">
            <LoginButton theme={theme} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export enum HeaderThemes {
  light = 'light',
  dark = 'dark',
}

type HeaderProps = {
  theme?: HeaderThemes;
};

export default Header;
