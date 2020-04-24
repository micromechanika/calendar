<template>
	<div class="practicioner">
		<div class="container">
			<div class="addWorkTime">
				<button @click="addWorkTime">+</button>
				<button @click="removeWorkTime">-</button>
			</div>
			<div class="addWorkTimePanel">
				<regularPracticioneractivity v-for="item in items" :key="item" />
			</div>
			<additionalTime />
			<calendarTable />
		</div>
	</div>
</template>

<script>
	import regularPracticioneractivity from '../components/practicioner/regularPracticionerActivity'
	import calendarTable from '../components/practicioner/calendarTable'
	import additionalTime from '../components/practicioner/additionalTime'
	export default {
		name: 'calendar',
		components: { regularPracticioneractivity, calendarTable, additionalTime },
		data() {
			return {
				items: 1,
			}
		},
		computed: {},
		methods: {
			addWorkTime() {
				this.items = this.items > 6 ? 7 : (this.items += 1)
			},
			removeWorkTime() {
				this.items = this.items < 2 ? 1 : (this.items -= 1)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		min-width: 300px;
		max-width: 1024px;
		margin: 0 auto;
		@include allScopedValues;
	}
	.addWorkTime {
		width: 4em;
		height: 4em;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.addWorkTimePanel {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
</style>