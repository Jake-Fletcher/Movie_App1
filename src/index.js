import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

    const App = () => {
      return (
          <BrowserRouter>
            <div className="jumbotron">
              <SiteHeader />      {/* New Header  */}
              <div className="container-fluid">
              <MoviesContextProvider>
              <GenresContextProvider> 
                <Switch>
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        </Switch>
        </GenresContextProvider>
        </MoviesContextProvider> 
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));