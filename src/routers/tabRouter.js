import React from 'react';
import { Route } from "react-router-dom";


const TabRouter = () => {
	return (
		<div>
			<Route exact path="/" render={() => <div>Hello</div>} />
		</div>)
}

export default TabRouter;