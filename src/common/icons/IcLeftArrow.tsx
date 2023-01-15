import React, { ReactElement, ReactNode } from "react";

const IcLeftArrow = ({ isDisabled }: { isDisabled: boolean }): ReactElement => (
  <svg
    width='100px'
    height='100px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='style=stroke'>
      <g id='arrow-short-left'>
        <path
          id='vector (Stroke)'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.7753 4.48419C16.0602 4.78489 16.0473 5.25959 15.7466 5.54447L9.89032 11.0926C9.36989 11.5856 9.36989 12.4144 9.89032 12.9074L15.7466 18.4555C16.0473 18.7404 16.0602 19.2151 15.7753 19.5158C15.4904 19.8165 15.0157 19.8293 14.715 19.5445L8.8587 13.9964C7.71376 12.9117 7.71377 11.0883 8.8587 10.0036L14.715 4.45554C15.0157 4.17066 15.4904 4.18349 15.7753 4.48419Z'
          fill={isDisabled ? "rgba(239, 239, 239, 0.3)" : "#fff"}
        />
      </g>
    </g>
  </svg>
);

export default IcLeftArrow;
