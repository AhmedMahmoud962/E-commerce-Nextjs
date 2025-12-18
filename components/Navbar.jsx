'use client'
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  // is active 
  const isActive = (path) => {
    return pathname === path ? 'text-white bg-red-600' : 'text-gray-700'
  }
  console.log(pathname)
  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 py-3 sm:py-4 border-b border-gray-300 text-gray-700 bg-white sticky top-0 z-50">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            className="cursor-pointer w-24 sm:w-28 md:w-32 h-auto "
            src={assets.logo}
            alt="logo"
            width={128}
            height={40}
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className={`hover:text-white  hover:bg-red-600  p-2 rounded-md transition-colors text-sm xl:text-base font-medium ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`hover:text-white  hover:bg-red-600 p-2 rounded-md transition-colors text-sm xl:text-base font-medium ${isActive('/products')}`}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`hover:text-white  hover:bg-red-600 p-2 rounded-md transition-colors text-sm xl:text-base font-medium ${isActive('/about')}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`hover:text-white  hover:bg-red-600 p-2 rounded-md transition-colors text-sm xl:text-base font-medium ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side Icons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Image
              className="w-5 h-5"
              src={assets.search_icon}
              alt="search icon"
              width={20}
              height={20}
            />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-sm lg:text-base">
            <Image
              src={assets.user_icon}
              alt="user icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="hidden lg:inline">Account</span>
          </button>
        </div>

        {/* Mobile Right Side Icons */}
        <div className="flex items-center md:hidden gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Image
              className="w-5 h-5"
              src={assets.search_icon}
              alt="search icon"
              width={20}
              height={20}
            />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Account"
          >
            <Image
              src={assets.user_icon}
              alt="user icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-1"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <Image
              src={assets.menu_icon}
              alt="menu icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* account dropdown */}
          
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <Link href="/" onClick={closeMenu}>
              <Image
                className="w-28 sm:w-32"
                src={assets.logo}
                alt="logo"
                width={128}
                height={40}
              />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col flex-1 p-4 sm:p-6">
            <Link
              href="/"
              onClick={closeMenu}
              className={`py-3 sm:py-4 px-4 text-base sm:text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors border-b border-gray-100 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={closeMenu}
              className={`py-3 sm:py-4 px-4 text-base sm:text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors border-b border-gray-100 ${isActive('/products')}`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`py-3 sm:py-4 px-4 text-base sm:text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors border-b border-gray-100 ${isActive('/about')}`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 sm:py-4 px-4 text-base sm:text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <button className="flex items-center gap-3 w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Image
                src={assets.user_icon}
                alt="user icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-base sm:text-lg font-medium">Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
