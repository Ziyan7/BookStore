import {
  Grid,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Pagination
} from "@mui/material";
import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Bookcard from "./Bookcard";
import ReactPaginate from "react-paginate";
import "../style/book.scss";
import { setAllBooks ,  searchfilteredBooks } from "../action/index";
import {getBooks} from "../service/book.service";
import { useDispatch } from "react-redux";

const Book = ({count}) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const [sortId , setSortId] = useState(0)
const [currentPage , setCurrentPage] = useState(1);
  const myBooks = useSelector((state) => state.allBooks.searchState);

  useEffect(() => {
    getBooks(currentPage, sortId)
      .then((res) => {
        dispatch(searchfilteredBooks(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortId]);

  const handlePagination = ({selected}) => {
    setCurrentPage(selected+1)
    getBooks(selected + 1 , sortId)
      .then((res) => {
        console.log(res.data);
        dispatch(searchfilteredBooks(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleDisplayOrder = (order) => {
  if (order === "low") {
    setSortId(-1);
  } else {
    setSortId(1);
  }
};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="main-container" style={{ padding: "80px 12% 0px 12%" }}>
      <Grid container style={{ paddingBottom: "13px" }}>
        <Grid item xs={6} align="left">
          <Typography id="book-count" style={{ fontSize: "25px" }}>
            Books
            <span
              id="book-count-span"
              style={{ fontSize: "12px", color: "#9D9D9D" }}
            >
              ({count} items)
            </span>
          </Typography>
        </Grid>
        <Grid item xs={6} align="right">
          <Button
            id="sort-by-btn"
            style={{ color: "black", borderColor: "black", fontSize: "60%" }}
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            onMouseOver={handleClick}
          >
            Sort by relevance
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClick={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => {handleDisplayOrder("low")}}>price: low to high</MenuItem>
            <MenuItem onClick={() => handleDisplayOrder("high")}>price: high to low</MenuItem>
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {myBooks
          .map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={item._id}>
                <Bookcard item = {item} key={index} />
              </Grid>
            );
          })}
      </Grid>
      <ReactPaginate
        previousLabel={<ArrowBackIosNewIcon/>}
        nextLabel={<ArrowForwardIosIcon/>}
        pageCount={5}
        onPageChange={handlePagination}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
      />
    </Box>
  );
};

export default Book;
