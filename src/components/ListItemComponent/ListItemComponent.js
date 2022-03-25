import styles from './ListItemComponent.module.css';

function ListItemComponent({author}) {
    console.log('props.............', author);
    return (
        <div>
            {author?.name}
        </div>
    );
}

export default ListItemComponent;