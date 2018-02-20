import React, { Component } from 'react';
import ReactSvgIcon, { enabledColor } from './ReactSvgIcon/index.jsx';

export default class DropDownIcon extends Component {
	render() {
		return(
			<ReactSvgIcon>
				<path
					fill={enabledColor}
					d="M432,32H80c-26.5,0-48,21.5-48,48v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V80C480,53.5,458.5,32,432,32z M396.1,190.3L223.5,361.5c-4.7,4.7-12.3,4.6-17-0.1l-90.8-91.5c-4.7-4.7-4.6-12.3,0.1-17l22.7-22.5c4.7-4.7,12.3-4.6,17,0.1l59.8,60.3l141.4-140.2c4.7-4.7,12.3-4.6,17,0.1l22.5,22.7C400.9,178,400.8,185.6,396.1,190.3L396.1,190.3z"
				/>
			</ReactSvgIcon>
		)
	}
}