import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      es: '/nombres-de-ruta'
    },
    '/properties': {
      es: '/propiedades'
    },
    '/properties/[slug]': {
      es: '/propiedades/[slug]'
  }
}

});