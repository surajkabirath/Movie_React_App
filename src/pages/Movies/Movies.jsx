import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/Pagination";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../components/hooks/useGenre";
import Spinner from "../../Spinner/Spinner";
const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchMovies = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genreforURL}`
    );
    // console.log(data)
    setContent(data.results);
    setNumOfPages(data.total_pages);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle gradient__text1">Movies Category</span>

      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
              />
            ))}
        </div>
      )}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
