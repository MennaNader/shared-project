import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Locker from 'components/Locker';

const MainRouter = () => {
	return (<BrowserRouter>
		<div>
			<Route path="/" component={Locker} />
		</div>
	</BrowserRouter>)
}

export default MainRouter;