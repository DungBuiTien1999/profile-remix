import { Link, LinksFunction } from 'remix';
import styles from '~/styles/resume.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function IndexResume() {
  return (
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
      <div className='mt-28 relative'>
        <svg className='mouse-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M4 7v-3c0-2.209 1.791-4 4-4h3v7h-7zm9 0h7v-3c0-2.209-1.791-4-4-4h-3v7zm-9 2v7c0 4.418 3.582 8 8 8s8-3.582 8-8v-7h-16z"/></svg>
      </div>
    </div>
  );
}
