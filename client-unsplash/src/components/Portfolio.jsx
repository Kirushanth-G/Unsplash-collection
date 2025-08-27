import React, { useState, useEffect } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-slate-900 text-slate-400'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          {/* Left Side - Fixed Header */}
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                Brittany Chiang
              </h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                Senior Front-End Engineer at Klaviyo
              </h2>
              <p className='mt-4 max-w-xs leading-normal'>
                I build accessible, pixel-perfect user interfaces with a focus
                on thoughtful design and robust engineering.
              </p>

              {/* Navigation */}
              <nav
                className='nav hidden lg:block'
                aria-label='In-page jump links'
              >
                <ul className='mt-16 w-max'>
                  {['about', 'experience', 'projects'].map((section) => (
                    <li key={section}>
                      <button
                        className={`group flex items-center py-3 ${
                          activeSection === section ? 'active' : ''
                        }`}
                        onClick={() => scrollToSection(section)}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all ${
                            activeSection === section
                              ? 'w-16 bg-slate-200'
                              : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold tracking-widest uppercase transition-colors ${
                            activeSection === section
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}
                        >
                          {section}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul
              className='mt-8 ml-1 flex items-center'
              aria-label='Social media'
            >
              <li className='mr-5 text-xs'>
                <a
                  className='block hover:text-slate-200'
                  href='https://github.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Github className='h-6 w-6' />
                </a>
              </li>
              <li className='mr-5 text-xs'>
                <a
                  className='block hover:text-slate-200'
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Linkedin className='h-6 w-6' />
                </a>
              </li>
              <li className='mr-5 text-xs'>
                <a
                  className='block hover:text-slate-200'
                  href='mailto:brittany@example.com'
                >
                  <Mail className='h-6 w-6' />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Side - Main Content */}
          <main className='pt-24 lg:w-1/2 lg:py-24'>
            {/* About Section */}
            <section
              id='about'
              className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            >
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only'>
                  About
                </h2>
              </div>
              <div>
                <p className='mb-4'>
                  I'm a developer passionate about crafting accessible,
                  pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the
                  intersection of design and development, creating experiences
                  that not only look great but are meticulously built for
                  performance and usability.
                </p>
                <p className='mb-4'>
                  Currently, I'm a Senior Front-End Engineer at{' '}
                  <a
                    className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://www.klaviyo.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Klaviyo
                  </a>
                  , specializing in accessibility. I contribute to the creation
                  and maintenance of UI components that power Klaviyo's
                  frontend, ensuring our platform meets web accessibility
                  standards and best practices.
                </p>
                <p className='mb-4'>
                  In the past, I've had the opportunity to develop software
                  across a variety of settings — from{' '}
                  <a
                    className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://us.mullenlowe.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    advertising agencies
                  </a>{' '}
                  and{' '}
                  <a
                    className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://www.apple.com/apple-music/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    large corporations
                  </a>{' '}
                  to{' '}
                  <a
                    className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://starry.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    start-ups
                  </a>{' '}
                  and{' '}
                  <a
                    className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://upstatement.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    small digital product studios
                  </a>
                  .
                </p>
                <p>
                  In my spare time, I'm usually climbing, reading, hanging out
                  with my wife and two cats, or running around Hyrule searching
                  for Korok seeds.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id='experience'
              className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            >
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only'>
                  Experience
                </h2>
              </div>
              <div>
                <ol className='group/list'>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2'>
                        2024 — Present
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='leading-snug font-medium text-slate-200'>
                          <div>
                            <span className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>
                              Senior Front-End Engineer · Klaviyo
                            </span>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Build and maintain critical components used to
                          construct Klaviyo's frontend, across the whole
                          product. Work closely with cross-functional teams,
                          including developers, designers, and product managers,
                          to implement and advocate for best practices in web
                          accessibility.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {[
                            'JavaScript',
                            'TypeScript',
                            'React',
                            'Storybook',
                          ].map((tech) => (
                            <li key={tech} className='mt-2 mr-1.5'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2'>
                        2018 — 2024
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='leading-snug font-medium text-slate-200'>
                          <div>
                            <span className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>
                              Lead Engineer · Upstatement
                            </span>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Build, style, and ship high-quality websites, design
                          systems, mobile apps, and digital experiences for a
                          diverse array of projects for clients including
                          Harvard Business School, Everytown for Gun Safety,
                          Pratt Institute, and more.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {[
                            'JavaScript',
                            'TypeScript',
                            'React',
                            'Next.js',
                            'Node.js',
                            'WordPress',
                          ].map((tech) => (
                            <li key={tech} className='mt-2 mr-1.5'>
                              <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <header className='z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2'>
                        July — Dec 2017
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='leading-snug font-medium text-slate-200'>
                          <div>
                            <span className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>
                              UI Engineer Co-op · Apple
                            </span>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Developed and styled interactive web apps for Apple
                          Music, including the user interface of Apple Music's
                          embeddable web player widget for in-browser user
                          authorization and full song playback.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'].map(
                            (tech) => (
                              <li key={tech} className='mt-2 mr-1.5'>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>

                <div className='mt-12'>
                  <a
                    className='group inline-flex items-center leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='/resume.pdf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>
                      View Full Resume
                      <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none' />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id='projects'
              className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            >
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only'>
                  Projects
                </h2>
              </div>
              <div>
                <ul className='group/list'>
                  <li className='mb-12'>
                    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <div className='z-10 sm:order-2 sm:col-span-6'>
                        <h3>
                          <a
                            className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://www.newline.co/courses/build-a-spotify-connected-app'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Build a Spotify Connected App
                              <ExternalLink className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none' />
                            </span>
                          </a>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {['React', 'Express', 'Spotify API', 'Node.js'].map(
                            (tech) => (
                              <li key={tech} className='mt-2 mr-1.5'>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <img
                        alt='Spotify Course'
                        loading='lazy'
                        width='200'
                        height='48'
                        decoding='async'
                        className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                        style={{ color: 'transparent' }}
                        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMjAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMUVEMDRGIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMwRjE0MTkiLz4KPHN2ZyB4PSI4NSIgeT0iMTgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDMwIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTEuNSAyLjc1QzE0LjI2IDE0IDYuNzMgMTEuMjUgNEMyLjc1QzEuMjcgMTEuMjUgLTEuMjYgOC43NCAtMS4yNiA2UzEuMjcgMC43NSA0IDAuNzVDNi43MyAwLjc1IDkuMjYgMy4yNiA5LjI2IDZTNi43MyAxMS4yNSA0IDExLjI1WiIgZmlsbD0iIzFFRDA0RiIvPgo8L3N2Zz4KPC9zdmc+'
                      />
                    </div>
                  </li>

                  <li className='mb-12'>
                    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <div className='z-10 sm:order-2 sm:col-span-6'>
                        <h3>
                          <a
                            className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://spotify-profile.herokuapp.com/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Spotify Profile
                              <ExternalLink className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none' />
                            </span>
                          </a>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Web app for visualizing personalized Spotify data.
                          View your top artists, top tracks, recently played
                          tracks, and detailed audio information about each
                          track. Create and save new playlists of recommended
                          tracks based on your existing playlists.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {['React', 'Express', 'Spotify API', 'Heroku'].map(
                            (tech) => (
                              <li key={tech} className='mt-2 mr-1.5'>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <img
                        alt='Spotify Profile'
                        loading='lazy'
                        width='200'
                        height='48'
                        decoding='async'
                        className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                        style={{ color: 'transparent' }}
                        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMjAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMUVEMDRGIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMwRjE0MTkiLz4KPHN2ZyB4PSI4NSIgeT0iMTgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDMwIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTEuNSAyLjc1QzE0LjI2IDE0IDYuNzMgMTEuMjUgNEMyLjc1QzEuMjcgMTEuMjUgLTEuMjYgOC43NCAtMS4yNiA2UzEuMjcgMC43NSA0IDAuNzVDNi43MyAwLjc1IDkuMjYgMy4yNiA5LjI2IDZTNi43MyAxMS4yNSA0IDExLjI1WiIgZmlsbD0iIzFFRDA0RiIvPgo8L3N2Zz4KPC9zdmc+'
                      />
                    </div>
                  </li>

                  <li className='mb-12'>
                    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <div className='z-10 sm:order-2 sm:col-span-6'>
                        <h3>
                          <a
                            className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://halcyon-theme.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Halcyon Theme
                              <ExternalLink className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none' />
                            </span>
                          </a>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Minimal dark blue theme for VS Code, Sublime Text,
                          Atom, iTerm, and more. Over 100k+ installations across
                          multiple platforms.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {['VS Code', 'Sublime Text', 'Atom', 'iTerm'].map(
                            (tech) => (
                              <li key={tech} className='mt-2 mr-1.5'>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <img
                        alt='Halcyon Theme'
                        loading='lazy'
                        width='200'
                        height='48'
                        decoding='async'
                        className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                        style={{ color: 'transparent' }}
                        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMjAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMkE0MDU5Ii8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMxRTI5MzkiLz4KPHN2ZyB4PSI4NSIgeT0iMTgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDMwIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNNiAzSDI0VjlINloiIGZpbGw9IiM1Q0ZGRkYiLz4KICA8cGF0aCBkPSJNMTAgNkgxNFY4SDEwVjZaIiBmaWxsPSIjMkE0MDU5Ii8+CjwvN3ZnPgo8L3N2Zz4='
                      />
                    </div>
                  </li>

                  <li className='mb-12'>
                    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100'>
                      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                      <div className='z-10 sm:order-2 sm:col-span-6'>
                        <h3>
                          <a
                            className='group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://v4.brittanychiang.com/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              brittanychiang.com (v4)
                              <ExternalLink className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none' />
                            </span>
                          </a>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Fourth iteration of my personal website built with
                          Gatsby and styled with Styled Components. The site has
                          been starred 6k+ times and forked 3k+ times on GitHub.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          {['Gatsby', 'Styled Components', 'Netlify'].map(
                            (tech) => (
                              <li key={tech} className='mt-2 mr-1.5'>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300'>
                                  {tech}
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <img
                        alt='Portfolio v4'
                        loading='lazy'
                        width='200'
                        height='48'
                        decoding='async'
                        className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                        style={{ color: 'transparent' }}
                        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMjAwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMEExMTI1Ii8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMwRjE3MkEiLz4KPHN2ZyB4PSI4NSIgeT0iMTgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDMwIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNNiAzSDI0VjlINloiIGZpbGw9IiM2NEZGREEiLz4KICA8cGF0aCBkPSJNMTAgNkgxNFY4SDEwVjZaIiBmaWxsPSIjMEExMTI1Ii8+CjwvN3ZnPgo8L3N2Zz4='
                      />
                    </div>
                  </li>
                </ul>

                <div className='mt-12'>
                  <a
                    className='group inline-flex items-center leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
                    href='https://github.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>
                      View Full Project Archive
                      <ArrowUpRight className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none' />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
              <p>
                Loosely designed in{' '}
                <a
                  href='https://www.figma.com/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Figma
                </a>{' '}
                and coded in{' '}
                <a
                  href='https://code.visualstudio.com/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Visual Studio Code
                </a>{' '}
                by yours truly. Built with{' '}
                <a
                  href='https://nextjs.org/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  href='https://tailwindcss.com/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Tailwind CSS
                </a>
                , deployed with{' '}
                <a
                  href='https://vercel.com/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Vercel
                </a>
                . All text is set in the{' '}
                <a
                  href='https://rsms.me/inter/'
                  className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                  target='_blank'
                  rel='noreferrer'
                >
                  Inter
                </a>{' '}
                typeface.
              </p>
            </footer>
          </main>
        </div>

        {/* Mouse follower effect */}
        <div
          className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
          style={{
            background:
              'radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Portfolio;
