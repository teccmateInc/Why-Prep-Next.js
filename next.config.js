const path = require('path')

module.exports = {
    i18n: {
        localeDetection: false,
        locales: ['en', 'th'],
        defaultLocale: 'en',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    publicRuntimeConfig: {
        NEXT_PUBLIC_URI: process.env.NEXT_PUBLIC_URI,
        NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
        NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
        NEXT_PUBLIC_FACEBOOK_PIXEL: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL
    },
}