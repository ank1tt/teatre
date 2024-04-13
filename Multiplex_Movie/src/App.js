// import "./App.css";
// import NavigationBar from "./js/components/NavigationBar";
// import Header from "./js/components/Header";
// import "./sass/main.scss";
// // import duneImg from "./assets/images/trending/dune.jpg";
// import CardMovieList from "./js/components/CardMovieList";
// import trendingData from "./data/trendings";
// import superherosData from "./data/superheros";
// import Footer from "./js/components/footer";

// function App() {
//   return (
//     <>
//       <section id="myBg">
//         <NavigationBar />
//         <Header />
//       </section>

//       <section id="trending">
//         <div className="container py-5">
//           <h1 className="mb-4  text-gold">Trending Movies</h1>
//           <CardMovieList movies={trendingData} />
//         </div>
//       </section>

//       <section id="superhero">
//         <div className="container py-5">
//           <h1 className="mb-4  text-gold">Super Hero Movies</h1>
//           <CardMovieList movies={superherosData} />
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./js/components/NavigationBar";
import Header from "./js/components/Header";
import "./sass/main.scss";
import CardMovieList from "./js/components/CardMovieList";
import trendingData from "./data/trendings";
import superherosData from "./data/superheros";
import Footer from "./js/components/footer";
import DetailsPage from "./js/components/DetailsPage"; // import your DetailsPage component

function App() {
  return (
    <Router>
      <section id="myBg">
        <NavigationBar />
        <Header />
      </section>

      <Route path="/details/:id">
        <DetailsPage />
      </Route>
      <Route exact path="/">
        <>
          <section id="trending">
            <div className="container py-5">
              <h1 className="mb-4 text-gold">Trending Movies</h1>
              <CardMovieList movies={trendingData} />
            </div>
          </section>

          <section id="superhero">
            <div className="container py-5">
              <h1 className="mb-4 text-gold">Super Hero Movies</h1>
              <CardMovieList movies={superherosData} />
            </div>
          </section>

          <Footer />
        </>
      </Route>
    </Router>
  );
}

export default App;
