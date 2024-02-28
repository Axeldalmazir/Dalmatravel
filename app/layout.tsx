import type { Metadata } from 'next';
import Navbar from "../components/Navbar";
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
	title: 'DalmaTravel',
	description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
          </main>
        <Footer />
      </body>
		</html>
	);
}
