import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JavascriptTimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)

ReactDOM.render(<App />, document.getElementById('root'));
