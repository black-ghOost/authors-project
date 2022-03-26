import { useStatus } from '../../context/ContextStatus';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import styles from '../Authors/Authors.module.css';
import image from '../../assets/not_found.png';

function FavoriteAuthors(props) {
    const {favAuthor, setFavAuthor} = useStatus();
    return (
        <div>
            {favAuthor?.length ? <h2 style={{textAlign: 'center', margin: '20px 0px'}}>Favorite Authors</h2> : null}
            <div  className={styles.authors__container}>
            {
                favAuthor?.map((author) => (
                    <ListItemComponent author={author} />
                ))
            }
            </div>
            {favAuthor?.length ? null : <div  className={styles.not_found}><img src={image} /></div>}
        </div>
    );
}

export default FavoriteAuthors;