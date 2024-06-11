import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { IconX, IconAlignRight } from '@tabler/icons-react';
import {
  LinkPageDataLeft,
  LinkPageDataRight,
  LinkPageDataFull,
  FooterNavigation,
} from './DataMenu';

const navigationLeft = LinkPageDataLeft;
const navigationRight = LinkPageDataRight;
const navigationFull = LinkPageDataFull;

const HeaderPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const location = useLocation();

  // const goToLogin = () => {
  //   window.location.href = 'https://loanly-front.pages.dev/login';
  // };

  return (
    <header>
      <nav className="hidden md:flex items-center justify-between py-3 md:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden md:flex md:gap-x-12">
            {navigationLeft.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="xl:text-sm text-base font-basicsemibold leading-6 text-kin-text">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <IconAlignRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="/" className="">
          <span className="sr-only">Your Company</span>
          <img className="h-9 w-auto" src="kin/assest/logo.png" alt="" />
        </a>
        <div className="flex flex-1 justify-end">
          <div className="hidden md:flex md:gap-x-12">
            {navigationRight.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="xl:text-sm text-base font-basicsemibold leading-6 text-kin-text">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <nav
        className="flex md:hidden items-center justify-between px-6 py-3 z-30 relative bg-kin-textsecondary"
        aria-label="Global">
        <a href="/" className="">
          <span className="sr-only">Your Company</span>
          <img className="h-9 w-auto" src="kin/assest/logo.png" alt="" />
        </a>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-kin-text"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <IconAlignRight className="h-9 w-9" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed top-0 left-0 right-0 z-30 w-full overflow-y-auto bg-primary-main px-6 pt-6 pb-12 rounded-br-[80px]">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-9 w-auto" src="kin/assest/logo-svg.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-kin-textsecondary"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <IconX className="h-9 w-9" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 space-y-2 flex flex-col justify-center items-center">
            {navigationFull.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-2xl font-basicsemibold leading-7 text-kin-textsecondary">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center mt-8 gap-3 text-kin-textsecondary max-w-xs mx-auto">
            {FooterNavigation.social.map((item, idx) => (
              <a key={idx} href={item.href}>
                {item.icon_mobile}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default HeaderPage;
