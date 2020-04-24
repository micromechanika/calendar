<template>
	<div class="regularPracticioneractivity">
		<div class="timer">
			<input v-model="start" placeholder="begin time" />
			<input v-model="end" placeholder="end time" />
			<div class="daysInput" v-for="(day, index) in inputDays" :key="index">
				<input v-model="chackedDays" type="checkbox" :id="index" :value="index" />
				<label :for="index">{{ day }}</label>
			</div>
			<button type="button" @click="workTime">Confirm</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	export default {
		name: 'regularPracticioneractivity',
		data() {
			return {
				start: '',
				end: '',
				chackedDays: [],
			}
		},
		computed: {
			...mapGetters('translation', ['days']),
			inputDays() {
				return this.days.map((i) => i.charAt(0).toUpperCase() + i.slice(1, 3))
			},
		},
		methods: {
			...mapMutations('practicioner', ['RegularWorkHoursDay']),
			workTime() {
				const regularWorkHoursDay = {}
				regularWorkHoursDay.start = this.start
				regularWorkHoursDay.end = this.end
				regularWorkHoursDay.days = this.chackedDays
				this.RegularWorkHoursDay(regularWorkHoursDay)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.regularPracticioneractivity {
		@include allScopedValues;
		margin: 0.5em;
	}

	.timer {
		width: 100%;
		height: 100%;
		font-size: 1em;
		display: flex;
		flex-direction: column;
		border: 0.1em solid black;
		.daysInput {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		input {
			margin: 0.5em;
		}
		button {
			margin: 0.5em;
		}
	}
</style>