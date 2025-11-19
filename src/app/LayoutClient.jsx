'use client'

import { usePathname } from 'next/navigation'

// importa Header y Footer desde components/ui
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function LayoutClient({ children }) {
  const pathName = usePathname()

  // rutas donde no queremos Header/Footer
  const hiddePaths = ['/login', '/register']
  const hidde = hiddePaths.includes(pathName)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {!hidde && <Header />}
      <main style={{ flex: 1 }}>{children}</main>
      {!hidde && <Footer />}
    </div>
  )
}