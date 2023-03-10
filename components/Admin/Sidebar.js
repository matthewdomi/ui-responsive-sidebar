import React, { useContext, useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line, RiDashboard2Fill } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { FaProductHunt, FaFirstOrderAlt, FaInbox } from 'react-icons/fa';
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiFillContacts,
  AiFillProfile,
  AiOutlineBranches,
} from 'react-icons/ai';
import { BiMoon, BiNotepad, BiSun } from 'react-icons/bi';
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';

const AdminLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const { state, dispatch } = useContext(Store);
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/' });
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BiSun
          className={`text-2xl block float-left`}
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BiMoon
          className={`text-2xl block float-left`}
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  const menus = [
    { name: 'dashboard', link: `/admin`, icon: MdOutlineDashboard },
    { name: 'user', link: '/', icon: AiOutlineUser },
    { name: 'products', link: '/admin/products', icon: FaProductHunt },

    { name: 'analytics', link: '/', icon: TbReportAnalytics, margin: true },
    { name: 'contacts', link: '/admin/contact', icon: AiFillContacts },
    { name: 'messages', link: '/', icon: FiMessageSquare },
    { name: 'orders', link: '/admin/orders', icon: FaFirstOrderAlt },
    // {
    //   name: 'Utilities',
    //   link: '/',
    //   icon: RiDashboard2Fill,
    //   margin: true,
    //   submenuItems: [
    //     {
    //       name: 'Calculator',
    //       link: '/admin/calculator',
    //       icon: RiDashboard2Fill,
    //     },
    //     {
    //       name: 'Expense',
    //       link: '/admin/expense',
    //       icon: AiOutlineBranches,
    //     },
    //     {
    //       name: 'NoteBook',
    //       link: '/admin/expense/production/addexpense',
    //       icon: RiDashboard2Fill,
    //     },
    //     {
    //       name: 'Calender',
    //       link: '/admin/calender',
    //       icon: BiNotepad,
    //     },
    //   ],
    // },
    { name: 'File Manager', link: '/', icon: FiFolder },
    { name: 'Cart', link: '/', icon: FiShoppingCart },
    { name: 'Saved', link: '/', icon: AiOutlineHeart, margin: true },
    { name: 'Inbox', link: '/admin/inbox', icon: FaInbox },
    { name: 'Profile', link: '/admin/profile', icon: AiFillProfile },
    { name: 'Setting', link: '/', icon: RiSettings4Line },
  ];
  return (
    <>
    
      <section className="flex gap-6">
        <div
          className={`bg-orange-500 min-h-screen ${
            open ? 'w-64' : 'w-16'
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-between">
            <Link
              passHref
              href="/"
              className={` ${
                !open && 'opacity-0 hidden translate-x-28 overflow-hidden'
              } group flex  items-center text-sm  gap-3.5 font-medium p-2 rounded-md`}
            >
              <Image 
              src="https://res.cloudinary.com/matthewdomi/image/upload/v1671008985/gn4vquixsdskfssmdplt.png"
              width={30} height={30} alt="Logo" />
              <h2
                style={{
                  transitionDelay: `300ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                Demak Ventures POS
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Demak
              </h2>
            </Link>
            <div className="mt-4 flex flex-col gap-4 relative"></div>
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                passHref
                href={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && 'mt-5'
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-white/20 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>

                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">
          {children}
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
