import * as React from 'react';

const SvgPyramid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="currentColor"
      d="M501.221 410.668 270.539 8.423a16.757 16.757 0 0 0-29.078 0L10.779 410.668a16.761 16.761 0 0 0 9.28 24.251l230.682 76.234a16.769 16.769 0 0 0 10.518 0l230.682-76.234a16.761 16.761 0 0 0 9.28-24.251zm-261.981 61.38L78.731 419.005l160.509-53.044v106.087zm0-141.389L61.647 389.348 239.24 79.675v250.984zm33.519 141.39V365.962h.001l160.508 53.044-160.509 53.043zm.001-141.39V79.675l177.592 309.673-177.592-58.689z"
    />
  </svg>
);

export default SvgPyramid;
