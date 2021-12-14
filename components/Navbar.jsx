import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Sidebar from './Sidebar';
import { routerLinks } from '../utils/routerLinks';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <header className="glass fixed top-0 z-50 bg-transparent flex justify-center items-center p-3 h-auto w-full shadow-lg md:flex-col">
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
