import "../styles/globals.css"
import Header from "@/components/Header"

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
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
