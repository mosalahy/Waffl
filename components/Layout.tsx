import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div dir="rtl" style={{display:'flex', minHeight:'100vh', fontFamily: 'Cairo, sans-serif'}}>
      <Sidebar />
      <div style={{flex:1}}>
        <Topbar />
        <main style={{padding:20}}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
