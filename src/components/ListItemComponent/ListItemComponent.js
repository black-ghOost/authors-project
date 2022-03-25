import { useEffect, useState } from 'react';
import { useStatus } from '../../context/ContextStatus';
import styles from './ListItemComponent.module.css';

function ListItemComponent({author}) {
    console.log('props.............', author);
    const {favAuthor, setFavAuthor} = useStatus();
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        const is_exist = favAuthor.find(fav => (fav?._id == author?._id));
        if(is_exist){
            setFavorite(true);
        }
    }, []);
    // console.log('is exist.............', is_exist);
    const handleFavorite = () => {
        const is_exist = favAuthor.find(fav => (fav?._id == author?._id));
        if(!is_exist){
            const arr = favAuthor;
            arr.push(author);
            console.log('arr............', arr);
            setFavAuthor(arr)
            setFavorite(true);
        }else{
            const arr = favAuthor;
            let arrayIndex;
            arr.map((item, index) => {
                if(item?._id == is_exist?._id) arrayIndex = index;
            })
            delete arr[arrayIndex];
            const newArr = [];
            arr.map((item) => {
                if(item) newArr.push(item);
            })
            setFavAuthor(newArr);
            setFavorite(false);
            // localStorage.setItem("wishItems", JSON.stringify(newArr));
        }
    }
    console.log('favorite author', favAuthor);
    return (
        <div className={styles.list__container}>
            <button className={styles.add__button} onClick={handleFavorite}>{favorite ? 'Remove from favorite' : 'Add to favorite'}</button>
            <p>Name: {author?.name}</p>
            <p>Bio: {author?.bio}</p>
        </div>
    );
}

export default ListItemComponent;