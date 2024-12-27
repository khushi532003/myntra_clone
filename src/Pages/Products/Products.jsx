import React from 'react'
import FilterProducts from '../../Components/Filter/FilterProducts'
import Product from '../../Components/Product/Product'
import { GoChevronDown } from 'react-icons/go'

function Products() {

    return (
        <>
            <div className="w-full flex">
                <FilterProducts />
                <div className="products p-5 w-full mt-16">

                    <div className="flex justify-between items-center py-4">
                        <div className="flex gap-1 flex-wrap">
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Ankle Height</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Bundles</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Country of Origin</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Fastening and Back Detail</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Material</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Occassion</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                            <div className="height cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-full flex justify-between gap-1 items-center">
                                <div className="text-sm text-gray-600">Ornamentation</div>
                                <div className=""><GoChevronDown /></div>
                            </div>
                        </div>
                        <div className='flex justify-between w-60 h-10 border border-gray-300 px-2 items-center'> 
                            <div className="text-sm text-gray-600">Sort by : <strong>Recommended</strong></div>
                            <div className=""><GoChevronDown /></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        <Product title={"CAI"} description={"Women Open Toe Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/14/tJX5ZDTn_541439b0421f4ac1ace9683e8ddd3a6a.jpg"} price={"2391"} MRP={"2599"} discount={"8"} />


                        <Product title={"marks & spencer"} description={"Women Ballerinas Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/30087197/2024/7/3/88ceab49-44cc-4e88-9966-7702ee6589981719988010563MarksSpencerWomenBallerinasFlats1.jpg"} price={"2399"} MRP={"3999"} discount={"40"} />


                        <Product title={"baesd"} description={"Party Slip-On Ballerinas"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29557090/2024/5/17/4637842a-87f9-41ab-b253-72bfb6bd34801715969249623BAESDGirlsBlockwith1.jpg"} price={"774"} MRP={"2499"} discount={"69"} />


                        <Product title={"shoetopia"} description={"Girls Mules Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28097140/2024/3/8/c405c234-b9b1-44db-8adb-879b1904e8f31709887179468ShoetopiaGirlsEthnicMulesFlats1.jpg"} price={"799"} MRP={"1999"} discount={"60"} />


                        <Product title={"lavie"} description={"Women Ballerinas Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/31021032/2024/10/11/8c08066d-ba87-4a2f-aeab-5fcff91689e91728638737623-Lavie-Women-Square-Toe-Ballerinas-Flats-9611728638737033-1.jpg"} price={"899"} MRP={"2499"} discount={"64"} />


                        <Product title={"pantaloons junior"} description={"Girls Ballerinas Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29929861/2024/6/10/4179b869-b2fa-464a-a419-922adcfeecfd1717998480354PantaloonsJuniorGirlsTexturedBallerinasFlats1.jpg"} price={"727"} MRP={"799"} discount={"9"} />


                        <Product title={"roadster"} description={"Women Casual Ballerinas Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/3/8fF37CB7_9e35f0a002c84e9197194e2c51f86999.jpg"} price={"799"} MRP={"2799"} discount={"25"} />


                        <Product title={"mast & harbour"} description={"Women Ballerinas Flats"} imageUrl={"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28112218/2024/3/8/c0d9f7ec-3276-4a00-937b-998e5b1c4b141709878884229MastHarbourWomenColourblockedBallerinaswithBowsFlats1.jpg"} price={"899"} MRP={"2299"} discount={"14"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
