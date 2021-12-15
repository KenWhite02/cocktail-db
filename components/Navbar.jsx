import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Sidebar from './Sidebar';
import { routerLinks } from '../utils/routerLinks';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  return (
    <>
      <header
        className={`bg-transparent fixed top-0 z-50 flex justify-center items-center p-3 h-auto w-full shadow-lg md:flex-col transition-all duration-500 ease-in-out ${
          show && 'bg-white text-black'
        }`}
      >
        <div>
          <Link href={'/'} passHref>
            <a>
              <h2 className="text-lg font-semibold sm:text-2xl font-serif">
                Cocktail DB
              </h2>
            </a>
          </Link>
        </div>

        <div
          className="absolute cursor-pointer right-5 text-xl p-1 sm:text-2xl md:hidden"
          onClick={handleSidebar}
        >
          <AiOutlineMenu />
        </div>

        <div className="hidden md:flex w-full justify-center">
          {routerLinks.map((link) => {
            const { id, label, href } = link;
            return (
              <Link key={id} href={href} passHref className="active:text-white">
                <a className="mx-14 text-lg font-semibold active:text-white">
                  {label}
                </a>
              </Link>
            );
          })}
        </div>
      </header>

      <Sidebar handleSidebar={handleSidebar} sidebar={sidebar} />
    </>
  );
};

export default Navbar;
