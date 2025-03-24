export const metadata = {
  metadataBase: new URL('https://aenfinite.com'),
  title: {
    default: 'AenFinite - Digital Services Agency',
    template: '%s | AenFinite',
  },
  description: 'Transform your digital presence with AenFinite\'s innovative solutions in web development, mobile apps, and digital marketing.',
  keywords: ['digital agency', 'web development', 'mobile apps', 'digital marketing', 'UI/UX design', 'software development'],
  authors: [{ name: 'AenFinite' }],
  creator: 'AenFinite',
  publisher: 'AenFinite',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aenfinite.com',
    siteName: 'AenFinite',
    title: 'AenFinite - Digital Services Agency',
    description: 'Transform your digital presence with AenFinite\'s innovative solutions',
    images: [
      {
        url: 'https://i.ibb.co/0Vmpbg55/Untitled-1.png',
        width: 1200,
        height: 630,
        alt: 'AenFinite - Digital Services Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AenFinite - Digital Services Agency',
    description: 'Transform your digital presence with AenFinite\'s innovative solutions',
    images: ['https://aenfinite.com/twitter-image.jpg'],
    creator: '@aenfinite',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};
