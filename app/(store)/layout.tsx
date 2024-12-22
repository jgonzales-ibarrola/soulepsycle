import React from 'react'
import StoreNav from './components/store-nav';

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <StoreNav />
      <main>
        {children}
      </main>
    </>
  )
}

export default StoreLayout