import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
  return ReactDom.createPortal(<div>Welcome to portal</div>, document.getElementById("root2")
  )
}

export default Portal