import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import { IoBagHandleOutline } from 'react-icons/io5';
import MenuBar from './MenuBar';

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null); 
    const [menuColor, setMenuColor] = useState('text-orange-600');
    const menuItems = [
        { id: 'men', label: 'MEN', borderColor: 'hover:border-orange-500' },
        { id: 'women', label: 'WOMEN', borderColor: 'hover:border-pink-500' },
        { id: 'kids', label: 'KIDS', borderColor: 'hover:border-orange-500' },
        { id: 'homeLiving', label: 'HOME & LIVING', borderColor: 'hover:border-yellow-500' },
        { id: 'beauty', label: 'BEAUTY', borderColor: 'hover:border-teal-500' },
        { id: 'studio', label: 'STUDIO', borderColor: 'hover:border-pink-500' },
    ];

    const handleMouseEnter = (menuId) => {
        setActiveMenu(menuId); // Set the active menu on hover
    };

    const handleMouseLeave = () => {
        setActiveMenu(null); // Reset the active menu on mouse leave
    };

    return (
        <>
            <div className="w-full flex sticky top-0 z-30 h-20 justify-between items-center px-10 bg-white shadow-md    ">
                <div className="logo">
                    <img
                        className="w-20"
                        src="https://www.financialexpress.com/wp-content/uploads/2023/05/Myntra-logo-1024x740-2.png"
                        alt="Logo"
                    />
                </div>

                <div className="navs">
                    <ul className="flex gap-5 text-center">
                        {menuItems.map((menu) => (
                            <li
                                key={menu.id}
                                id={menu.id}
                                className={`text-xs py-8 px-3 font-bold text-zinc-900 ${menu.id === "studio" ? "flex gap-1" : ""} cursor-pointer border-b-4 ${activeMenu === menu.id ? menu.borderColor.replace('hover:', '') : 'border-transparent'
                                    } ${menu.borderColor}`}
                                onMouseEnter={() => handleMouseEnter(menu.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menu.label} {menu.id === "studio" ? <p className="text-pink-600 text-[10px] relative -mt-2 top-0 h-full">NEW</p> : ""}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="searchbar">
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="bg-gray-100 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                            placeholder="Search for products, brands and more"
                        />
                    </div>
                </div>

                <div className="icons flex gap-8">
                    <div className="profile flex flex-col items-center justify-center">
                        <span className="text-xl">
                            <BsPerson />
                        </span>
                        <h5 className="text-xs font-bold">Profile</h5>
                    </div>
                    <div className="profile flex flex-col items-center justify-center">
                        <span className="text-xl">
                            <GoHeart />
                        </span>
                        <h5 className="text-xs font-bold">Wishlist</h5>
                    </div>
                    <div className="profile flex flex-col items-center justify-center relative">
                        <span className="text-xl">
                            <IoBagHandleOutline />
                        </span>
                        <h5 className="text-xs font-bold">Bag</h5>
                        <span className="text-white w-5 h-5 flex justify-center items-center bg-red-400 rounded-full text-[10px] absolute -top-2 -right-3">
                            1
                        </span>
                    </div>
                </div>
            </div>

            {/* Conditionally render the MenuBar component */}
            {activeMenu && (
                <div
                    onMouseEnter={() => setActiveMenu(activeMenu)} // Keep MenuBar visible while hovering over it
                    onMouseLeave={handleMouseLeave} // Hide MenuBar when mouse leaves
                >
                    <MenuBar activeMenu={activeMenu} textColor={menuColor} />
                </div>
            )}
        </>
    );
}

export default Navbar;
