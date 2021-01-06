import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

//...props = all props
//changes forminput label when typing in values
const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer id = "fic" onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel id = "fil" className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
