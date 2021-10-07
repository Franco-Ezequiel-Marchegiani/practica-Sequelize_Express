const db = require("../database/models");

const movies = {
  list: (req, res) => {
    db.Movie.findAll().then((respuesta) => {
      res.render("moviesList", { movies: respuesta });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((respuesta) => {
      res.render("moviesDetail", { movie: respuesta });
    });
  },
  new: (req, res) => {
    const orderBy = { order: [["release_date", "DESC"]] };
    db.Movie.findAll(orderBy).then((respuesta) => {
      res.render("moviesList", { movies: respuesta });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({ order: [["rating", "DESC"]] }).then((resultado) => {
      res.render("recommendedMovies", { movies: resultado });
    });
  },
};

module.exports = movies;
