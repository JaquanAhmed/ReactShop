import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

//button used where ever a button is needed
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
