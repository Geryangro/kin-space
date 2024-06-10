import { IconBrandWhatsapp, IconBrandGoogleFilled, IconBrandInstagram } from '@tabler/icons-react';

export default function FooterPage() {
  return (
    <footer className="md:block hidden">
      <nav className="flex items-center justify-between py-3 md:px-8">
        <div className="flex flex-1">
          <div className="hidden md:flex md:gap-x-12">
            <a
              href="/legal"
              className="xl:text-sm text-base font-basicsemibold leading-6 text-kin-text">
              Legal
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-around gap-2 text-kin-text">
          <IconBrandInstagram className="w-6 h-6" />
          <IconBrandGoogleFilled className="w-6 h-6" />
          <IconBrandWhatsapp className="w-6 h-6" />
        </div>
        <div className="flex flex-1 justify-end">
          <a
            href="/privacy-policy"
            className="xl:text-sm text-base font-basicsemibold leading-6 text-kin-text">
            Privacy Policy
          </a>
        </div>
      </nav>
    </footer>
  );
}
