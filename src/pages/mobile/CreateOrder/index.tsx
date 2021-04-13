import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd-mobile'

const CreateOrderPage: FC<RouteComponentProps> = (props) => {
	const next = () => {
		props.history.push('/editOrder')
	}
	const prev = () => {
		props.history.goBack()
	}
	return (
		<div className="container" style={{ backgroundColor: '#F4C272' }}>
			Create Order Page
			<Button onClick={next}>Next</Button>
			<Button onClick={prev}>上一页</Button>
		</div>
	)
}

export default CreateOrderPage
