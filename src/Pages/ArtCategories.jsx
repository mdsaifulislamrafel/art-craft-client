import { useEffect, useState } from 'react';
import { url } from '../utility/url';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const ArtCategories = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`${url}/category`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-2xl my-10 text-center underline md:text-5xl text-[#4A8DF5] font-bold">Art & Craft <Typewriter words={['Categories']} delaySpeed={1000} typeSpeed={100} cursor enabled loop={0} /></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    category.slice(0, 6)?.map(item => <div data-aos="fade-up" data-aos-duration="3000"  key={item._id} className="w-full mx-auto space-y-6 rounded-2xl bg-[#e9d5ff] px-6 py-4 shadow-md  md:w-[500px]">
                        {/* Card Image */}
                        <Link to={`/categories/${item.subcategory}`} > <img width={350} height={190} className="h-[250px] w-full rounded-2xl bg-gray-400" src={item.image} alt="card navigate ui" />
                        {/* Card Heading */}
                        <div className="space-y-2">
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">{item.subcategory}</h2>
                        </div>
                        {/* Price and action button */}
                        <button className="rounded-lg mt-4 bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">See more</button></Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ArtCategories;