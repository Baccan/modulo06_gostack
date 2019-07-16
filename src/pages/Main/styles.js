import styled from 'styled-components/native';

// Sempre se utiliza o nome da tag, e não o elemento
export const Container = styled.View`
  flex: 1;
  padding: 30px;

  /* Isto não funciona no React Native (estilos encadeados) */
  /* Text {} */

  /* Não se pode criar estilos globais */
`;
