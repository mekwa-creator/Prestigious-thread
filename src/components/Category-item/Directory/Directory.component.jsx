import CategoryItem from '../category-item.component';
import './Directory.styles.scss';
const Directory = ({Categories}) => {
    return (
        <div className='Directory-container'>
            {Categories.map((category) =>(
               <CategoryItem key={category.id} category={category}/> 
            ))}


        </div>
    );
};

export default Directory