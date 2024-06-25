import FullLayout from "layout/FullLayout"
import { FooterNavigation } from 'layout/DataMenu';

const Contact = () => {
    return (
        <FullLayout>
            <div className="w-full h-full relative grid xl:grid-cols-2 grid-cols-1 gap-5 justify-between items-center 2xl:px-[180px] xl:px-[140px]">
                <div className="absolute top-0 w-full h-full z-0 xl:hidden block">
                    <div className="w-full h-full overflow-hidden">
                        <img className="h-[200px] w-full" src="kin/assest/bg-contact-top.png" alt="kin-frame" />
                    </div>
                </div>
                <div className="flex justify-center xl:mt-0 md:mt-16 2xl:px-[30px] xl:px-[20px] md:px-[80px] px-[40px] relative">
                    <div className="xl:aspect-w-12 xl:aspect-h-12 lg:aspect-w-16 lg:aspect-h-8 md:aspect-w-16 md:aspect-h-8 aspect-w-3 aspect-h-2 w-full h-full rounded-xl overflow-hidden z-10">
                        <iframe
                            title="maps-kin"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2825298566286!2d106.80976570000001!3d-6.226431099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1bcdf7a0027%3A0x8e31624f2c6dbfc1!2sSCBD%20Park!5e0!3m2!1sid!2sid!4v1719288611460!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="w-full h-full relative flex items-center md:px-[80px] px-[40px] z-10 xl:pb-0 pb-16">
                    <div className=" overflow-hidden w-full">
                        <div className="text-left animate__animated animate__fadeInUp xl:pb-0">
                            <h1 className="text-left font-basicbold text-xl text-kin-text max-w-md leading-[normal] mb-7">
                                Find Us
                            </h1>
                            <div className="flex xl:flex-col md:flex-row flex-col justify-between">
                                <div>
                                    <h2 className="text-left font-basicbold text-base text-kin-text max-w-md leading-[normal] mb-3">
                                        Hours & Location
                                    </h2>
                                    <span className="font-basicregular text-kin-text block">
                                        SCBD Park</span>
                                    <span className="font-basicregular text-kin-text max-w-[310px] block">
                                        Jl. Jend. Sudirman kav 52-53 No.LOT 7A2,
                                        Kec. Kebayoran Baru, Daerah Khusus Ibukota
                                        Jakarta 12190
                                    </span>
                                    <span className="mt-2 font-basicregular text-kin-text block">
                                        Everyday<br />
                                        9:00 am - 8:30 pm
                                    </span>
                                </div>
                                <div className="">
                                    <h2 className="mt-3 text-left font-basicbold text-base text-kin-text max-w-md leading-[normal] mb-3">
                                        Contact Us
                                    </h2>
                                    <span className="font-basicregular text-kin-text block">
                                        WA: +62 877-7688-6880
                                    </span>
                                    <div className="mt-2 flex flex-row gap-2 text-kin-text items-center">
                                        {FooterNavigation.social.map((item, idx) => {
                                            return (
                                                <a href={item.href} key={idx}>
                                                    {item.icon}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 h-full z-0 xl:block hidden">
                    <div className="w-full h-full overflow-hidden">
                        <img className="h-full w-auto animate__animated animate__slideInRight animate__slow" src="kin/assest/bg-contact.png" alt="kin-frame" />
                    </div>
                </div>
                <div className="h-[40px] lg:hidden block" />
            </div>
        </FullLayout>
    );
}

export default Contact;
