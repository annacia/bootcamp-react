import React from 'react';
import { CardDeck, Container, Spinner} from 'reactstrap';

import MovieCard from './../Cards/MovieCard';

class MovieCardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: '',
            loading: true,
            error: false
        }
        this.fillMovies();
    }

    getMovies = async () => {
        this.setState({error: false})
        return await fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(re => re.json())
        .then(result => {
            this.setState({
                loading: false,
            })
            return result
        })
        .catch(error => this.setState({
            error: true,
            loading: false
        }))
    }

    fillMovies = async () => {
        return await this.getMovies()
        .then(movies => {
            return movies.map((m) => 
                <MovieCard
                    key={m.id}
                    title={m.title}
                    description={m.description}
                />
            );
        })
        .then(movielist => {
            this.setState({
                movies: movielist,
            })
        })
    }

    renderList = () => {
        const {movies, error} = this.state
        return (
            <Container id="container-deck">
                <CardDeck className="deck_movies">
                    {error ? "Ocorreu um erro na API" : movies}
                </CardDeck>
            </Container>
        );
    }
    
    render() {
        const {movies, loading} = this.state
        return movies.length ? 
            this.renderList() :
            loading && <Spinner size="sm" color="primary" />
    }
}

export default MovieCardList;