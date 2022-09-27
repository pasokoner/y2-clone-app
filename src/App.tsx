import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#000",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
