import styles from './ListItemComponent.module.css';

function ListItemComponent({author}) {
    console.log('props.............', author);
    return (
        <div className={styles.list__container}>
            <p>Name: {author?.name}</p>
            <p>Bio: {author?.bio}</p>
        </div>
    );
}

export default ListItemComponent;