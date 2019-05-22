import React from 'react';
import ReactDOM from 'react-dom';

// Global stylesheets 


import './assets/css/icons/icomoon/styles.css';
import './assets/css/bootstrap.min.css';
import './assets/css/core.min.css';
import './assets/css/components.min.css';
import './assets/css/colors.min.css';



//import jQuery from 'jquery'; // eslint-disable-line no-unused-vars

import boostrap from 'bootstrap'; // eslint-disable-line no-unused-vars
import nicescroll from 'jquery.nicescroll'; // eslint-disable-line no-unused-vars
import drilldown from 'drilldown'; // eslint-disable-line no-unused-vars

//import './core.js';// eslint-disable-line no-unused-vars



// Native library create-react-app
    import registerServiceWorker from './registerServiceWorker'; 

// Import components to general template
   import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
