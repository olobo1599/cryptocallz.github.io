import React from 'react'
import "./Button.css"

const Button = ({icon, href, placeholder="BUTTON", lightOrDark="light_mode"}) => {
  return (
      <>
          <a href={href} target='_blank'>
              <button className={`button ${lightOrDark}`}>
                  { icon } {placeholder}
              </button>
          </a>
      </>
  )
}

export default Button;