import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo.jsx';
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
	module.hot.accept('./Demo.jsx', () => {
		const NextApp = require('./Demo.jsx').default;
		ReactDOM.render(
			  <AppContainer>
				<NextApp/>
			  </AppContainer>,
			  document.getElementById('react')
		);
	});
}