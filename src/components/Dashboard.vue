<template>
<div>
	<div class="title">
		<button class="title-btn" @click="navigate('Dashboard')">
			<h1>
				Hello, my name is Arthur.
			</h1>
		</button>
	</div>
	<div>
		<h4>
			Welcome to my personal website!
		</h4>
	</div>
	<div>
		Click below to find out more about me, the projects I have worked on, and anything else that you might want to know about me! 
	</div>
	<div class="nav-bar">
		<li>
			<router-link to="/about">
				<button class="button-m"><h4>About Me</h4></button>
			</router-link>
			<router-link to="/projects">
				<button class="button-m"><h4>Projects</h4></button>
			</router-link>
			<router-link to="/musings">
				<button class="button-m"><h4>Random Musings</h4></button>
			</router-link>
			<router-link to="/contact">
				<button class="button-m"><h4>Contact</h4></button>
			</router-link>
		</li>
	</div>
</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2, h4, h5 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
body, html {
	margin: 0px;
	padding: 0;
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
	background-color: transparent;
}
.button-m {
	outline: none;
	border: none;
	border-radius: 20px;
	width: 200px;
	height: 40px;
	margin-top: 50px;
	font-size: 15px;
	font-weight: normal;
	cursor: pointer; 
	background-color: transparent;
}
</style>
