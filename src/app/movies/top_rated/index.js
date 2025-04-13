import MovieUi from "@/components/Ui/MovieUi";
async function getData(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=395e7cfa60ed93858869b664e028c4fd&language=en&page=${page}`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to Fetch the Api");
  }
  return res.json();
}
export default async function Page({}) {
  let page = 1;
  const now_playing = await getData(page);
  // console.log(now_playing, "whole data");
  return (
    <>
      <MovieUi content={now_playing} page={1} />
    </>
  );
}
