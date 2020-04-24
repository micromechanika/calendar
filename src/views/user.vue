<template>
	<div class="user">
		<div class="container">
			<calendarTable />
			<showSchedule />
		</div>
	</div>
</template>

<script>
	import calendarTable from '../components/user/calendarTable'
	import showSchedule from '../components/user/showSchedule'
	export default {
		name: 'user',
		components: { showSchedule, calendarTable },
	}
</script>

<style lang="scss" scoped>
	.container {
		min-width: 300px;
		max-width: 1024px;
		margin: 0 auto;
		@include allScopedValues;
	}
	.user {
	}
</style>