import { HomePage, CreateOrderPage, EditOrderPage } from '../pages/mobile'

export const RouterConfig = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/createOrder',
		component: CreateOrderPage,
		sceneConfig: {
			// enter: 'from-bottom',
			// exit: 'to-bottom'
			enter: 'from-right',
			exit: 'to-right',
		},
	},
	{
		path: '/editOrder',
		component: EditOrderPage,
		sceneConfig: {
			enter: 'from-right',
			exit: 'to-right',
		},
	},
]
