import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

//controls what is displayed on homepage
const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
