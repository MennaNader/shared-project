import React, { Component } from 'react';

import TabRouter from 'routers/tabRouter';
import 'bootstrap/dist/css/bootstrap.css';

class Locker extends Component {
	render() {
		return (
			<div className="container">
				<TabRouter />
			</div>
		);
	}
}

export default Locker;
