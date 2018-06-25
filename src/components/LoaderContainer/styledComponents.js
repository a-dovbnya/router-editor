import styled from "styled-components";

export const LoaderWrapp = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .loading-title {
    color: #4d4d4d;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
  .loader {
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    display: block;
  }
`;
