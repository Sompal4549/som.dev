// import Testimonial from "../../components/Sliders/Testimonial";
import Testimonial from "../../components/Sliders/Testimonial";
async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=395e7cfa60ed93858869b664e028c4fd&language=en&page=1",
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function Movies() {
  const data = await getData();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div style={{ maxWidth: 1250, width: "100%", margin: "0 auto" }}>
        <Testimonial movies={data?.results} />
      </div>
    </>
  );
}
export default Movies;
