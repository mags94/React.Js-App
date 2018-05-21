var React = require('react');
var ReactDOM=require('react-dom');
var Timeslot = require('./components/Timeslot').default;
import {Details} from './components/Details';
import { BrowserRouter, Route ,Link } from 'react-router-dom';



ReactDOM.render(<Timeslot />, document.getElementById('app'));
