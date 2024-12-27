import React from 'react'

function MenuBar() {
  return (
    <>
      <div className="menus w-full   fixed top-18 z-40 bg-[#51515180]  h-screen">
        <div className="grid grid-cols-5 gap-8 w-[90%] mx-auto bg-white px-14 py-4">
          <div className="links">
            <h4 className='text-sm text-orange-600 font-bold py-2'>Topwear</h4>
            <ul className='py-3'>
              <li className="text-sm"> T-Shirts</li>
              <li className="text-sm">Casual Shirts</li>
              <li className="text-sm">  Formal Shirts</li>
              <li className="text-sm">Sweatshirts</li>
              <li className="text-sm">Sweaters</li>
              <li className="text-sm">Jackets</li>
              <li className="text-sm">Blazers & Coats</li>
              <li className="text-sm">Suits</li>
              <li className="text-sm">Rain Jackets</li>
            </ul>
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'>Indian & Festive Wear</h4>
            <ul className='py-3'>
              <li className="text-sm">Kurtas & Kurta Sets</li>
              <li className="text-sm">Sherwanis</li>
              <li className="text-sm">Nehru Jackets</li>
              <li className="text-sm">Dhotis</li>              
            </ul>
          </div>
          <div className="links">  
            <h4 className='text-sm text-orange-600 font-bold py-2'>Bottomwear</h4>
            <ul className='py-3'>
              <li className="text-sm">Jeans</li>
              <li className="text-sm">Casual Trousers</li>
              <li className="text-sm">  Formal Trousers</li>
              <li className="text-sm">Formal</li>
              <li className="text-sm">Shorts</li>
              <li className="text-sm">Track Pants & Joggers</li>
            </ul>
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'>Innerwear & Sleepwear</h4>
            <ul className='py-3'>
              <li className="text-sm">Briefs & Trunks</li>
              <li className="text-sm">Boxers</li>
              <li className="text-sm">Vests</li>
              <li className="text-sm">Sleepwear & Loungewear</li>
              <li className="text-sm">Thermals</li>
            </ul>
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'>Plus Size</h4>
          </div>
          <div className="links">
            <h4 className='text-sm text-orange-600 font-bold py-2'>Footwear</h4>
            <ul className='py-3'>
              <li className="text-sm"> Casual Shoes</li>
              <li className="text-sm">Sports Shoes</li>
              <li className="text-sm">Formal Shoes</li>
              <li className="text-sm">Sneakers</li>
              <li className="text-sm">Sandals & Floaters</li>
              <li className="text-sm">Flip Flops</li>
              <li className="text-sm">Socks</li>
            </ul>                                   
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'> Personal Care & Grooming</h4>
            <h4 className='text-sm text-orange-600 font-bold py-2'>Sunglasses & Frames</h4>
            <h4 className='text-sm text-orange-600 font-bold py-2'>Watches</h4>
          </div>
          <div className="links">
            <h4 className='text-sm text-orange-600 font-bold py-2'>Sports & Active Wear</h4>
            <ul className='py-3'>
              <li className="text-sm">Sports Shoes</li>
              <li className="text-sm">Sports Sandals</li>
              <li className="text-sm">  Active T-Shirts</li>
              <li className="text-sm">Track Pants & Shorts</li>
              <li className="text-sm">Tracksuits</li>
              <li className="text-sm">Jackets & Sweatshirts</li>
              <li className="text-sm">Sports Accessories</li>
              <li className="text-sm">Swimwear</li>
            </ul>
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'>Gadgets</h4>
            <ul className='py-3'>
              <li className="text-sm">Smart Wearables</li>
              <li className="text-sm">Fitness Gadgets</li>
              <li className="text-sm"> Headphones</li>
              <li className="text-sm">Speakers</li>
            </ul>
          </div>
          <div className="links">
            <h4 className='text-sm text-orange-600 font-bold py-2'>Fashion Accessories</h4>
            <ul className='py-3'>
              <li className="text-sm">Wallets</li>
              <li className="text-sm">Belts</li>
              <li className="text-sm">Perfumes & Body Mists</li>
              <li className="text-sm">Trimmers</li>
              <li className="text-sm">Deodorants</li>
              <li className="text-sm">Ties, Cufflinks & Pocket Squares</li>
              <li className="text-sm">Accessory Gift Sets</li>
              <li className="text-sm">Caps & Hats</li>
              <li className="text-sm">Mufflers, Scarves & Gloves</li>
              <li className="text-sm">Phone Cases</li>
              <li className="text-sm">Rings & Wristwear</li>
              <li className="text-sm">Helmets</li>
            </ul>            
            <hr />
            <h4 className='text-sm text-orange-600 font-bold py-2'>Bags & Backpacks</h4>
            <h4 className='text-sm text-orange-600 font-bold py-2'>Luggages & Trolleys</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuBar;