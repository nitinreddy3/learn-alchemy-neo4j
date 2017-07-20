require('./theme/default/stylesheets/main.sass');
// require('./libs/neo4jd3.js');
require('./libs/neo4jd3.min.js');
import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './javascript/components/Graph';

ReactDOM.render(<Graph/>, document.getElementById('app'));