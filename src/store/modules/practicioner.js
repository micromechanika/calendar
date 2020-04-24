const practicionerState = () => {
	return {
		year: new Date().getFullYear(),
		month: new Date().getMonth(),
		day: 0,
		additionalStartTime: '',
		additionalEndTime: '',
		regularWorkHoursDay: [],
		additionWorkHoursDay: [],
		isModal: false,
	}
}

const practicioner = {
	namespaced: true,
	state: practicionerState(),
	getters: {
		Year: (state) => state.year,
		Month: (state) => state.month,
		Day: (state) => state.day,
		AdditionalStartTime: (state) => state.additionalStartTime,
		AdditionalEndTime: (state) => state.additionalEndTime,
		RegularWorkHoursDay: (state) => state.regularWorkHoursDay,
		AdditionWorkHoursDay: (state) => state.additionWorkHoursDay,
	},
	mutations: {
		Year: (state, payload) => {
			state.year = payload
		},
		Month: (state, payload) => {
			state.month = payload
		},
		Day: (state, payload) => {
			state.day = payload
		},
		AdditionalStartTime: (state, payload) => {
			state.additionalStartTime = payload
		},
		AdditionalEndTime: (state, payload) => {
			state.additionalEndTime = payload
		},
		RegularWorkHoursDay: (state, payload) => {
			state.regularWorkHoursDay.push(payload)
		},
		AdditionWorkHoursDay: (state) => {
			state.additionWorkHoursDay.push({
				start: state.additionalStartTime,
				end: state.additionalEndTime,
				day: `${state.year}-${state.month}-${state.day}`,
			})
		},
		toggleModal: (state) => {
			state.isModal = !state.isModal
		},
	},
	actions: {},
}

export default practicioner
