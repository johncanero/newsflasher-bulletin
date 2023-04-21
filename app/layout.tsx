import "../styles/globals.css";
import Header from "@/components/Header";
import { Noto_Sans } from '@next/font/google';

// Install npm i @next/font 
// Array of Strings of Weights, Subsets
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-noto_sans'
})


// head
export const metadata = {
  title: 'NewsFlasher',
  description: 'Live News App of NewsFlasher',
  keywords: 'live, news, app, flasher',
  icons: {
    icon: '/images/icon/worldNews2.png',
    shortcut: '/images/icon/worldNews2.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={noto_sans.className}>
          <Header />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
