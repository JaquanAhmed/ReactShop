import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

//the menu items on the homepage
//change each item in the homepage dynamically
//called from directory.component
//uses react router dom to add to the history so the user can go back and forward
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
