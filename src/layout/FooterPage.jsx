import { FooterNavigation } from './DataMenu';

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
          {FooterNavigation.social.map((item, idx) => {
            return (
              <a href={item.href} key={idx}>
                {item.icon}
              </a>
            );
          })}
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
