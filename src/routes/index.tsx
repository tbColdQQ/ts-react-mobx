import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { cloneElement, FC } from 'react'
import { RouterConfig } from './routes'
import './_routes.scss'
import { Location } from 'history'

const DEFAULT_SCENE_CONFIG = {
	enter: 'from-right',
	exit: 'to-exit',
}

const getSceneConfig = (location: Location<unknown>) => {
	const matchedRoute = RouterConfig.find((config) =>
		new RegExp(`^${config.path}$`).test(location.pathname),
	)
	return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG
}

let oldLocation: Location<unknown> | null = null

const Routes = withRouter(({ location, history }) => {
	let classNames = ''
	if (history.action === 'PUSH') {
		classNames = 'forward-' + getSceneConfig(location).enter
	} else if (history.action === 'POP' && oldLocation) {
		classNames = 'back-' + getSceneConfig(oldLocation).exit
	}

	oldLocation = location

	return (
		<TransitionGroup
			className={'router-wrapper'}
			childFactory={(child) => cloneElement(child, { classNames })}
		>
			<CSSTransition key={location.pathname} timeout={500}>
				<Switch location={location}>
					{RouterConfig.map((config, index) => (
						<Route exact key={index} {...config} />
					))}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
})

const AnimatedSwitch: FC = () => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	)
}

export default AnimatedSwitch
