import { makeAutoObservable } from 'mobx'

class TestStore {
	constructor() {
		makeAutoObservable(this)
	}

	test = 1

	addTest() {
		this.test += 1
	}
}

export default TestStore
