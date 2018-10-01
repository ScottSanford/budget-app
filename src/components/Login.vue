<template>
<div>
    <h1 class="heading-primary heading-primary--main">{{ heading }}</h1>
    <form class="form">
        <div class="form__group">
            <input type="email" class="form__input" placeholder="Email" id="email" v-model="loginForm.email" required>
            <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group">
            <input type="password" class="form__input" placeholder="Password" id="password" v-model="loginForm.password" required>
            <label for="password" class="form__label">Password</label>
        </div>
        <div class="form__group">
            <button class="btn btn--blue">Login</button>
            <span class="link" @click="showSignup">Sign up</span>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'login',
    props: {
		heading: String
	},
	data() {
		return {
			loginForm: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		showSignup() {
			this.$parent.showLogin = false
		},
		onLogin() {
			console.log(this.loginForm)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../sass/abstracts/_variables';

.form {
	&__group {
		&:not(:last-child) {
		margin-bottom: 2rem;
		}
	}

	&__input {
		background-color: $color-white;
		border: none;
		border-bottom: 3px solid transparent;
		border-radius: .6rem;
		box-shadow: 0 1rem 2rem rgba($color-black, .1);
		color: inherit;
		display: block;
		font-family: inherit;
		font-size: 1.5rem;
		padding: 1.5rem 2rem;
		outline: none;
		transition: all .4s;
		width: 75%;

		&:focus {
			border-bottom: 3px solid $color-secondary;
		}

		&:focus:invalid {
			border-bottom: 3px solid $color-primary;
		}

		&::-webkit-input-placeholder {
			color: $color-primary;
		}
	}

	&__label {
		display: block;
		font-size: 1.2rem;
		font-weight: 700;
		margin-left: 2rem;
		margin-top: .7rem;
		transition: all .3s;
	}

	&__input:placeholder-shown + &__label {
		opacity: 0;
		transform: translateY(-4rem);
		visibility: hidden;
	}
}

.btn {
	&,
	&:link,
	&:visited {
		border-radius: .6rem;
		display: inline-block;
		font-size: 1.6rem;
		padding: 1.5rem 4rem;
		position: relative;
		text-decoration: none;
		transition: all .2s;

		// Change for the <button> element
		border: none;
		cursor: pointer;
	}

	&:hover {
		box-shadow: 0 .5rem 1rem rgba($color-black, .2);
		transform: translateY(-1px);
	}

	&:active,
	&:focus {
		box-shadow: 0 .5rem 1rem rgba($color-black, .2);
		outline: none;
		transform: translateY(0px);
	}

	&--blue {
		background-color: $color-primary;
		color: $color-white;

		&::after {
			background-color: $color-primary;
		}
	}

	&::after {
		border-radius: 10rem;
		content: '';
		display: inline-block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		transition: all .4s;
		width: 100%;
		z-index: -1;
	}

	&--animated {
		animation: moveInButton .5s ease-out .75s;
		animation-fill-mode: backwards;
	}
}

.link {
	color: $color-primary;
	font-size: 1.6rem;
	padding: 0 1rem;
	transition: all .3s;

	&:hover {
		transform: translateY(-1px);
	}

	&:active,
	&:focus {
		transform: translateY(0px);
		color: $color-secondary;
	}
}
</style>
