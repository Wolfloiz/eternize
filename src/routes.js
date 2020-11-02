import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Eternize from './components/eternize';
import Person from './pages/Person';
import Infinity from './pages/Infinity';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Eternize} />
            <Route path="/person" component={Person} />
            <Route path="/infinity" component={Person} />
        </Router>
    )

}