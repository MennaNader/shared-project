import React, { Component } from 'react';

import TabRouter from 'routers/tabRouter';
import { SideNav } from 'components/sideNav';
import 'bootstrap/dist/css/bootstrap.css';

class Locker extends Component {
	render() {
		return (
			<div className="container-fluid">
				<SideNav />
				<TabRouter />
			</div>
		);
	}
}

export default Locker;
