import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoList from './TodoList';

const GlobalStyle = createGlobalStyle`

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );

}

export default App;
