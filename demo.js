import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './DemoComponent';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
	<AppContainer>
		<div>
			<Demo />
		</div>
	</AppContainer>,
	document.getElementById('react')
);

if (module.hot) {
	module.hot.accept('./DemoComponent', () => {
		const NextApp = require('./DemoComponent').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('react')
		);
	});
}