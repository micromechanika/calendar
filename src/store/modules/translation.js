function toLocaleTranslate(language = 'en-US', translate = {}) {
	switch (true) {
		case !translate[language]:
			return translate['en-US']
		default:
			return translate[language]
	}
}
const translation = {
	localeDaysNamed: {
		'en-US': ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
		// 'ru-RU': ['вос', 'пон', 'вто', 'сре', 'чет', 'пят', 'суб']
	},
	localeMonthNamed: {
		'en-US': ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
		// 'ru-RU': [
		//   'январь',
		//   'февраль',
		//   'март',
		//   'апрель',
		//   'май',
		//   'июнь',
		//   'июль',
		//   'август',
		//   'сентябрь',
		//   'октябрь',
		//   'ноябрь',
		//   'декабрь'
		// ]
	},
}

const translationState = () => {
	return {
		lang: 'en-US',
		month: [],
		days: [],
	}
}

const translate = {
	namespaced: true,
	state: translationState(),
	getters: {
		lang: (state) => state.lang,
		month: (state) => state.month,
		days: (state) => state.days,
	},
	mutations: {
		lang: (state, payload) => {
			state.lang = payload
		},
		month: (state, payload) => {
			state.month = payload
		},
		days: (state, payload) => {
			state.days = payload
		},
	},
	actions: {
		setLang: async ({ commit }) => {
			const lang = await window.navigator.language
			commit('lang', lang)
		},
		getTranslate: async ({ dispatch }) => {
			await dispatch('setLang')
			await dispatch('setLocaleMonthNamed')
			await dispatch('setLocaleDaysNamed')
		},
		setLocaleMonthNamed: async ({ state, commit }) => {
			const lang = await state.lang
			const remitment = toLocaleTranslate(lang, translation.localeMonthNamed)
			commit('month', remitment)
		},
		setLocaleDaysNamed: async ({ state, commit }) => {
			const lang = await state.lang
			const remitment = toLocaleTranslate(lang, translation.localeDaysNamed)
			commit('days', remitment)
		},
	},
}

export default translate
