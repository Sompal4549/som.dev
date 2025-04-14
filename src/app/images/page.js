// import Testimonial from "../../components/Sliders/Testimonial";
//imports
import { createApi } from "unsplash-js";
import ImagesUi from "../../components/ui/ImagesUi.js";

/**
 *
 */
// async function getData() {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/movie/now_playing?api_key=395e7cfa60ed93858869b664e028c4fd&language=en&page=1",
//     { cache: "force-cache" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
async function Movies() {
  return (
    <>
      <div style={{ maxWidth: 1250, width: "100%", margin: "0 auto" }}>
        {/* <Testimonial movies={data?.results} /> */}
        <ImagesUi />
      </div>
    </>
  );
}
export default Movies;
