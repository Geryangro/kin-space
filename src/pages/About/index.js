import FullLayout from "layout/FullLayout"

const About = () => {
    const data = `Welcome to KIN Space! We're thrilled to have you here. Nestled in the heart of Jakarta, 
    our space is all about sparking imagination and fostering learning through play. 
    KIN, which stands for Kids Nusantara, is a celebration of Indonesia's rich cultural heritage, designed to captivate young minds and nurture their well-being.
    </br>
    </br>
    At KIN Space, we believe that the best learning happens through experience. 
    That's why our blend of exhibitions, interactive activities, and educational play is crafted to make every visit an adventure. 
    We’re passionate about creating an inclusive, welcoming environment where every child feels inspired and free to explore their creativity.
    </br>
    </br>
    Come join us at KIN Space, where your child's curiosity and imagination can truly soar. 
    Let's learn, play, and discover the wonders of Indonesia's diverse heritage together.`


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
                            <h1 className="text-left font-basicbold text-xl text-kin-text max-w-md leading-[normal] mb-7">
                                Igniting your child’s
                                imagination
                            </h1>
                            <span className="font-basicregular text-kin-text 2xl:max-w-xl xl:max-w-lg block" dangerouslySetInnerHTML={{ __html: data }} />
                            <button className="mt-4 py-1 px-3.5 bg-secondary-main text-white rounded-3xl text-sm mx-auto">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-[40px]" />
            </div>
        </FullLayout>
    );
}

export default About;
