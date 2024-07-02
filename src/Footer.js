import React from 'react'

export const Footer = () => {
  const todayDate=new Date();
  return (
    <footer className='fixed-bottom bg-info col-lg-8 offset-lg-2 py-3' style={{height:"5vh"}}>
      <p className='text-center'>Copyright &copy; {todayDate.getFullYear()}</p>
    </footer>
  )
}

