import React, { ReactElement, ReactNode } from "react";

const IcRightArrow = ({
  isDisabled,
}: {
  isDisabled: boolean;
}): ReactElement => (
  <svg
    width='100px'
    height='100px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='style=stroke'>
      <g id='arrow-short-right'>
        <path
          id='vector (Stroke)'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.20554 4.48407C7.92066 4.78477 7.93349 5.25947 8.23419 5.54434L14.0905 11.0924C14.6109 11.5855 14.6109 12.4143 14.0905 12.9073L8.2342 18.4554C7.9335 18.7403 7.92067 19.215 8.20554 19.5157C8.49041 19.8164 8.96511 19.8292 9.26581 19.5443L15.1221 13.9962C16.2671 12.9116 16.2671 11.0882 15.1221 10.0035L9.26581 4.45541C8.96511 4.17054 8.49041 4.18337 8.20554 4.48407Z'
          fill={isDisabled ? "rgba(239, 239, 239, 0.3)" : "#fff"}
        />
      </g>
    </g>
  </svg>
);

export default IcRightArrow;
