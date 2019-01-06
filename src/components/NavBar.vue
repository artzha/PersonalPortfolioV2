<template>
<div>
	<div class="title">
		<button class="title-btn" @click="navigate('Dashboard')">
			<h1>
				Arthur K Zhang 
			</h1>
		</button>
	</div>
	<div>
		<div class="nav-bar">
			<li>
				<button class="button-m" @click="navigate('About')">
					<h4><span :class="{'current-page': isOnPage('About')}">About Me</span></h4>
				</button>
				<button class="button-m" @click="navigate('Projects')">
					<h4><span :class="{'current-page': isOnPage('Projects')}">Projects</span></h4>
				</button>
				<button class="button-m" @click="navigate('Musings')">
					<h4><span :class="{'current-page': isOnPage('Musings')}">Musings</span></h4>
				</button>
				<button class="button-m" @click="navigate('Contact')">
					<h4><span :class="{'current-page': isOnPage('Contact')}">Contact</span></h4>
				</button>
			</li>
		</div>
		<hr></hr>
	</div>
</div>
</template>
<script>
import router from '../router'

export default {
	name: 'About',
	data() {
		return {
			currentRoute: router.currentRoute.name
		}
	},
	methods: {
		navigate(pageName) {
			router.push({ name: pageName})
		},
		isOnPage(pageName) {
			return this.currentRoute == pageName
		}
	}
}
</script>
<style scoped>
h1, h2, h4, h5 {
	font-weight: normal;
}
li {
	display: inline-block;
	margin: 0 10px;
}
.title {
	color: #3399ff;
}
.title-btn {
	outline:none;
	border: none;
	color: #3399ff;
	font-size: 15px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.nav-bar {
	margin-bottom: 15px;
}
.current-page {
	border-bottom: 3px solid #3399ff;
}
.button-m {
	outline: none;
	border: none;
	border-radius: 20px;
	width: 200px;
	height: 40px;
	margin-top: 5px;
	font-size: 15px;
	font-weight: normal;
}
.button-m:hover {
	cursor: pointer; 
}
</style>