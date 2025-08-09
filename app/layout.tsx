import '../styles/globals.css'

export const metadata = {
  title: 'LikeMind',
  description: 'Find your allies. Win your goals. Join the LikeMind beta waitlist.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
