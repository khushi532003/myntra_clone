import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer  px-24 py-10 relative bg-[#FAFBFC]">
                <div className="flex gap-16">
                    <div className="links">
                        <h4 className='text-xs font-bold text-gray-800 uppercase mb-5'>online shopping</h4>
                        <ul className='text-gray-500 '>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>
                        <h4 className='text-xs font-bold text-gray-800 uppercase my-5'>useful links</h4>
                        <ul className='text-gray-500 '>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                            <li>Cleartrip</li>
                        </ul>
                    </div>
                    <div className="links">
                        <h4 className='text-xs font-bold text-gray-800 uppercase mb-5'>customer policies</h4>
                        <ul className='text-gray-500 '>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>
                    </div>
                    <div className="links">
                        <h4 className='text-xs font-bold text-gray-800 uppercase mb-5'>experience myntra on mobile</h4>
                        <div className="flex gap-3">
                            <img className='w-32' src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                            <img className='w-32' src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                        </div>
                        <h4 className='text-xs font-bold text-gray-800 uppercase my-5'>keep in touch</h4>
                        <div className="icons flex gap-3 ">
                            <AiFillFacebook className='text-2xl text-gray-500' />
                            <FaTwitter className='text-2xl text-gray-500' />
                            <FaYoutube className='text-2xl text-gray-500' />
                            <FaInstagram className='text-2xl text-gray-500' />
                        </div>
                    </div>
                    <div className="links">
                        <div className="flex gap-2 items-center py-4">
                            <img className='w-14' src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
                            <div className="w-60 text-gray-500"><strong className='text-gray-800'>100% ORIGINAL</strong> guarantee for all products at myntra.com</div>
                        </div>
                        <div className="flex gap-2 items-center py-4">
                            <img className='w-12' src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" />
                            <div className="w-60 text-gray-500"><strong className='text-gray-800'>Return within 14days</strong>  of receiving your order </div>
                        </div>
                    </div>
                </div>
                <div className=" py-5">
                    <div  iv className="flex gap-1 items-center">
                        <div className="heading w-40 text-xs font-bold text-gray-800 uppercase">Popular searches</div>
                        <div className="hl w-full h-[2px] bg-gray-200"></div>
                    </div>
                    <p className='text-gray-500 py-4'>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls  Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches  |Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees </p>

                    <div className="flex justify-between items-center text-gray-500 py-5">
                        <p>In case of any concern, <strong className='text-blue-500'>Contact Us</strong></p>
                        <p>© 2024 www.myntra.com. All rights reserved.</p>
                        <p>A Flipkart company</p>
                    </div>

                    <hr />

                    <div className="btm py-5">
                        <div className="flex justify-between items-end py-5">
                            <div className="">
                                <h4 className='text-gray-700 font-bold text-sm py-4'>Registered Office Address</h4>
                                <p className='text-sm text-gray-500'>Buildings Alyssa, <br />
                                    Begonia and Clover situated in Embassy Tech Village,<br />
                                    Outer Ring Road,<br />
                                    Devarabeesanahalli Village,<br />
                                    Varthur Hobli,<br />
                                    Bengaluru – 560103, India</p>
                            </div>
                            <div className="text-sm text-gray-500">
                                <p className="">CIN: U72300KA2007PTC041799</p>
                                <p>Telephone: <strong className='text-blue-500'>+91-80-61561999 </strong></p>
                            </div>
                        </div>
                        <hr />
                        <h4 className='text-gray-700 font-bold text-sm py-4'>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
                        <p className='text-sm text-gray-500'>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>

                        <h4 className='text-gray-700 font-bold text-sm py-4'>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h4>
                        <p className="text-sm text-gray-500">Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>

                        <div className='py-5 ps-10'>
                            <ol className='text-sm text-gray-500'>
                                <li className='mb-3'>1. <strong className='text-gray-800 '>Smart men’s clothing</strong>- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</li>
                                <li className='mb-3'>2. <strong className='text-gray-800 '>Trendy women’s clothing</strong>-  Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</li>
                                <li className='mb-3'>3. <strong className='text-gray-800 '>Fashionable footwear </strong>- While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</li>
                                <li className='mb-3'>4. <strong className='text-gray-800 '>Stylish accessories</strong>- Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</li>
                                <li className='mb-3'>5. <strong className='text-gray-800 '>Fun and frolic </strong>- Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</li>
                                <li className='mb-3'>6. <strong className='text-gray-800 '>Beauty begins here </strong>- You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</li>
                               
                            </ol>
                        </div>
                        <p className="text-sm text-gray-500">Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>

                        <h4 className='text-gray-700 font-bold text-sm py-4'>AFFORDABLE FASHION AT YOUR FINGERTIPS</h4>
                        <p className='text-sm text-gray-500'>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>

                        <h4 className='text-gray-700 font-bold text-sm py-4'>MYNTRA INSIDER</h4>
                        <p className='text-sm text-gray-500'>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</p>
                        <br />
                        <p className='text-sm text-gray-500'>There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
