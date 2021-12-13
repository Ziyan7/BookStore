import {
  Grid,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Bookcard from "./Bookcard";
import ReactPaginate from "react-paginate";
import "../style/book.scss";


const Book = () => {
  const myBooks = useSelector((state) => state.allBooks.searchState);

  const lowToHigh = () =>
    myBooks.sort((a, b) => Number(a.price) - Number(b.price));

  const highToLow = () =>
    myBooks.sort((a, b) => Number(b.price) - Number(a.price));

  const numberOfBooks = myBooks.length;
  const [pageNumber, setPageNumber] = useState(0);
  const booksPerPage = 12;
  const pagesVisited = pageNumber * booksPerPage;
  const pageCount = Math.ceil(myBooks.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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
              ({numberOfBooks} items)
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
            <MenuItem onClick={lowToHigh}>price: low to high</MenuItem>
            <MenuItem onClick={highToLow}>price: high to low</MenuItem>
          </Menu>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {myBooks
          .slice(pagesVisited, pagesVisited + booksPerPage)
          .map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={item._id}>
                <Bookcard item = {item} />
              </Grid>
            );
          })}
        ;
      </Grid>
      <ReactPaginate
        previousLabel={<ArrowBackIosNewIcon/>}
        nextLabel={<ArrowForwardIosIcon/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
      />
    </Box>
  );
};

export default Book;
