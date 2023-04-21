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
      {/* <*  className="transition-all duration-700 bg-gray-100 dark:bg-zinc-900">*/}
      <body className="transition-all duration-700 bg-gray-100">
        <div className={noto_sans.className}>
          <Header />
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
