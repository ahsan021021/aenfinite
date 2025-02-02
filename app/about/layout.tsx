import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about AenFinite\'s journey, our team of experts, and our commitment to delivering innovative digital solutions.',
  openGraph: {
    title: 'About AenFinite - Our Story & Mission',
    description: 'Learn about AenFinite\'s journey, our team of experts, and our commitment to delivering innovative digital solutions.',
    images: [
      {
        url: 'https://i.ibb.co/0Vmpbg55/Untitled-1.png',
        width: 1200,
        height: 630,
        alt: 'About AenFinite',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}