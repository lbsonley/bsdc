import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Pyramid } from '../../icons';

const Header: React.FC<HeaderProps> = ({ theme } = defaultHeaderProps) => {
  const headerClasses = classNames({
    flex: true,
    relative: true,
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
          <li className="mx-4">
            <Link href="/" passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/resume" passHref>
              <a>Resume</a>
            </Link>
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

const defaultHeaderProps = {
  theme: HeaderThemes.dark,
};

export default Header;
