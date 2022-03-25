import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './App.module.css';
import Authors from './components/Authors/Authors';
import FavoriteAuthors from './components/FavoriteAuthors/FavoriteAuthors';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className={styles.main__grid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Authors />} />
            <Route path="authors" element={<Authors />} />
            <Route path="favorite-authors" element={<FavoriteAuthors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
