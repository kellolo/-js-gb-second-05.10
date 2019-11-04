import '@babel/polyfill'
import 'whatwg-fetch'
import {app} from './js/main'
import './css/normalize.css'
import './css/style.css'

const mainApp = new Vue(app);