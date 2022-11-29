import React from 'react';
import { Link } from 'react-router-dom';

const Unauthenticated = () => (
  <div className="flex flex-col items-center">
    <img
        className='w-1/3'
      src="https://i.pinimg.com/originals/91/22/07/912207f3b7e2120c417d73ebc411f949.png"
      alt="not-found"
    />
    <div className='flex flex-row gap-5'>
    <button className="px-4 py-2 text-sm bg-green-700 mt-5 text-white rounded-full shadow-sm">
        <Link to="/register" className="text-xl text-white link-home">
        Đăng kí
        </Link>
    </button>
    <button className="px-4 py-2 text-sm bg-blue-700 mt-5 text-white rounded-full shadow-sm">
        <Link to="/login" className="text-xl text-white link-home">
        Đăng nhập
        </Link>
    </button>
    </div>
    
    
  </div>
);

export default Unauthenticated;