import React from 'react'
import '../Components/nav.css'
import { FaAngleDown } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className=' bg-[#f7edf7] sticky top-0'>
      <nav className='flex items-center gap-[20vw] px-[20px] pt-[20px] '>
        <div>
            <h1 className='text-4xl font-bold '>Toka</h1>
        </div>
        <div className='flex items-center justify-between bg-[#f7edf7]'>
          <div  class="drop1">
          <div className='flex'>
          <h1 className='pr-2 cursor-pointer'>NFT</h1>
          <FaAngleDown />
          </div>
            <div class="nftmenu">
                    <menu>NFT Landing Page</menu>
                    <menu>NFT Collection Landing</menu>
                    <menu>NFT Platform</menu>
                    <menu>NFT MarketPlace</menu>
                    <menu>NFT DAO Platform</menu>
                    <menu>NFT Website</menu>
                    <menu>Metaverse Website</menu>
            </div>
          </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">Crypto</option>
                    <option value="">Crypto Trading</option>
                    <option value="">Crypto Exchange</option>
                    <option value="">Blockchain Service</option>
                    <option value="">Crypto Card</option>
                    <option value="">ICO Landing</option>
                    <option value="">Crypto Start-up</option>
                    <option value="">Payment With Crypto</option>
                    <option value="">Crypto Trading App</option>
                    <option value="">Crypto App</option>
                    <option value="">DEFI Project Landing</option>
                    <option value="">Crypto Hardware Wallets</option>
                    <option value="">Crypto Wallet App</option>
                </select>
            </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">About Us</option>
                    <option value="">About Us</option>
                    <option value="">About Us Dark</option>
                </select>
            </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">Our Team</option>
                    <option value="">Our Team Dark</option>
                </select>
            </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">Contact Us</option>
                    <option value="">Contact Us Dark</option>
                </select>
            </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">Online Shop</option>
                    <option value="">Shop</option>
                    <option value="">My Account</option>
                    <option value="">Cart</option>
                    <option value="">Check Out</option>
                </select>
            </div>
            <div>
                <select className='w-[118px] bg-[#f7edf7]'>
                    <option value="">Blog</option>
                    <option value="">Blog 1 column</option>
                    <option value="">Blog 1 column With Sidebar</option>
                    <option value="">Blog 2 columns</option>
                    <option value="">Blog 2 columns With Sidebar</option>
                    <option value="">Blog 3 columns</option>
                </select>
            </div>
            <div className='flex pl-[20px]'>
                 <button className='border-2 border-black px-[10px] py-[3px] rounded-2xl'>Buy Now</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
