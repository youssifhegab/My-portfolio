import React, { ReactElement, ReactNode } from "react";

const IcMail = ({ color }: { color?: string }): ReactElement => (
  <svg
    fill={color || "#000000"}
    height='18px'
    width='18px'
    version='1.1'
    id='Filled_Icons'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 24 24'
    enableBackground='new 0 0 24 24'
    xmlSpace='preserve'
  >
    <g id='mail-filled'>
      <path d='M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z' />
    </g>
  </svg>
);

export default IcMail;
