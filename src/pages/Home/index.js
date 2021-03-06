import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './home.css';

class Home extends Component {
  constructor(){
    super();
    this.state = {
        movies: []
    }
  this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }   

  loadMovies() {
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
        this.setState({movies: json});
        console.log('json', json)
    })
  }

  render(){
    return(
      <div className="container">
        <div className="list-movies">
          { this.state.movies.map((movie) => {
            return(
              <article key={ movie.id }>
                <strong>{ movie.nome } </strong>
                <img src={ movie.foto } alt="Capa" />
                <Link to={`/movie/${movie.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;