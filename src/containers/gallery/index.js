import React, {Component} from 'react';
import HomePage from '../../components/home/home_page';
import GalleryPage from '../../components/gallery';
import NavigationPage from '../../components/home/navigation';
class Home extends Component {


    render() {
      return (
        <div>
          <NavigationPage />
          <div>
            <GalleryPage />
            <HomePage />
          </div>
        </div>
      );
    }
}

export default Home;
