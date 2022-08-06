import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>

      <BrowserRouter>
        <Routes>
          < Route exact path="/" element={<Login authService={authService} />} />
          <Route exact path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
