import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Web, Mobile & Digital Solutions',
  description: 'Explore AenFinite\'s comprehensive range of digital services including web development, mobile apps, digital marketing, and more.',
  openGraph: {
    title: 'Digital Services by AenFinite',
    description: 'Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, and more.',
    images: [
      {
        url: 'https://aenfinite.com/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AenFinite Services',
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}