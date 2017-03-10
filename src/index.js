import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, Bio, Contact, Likes, PageNotFound } from './components/Components'
import './global.sass'

window.React = React;

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

