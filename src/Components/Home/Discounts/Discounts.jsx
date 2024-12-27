import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

function Discounts() {
    return (
        <>
            <section>
                <div className="heading py-5">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/4/31207af8-e069-46c0-9f78-beccf9d3fa2a1733313761249-First-Time-On-Discount.jpg" alt="" />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper !pb-10">

                    {/* first slide start */}
                    <div>
                        <SwiperSlide>
                            <div className="flex w-full">
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/91099c62-46d2-40eb-b555-6c4385a111f21732958097647-image_png_939283020.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/bea0cdc8-9a3c-4107-b383-b3ac382f78fc1732958116832-image_png_771621111.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/38e10ca3-7437-46ce-93f5-6f6fcdf925531732958131382-image_png1655378510.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/f97e4e8e-8bbb-422c-b3d8-a432bc2be9a11732958145985-image_png_1915885908.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/3f0737da-c83e-4d83-b4bf-c6a9e2aee3fc1732958163152-image_png1289298715.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/0bb997a5-ec6f-4c30-90ce-31c75e0eb6cf1732958177252-image_png_1118084108.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/3/857e2ff9-ddcf-43b6-81b4-a2d6c80705e71733215768738-image_png_28724963.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                    {/* first slide end */}

                    {/* second slide start */}
                    <div>
                        <SwiperSlide >
                            <div className="flex w-full">
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/3/6430c9d1-5f31-4935-a4f4-e3176f7c5b901733215793135-image_png_776530001.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/3/e3e35a8d-0609-45a1-9195-4f0d335634e01733215814997-image_png_1022741982.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/3/ac93bc6f-2bc5-4645-ba77-67585be2eb9e1733215837778-image_png_1522043197.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/3/81a2428a-43d5-413d-8ca8-ad5b47e733cf1733215867165-image_png_17802928.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/1d4dc3dd-9a29-44db-9294-0b68e406c9441732957940929-image_png781733455.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/b105a08a-5244-4e9a-88aa-2e315c9ec9bd1732957973349-image_png840374544.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/4f142b8f-fba8-4527-bbd3-ad7d7300d34a1732957987523-image_png2115111700.png" alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                    </div>

                    {/* second slide end */}

                    {/* third slide start */}
                    <div>
                        <SwiperSlide>
                            <div className="flex w-full">
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/b5b95158-3327-4168-b8ae-56875c0940001732958001489-image_png_300721261.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/4ac17db5-cdde-4164-a5d0-30994c2731421732958014877-image_png_339140005.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/15bbac46-ba63-4e70-b7cc-8d63af4538c11732958028451-image_png_1315926905.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/83779e69-2a83-4279-94e3-36c57431d14f1732958042585-image_png_1637431020.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/fb9c55a9-ea29-445a-8334-b596061076be1732958056626-image_png_278369319.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/4206adbf-abdf-40b6-982c-03408a96e61b1732958070723-image_png2138903804.png" alt="" />
                                </div>
                                <div className="offers">
                                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/30/3d0ccce9-7b12-4ae3-a9ca-0ba946fd336f1732958084916-image_png_942822789.png" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    {/* third slide end */}

                </Swiper>
            </section>
        </>
    )
}

export default Discounts;