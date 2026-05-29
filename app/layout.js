import { Lato } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato' 
});

export const metadata = {
  title: {
    template: '%s | Build Brilliance',
    default: 'Build Brilliance | Premium Construction Contracting',
  },
  description: 'Premium construction contracting services. We build excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
