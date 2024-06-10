import FullLayout from "layout/FullLayout"

const Home = () => {
    return (
        <FullLayout>
            <div className="w-full h-full relative flex justify-center items-center">
                <div className="absolute top-0 xl:left-[90px] lg:left-[10px] md:left-0">
                    <div className="w-full h-full overflow-hidden">
                        <img className="xl:h-[220px] lg:h-[170px] md:h-[180px] w-auto animate__animated animate__slideInDown animate__slow" src="kin/assest/bird.png" alt="" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 hidden md:block">
                    <div className="w-full h-full relative">
                        <img className="xl:h-[170px] lg:h-[140px] md:h-[110px] w-auto" src="kin/assest/ranting.png" alt="" />
                        <div className="absolute bottom-0 xl:top-[145px] xl:right-[100px] lg:top-[130px] lg:right-[90px] md:top-[100px] md:right-[80px]">
                            <img className="xl:h-[350px] lg:h-[250px] md:h-[180px] w-auto animate__animated animate__shakeY animate__slow" src="kin/assest/orang-utan.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center gap-3">
                    <span className="font-basicregular text-lg text-kin-text tracking-widest">OPENING SOON</span>
                    <h1 className="font-basicbold text-3xl text-kin-text lg:max-w-2xl md:max-w-lg max-w-xs leading-[normal] animate__animated animate__fadeInUp">
                        Inspiring Young Minds Through Play
                    </h1>
                    <button className="mt-3 md:py-1.5 py-2 px-3.5 bg-primary-main text-white rounded-3xl text-sm mx-auto">
                        LEARN MORE
                    </button>
                </div>
                <div className="absolute bottom-0 left-0">
                    <div className="w-full h-full overflow-hidden">
                        <img className="xl:h-[400px] lg:h-[300px] md:h-[330px] h-[280px] w-auto animate__animated animate__slow animate__lightSpeedInLeft" src="kin/assest/komodo.png" alt="" />
                    </div>
                </div>
                <div className="absolute md:block lg:hidden hidden right-0 bottom-[20px]">
                    <div className="w-full h-full overflow-hidden">
                        <img className="h-[270px] w-auto animate__animated animate__fadeInRight animate__slow" src="kin/assest/fish2.png" alt="" />
                    </div>
                </div>
                <div className="absolute bottom-0 xl:right-[350px] lg:right-[80px] lg:block md:hidden hidden">
                    <div className="w-full h-full overflow-hidden">
                        <img className="xl:h-[210px] lg:h-[140px] md:h-[180px] w-auto animate__animated animate__fadeInUp animate__slow" src="kin/assest/fish.png" alt="" />
                    </div>
                </div>
            </div>
        </FullLayout>
    );
}

export default Home;
