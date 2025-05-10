import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.png'

const navigation = [
    { name: 'About Us', to: '/about' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky inset-x-0 top-0 z-50 bg-white border-b border-baltic-200 font-montserrat">
        <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-20 ">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                alt=""
                src={myLogo}
                className="h-16 w-auto "
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-md/6 font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/register" className="bg-baltic-950 py-3 px-6 text-white rounded-4xl text-sm/6 font-semibold hover:bg-violet-700">
              Register Now !
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={myLogo}
                  className="h-18 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center -mx-3 rounded-4xl px-3 py-2.5 text-base/7 font-semibold bg-gray-950 text-white hover:bg-violet-700"
                  >
                    Register Now !
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    );
};

export default Navbar;