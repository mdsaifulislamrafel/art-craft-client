import  { useState } from 'react';

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://images.pexels.com/photos/6694746/pexels-photo-6694746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "How Pottery Works", des: "Working with pottery clay is a hands-on experience" }, { img: "https://images.pexels.com/photos/5566936/pexels-photo-5566936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Marye Audet, Planet Green", des: "homesteading diva like me, and I don't like that they often don't last more than a year or so. There has to be something better." }, { img: "https://images.pexels.com/photos/3094036/pexels-photo-3094036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Carrie Whitney, Ph.D.", des: "Old terracotta pots just seem to get better with age." }, { img: "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "What Is Porcelain, and Why Has It Been Cherished For Centuries?", des: "The Meiyintang Chenghua Chicken Cup fetched $36 million at a 2014 " }];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="w-full h-60 sm:h-96 md:h-[550px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})` }}>
            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>
            {/* text container here */}
            <div className="w-1/2 mx-auto text-center flex flex-col  items-center px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="lg:text-3xl mb-3 font-bold">{sliders[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base font-semibold lg:text-lg">{sliders[currentSlider].des}</p>
            </div>
            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img key={inx} src={slide.img}
                            className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;