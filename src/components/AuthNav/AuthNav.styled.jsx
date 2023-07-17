import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const AuthLink = styled(NavLink)`
  padding: 4px;
  margin: 8px;
  color: #E7E9FC;

  &.active {
    color: #DAB600;
    font-weight: 500;
  }
`;