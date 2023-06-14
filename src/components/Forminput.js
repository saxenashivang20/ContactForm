import React from 'react';
import { TextInput } from 'react-native-paper';

const FormInput = ({ label, value, onChangeText, ...rest }) => (
  <TextInput
    label={label}
    value={value}
    onChangeText={onChangeText}
    mode="outlined"
    style={{ marginBottom: 16 }}
    {...rest}
  />
);

export default FormInput;
