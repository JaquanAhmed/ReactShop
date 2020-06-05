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
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
