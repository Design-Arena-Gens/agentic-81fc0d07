export const metadata = {
  title: 'Premium Liquid Transitions Showcase',
  description: 'Top-class liquid transitions with demos and code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
