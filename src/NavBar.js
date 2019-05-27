import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 10)}
      css={css`
        background-color: ${colors.noColor};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        aria-label="logo"
        role="img"
        css={css`
          font-size: 60px;
          border: 1px solid ${colors.noColor};
          display: inline-block;

          &:hover {
            animation: 2s ${spin} linear infinite;
          }
        `}
      >
        😻
      </span>
    </header>
  );
};

export default NavBar;
