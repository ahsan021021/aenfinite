import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Work & Case Studies',
  description: 'Discover AenFinite\'s portfolio of successful projects, case studies, and digital solutions that have transformed businesses.',
  openGraph: {
    title: 'AenFinite Portfolio - Our Work & Case Studies',
    description: 'Discover our portfolio of successful projects, case studies, and digital solutions that have transformed businesses.',
    images: [
      {
        url: 'https://i.ibb.co/0Vmpbg55/Untitled-1.png',
        width: 1200,
        height: 630,
        alt: 'AenFinite Portfolio',
      },
    ],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}