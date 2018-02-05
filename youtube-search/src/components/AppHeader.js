//a stateless header component
import React from 'react';
import { Header } from 'react-native-elements';

// use props to separte content from style
const AppHeader = (props) => (
    <Header
      centerComponent={{ text: props.headerText, style: { color: '#fff' } }}
      outerContainerStyles={{ backgroundColor: '#E62117' }}
    />
  );


export default AppHeader;
