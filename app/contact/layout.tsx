import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact AenFinite for your digital project needs. We\'re here to help transform your business with innovative solutions.',
  openGraph: {
    title: 'Contact AenFinite - Get in Touch',
    description: 'Contact us for your digital project needs. We\'re here to help transform your business with innovative solutions.',
    images: [
      {
        url: 'https://i.ibb.co/0Vmpbg55/Untitled-1.png',
        width: 1200,
        height: 630,
        alt: 'Contact AenFinite',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}