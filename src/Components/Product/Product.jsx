import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Product.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { LuRectangleVertical } from 'react-icons/lu';

function Product({title, imageUrl , description , price, MRP, discount}) {
    const [wishlist, setWishlist] = useState(false);

    const handleMouseEnter = () => {
        setWishlist(true);
    };

    const handleMouseLeave = () => {
        setWishlist(false);
    };


    return (
        <>
            <div
                className="productDiv w-[210px] relative py-3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="upper relative">
                    <div className="absolute px-1 z-10 text-center rounded bg-gray-400 right-2 top-2 text-white text-xs">
                        AD
                    </div>
                    <div className="absolute bottom-3 left-2">
                        <div className="bg-gray-200 p-1 flex items-center gap-1 text-xs font-semibold">
                            4.3 <span className="text-green-800"><FaStar /></span> | 10.5K
                        </div>
                    </div>
                    <div className="productImg">
                        {!wishlist ? <img
                            src={imageUrl}
                        />
                            :
                            <div>
                                
                                <Swiper
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination, FreeMode, Autoplay]}
                                    className="mySwiper !pb-10"
                                >
                                    <SwiperSlide><img
                                        src={imageUrl}
                                    /></SwiperSlide>
                                    <SwiperSlide><img
                                        src={imageUrl}
                                    /></SwiperSlide>
                                    <SwiperSlide><img
                                        src={imageUrl}
                                    /></SwiperSlide>
                                    <SwiperSlide><img
                                        src={imageUrl}
                                    /></SwiperSlide>

                                </Swiper> </div>}
                    </div>
                </div>
                <div className="bottom p-3">
                    {wishlist ? (
                        <div className="hoverSec py-2 z-20 bg-white absolute left-0 bottom-12 w-full px-3 ">
                            <div className="similar flex gap-1 bg-white  p-2 text-pink-500 cursor-pointer uppercase rounded-full items-center font-semibold text-xs absolute -top-16 right-2 "><LuRectangleVertical /></div>
                            <div className="wishlistBtn flex gap-2 w-full border border-gray-300 bg-transparent justify-center items-center py-2  uppercase text-xs font-semibold text-gray-800">
                                <span className="text-lg text-gray-500"><IoIosHeartEmpty /></span> wishlist
                            </div>
                            <div className="sizes text-gray-500 text-sm py-2">
                                Sizes : L
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="title uppercase font-bold">{title}</div>
                            <div className="desc text-sm text-gray-500 truncate overflow-hidden py-1">
                                    {description}
                            </div>
                        </div>
                    )}
                    <div className={`${wishlist ? "absolute bottom-3" : ""}`}>
                        <div className="amount flex gap-1 text-sm pb-1">
                            <div className="price font-semibold">Rs. {price}</div>
                            <div className="mrp line-through text-gray-500">Rs. {MRP}</div>
                            <div className="discount text-orange-600">({discount}% off)</div>
                        </div>
                        <p className="capitalize text-orange-600 font-bold text-xs">only few left!</p></div>
                </div>
            </div>
        </>
    );
}

export default Product;
