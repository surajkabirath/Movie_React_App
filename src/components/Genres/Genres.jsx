import { Chip } from "@material-ui/core";
import { DeleteOutlined, } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genre.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]); // unmounting
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{
            margin: 3,
            background:
              "linear-gradient(89.97deg, #29466b 1.84%, #924e81 102.67%)",
            color: "white",
            fontWeight: 700,
            width: "inherit",
            height: 32,
          }}
          deleteIcon={
            <DeleteOutlined
              style={{
                color: "#fff",
                fontSize: 30,
                background: "black",
                borderRadius: "50%",
                height: 25,
                width: 25,
              }}
            />
          }
          label={genre.name}
          key={genre.id}
          variant="outlined"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => [
        <Chip
          style={{
            margin: 3,
            background:
              "linear-gradient(89.97deg, #2772d4 1.84%, #f60cbc 102.67%)",
            color: "white",
            fontWeight: 700,
          }}
          label={genre.name}
          onClick={() => handleAdd(genre)}
        />,
      ])}
    </div>
  );
};

export default Genres;
