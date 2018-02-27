import React from 'react';
import PropTypes from 'prop-types';
import formatLength from '../../../helpers';

export const disabledColor = '#d1d3d4';
export const enabledColor = '#45b3e3';

const ReactSvgIcon = (props = {}) => {
    const { width, height, children, ...restProps } = props;
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            {...restProps}
            width={(width && formatLength(width)) || '1em'}
            height={(height && formatLength(height)) || '1em'}
        >
            {children}
        </svg>
)};

ReactSvgIcon.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    children: PropTypes.node
}

export default ReactSvgIcon;
