<template>
<div>
	<nav-bar></nav-bar>
	<h4>
		Feel free to contact me about anything! I usually try to respond within a day or two.
	</h4>
	<div>
		<b>Email: </b> <span class="link">arthurzh@umich.edu</span>
		<br></br>
		<b> Linkedin: </b> <span class="link" @click="redirectToLink('https://www.linkedin.com/in/arthur-k-zhang/')">https://www.linkedin.com/in/arthur-k-zhang/</span>
		<br></br>
		<b> Github: </b> <span class="link" @click="redirectToLink('https://github.com/KingArthurZ3')">https://github.com/KingArthurZ3</span>
		<br></br>
	</div>
	<div><b class="link" href="/../assets/Arthur_Zhang_Resume.pdf" @click="openResume()">View Resume</b></div>
</div>
</template>
<script>
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'Contact',
	components: {
		'nav-bar': NavBar
	},
	data() {
		return {
		}
	},
	methods: {
		redirectToLink: function(url) {
			window.open(url)
		},
		openResume: function() {
			window.open('/../../static/images/Arthur_Zhang_Resume.pdf')
		}
	}
};
</script>
<style scoped>
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
.link {
	color: blue;
}
.link:hover {
	cursor: pointer;
}
</style>