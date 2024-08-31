
/* import { getLocale } from "next-intl/server" */
'use client';

import {Link, usePathname} from '@/i18n/routing';
import { useLocale } from "next-intl";

const Header = () => {
  return (
    <header>
      <h1>Hello</h1>
      <p>Salam!</p>
    </header>
  )
}

export default Header
