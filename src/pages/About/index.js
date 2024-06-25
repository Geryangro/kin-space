import FullLayout from "layout/FullLayout"

const About = () => {
    const data = `KiN is an ode to Nusantara, where Indonesia’s rich culture inspires the space, activity and the brand’s roots. 
    It is our mission to captivate young minds and nurture well-being through Indonesian culture. 
    We blend education with imagination, offering a gateway to explore the wonders of Nusantara.
    </br>
    </br>
    KiN Space is located in SCBD Park, Jakarta. This family space offers a unique blend of exhibition, play, learning, gallery-retail, and also a cozy cafe. 
    We also have an additional space for all to enjoy, and that is our reading space. 
    It is a little nook where kids can play and enjoy free reading time.`


    return (
        <FullLayout>
            <div className="w-full h-full relative grid xl:grid-cols-2 lg:grid-cols-1 gap-5 justify-between items-center 2xl:px-[180px] xl:px-[140px]">
                <div className="flex justify-center xl:mt-0 md:mt-16  2xl:px-[130px] xl:px-[40px] md:px-[80px] px-[40px] relative">
                    <div className="absolute 2xl:-top-[80px] 2xl:left-[60px] xl:-top-[40px] xl:-left-[20px] md:-top-[80px] md:left-[0px] -top-[75px] -left-[40px] z-20">
                        <div className="w-full h-full">
                            <img className="2xl:h-[230px] xl:h-[230px] lg:h-[250px] md:h-[200px] h-[160px] w-auto" src="kin/assest/about-3.png" alt="kin-frame" />
                        </div>
                    </div>
                    <div className="xl:aspect-w-3 xl:aspect-h-4 md:aspect-w-16 md:aspect-h-6 aspect-w-3 aspect-h-2 w-full h-full rounded-xl overflow-hidden z-10">
                        <img className="object-cover w-full h-full" src="kin/assest/kids1.png" alt="kin-model" />
                    </div>
                    <div className="hidden md:block absolute 2xl:-bottom-[50px] 2xl:right-[60px] xl:-bottom-[70px] xl:-right-5 lg:-bottom-[130px] md:-bottom-[80px] md:right-[50px] z-20">
                        <div className="w-full h-full">
                            <img className="h-[220px] lg:h-[200px] md:h-[130px] w-auto" src="kin/assest/about-2.png" alt="kin-frame" />
                        </div>
                    </div>
                    <div className="md:hidden block absolute -bottom-[60px] right-0">
                        <div className="w-full h-full">
                            <img className="h-[180px] w-auto" src="kin/assest/about-2-mob.png" alt="kin-frame" />
                        </div>
                    </div>
                    <div className="hidden md:block absolute 2xl:-bottom-[50px] 2xl:left-[60px] xl:-bottom-[50px] xl:-left-[20px] xl:top-[auto] md:-top-[50px] md:right-0 -bottom-0 right-0">
                        <div className="w-full h-full">
                            <img className="xl:h-[220px] lg:h-[180px] h-[160px] w-auto" src="kin/assest/about-1.png" alt="kin-frame" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full relative flex items-center md:px-[80px] px-[40px]">
                    <div className=" overflow-hidden">
                        <div className="text-left animate__animated animate__fadeInUp xl:pb-0">
                            <h1 className="text-left font-basicbold text-xl text-kin-text max-w-lg leading-[normal] mb-7">
                                KiN is short for Kids Nusantara
                            </h1>
                            <span className="font-basicregular text-kin-text 2xl:max-w-xl xl:max-w-lg block" dangerouslySetInnerHTML={{ __html: data }} />
                            <a href="/contact">
                                <button className="mt-4 py-1 px-3.5 bg-secondary-main text-white rounded-3xl text-sm mx-auto">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-[40px] lg:hidden block" />
            </div>
        </FullLayout>
    );
}

export default About;
