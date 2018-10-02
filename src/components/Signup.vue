<template>
    <section>
        <h1 class="heading-primary heading-primary--main">{{ heading }}</h1>
        <form class="form">
            <div class="form__username">
                <div class="form__group">
                    <input
						type="text"
						class="form__input"
						placeholder="First name"
						id="firstName"
						name="first name"
						v-validate="'required'"
						v-model="signupForm.firstName">
                    <label for="firstName" class="form__label">First name</label>
					<span>{{ errors.first('first name') }}</span>
                </div>
                <div class="form__group">
                    <input
						type="text"
						class="form__input"
						placeholder="Last Name"
						id="lastName"
						name="last name"
						v-validate="'required'"
						v-model="signupForm.lastName">
                    <label for="lastName" class="form__label">Last name</label>
					<span>{{ errors.first('last name') }}</span>
                </div>
            </div>
            <div class="form__group">
                <input
					type="email"
					class="form__input"
					placeholder="Email"
					id="email"
					name="email"
					v-validate="'required|email'"
					v-model="signupForm.email">
                <label for="email" class="form__label">Email</label>
				<span>{{ errors.first('email') }}</span>
            </div>
            <div class="form__passwords">
                <div class="form__group">
                    <input
						type="password"
						class="form__input"
						placeholder="Password"
						id="password"
						name="password"
						ref="password"
						v-validate="'required'"
						v-model="signupForm.password">
                    <label for="password" class="form__label">Password</label>
					<span>{{ errors.first('password') }}</span>
                </div>
                <div class="form__group">
                    <input
						type="password"
						class="form__input"
						placeholder="Confirm password"
						id="confirmPassword"
						name="confirm password"
						v-validate="'required|confirmed:password'"
						v-model="signupForm.confirmPassword">
                    <label for="confirmPassword" class="form__label">Confirm password</label>
					<span>{{ errors.first('confirm password') }}</span>
                </div>
            </div>
            <div class="form__group">
                <button class="btn btn--blue" @click.prevent="onSignup()" @keyup.enter="onLogin">Sign up</button>
                <span class="u-margin-left-small">Already have an account?</span><a class="link" @click="showLogin">&nbsp;Sign In</a>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'signup',
    props: {
        heading: String
    },
    data() {
        return {
            signupForm: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        showLogin() {
            this.$parent.showLogin = true
        },
        onSignup() {
            console.log(this.signupForm)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/main';

.form {
	&__group {
		width: 100%;

		&:not(:last-child) {
			margin: 0 2rem 2rem 0;
		}
    }
    
    &__username, &__passwords {
        display: flex;
        justify-content: space-between;
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
		width: 100%;

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


