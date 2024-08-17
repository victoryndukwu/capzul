'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UrlObject } from 'url';
import React, { AnchorHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string | UrlObject;
  as?: string | UrlObject;
  passHref?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string | false;
  children: React.ReactNode;
};

const CustomLink: FC<CustomLinkProps> = ({
  href,
  as,
  passHref,
  replace,
  scroll = true,
  shallow,
  locale,
  className = '',
  children,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      as={as}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      className={twMerge('font-normal underline-animation text-primary text-sm', className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
