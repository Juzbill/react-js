import { InputBase, alpha, styled } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export interface ISearchProps {
  className?: string | undefined;
}

function SearchComponent({ className }: ISearchProps) {
  return (
    <div className={` relative h-full ${className}`}>
      <Search className="w-full">
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#B3B3B3" }} />
        </SearchIconWrapper>
        <StyledInputBase
          className="text-sm"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
}
export default SearchComponent;
