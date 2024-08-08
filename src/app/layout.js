import './globals.css';
import Nav from './components/Nav'
import CartMobileIcon from "./components/CartMobileIcon"
import CartMobile from "./components/CartMobile"
import CartProvider from './context/CartContext'
import CartDesktop from './components/CartDesktop'
import Footer from "./components/Footer"
import Script from 'next/script'
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400'],
});

const robotocondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotocondensed',
  weight: ['300', '400', '700'],
});



export default function RootLayout({ children }) {

  return (
    <CartProvider>
      <html lang='en'>

        <body className={`${quicksand.variable} ${robotocondensed.variable} ${bangers.variable} font-quicksand  `}>

          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />


        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </CartProvider>

  );
}
