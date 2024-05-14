'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';


const links = [
  { name: 'HTML', href: '/ui/html', icon: CodeBracketSquareIcon },
  { name: 'CSS', href: '/ui/css', icon: CodeBracketSquareIcon },
  { name: 'JAVASCRIPT', href: '/ui/javascript', icon: CodeBracketSquareIcon },
  {
    name: 'typeScript', href: '/ui/typeScript',icon: CodeBracketSquareIcon,
  },
  { name: 'PYTHON', href: '/ui/python', icon: CodeBracketSquareIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (

    <div className="flex justify-center m-2">
      <div className="header">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
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