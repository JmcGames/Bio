import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Bio from './components/Bio/Bio'
import PageNotFound from './components/PageNotFound'

window.React = React;

const Likes = () => ( <div /> );
const Contact = () => ( <div /> );

render((
	<Router history={ hashHistory }>
		<Route component={ App }>
			<Route path='/' component={ Bio } />
			<Route path='likes' component={ Likes } />
			<Route path='contact' component={ Contact } />
			<Route path='*' component={ PageNotFound } />
		</Route>
	</Router>
	), document.getElementById('root')
)

