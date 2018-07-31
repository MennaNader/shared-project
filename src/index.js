import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store from 'config/store';
import MainRouter from 'routers/mainRouter';

ReactDOM.render(<Provider store={Store}>
	<MainRouter />
</Provider>, document.getElementById('root'));
