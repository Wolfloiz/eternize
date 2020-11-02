import React from 'react';
import './style.css';

import { ReactComponent as Timeline } from './../../assets/timeline.svg';

export default function Eternize() {
    
    return (
    <div>
        <div className="main">
            <main>
            <h1>Eternize.</h1>
            <p>Deixe sua Indentidade musical eternizada. </p>
            </main>
            <div>
            <Timeline className="timeline"/>
            </div>
            
        </div>
    </div>
    )
};