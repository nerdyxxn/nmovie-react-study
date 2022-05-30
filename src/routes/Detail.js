import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="detail-wrapper">
          <div>{movie.title}</div>
          <img src={movie.medium_cover_image} />
          <div>{movie.summary}</div>
          <div>{movie.genres}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
