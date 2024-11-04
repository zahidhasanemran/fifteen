import React from 'react'
import NavbarLand from '@/app/components/NavbarLand'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavbarLand />
      {children}
    </main>
  )
}
