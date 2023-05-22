import {
  Button,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/Pagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./search.css";
import Spinner from "../../Spinner/Spinner";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const[isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchSearch = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      setTimeout (()=>{
        setIsLoading(false)
      },1000)
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <span className="pageTitle gradient__text1">
        Find Your favourite Movies/Series
      </span>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <input
            placeholder="search..."
            type="text"
            className="searchBox"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <Button
            variant="contained"
            style={{
              marginLeft: 10,
              background: "#053f9c",
              color: "#fff",
              fontSize: 100,
            }}
            onClick={fetchSearch}
          >
            <SearchRounded />
          </Button>
        </div>
      </ThemeProvider>
      {isLoading ? (<Spinner/>):(
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      )}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
