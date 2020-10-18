/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Talk = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M0 7.73219C0 3.91114 3.7073 1 8 1C12.292 1 16 3.91111 16 7.73219C16 11.5533 12.2926 14.4638 8 14.4638C7.18244 14.4638 6.37894 14.3614 5.60623 14.1586L1.86829 15.9063L1.86592 15.9075C1.06758 16.2852 0.227629 15.436 0.628554 14.6326L1.89587 12.0902C0.681593 10.8901 0 9.3675 0 7.73219ZM8 2.26741C4.16656 2.26741 1.26316 4.82843 1.26316 7.73219C1.26316 9.11489 1.88946 10.4343 3.08527 11.4671C3.30457 11.6565 3.36755 11.9712 3.23811 12.2309L2.1743 14.365L5.28322 12.9113C5.42179 12.8465 5.57907 12.8344 5.72589 12.8771C6.45195 13.0883 7.21608 13.1963 8 13.1963C11.8335 13.1963 14.7368 10.6359 14.7368 7.73219C14.7368 4.82846 11.8329 2.26741 8 2.26741Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Talk.displayName = 'Talk';
Talk.propTypes = {
  size: PropTypes.string
}
export default Talk;
/* tslint:enable */
/* eslint-enable */