import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Digital Insights & Tech News',
  description: 'Stay updated with the latest insights, tech news, and digital transformation strategies from AenFinite\'s expert team.',
  openGraph: {
    title: 'AenFinite Blog - Digital Insights & Tech News',
    description: 'Stay updated with the latest insights, tech news, and digital transformation strategies from our expert team.',
    images: [
      {
        url: 'https://i.ibb.co/0Vmpbg55/Untitled-1.png',
        width: 1200,
        height: 630,
        alt: 'AenFinite Blog',
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}