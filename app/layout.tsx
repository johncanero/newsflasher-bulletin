import "../styles/globals.css"

export const metadata = {
  title: 'NewsFlasher',
  description: 'Live News App of NewsFlasher',
  keywords: 'live, news, app, flasher',
  icons: {
    icon: '/images/icon/worldNews.png',
    shortcut: '/images/icon/worldNews.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
