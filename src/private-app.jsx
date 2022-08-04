import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Side } from './components/sidebar';
import { Footer } from './components/footer';
import All from './pages/all/all';
import Design from './pages/design/design';
import Ux from './pages/ux/ux';
import Ui from './pages/ui/ui';
import { Error } from './pages/error';
import Typograph from './pages/typography/typography';
import SinglePage from './pages/single-page/single-page';

export const PrivateApp = () => {
  return (
    <div className="App">
      <div>
        <div className="container">
          <div className="d-flex">
            <Side />
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<All />} />
                <Route path="/all" element={<All />} />
                <Route path="/design" element={<Design />} />
                <Route path="/ux" element={<Ux />} />
                <Route path="/ui" element={<Ui />} />
                <Route path="/typo" element={<Typograph />} />
                <Route path="*" element={<Error />} />
                <Route path={`/post/:postId`} element={<SinglePage />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
