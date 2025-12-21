'use client'
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FiUser, FiShoppingCart, FiHeart, FiLogIn } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return pathname === path
      ? 'text-white bg-red-600 shadow-md'
      : 'text-gray-700 hover:text-white hover:bg-red-600'
  }

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 py-3 sm:py-4 border-b border-gray-200 text-gray-700 bg-white sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 transition-transform hover:scale-105"
        >
          <Image
            className="cursor-pointer w-24 sm:w-28 md:w-32 h-auto"
            src={assets.logo}
            alt="logo"
            width={128}
            height={40}
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base font-medium ${isActive(
              '/',
            )}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base font-medium ${isActive(
              '/products',
            )}`}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base font-medium ${isActive(
              '/about',
            )}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm xl:text-base font-medium ${isActive(
              '/contact',
            )}`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side Icons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Link
            href="/wishlist"
            className="p-2.5 hover:bg-gray-100 rounded-full transition-colors relative group"
            aria-label="Wishlist"
          >
            <FiHeart className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              0
            </span>
          </Link>
          <Link
            href="/cart"
            className="p-2.5 hover:bg-gray-100 rounded-full transition-colors relative group"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              0
            </span>
          </Link>
          {/* login button */}
          <Link
            href="/login"
            className="px-4 py-2 d-flex rounded-lg transition-all duration-200 text-sm xl:text-base font-medium text-white bg-red-600 flex items-center gap-2"
          >
            <FiLogIn className="w-5 h-5 text-white" />
            Login
          </Link>
          
          {/* Account Dropdown */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-sm lg:text-base font-medium">
              <FiUser className="w-5 h-5 text-gray-700" />
              <span className="hidden lg:inline text-gray-700">Account</span>
              <svg
                className="w-4 h-4 text-gray-500 hidden lg:inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg border border-gray-200 outline-none overflow-hidden"
            >
              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/profile"
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        focus
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/my-orders"
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        focus
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      My Orders
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/wishlist"
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        focus
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                
                  }`}
                    >
                      Wishlist
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/setting"
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        focus
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <div className="border-t border-gray-200 my-1"></div>
                <MenuItem>
                  {({ focus }) => (
                    <button
                      type="button"
                      className={`block w-full text-left px-4 py-2.5 text-sm text-red-600 transition-colors ${
                        focus ? 'bg-red-50 text-red-700' : 'hover:bg-red-50'
                      }`}
                    >
                      Sign Out
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>

        {/* Mobile Right Side Icons */}
        <div className="flex items-center md:hidden gap-2">
          <Link
            href="/wishlist"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            aria-label="Wishlist"
          >
            <FiHeart className="w-5 h-5 text-gray-700" />
          </Link>
          <Link
            href="/cart"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="w-5 h-5 text-gray-700" />
          </Link>
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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
            <Link
              href="/"
              onClick={closeMenu}
              className="transition-transform hover:scale-105"
            >
              <Image
                className="w-32"
                src={assets.logo}
                alt="logo"
                width={128}
                height={40}
              />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
          <nav className="flex flex-col flex-1 p-4 overflow-y-auto">
            <Link
              href="/"
              onClick={closeMenu}
              className={`py-4 px-5 text-base font-medium rounded-lg transition-all duration-200 mb-2 ${
                pathname === '/'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={closeMenu}
              className={`py-4 px-5 text-base font-medium rounded-lg transition-all duration-200 mb-2 ${
                pathname === '/products'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`py-4 px-5 text-base font-medium rounded-lg transition-all duration-200 mb-2 ${
                pathname === '/about'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`py-4 px-5 text-base font-medium rounded-lg transition-all duration-200 mb-2 ${
                pathname === '/contact'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            {/* Login */}
            <Link
            href="/login"
            className="px-4 py-2 d-flex rounded-lg transition-all duration-200 text-sm xl:text-base font-medium text-white bg-red-600 flex items-center gap-2"
          >
            <FiLogIn className="w-5 h-5 text-white" />
            Login
          </Link>
            {/* My Account */}
            <Menu as="div" className="relative w-full">
              <MenuButton className="flex items-center gap-3 w-full py-3 px-4 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-sm">
                <FiUser className="w-5 h-5 text-gray-700" />
                <span className="text-base font-medium text-gray-700 flex-1 text-left">
                  My Account
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </MenuButton>

              <MenuItems
                transition
                className="absolute bottom-full left-0 mb-2 w-full origin-bottom rounded-lg bg-white shadow-lg border border-gray-200 outline-none overflow-hidden z-10"
              >
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/profile"
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          focus
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Profile
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/my-orders"
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          focus
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        My Orders
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/wishlist"
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          focus
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Wishlist
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/setting"
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          focus
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Settings
                      </Link>
                    )}
                  </MenuItem>
                  <div className="border-t border-gray-200 my-1"></div>
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        type="button"
                        onClick={closeMenu}
                        className={`block w-full text-left px-4 py-2.5 text-sm text-red-600 transition-colors ${
                          focus ? 'bg-red-50 text-red-700' : 'hover:bg-red-50'
                        }`}
                      >
                        Sign Out
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
