import React from "react";

import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard, Loader } from "./index";

type Props = {
  videos: any[];
  direction?: string;
};

const Videos = ({ videos, direction }: Props) => {
  if (!videos?.length) return <Loader />;
  if (direction === "column") {
    return (
      <Stack direction="column" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, i) => (
          <Box key={i}>
            <Box>{item.id.channelId && <ChannelCard channelDetail={item} />}</Box>
            <Box>{item.id.videoId && <VideoCard video={item} />}</Box>
          </Box>
        ))}
      </Stack>
    );
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, i) => (
        <Box key={i}>
          <Box>{item.id.channelId && <ChannelCard channelDetail={item} />}</Box>
          <Box>{item.id.videoId && <VideoCard video={item} />}</Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
