import React from 'react';
import { Content } from './styles';
import { HeaderComponent } from '../../Components/Header';
import SideNav from '../../Components/SideNav';

class Home extends React.Component {

//   componentDidMount() {
//  }


  render() {
    return (

      <>

        <HeaderComponent />
        
        <Content>

          <SideNav />
          <SideNav />

        </Content>

      </>

    );
  }


}

export default Home
