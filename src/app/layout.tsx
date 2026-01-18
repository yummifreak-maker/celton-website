import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Celton Semiconductors | Intelligence at the Core',
  description: 'Where VLSI, AI, and innovation converge. Celton Semiconductors is redefining chip design through intelligent platforms that learn, adapt, and optimize.',
  keywords: 'VLSI, semiconductor, AI, chip design, Celton, Cognorus, Nexarus, Helorus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
