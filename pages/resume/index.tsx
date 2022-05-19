import React from 'react';
import Image from 'next/image';
import MainLayout from '../../components/layouts/main';
import me from '../../public/images/me.jpg';

const ResumePage = () => {
  return (
    <MainLayout>
      <main>
        <article className="py-12 px-6 w-full prose prose-slate md:mx-auto md:max-w-3xl">
          <h1>Professional Resume</h1>
          <p>
            I am a well-rounded, solution-oriented web developer with experience
            building responsive, accessible web applications within an agile
            framework. I have lead frontend development teams, mentored junior
            developers, and given workshops on a variety of technical topics.
            Prior to my career as a web developer, I worked as an Investment
            Strategist for Deutsche Bank Private Wealth Management and held
            various temporary jobs while travelling.
          </p>
          <section>
            <h2 className="mt-16">Personal Information</h2>
            <div className="flex flex-col-reverse print:flex-row md:flex-row">
              <div className="flex flex-col justify-center w-full print:w-1/2 md:w-1/2">
                <p className="mt-0">Ben Sonley</p>
                <address>
                  Ammerswilerstrasse 13
                  <br />
                  5600 Lenzburg
                  <br />
                  Switzerland
                  <br />
                  <a className="font-normal" href="tel:+41762674281">
                    +41 76 267 42 81
                  </a>
                  <br />
                  <a className="font-normal" href="mailto:lbsonley@gmail.com">
                    lbsonley@gmail.com
                  </a>
                </address>
              </div>
              <div className="relative mb-4 w-full print:w-1/2 md:mb-0 md:w-1/2">
                <Image
                  src={me}
                  alt="headshot of Ben Sonley"
                  objectFit="contain"
                  height={500}
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="mt-16">Work Experience</h2>
            <h3 className="mt-12 mb-0">
              Frontend Developer @{' '}
              <a href="https://unic.com" target="_blank" rel="noreferrer">
                Unic AG
              </a>
            </h3>
            <p className="my-0">Zürich, Switzerland</p>
            <p className="my-0">
              <strong>July 2016 - Present</strong>
            </p>
            <p>
              Work closely with Product Owners, Requirement Engineers,
              Designers, and other Developers to deliver and maintain websites
              and applications for large Swiss brands including; Coop, SBB,
              Swiss Post, Atupri, SWICA, and KPT.
            </p>
            <ul>
              <li>
                Participate in refinements to create technical specifications
                and acceptance criteria from business requirements
              </li>
              <li>
                Provide technical insight to help identify creative solutions to
                problems
              </li>
              <li>
                Contribute to planning and implementation of product features
              </li>
              <li>
                Ensure accessibility requirements are acknowledged and defined
              </li>
              <li>Create scalable project architectures</li>
              <li>
                Proactively communicate challenges to the team as they arise
              </li>
              <li>
                Perform dependency upgrades to ensure longevity of solution
              </li>
              <li>
                Write unit and integration tests to ensure stability and
                facilitate Continuous Deployment
              </li>
              <li>Fix bugs</li>
              <li>Write technical documentation for features and processes</li>
              <li>Perform code review</li>
              <li>Mentor junior developers</li>
              <li>
                Assist in the development of features through pair programming
              </li>
            </ul>
            <h3 className="mt-12 mb-0">
              Investment Strategy Analyst @ Deutsche Bank Private Wealth
              Management
            </h3>
            <p className="my-0">Baltimore, USA</p>
            <p className="my-0">
              <strong>January 2008 - August 2010</strong>
            </p>
            <p>
              Perform economic and market research in order to produce reports
              and forecasts for use by financial advisors during their
              consultation with clients.
            </p>
            <ul>
              <li>
                Calibrate and maintain statistical regression model for
                forecasting economic growth
              </li>
              <li>
                Write commodity markets section for Weekly, Monthly, Quarterly
                and Annual reports
              </li>
              <li>
                Provide daily briefings about most important current events
                affecting commodity prices
              </li>
            </ul>
            <h3 className="mt-12 mb-0">Work and Travel</h3>
            <p className="my-0">Costa Rica, Hawaii, California, Switzerland</p>
            <p className="my-0">
              <strong>September 2010 - June 2016</strong>
            </p>
            <p>
              Experience diverse cultures and improve foreign language skills
              while learning to surf. During this time, I worked as a Concierge
              at Luz en el Cielo hostel in Costa Rica, a cook at Chipotle
              Mexican Grill in San Diego and a construction worker for various
              companies in Switzerland.
            </p>
          </section>
          <section>
            <h2 className="mt-16">Technical Skills</h2>
            <p>
              I have experience working with a variety of frameworks and
              libraries. I am primarily a Javascript developer, but I have also
              worked with Python. As with most developers I have my preferred
              toolset, which I have marked with asterisk (*) below.
            </p>
            <h3 className="mt-12">Programming Languages</h3>
            <ul>
              <li>ESNext*</li>
              <li>Typescript*</li>
              <li>Python</li>
              <li>HTML5 (semantic)</li>
              <li>CSS3</li>
              <li>Sass</li>
            </ul>
            <h3 className="mt-12">Frontend Frameworks/Libraries</h3>
            <ul>
              <li>React*</li>
              <li>Next.js*</li>
              <li>Gatsby</li>
              <li>Vue</li>
              <li>Angular</li>
            </ul>
            <h3 className="mt-12">State Management</h3>
            <ul>
              <li>Easy Peasy*</li>
              <li>React Context*</li>
              <li>React useState() and useReducer()*</li>
              <li>Redux*</li>
              <li>Vuex</li>
              <li>NgRx</li>
            </ul>
            <h3 className="mt-12">Styling</h3>
            <ul>
              <li>TailwindCSS*</li>
              <li>StyledComponents*</li>
              <li>Polished*</li>
              <li>Emotion*</li>
            </ul>
            <h3 className="mt-12">Servers, Databases, and Authentication</h3>
            <ul>
              <li>Express.js*</li>
              <li>Prisma ORM*</li>
              <li>GraphQL*</li>
              <li>TypeGraphQL*</li>
              <li>Postgresql*</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Auth0</li>
              <li>OAuth 2.0 Workflow (with PKCE)</li>
            </ul>
            <h3 className="mt-12">Web Standards</h3>
            <ul>
              <li>Accessibility</li>
              <li>SEO</li>
              <li>Performance (CLS, LCP)</li>
            </ul>
            <h3 className="mt-12">Build and CLI Tools</h3>
            <ul>
              <li>Teamcity*</li>
              <li>Vercel*</li>
              <li>Heroku*</li>
              <li>Jenkins</li>
              <li>Node.js*</li>
              <li>Node Version Manager*</li>
              <li>Git*</li>
              <li>Docker*</li>
              <li>Create React App*</li>
              <li>Create Next App*</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>ESLint*</li>
              <li>Prettier*</li>
            </ul>
            <h3 className="mt-12">Testing</h3>
            <ul>
              <li>Jest*</li>
              <li>React Testing Library*</li>
            </ul>
          </section>
          <section>
            <h2>Methodologies, Soft Skills, and Characteristics</h2>
            <p>
              In my experience, the best software is built by a team of people
              collaborating to achieve a common goal. In this respect, a
              well-rounded developer should possess experience in common
              workflows which facilitate efficient teamwork. Below are a list of
              non-technical skills and experience which I bring to the team.
            </p>
            <h3>Agile</h3>
            <ul>
              <li>Scrum</li>
              <li>Scrum at Scale</li>
              <li>Kanban</li>
              <li>Scrumban</li>
            </ul>
            <h3>Collaboration</h3>
            <ul>
              <li>Git Flow</li>
              <li>Domain Driven Design</li>
              <li>Atlassian Suite (Jira, Confluence, Bitbucket)</li>
              <li>Azure Devops Suite</li>
              <li>Microsoft Office and Office 365</li>
            </ul>
            <h3>Characertistics</h3>
            <ul>
              <li>Solution-oriented</li>
              <li>Pragmatic</li>
              <li>Strong communicator</li>
              <li>High standards for quality</li>
              <li>Autodidactic</li>
              <li>Curious</li>
            </ul>
            <h3>Language</h3>
            <ul>
              <li>English - native</li>
              <li>German - advanced</li>
              <li>Spanish - intermediate</li>
              <li>French - beginner</li>
            </ul>
          </section>
        </article>
      </main>
    </MainLayout>
  );
};

export default ResumePage;
