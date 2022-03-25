import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

function Authors(props) {
    const [authors, setAuthors] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://api.quotable.io/authors?page=${page}`);
            console.log('res...................', res?.data);
            setTotalPage(res?.data?.totalPages);
            setAuthors(res?.data?.results);
        })()
    }, [page])

    console.log('totalpages...............', page);

    return (
        <div>
            {
                authors?.map((author) => (
                    <ListItemComponent author={author} />
                ))
            }
            <div style={{textAlign: 'center'}}>
                <Pagination hideOnSinglePage responsive current={page} total={totalPage} onChange={(page) => setPage(page)} />
            </div>
        </div>
    );
}

export default Authors;