import MovieCard from "../../../components/Card/MovieCard";

async function getData(params) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=395e7cfa60ed93858869b664e028c4fd&language=en-US`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Page(props) {
  const params = await props.params;
  const movie = await getData(params);
  return <MovieCard movie={movie} />;
}
