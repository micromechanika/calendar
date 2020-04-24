<template>
	<div class="timeLine">
		<div class="items" v-for="(timeline, index) in buildTimeline" :key="index">
			<div
				class="item"
				v-for="(item, itemKey) in timeline"
				:key="itemKey"
				:class="[isCompare(buildTimelineTS[index][itemKey], allSelected, 'begin', 'finish') ? 'busy' : 'free']"
				@click="choice(index, itemKey)"
			>
				<span>{{ item }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	const MINUTES = 6e4

	export default {
		name: 'timeLine',
		props: {
			rate: {
				type: Number,
				default: 1,
			},
			minutes: {
				type: Number,
				default: 1,
			},
		},
		data() {
			return {}
		},
		computed: {
			...mapGetters('user', { workHoursePracticioner: 'workHoursePracticioner', allSelected: 'selectTimes' }),
			buildTimeline() {
				return this.workHoursePracticioner.map((i) => {
					const intervals = []

					const start = (i.start / MINUTES) ^ 0
					const end = (i.end / MINUTES) ^ 0
					const minutesLeft = end - start

					const timeCount = (minutesLeft / this.minutes) ^ 0

					for (let x = 0, y = 1; x < timeCount; x++, y++) {
						const begin = i.start + this.minutes * MINUTES * x
						const finish = i.start + this.minutes * MINUTES * y
						intervals.push(`${this.normalTime(begin)} - ${this.normalTime(finish)}`)
					}
					return intervals
				})
			},
			buildTimelineTS() {
				return this.workHoursePracticioner.map((i) => {
					const intervals = []

					const start = (i.start / MINUTES) ^ 0
					const end = (i.end / MINUTES) ^ 0
					const minutesLeft = end - start

					const timeCount = (minutesLeft / this.minutes) ^ 0

					for (let x = 0, y = 1; x < timeCount; x++, y++) {
						const begin = i.start + this.minutes * MINUTES * x
						const finish = i.start + this.minutes * MINUTES * y
						intervals.push({ begin, finish })
					}
					return intervals
				})
			},
		},
		methods: {
			...mapMutations('user', ['selectTimes']),
			normalTime(ts) {
				const data = new Date(ts)

				let h = data.getHours()
				let m = data.getMinutes()

				h = (h + 24 - 2) % 25
				let mid = ''

				mid = h > 12 ? 'pm' : 'am'

				switch (true) {
					case h === 0:
						h = 12
						break
					case h > 12:
						h = h % 12 || 12
						break
				}

				h = h < 10 ? `0${h}` : h
				m = m < 10 ? `0${m}` : m

				return `${h}:${m}${mid}`
			},
			choice(index, itemKey) {
				this.selectTimes(this.buildTimelineTS[index][itemKey])
			},
			isCompare(n, inData, begin, finish) {
				let rez = false
				inData.forEach((i) => {
					// console.log('\r')
					// console.log('Item', i[begin], i[finish])
					// console.log('click', need[begin], need[finish])
					// console.log('\r')
					if (Array.isArray(i)) {
						if (this.isCompare(n, i)) rez = true
					} else if (n[begin] >= i[begin] && n[finish] <= i[finish]) {
						rez = true
					}
				})
				return rez
			},
		},
	}
</script>

<style lang="scss" scoped>
	.items {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin: 1.5em;

		.item {
			width: 9em;
			height: 2em;
			border: 0.01em solid black;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin: 0.15em;

			span {
				font-size: 0.75em;
			}
		}

		.lost {
			background-color: yellow;
		}

		.free {
			background-color: green;
		}

		.busy {
			background-color: red;
		}
	}
</style>