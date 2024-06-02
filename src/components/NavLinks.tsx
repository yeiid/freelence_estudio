// components/NavLinks.tsx

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { courses } from "../data/courses";

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center m-4">
      {courses.map((course) => {
        const IconComponent = course.icon;
        return (
          <Link
            key={course.name}
            href={course.href}
            className={clsx(
              "flex items-center p-4 m-2 rounded-lg bg-white shadow-md hover:bg-blue-50",
              {
                "bg-blue-100": pathname === course.href,
              }
            )}
          >
            <IconComponent />
            <div>
              <h2 className="font-semibold">{course.name}</h2>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
