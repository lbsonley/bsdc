import type { NextPage } from 'next';
import MainLayout from '../components/layouts/main';
import DarkenedBackground from '../components/layouts/partials/darkened-background';
import { HeaderThemes } from '../components/layouts/partials/header';

const Home: NextPage = () => {
  return (
    <MainLayout headerTheme={HeaderThemes.light}>
      <>
        <DarkenedBackground />
        <div className="flex fixed inset-0 justify-center items-center">
          <div className="flex flex-col max-w-80">
            <p className="mb-4 text-4xl text-slate-200">
              Hi! I&apos;m Ben Sonley.
            </p>
            <p className="text-3xl text-slate-200">
              I&apos;m a full stack javascript developer with a focus on React,
              GraphQL, and Prisma ORM.
            </p>
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default Home;
