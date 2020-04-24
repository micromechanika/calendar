<template>
	<div class="shadow" @click.stop.self="toggleModal" v-if="isModalShow">
		<div class="additionalTime">
			<input v-model="additionalStart" placeholder="begin time" />
			<input v-model="additionalEnd" placeholder="end time" />
			<button type="button" @click="workTime">Confirm</button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'additionalTime',
		data() {
			return {
				additionalStart: '',
				additionalEnd: '',
			}
		},
		computed: {
			...mapState('practicioner', {
				isModalShow: (state) => state.isModal,
			}),
		},
		methods: {
			...mapMutations('practicioner', ['toggleModal', 'AdditionalStartTime', 'AdditionalEndTime', 'AdditionWorkHoursDay']),
			workTime() {
				this.AdditionalStartTime(this.additionalStart)
				this.AdditionalEndTime(this.additionalEnd)
				this.AdditionWorkHoursDay()
				this.toggleModal()
			},
		},
	}
</script>

<style lang="scss" scoped>
	.shadow {
		@include allScopedValues;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 1000;
		background-color: $additionalTimeShadow;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.additionalTime {
		width: 20em;
		height: auto;
		font-size: 1em;
		display: flex;
		flex-direction: column;
		border: 0.1em solid black;
		input {
			margin: 0.5em;
		}
		button {
			margin: 0.5em;
		}
	}
</style>