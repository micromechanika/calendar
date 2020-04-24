<template>
	<div class="showSchedule">
		<div class="info" v-for="(rate, timeInedex) in practicionerRate" :key="timeInedex">
			<h2> Price ${{ rate }}</h2>
			<timeLine :rate="rate" :minutes="rate" />
		</div>
	</div>
</template>

<script>
	import timeLine from './timeLine'
	import { mapGetters } from 'vuex'
	export default {
		name: 'showSchedule',
		components: { timeLine },
		data() {
			return {}
		},
		computed: {
			...mapGetters('user', ['practicionerRate']),
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.showSchedule {
		@include allScopedValues;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.info {
		h2 {
			margin: 0;
			padding: 0;
		}
		padding: 2em 0;
		border-bottom: 0.1em solid black;
		&:last-of-type {
			border-bottom: none;
		}
	}
</style>