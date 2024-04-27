
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const CategoriesCard = () => {
    const data = useLoaderData();
    
    return (
        <div className='grid  grid-cols-1 gap-4 md:gap-10 md:grid-cols-3 lg:grid-cols-4'>
            {
                data.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default CategoriesCard;