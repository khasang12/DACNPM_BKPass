import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center">
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <button className="px-4 py-2 font-semibold text-sm bg-blue-700 mt-5 text-white rounded-full shadow-sm">
        <Link to="/" className="text-xl text-white link-home">
        Trở về trang chủ
        </Link>
    </button>
    
  </div>
);

export default NotFound;