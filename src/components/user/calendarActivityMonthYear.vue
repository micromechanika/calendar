<template>
	<div class="activityMonthYear">
		<div class="stepLeftBtn" @click="monthBack"> &#60; </div>
		<div class="month"
			><h3>{{ monthName }}</h3></div
		>
		<div class="year"
			><h3>{{ year }}</h3></div
		>
		<div class="stepRightBtn" @click="monthForvard"> &#62; </div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	export default {
		name: 'calendar-activityMonthYear',
		data() {
			return {
				year: new Date().getFullYear(),
				month: new Date().getMonth(),
			}
		},
		computed: {
			...mapGetters('translation', { translateMonth: 'month' }),
			monthName() {
				return this.translateMonth[this.month]
			},
		},
		methods: {
			...mapMutations('user', ['Year', 'Month']),
			monthForvard() {
				// eslint-disable-next-line no-unused-expressions
				this.month > 10 ? ((this.month = 0), (this.year += 1), this.Year(this.year)) : ((this.month += 1), this.Month(this.month))
			},
			monthBack() {
				// eslint-disable-next-line no-unused-expressions
				this.month < 1 ? ((this.month = 11), (this.year -= 1), this.Year(this.year)) : ((this.month -= 1), this.Month(this.month))
			},
		},
	}
</script>

<style lang="scss" scoped>
	.activityMonthYear {
		@include allScopedValues;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		border: 0.1em solid $calendarBorderColor;
		border-bottom: none;
		background-color: $activityMonthYearBackgroundColor;
		color: $activityMonthYearFontColor;

		h3 {
			font-size: 2em;
		}
	}

	.month {
		text-transform: capitalize;
	}
	.year {
		text-transform: uppercase;
	}

	.stepLeftBtn,
	.stepRightBtn {
		font-size: 3em;
	}
</style>