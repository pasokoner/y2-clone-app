import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";

import { SideBar, Videos } from "../components/index";

import { fetchFromAPI } from "../utils/fetchFromAPI";

type Props = {};

const Feed = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 Fhero Asilo
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
