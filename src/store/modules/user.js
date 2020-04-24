const user = {
	namespaced: true,
	state: {
		year: new Date().getFullYear(),
		month: new Date().getMonth(),
		day: 0,
		workHoursePracticioner: [],
		practicionerRate: [],
		selectTimes: [],
		postSelectTimes: [],
		getSelectTimes: [],
	},
	getters: {
		Year: (state) => state.year,
		Month: (state) => state.month,
		Day: (state) => state.day,
		workHoursePracticioner: (state) => state.workHourse,
		practicionerRate: (state) => state.practicionerRate,
		selectTimes: (state) => state.selectTimes,
		postSelectTimes: (state) => state.postSelectTimes,
		getSelectTimes: (state) => state.getSelectTimes,
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
		workHoursePracticioner: (state, payload) => {
			state.workHourse = payload
		},
		practicionerRate: (state, payload) => {
			state.practicionerRate = payload
		},
		selectTimes: (state, payload) => {
			state.selectTimes.push(payload)
		},
		postSelectTimes: (state, payload) => {
			state.postSelectTimes = payload
		},
		getSelectTimes: (state, payload) => {
			state.getSelectTimes = payload
		},
	},
	actions: {
		getPracticionerSchedule: async ({ dispatch }) => {
			await dispatch('getWorkHoursePracticioner')
			await dispatch('getPracticionerRate')
			// await dispatch('getSelectTimes')
		},
		getWorkHoursePracticioner: async ({ commit }) => {
			const hours = await [
				{
					start: 1588550400000, // 0
					end: 1588568400000, // 5
					days: [0, 1, 2, 3, 4, 5, 6],
				},
				// {
				//   start: 1588590000000, // 11
				//   end: 1588633200000, // 23
				//   days: [0, 1, 2, 3, 4, 5, 6]
				// }
			]
			commit('workHoursePracticioner', hours)
		},
		getPracticionerRate: async ({ commit }) => {
			const rate = await [10, 20, 35]
			commit('practicionerRate', rate)
		},
		postSelectTimes: async (context, payload) => {
			// отправить на сервер выбранные данные
			await context.commit('selectTimes', payload)
		},
		getSelectTimes: async ({ commit }) => {
			// получить данные с сервера
			const selected = { begin: 1588550400000, finish: 1588551000000 }
			commit('selectTimes', selected)
		},
	},
}

export default user
