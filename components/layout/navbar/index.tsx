import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-menu');

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white bg-opacity-80 shadow-md lg:px-6">
      <div className="ml-5 block flex-none transition-transform duration-300 hover:scale-110 md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <div className="mr-2 flex w-full transform items-center justify-center md:w-auto lg:mr-6">
            <Link
              href="/"
              prefetch={true}
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image src="/elore.png" alt="logo elore gems brand name" width={125} height={100} />
            </Link>
          </div>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="p-1 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="mr-5 flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
