import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Locker from 'components/Locker';
import '@fortawesome/fontawesome-free/css/all.css';

const MainRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Locker} />
        </div>
    </BrowserRouter>
);

export default MainRouter;
