<template>
	<div class="calendar">
		<activityMonthYear />
		<table>
			<thead>
				<tr>
					<th v-for="(dayName, name, index) in calendarDaysName" :key="index">
						{{ dayName }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(dates, weeks) in calendarDates" :key="weeks">
					<td v-for="(date, days) in dates" :key="days" @click=";(active = `${weeks}${days}`), selectDate()">
						<span
							:class="{
								today: todayIndex === `${weeks}${days}`,
								activeDate: active === `${weeks}${days}`,
							}"
						>
							{{ date }}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import activityMonthYear from './calendarActivityMonthYear'
	const DAY = 8.64e7
	const WEEKS = 6
	const WEEKDAYS = 7

	export default {
		name: 'main-table',

		data() {
			return {
				active: null,
			}
		},
		components: { activityMonthYear },
		computed: {
			...mapGetters('translation', { translateDays: 'days' }),
			...mapGetters('user', ['Year', 'Month']),
			makeDayName() {
				return this.translateDays.map((i) => i.toUpperCase().slice(0, 3))
			},
			firstDay() {
				return new Date(Date.UTC(this.Year, this.Month, 1, 0, 0, 0, 0)).getTime()
			},
			today() {
				const day = new Date().getDate()
				return new Date(Date.UTC(this.Year, this.Month, day, 0, 0, 0, 0)).getTime()
			},
			makeDaysTimestemp() {
				const weeks = []
				var dayTS = null
				for (let i = 0; i < WEEKS; i++) {
					const week = []
					for (let x = 0; x < WEEKDAYS; x++) {
						week.push(this.firstDay + DAY * dayTS)
						dayTS += 1
					}
					weeks.push(week)
				}
				return weeks
			},
			calendarDates() {
				return this.makeDaysTimestemp.map((i) => {
					return i.map((x) => {
						return new Date(x).getDate()
					})
				})
			},
			calendarDaysName() {
				const arr = this.makeDayName.slice()
				const begin = new Date(this.firstDay).getDay()
				const ctn = arr.length
				const cut = arr.slice(0, begin)
				const past = arr.splice(begin, ctn)
				return [...past, ...cut]
			},
			todayIndex() {
				const tmp = this.makeDaysTimestemp.slice()
				let today = ''

				// eslint-disable-next-line no-labels
				todayFind: for (let i = 0; i < tmp.length; i++) {
					for (let x = 0; x < tmp[i].length; x++) {
						if (this.today === tmp[i][x]) {
							today = `${i}${x}`
							// eslint-disable-next-line no-labels
							break todayFind
						}
					}
				}
				return today
			},
		},
		methods: {
			...mapMutations('user', ['toggleModal', 'Day']),
			selectDate() {
				this.toggleModal()
				const week = this.active[0]
				const numberDay = this.active[1]
				const day = this.calendarDates[week][numberDay]
				this.Day(day)
			},
		},
	}
</script>

<style lang="scss" scoped>
	table {
		@include allScopedValues;
		width: 100%;
		color: $calendarFontColor;
		border: 0.1em solid $calendarBorderColor;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 1em;
		text-align: center;
		width: 2.5em;
		height: 2.5em;
	}

	table tr:nth-child(odd) {
		background-color: $calendarTableRowOdd;
	}

	table tr:nth-child(even) {
		background-color: $calendarTableRowEven;
	}

	thead th {
		color: $calendarTableHeadFontColor;
		background-color: $calendarTableHeadBackgroundColor;
	}
	tbody td {
		color: $calendarTableBodyFontColor;
		background-color: $calendarTableBodyBackgroundColor;
		span {
			width: 2em;
			height: 2em;
			margin: auto;
			&:hover,
			&:active,
			&:focus {
				width: 2em;
				height: 2em;
				border: 0.15em solid $calendarHoverDateBorder;
				border-radius: 50%;
				display: block;
				margin: auto;
				text-align: center;
				line-height: 2em;
				color: $calendarHoverDateColor;
				background-color: $calendarHoverDateBackgroundColor;
			}
		}
	}
	.activeDate {
		width: 2em;
		height: 2em;
		border: 0.15em solid $calendarActiveDateBorder;
		border-radius: 50%;
		display: block;
		margin: auto;
		text-align: center;
		line-height: 2em;
		color: $calendarActiveDateColor !important;
		background-color: $calendarActiveDateBackgroundColor;
	}

	.today {
		color: $calendarFirstdayOfMonth;
	}
</style>