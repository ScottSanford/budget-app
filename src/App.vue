<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
// Vue Components
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'

export default {
	name: 'app',
	// Component Registration
	components: {
		Home,
		Signup
	}
}
</script>

<style lang="scss">
// Fonts
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

// SASS Style Sheets
@import './sass/main';

</style>
