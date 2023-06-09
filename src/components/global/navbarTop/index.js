import React from 'react';
import Cookies from 'js-cookie';
import {useState} from 'react';

const NavbarTop = () => {
  //pour recupérer ton token avec js token c est simple tu as juste a creer une state cooki comme ci dessous et apres tu peux l utiliser comme tu veux
  const [cookie, setCookie] = useState(Cookies.get('token_cookie'));

  const handleClick = async () => {
    window.location.href = '/auth/login';
  };
  const handleClickProfile = async () => {
    //il faut que tu change et que tu mettes le chemin d acces de ta page profile
    window.location.href = '/auth/profile';
  };
  const handleHome = async () => {
    window.location.href = '/';
  };
  return (
    <div className="flex items-center justify-between border-b h-24 bg-secondary">
      <div onClick={handleHome} className="flex items-center w-fit cursor-pointer">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4 w-8 h-8"
          viewBox="0 0 32.000000 32.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path d="M130 285 c11 -13 8 -15 -18 -15 -16 0 -35 -7 -42 -15 -11 -13 -8 -15 21 -15 l34 -1 -27 -20 c-17 -13 -28 -30 -28 -45 l0 -23 36 24 c20 14 42 25 48 25 23 0 55 -31 61 -60 6 -25 9 -29 21 -19 19 16 18 48 -3 72 -19 22 -20 22 32 1 26 -11 17 26 -10 38 -22 10 -23 12 -8 23 14 11 14 12 -1 18 -10 4 -27 2 -38 -4 -16 -9 -23 -7 -35 10 -8 12 -23 21 -35 21 -17 0 -18 -2 -8 -15z" />
            <path d="M120 140 c-11 -21 -20 -46 -20 -54 0 -9 -13 -22 -30 -31 -47 -24 -36 -35 35 -35 67 0 85 13 40 30 -24 9 -24 10 -11 52 8 24 17 51 21 61 15 35 -15 16 -35 -23z" />
          </g>
        </svg>
        <p className="text-4xl font-[Sofia-pro]">
          Instan<span className="text-tertiary">Trip</span>
        </p>
      </div>
      {cookie != null ?
          <div className="flex justify-center items-center w-fit mr-4">
            <div onClick={handleClickProfile} className="flex justify-center items-center w-fit md:w-[160px] md:h-[40px] md:mr-6 h-fit py-2 px-6 md:px-4 rounded-2xl cursor-pointer bg-quaternary hover:bg-tertiary ">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 31 30"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9656 0C13.9957 0 12.0452 0.387987 10.2253 1.14181C8.40544 1.89563 6.75185 3.00052 5.35897 4.3934C2.54593 7.20644 0.965576 11.0218 0.965576 15C0.965576 18.9782 2.54593 22.7936 5.35897 25.6066C6.75185 26.9995 8.40544 28.1044 10.2253 28.8582C12.0452 29.612 13.9957 30 15.9656 30C19.9438 30 23.7591 28.4196 26.5722 25.6066C29.3852 22.7936 30.9656 18.9782 30.9656 15C30.9656 13.0302 30.5776 11.0796 29.8238 9.25975C29.0699 7.43986 27.9651 5.78628 26.5722 4.3934C25.1793 3.00052 23.5257 1.89563 21.7058 1.14181C19.8859 0.387987 17.9354 0 15.9656 0ZM8.57058 24.42C9.21558 23.07 13.1456 21.75 15.9656 21.75C18.7856 21.75 22.7156 23.07 23.3606 24.42C21.2597 26.094 18.6519 27.0038 15.9656 27C13.1756 27 10.6106 26.04 8.57058 24.42ZM25.5056 22.245C23.3606 19.635 18.1556 18.75 15.9656 18.75C13.7756 18.75 8.57058 19.635 6.42558 22.245C4.82985 20.1669 3.96507 17.6201 3.96558 15C3.96558 8.385 9.35058 3 15.9656 3C22.5806 3 27.9656 8.385 27.9656 15C27.9656 17.73 27.0356 20.25 25.5056 22.245ZM15.9656 6C13.0556 6 10.7156 8.34 10.7156 11.25C10.7156 14.16 13.0556 16.5 15.9656 16.5C18.8756 16.5 21.2156 14.16 21.2156 11.25C21.2156 8.34 18.8756 6 15.9656 6ZM15.9656 13.5C15.3688 13.5 14.7965 13.2629 14.3746 12.841C13.9526 12.419 13.7156 11.8467 13.7156 11.25C13.7156 10.6533 13.9526 10.081 14.3746 9.65901C14.7965 9.23705 15.3688 9 15.9656 9C16.5623 9 17.1346 9.23705 17.5566 9.65901C17.9785 10.081 18.2156 10.6533 18.2156 11.25C18.2156 11.8467 17.9785 12.419 17.5566 12.841C17.1346 13.2629 16.5623 13.5 15.9656 13.5Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-md md:text-lg ml-2 font-[Poppins]">
                Profile
              </span>
            </div>
          </div>
          :
          <div className="flex justify-center items-center w-fit mr-4">
            <div onClick={handleClick} className="flex justify-center items-center w-fit md:w-[160px] md:h-[40px] md:mr-6 h-fit py-2 px-6 md:px-4 rounded-2xl cursor-pointer bg-quaternary hover:bg-tertiary ">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 31 30"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9656 0C13.9957 0 12.0452 0.387987 10.2253 1.14181C8.40544 1.89563 6.75185 3.00052 5.35897 4.3934C2.54593 7.20644 0.965576 11.0218 0.965576 15C0.965576 18.9782 2.54593 22.7936 5.35897 25.6066C6.75185 26.9995 8.40544 28.1044 10.2253 28.8582C12.0452 29.612 13.9957 30 15.9656 30C19.9438 30 23.7591 28.4196 26.5722 25.6066C29.3852 22.7936 30.9656 18.9782 30.9656 15C30.9656 13.0302 30.5776 11.0796 29.8238 9.25975C29.0699 7.43986 27.9651 5.78628 26.5722 4.3934C25.1793 3.00052 23.5257 1.89563 21.7058 1.14181C19.8859 0.387987 17.9354 0 15.9656 0ZM8.57058 24.42C9.21558 23.07 13.1456 21.75 15.9656 21.75C18.7856 21.75 22.7156 23.07 23.3606 24.42C21.2597 26.094 18.6519 27.0038 15.9656 27C13.1756 27 10.6106 26.04 8.57058 24.42ZM25.5056 22.245C23.3606 19.635 18.1556 18.75 15.9656 18.75C13.7756 18.75 8.57058 19.635 6.42558 22.245C4.82985 20.1669 3.96507 17.6201 3.96558 15C3.96558 8.385 9.35058 3 15.9656 3C22.5806 3 27.9656 8.385 27.9656 15C27.9656 17.73 27.0356 20.25 25.5056 22.245ZM15.9656 6C13.0556 6 10.7156 8.34 10.7156 11.25C10.7156 14.16 13.0556 16.5 15.9656 16.5C18.8756 16.5 21.2156 14.16 21.2156 11.25C21.2156 8.34 18.8756 6 15.9656 6ZM15.9656 13.5C15.3688 13.5 14.7965 13.2629 14.3746 12.841C13.9526 12.419 13.7156 11.8467 13.7156 11.25C13.7156 10.6533 13.9526 10.081 14.3746 9.65901C14.7965 9.23705 15.3688 9 15.9656 9C16.5623 9 17.1346 9.23705 17.5566 9.65901C17.9785 10.081 18.2156 10.6533 18.2156 11.25C18.2156 11.8467 17.9785 12.419 17.5566 12.841C17.1346 13.2629 16.5623 13.5 15.9656 13.5Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-md md:text-lg ml-2 font-[Poppins]">
                connexion
              </span>
            </div>
          </div>
          }
    </div>
  );
};

export default NavbarTop;
