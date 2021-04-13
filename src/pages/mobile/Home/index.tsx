import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd-mobile'
import { RouteComponentProps } from 'react-router-dom'

const HomePage: FC<RouteComponentProps> = (props) => {
	const next = () => {
		props.history.push('/createOrder')
	}
	return (
		<div className="container" style={{ backgroundColor: 'white' }}>
			Home Page
			<Button onClick={next}>Next</Button>
		</div>
	)
}

export default observer(HomePage)
