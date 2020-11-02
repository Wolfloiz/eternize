import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Eternize from './components/eternize';
import Person from './pages/Person';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Eternize} />
            <Route exact path="/person" component={Person} />
        </Router>
    )

}