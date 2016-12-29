import React, {Component} from 'react'
import { render } from 'react-dom'
import {BrowserRouter, Match} from 'react-router'

import LazyRoute from '../lib/index'

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Match 
					pattern="/"
					render={(props) => <LazyRoute {...props} component={import('./testComponent')} />}
					/>
				</BrowserRouter>
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />, 
    document.getElementById('root')
  )
})