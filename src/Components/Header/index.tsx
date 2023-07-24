import React from 'react';
import { Body, Header, TopHeader } from './styles';

export class HeaderComponent extends React.Component {
  state = {
    header: 'Welcome to React Hooks'
  }

  componentDidMount() {
 }


  render() {
    return (

        <Body>

          <TopHeader />
          <Header />
            
        </Body>
        
    );
  }


}

export default HeaderComponent
