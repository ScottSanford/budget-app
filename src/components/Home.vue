<template>
<section class="home">
	<div class="home__form">
		<div>
			<img src="../assets/nickel-logo.png" class="logo">
		</div>
		<div>
			<Login heading="Your freedom starts here."/>
			<!-- <Signup heading="Signup for Nickel" /> -->
		</div>
		<div></div>
	</div>
	<div class="home__img"></div>
</section>
</template>

<script>
import Login from '../components/Login.vue'

export default {
    name: 'home',
    components: {
        Login
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/main';

.home {
	display: flex;
	height: 100vh;

	&__form {
		flex: 0 0 55%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5rem;
	}
  
	&__img {
		background-image: url('../assets/boat.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: -200px;
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
		-webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
		width: 100%;
	
		&::before {
		background-image: linear-gradient(to bottom right, $color-primary 0%, $color-secondary 100%);
		bottom: 0;
		content: '';
		left: 0;
		opacity: .6;
		position: absolute;
		right: 0;
		top: 0;
		}
	} 
}

.logo {
  	width: 50px;
}
</style>
