import React from 'react';
import ReactSvgIcon, { disabledColor } from './ReactSvgIcon/index';

const DropDownIcon = (props) => (
	<ReactSvgIcon {...props} className="SvgIconSquareIcon">
		<path
			fill={disabledColor}
			d="M432,32H80c-26.5,0-48,21.5-48,48v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V80C480,53.5,458.5,32,432,32z M432,432H80V80h352V432z"
		/>
	</ReactSvgIcon>
);

export default DropDownIcon;
