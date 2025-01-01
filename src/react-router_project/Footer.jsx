import React from 'react'
// import './styles/Footer.css'

export const Footer = () => {
  const today = new Date();
  return (
    <footer>
    <p>Copyright &copy; {today.getFullYear()} Designed by <b>Mohanapriyan.M</b> </p>
    </footer>
  )
}
