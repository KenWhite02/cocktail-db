import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

import { routerLinks } from '../utils/routerLinks';

const Sidebar = ({ handleSidebar, sidebar }) => {
  return (
    <div className="relative z-50">
      {/* Sidebar Overlay */}
      <div
        className={
          sidebar
            ? 'bg-black fixed inset-0 opacity-20 visible transition-all duration-1000'
            : 'hidden opacity-0 transition-all duration-700'
        }
        onClick={handleSidebar}
      ></div>
      {/* Sidebar */}
      <div
        className={
          sidebar
            ? 'bg-white fixed inset-y-0 py-4 right-0 w-64 sm:w-80 transition-all duration-700 opacity-100'
            : 'bg-white fixed inset-y-0 py-4 -right-full w-64 sm:w-80 transition-all duration-700 opacity-0'
        }
      >
        <button
          className="absolute p-1 rounded-full text-black top-3 right-5 transition hover:bg-gray-100"
          onClick={handleSidebar}
        >
          <AiOutlineClose className="text-xl sm:text-2xl" />
        </button>

        {/* Sidebar Menu */}
        <ul className="font-normal text-black mt-10">
          {routerLinks.map((link) => {
            const { id, label, href, Icon } = link;
            return (
              <li key={id} onClick={handleSidebar}>
                <Link href={href} passHref>
                  <a className="font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-200">
                    <p className="text-xl">{Icon}</p>
                    <p className="text-xl ml-10">{label}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
