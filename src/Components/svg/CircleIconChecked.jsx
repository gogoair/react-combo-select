import React, { Component } from 'react';
import ReactSvgIcon, { enabledColor } from './ReactSvgIcon/index';

export default class DropDownIcon extends Component {
	render() {
		return(
			<ReactSvgIcon className="SvgIconCircleIconChecked">
				<path
					fill={enabledColor}
					d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M396.1,203.2L223.5,374.4c-4.7,4.7-12.3,4.6-17-0.1l-90.8-91.5c-4.7-4.7-4.6-12.3,0.1-17l22.7-22.5c4.7-4.7,12.3-4.6,17,0.1l59.8,60.3l141.4-140.2c4.7-4.7,12.3-4.6,17,0.1l22.5,22.7C400.9,191,400.8,198.6,396.1,203.2z"
				/>
			</ReactSvgIcon>
		)
	}
}