import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

function Products() {
    const [rangeValue, setRangeValue] = useState(300); // Initial range value

    // Update the range value when the slider is moved
    const handleSliderChange = (e) => {
        setRangeValue(e.target.value);
    };
    return (
        <>
            <div className="w-full flex">
                <div className="filter_products text-sm p-4">
                    
                    <div className="path">
                        <p>Home/ Clothing/ <strong>Men Topwear</strong></p>
                    </div>

                    <div className="items py-3">
                        <strong> Men Topwear </strong>- 434000 items
                    </div>

                    <h3 className='uppercase font-bold text-lg py-4'>filters</h3>

                    <hr />

                    <div >
                        <h4 className='uppercase font-bold text-sm text-gray-700 py-4'>categories</h4>

                        <div className="catergories text-gray-600 pb-4">
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Shirts (15235)
                            </div>
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Tshirts (65554)
                            </div>
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Sweatshirts (235674)
                            </div>
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Kurtas (4511)
                            </div>
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Jackets (413)
                            </div>
                            <div className="flex gap-3 py-1">
                                <input type='checkbox' />
                                Sweaters (4641)
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div >
                        <div className="flex justify-between items-center">
                            <h4 className='uppercase font-bold text-sm text-gray-700 py-4'>brand</h4>
                            <div className="search">
                                <IoSearch />
                            </div>
                        </div>

                        <div className="brands text-gray-600 pb-4">
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                roadster (15235)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                highlander (65554)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                u.s polo assn. (235674)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                mast & harbour (4511)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                allen solly (413)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                louis phillippe (4641)
                            </div>
                            <p className='text-red-500 py-2 ps-5'>+ 1528 more</p>
                        </div>
                    </div>

                    <hr />

                    <div >
                        <h4 className='uppercase font-bold text-sm text-gray-700 '>price</h4>

                        <div className="slider py-4">
                            <div className="relative w-full max-w-lg mx-auto mt-8">
                                {/* Range values at the top */}


                                {/* Range Slider */}
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    value={rangeValue}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />

                                {/* Display the updated values */}
                                <div className="flex justify-between text-gray-700 mt-2">
                                    <span>${rangeValue}</span>
                                    <span>${10000 - rangeValue}</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div >
                        <div className="flex justify-between items-center">
                            <h4 className='uppercase font-bold text-sm text-gray-700 py-4'>brand</h4>
                            <div className="search">
                                <IoSearch />
                            </div>
                        </div>

                        <div className="brands text-gray-600 pb-4">
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                roadster (15235)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                highlander (65554)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                u.s polo assn. (235674)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                mast & harbour (4511)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                allen solly (413)
                            </div>
                            <div className="flex gap-3 py-1 uppercase">
                                <input type='checkbox' />
                                louis phillippe (4641)
                            </div>
                            <p className='text-red-500 py-2 ps-5'>+ 1528 more</p>
                        </div>
                    </div>
                    
                    <hr />

                </div>
                <div className="products"></div>
            </div>
        </>
    )
}

export default Products
