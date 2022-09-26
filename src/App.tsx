import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/searchTerm/:id" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
