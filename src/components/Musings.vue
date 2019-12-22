<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<h2>Under construction, thoughts to come</h2>
</div>
</template>
<script>
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'Musings',
	components: {
		'nav-bar': NavBar
	},
	data() {
		return {
			navMsg: 'Just speaking some thoughts on my mind'
		}
	},
	methods: {

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
</style>