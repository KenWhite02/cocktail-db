import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineSearch,
} from 'react-icons/ai';

export const routerLinks = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    Icon: <AiOutlineHome />,
  },
  {
    id: 2,
    label: 'Search',
    href: '/search',
    Icon: <AiOutlineSearch />,
  },
  {
    id: 3,
    label: 'About',
    href: '/about',
    Icon: <AiOutlineInfoCircle />,
  },
  {
    id: 4,
    label: 'Contact',
    href: '/contact',
    Icon: <AiOutlinePhone />,
  },
];
