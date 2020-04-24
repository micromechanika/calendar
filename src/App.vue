<template>
	<div id="app">
		<div class="container">
			<div class="link">
				<div class="item">
					<router-link to="/practicioner">practicioner</router-link>
				</div>
				<div class="item">
					<router-link to="/user">user</router-link>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	.link {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.item {
			padding: 1em;
		}
	}
</style>