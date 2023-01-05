import React, { ReactElement, ReactNode } from "react";

const IcPerson = ({ color }: { color?: string }): ReactElement => (
  <svg
    width='22px'
    height='22px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4Z'
      fill={color || "#000000"}
    />
    <path
      d='M4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z'
      fill={color || "#000000"}
    />
  </svg>
);

export default IcPerson;
