import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    allbeer: [],
  };

  componentDidMount = async () => {
    try {
      await axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          this.setState({ ...response.data });
          console.log(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        {this.state.allbeer.map((beers) => {
          return (
            <div class="card" style="width: 18rem;">
              <img src={beers.image_url} class="card-img-top" alt="Beer" />
              <div class="card-body">
                <h5 class="card-title">{beers.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
