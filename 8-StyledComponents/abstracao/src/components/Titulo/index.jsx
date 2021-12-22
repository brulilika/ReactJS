import styled from "styled-components";

//Já atua de forma a aplicar o estilo nos filhos do componente
const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`;
export default Titulo;
