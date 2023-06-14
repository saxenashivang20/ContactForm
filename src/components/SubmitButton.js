import React from 'react';
import { Button } from 'react-native-paper';

const SubmitButton = ({ onPress }) => (
  <Button mode="contained" onPress={onPress} style={{ marginTop: 8 }}>
    Submit
  </Button>
);

export default SubmitButton;
