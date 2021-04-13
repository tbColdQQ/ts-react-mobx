import { Button } from 'antd-mobile'
import { RouteComponentProps } from 'react-router-dom'
import { FC } from 'react'

const EditOrderPage: FC<RouteComponentProps> = (props) => {
	const prev = () => {
		props.history.goBack()
	}
	return (
		<div className="container" style={{ backgroundColor: '#9A4538' }}>
			Edit Order Page
			<Button onClick={prev}>上一页</Button>
		</div>
	)
}

export default EditOrderPage
