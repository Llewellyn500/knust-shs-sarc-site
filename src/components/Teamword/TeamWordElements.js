// color used #ffc107

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 1200px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: linear-gradient(
    108deg,
    rgba(227, 171, 5, 1) 0%,
    rgba(255, 193, 7, 1) 100%
  );
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 20px;
  text-decoration: none;
  position: fixed;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
