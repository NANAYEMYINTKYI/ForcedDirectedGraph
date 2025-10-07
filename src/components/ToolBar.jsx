import React from 'react'
import { CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav, CNavItem } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload, cilLayers, cilSpeedometer } from '@coreui/icons'

const Toolbar = () => {
  return (
    <CSidebar className="border-end" narrow>
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>CUI</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
        </CNavItem>
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} />
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} />
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}

export default Toolbar;