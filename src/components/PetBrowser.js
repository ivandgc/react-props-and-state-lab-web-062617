import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {



  render() {

    return (
      <div className="ui cards">
        {this.props.pets.map((petInfo, index) => <Pet key={index} pet={petInfo} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(petInfo.id)} />)}
      </div>
    );
  }
}

export default PetBrowser;
