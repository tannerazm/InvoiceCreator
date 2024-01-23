import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({isLoggedIn}) => {
  const linkClass = 'text-center w-full p-2 hover:bg-blue-500 hover:cursor-pointer block';
  return (
    <div>
      <div className='bg-green-500 flex flex-row'>
        <div className='w-1/6 h-full'>
          <Link to="/" className={linkClass}>Oak</Link>
        </div>
        <div className='w-5/6 flex flex-row h-full'>
          <Link to='/create_invoice' className={linkClass}>
            Create Invoice
          </Link>
          <Link to='/manage_invoices' className={linkClass}>
            Manage Invoices
          </Link>
          {
            isLoggedIn ?
            (
              <Link to='/logout' className={linkClass}>
                Logout
              </Link>
            ) :
            (
              <Link to='/login' className={linkClass}>
                Login
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;