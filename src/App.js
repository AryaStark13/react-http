import './App.css';
import GetRequest from './Components/GetRequest';
import PostForm from './Components/PostForm';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get" element={<GetRequest />} />
          <Route path="/post" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
