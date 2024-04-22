import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import profile from '../../../../public/profile.png'
import Image from 'next/image';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Profile Image */}
      <button onClick={toggleDropdown}>
        <Image
          src={profile} // Placeholder image for the profile
          alt="Profile"
          width="50"
          height="50"
          className="rounded-full hover:border hover:border-gray-800 "
        />
      </button>

      {/* Dropdown Menu */}
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute right-0 mt-2 w-25 mr-2 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li className=''>
              <Link href="/pages/login">
                <button onClick={toggleDropdown} className="block px-4 py-2 w-30 text-gray-800 hover:bg-gray-200 hover:w-30">
                  Login  
                </button>
              </Link>
            </li>
            <li>
              <Link href="/pages/register">
                <button onClick={toggleDropdown} className="block px-4 w-30 py-2 text-gray-800 hover:bg-gray-200">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default ProfileDropdown;
