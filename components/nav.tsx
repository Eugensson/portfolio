"use client";

import { Link as ScrollLink } from "react-scroll";

import { links } from "@/constants";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  spy?: boolean;
}

export const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  spy,
}: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map(({ name }) => (
          <li key={name}>
            <ScrollLink
              spy={spy}
              to={name}
              smooth
              className={linkStyles}
              activeClass="active"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
