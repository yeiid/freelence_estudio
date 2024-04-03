'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';


const links = [
  { name: 'CSS', href: '/ui/css', icon: CodeBracketSquareIcon },
  {
    name: 'typeScript', href: '/ui/typeScript',icon: CodeBracketSquareIcon,
  },
  { name: 'HTML', href: '/ui/html', icon: CodeBracketSquareIcon },
  { name: 'JAVASCRIPT', href: '/ui/javascript', icon: CodeBracketSquareIcon },
  { name: 'PYTHON', href: '/ui/python', icon: CodeBracketSquareIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (

    <div className="flex h-full flex-col px-3 py-4 md:px-2 fixed">
      <div className=" space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
          
        );
      })}
      </div>
    </div>

  );
}