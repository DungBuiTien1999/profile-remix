import { useState, useEffect } from 'react';
import { Link, LinksFunction } from 'remix';
import resumeStyles from '~/styles/resume.css';
import commonStyles from '~/styles/common.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: resumeStyles },
    { rel: 'stylesheet', href: commonStyles },
  ];
};

export default function IndexResume() {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScrollOfMouse = () => {
    const heightToHideFrom = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScrollOfMouse);
    return () => window.removeEventListener('scroll', listenToScrollOfMouse);
  }, []);

  return (
    <div className="no-scrollbar scroll-smooth">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="typography-resume text-4xl md:text-7xl">resume</h1>
        <div className="mt-2 md:mt-4">
          <p className="text-sm md:text-lg text-gray-500">
            <span>
              <Link to="/">Home</Link>
            </span>{' '}
            / <span className="text-yellow-500">Resume</span>
          </p>
        </div>
        <div className="mt-28 relative">
          {isVisible && (
            <svg
              className="mouse-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M4 7v-3c0-2.209 1.791-4 4-4h3v7h-7zm9 0h7v-3c0-2.209-1.791-4-4-4h-3v7zm-9 2v7c0 4.418 3.582 8 8 8s8-3.582 8-8v-7h-16z" />
            </svg>
          )}
        </div>
      </div>
      <div className="w-full md:w-11/12 lg:w-8/12 p-12 m-auto mt-24">
        <div className="fade-in-section">
          <div className="pt-12 pb-12">
            <h3 className="title-section text-sm md:text-base">About me</h3>
            <div className="flex flex-wrap mt-8">
              <div className="w-full md:w-1/3 lg:w-1/6">
                <img
                  src="/images/avatar.jpg"
                  alt="something"
                  className="w-36 h-36 rounded-full object-cover m-auto"
                />
              </div>
              <div className="w-full sm:w-2/3 md:w-5/6">
                <p className="introduce-myself text-sm md:text-base lg:text-lg">
                  Hi I’m Tien Dung and I graduated from The Natural Science
                  University of Ho Chi Minh City in 2022 with a degree in
                  Software Engineer. My interests are in Front End Engineering
                  and I love to create beautiful performant products with
                  delightful user experiences. Beside I also like doing
                  backend's jobs.
                </p>
                <div className="w-full flex flex-wrap">
                  <div className="w-full md:w-1/3 mb-3">
                    <div>
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        Name:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        Tien Dung
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        Citizenship:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        Viet Nam
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mb-3">
                    <div>
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        Age:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        25 Years
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        Residence:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        Ho Chi Minh City
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mb-3">
                    <div>
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        Job:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        Front-end Developer
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-bold text-sky-600 md:text-base lg:text-lg">
                        E-mail:
                      </span>
                      <span className="text-sm font-normal text-gray-600 md:text-base lg:text-lg">
                        {' '}
                        buitiendung199@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-in-section">
          <div className="pt-12 pb-12 flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h3 className="title-section text-sm md:text-base">experience</h3>
              <div className="mt-10">
                <div className="timeline-section-block">
                  <div className="timeline-period">{'5 - Present'}</div>
                  <div className="timeline-title">
                    {'Front-end Developer - Teqnological Asia'}
                  </div>
                  <p className="timeline-description">
                    - Continues to deepen the technical knowledge in front-end
                    development with both React.js and Vue.js as main techs <br />-
                    Takes responsibilities in projects' settings and
                    configurations <br />- Provides trainee developers with insightful
                    guides and a range of advice.
                  </p>
                </div>
                <div className="timeline-section-block">
                  <div className="timeline-period">{'8/2020 - 4/2021'}</div>
                  <div className="timeline-title">
                    {'Front-end Developer - Something'}
                  </div>
                  <p className="timeline-description">
                    - Continues to deepen the technical knowledge in front-end
                    development with both React.js and Vue.js as main techs <br />-
                    Takes responsibilities in projects' settings and
                    configurations <br />- Provides trainee developers with insightful
                    guides and a range of advice.
                  </p>
                </div>
                <div className="timeline-section-block">
                  <div className="timeline-period">{'8/2020 - 4/2021'}</div>
                  <div className="timeline-title">
                    {'Front-end Developer - Something'}
                  </div>
                  <p className="timeline-description">
                    - Continues to deepen the technical knowledge in front-end
                    development with both React.js and Vue.js as main techs <br />-
                    Takes responsibilities in projects' settings and
                    configurations <br />- Provides trainee developers with insightful
                    guides and a range of advice.
                  </p>
                </div>
                <div className="timeline-section-block">
                  <div className="timeline-period">{'8/2020 - 4/2021'}</div>
                  <div className="timeline-title">
                    {'Front-end Developer - Something'}
                  </div>
                  <p className="timeline-description">
                    - Continues to deepen the technical knowledge in front-end
                    development with both React.js and Vue.js as main techs <br />-
                    Takes responsibilities in projects' settings and
                    configurations <br />- Provides trainee developers with insightful
                    guides and a range of advice.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="title-section text-sm md:text-base">education</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
