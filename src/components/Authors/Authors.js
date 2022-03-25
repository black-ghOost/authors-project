import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import styles from './Authors.module.css';

function Authors(props) {
    const [authors, setAuthors] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [totalItems, setTotalItems] = useState(1);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://api.quotable.io/authors?page=${page}`);
            console.log('res...................', res?.data);
            setTotalPage(res?.data?.totalPages);
            setAuthors(res?.data?.results);
            setTotalItems(res?.data?.totalCount);
        })()
    }, [page])

    console.log('totalpages...............', page);

    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '20px 0px'}}>Authors</h2>
            <div  className={styles.authors__container}>
                {
                    authors?.map((author) => (
                        <ListItemComponent author={author} />
                    ))
                }
            </div>
            <div style={{textAlign: 'center', marginBottom: '30px', marginTop: '20px'}}>
                <Pagination current={page} total={totalItems} pageSize={authors?.length} onChange={(page) => setPage(page)} />
            </div>
        </div>
    );
}

export default Authors;