import React, { useState, useEffect } from 'react';
import { Link, LinksFunction, useLocation } from 'remix';

const items: Array<{
  id: string;
  text: string;
}> = [
  {
    id: 'home',
    text: 'home',
  },
  {
    id: 'resume',
    text: 'resume',
  },
  {
    id: 'portfolio',
    text: 'portfolio',
  },
  {
    id: 'blog',
    text: 'blog',
  },
  {
    id: 'contact',
    text: 'contact',
  },
];

export default function Header() {
  const [activePage, setActivePage] = useState(items[0].id);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname.replace('/', '');
    if (pathName) {
      setActivePage(pathName);
    } else {
      setActivePage(items[0].id);
    }
  }, [location]);
  const onClickBurger = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <React.Fragment>
      {isActiveMenu ? (
        <div
          className="md:hidden cursor-pointer w-7 h-1 bg-black absolute top-10 right-8 origin-center rotate-45 z-30 close-menu"
          onClick={onClickBurger}
        ></div>
      ) : (
        <div
          className="md:hidden cursor-pointer w-7 h-1 bg-black absolute top-10 right-8 z-30 burger"
          onClick={onClickBurger}
        ></div>
      )}
      <div className="absolute top-10 right-10 hidden md:block">
        <ul className="flex justify-center items-center text-base font-serif md:text-2xl">
          {items.map((item) => (
            <li
              className={`ml-3 md:ml-5 ${
                item.id === activePage
                  ? ' text-yellow-500'
                  : ' hover:text-yellow-300'
              }`}
              key={`menu-${item.id}`}
            >
              <Link to={`${item.id === 'home' ? '/' : `/${item.id}`}`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isActiveMenu && (
        <div className="md:hidden flex justify-center items-center w-screen h-screen z-20">
          <ul className="flex flex-col justify-center items-center text-lg font-serif">
            {items.map((item) => (
              <li
                className={`mt-6 ${
                  item.id === activePage
                    ? ' text-yellow-500'
                    : ' hover:text-yellow-300'
                }`}
                key={`menu-${item.id}`}
                onClick={onClickBurger}
              >
                <Link to={`${item.id === 'home' ? '/' : `/${item.id}`}`}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
