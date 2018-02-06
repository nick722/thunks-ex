import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function logOutUser() {
//     return function(dispatch, getState) {
//         return axios.post('.logout').then(function(){
//             dispatch(userLoggedOut());
//         });
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
