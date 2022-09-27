import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constant";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          key={category.name}
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "#000",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "10px",
            }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
