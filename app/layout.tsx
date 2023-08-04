import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "John Xie's Website",
  description: 'Coded by John Xie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-navy-blue text-light-blue font-sans">
          <Header/>
          <main
            className="relative flex-grow"
            style={{
              minHeight: '-webkit-fill-available',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
