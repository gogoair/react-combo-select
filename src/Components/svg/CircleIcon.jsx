import React from 'react';
import ReactSvgIcon, { disabledColor } from './ReactSvgIcon/index';

const DropDownIcon = (props) => (
	<ReactSvgIcon {...props} className="SvgIconCircleIcon">
		<path
			fill={disabledColor}
			d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M256,456c-110.5,0-200-89.5-200-200S145.5,56,256,56s200,89.5,200,200S366.5,456,256,456z"
		/>
	</ReactSvgIcon>
);

export default DropDownIcon;
