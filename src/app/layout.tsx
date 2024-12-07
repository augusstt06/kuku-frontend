import Footer from '@/app/components/layouts/Footer'
import Header from '@/app/components/layouts/Header'
import '@/app/globals.css'

// import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header />
        {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
