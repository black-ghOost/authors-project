import { useStatus } from '../../context/ContextStatus';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import styles from '../Authors/Authors.module.css';

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
            {favAuthor?.length ? null : <p>No Favorite Author</p>}
        </div>
    );
}

export default FavoriteAuthors;