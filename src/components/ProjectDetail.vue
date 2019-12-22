<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<h1>
		<vue-markdown :source="getContent"></vue-markdown>
	</h1>
</div>
</template>
<script>
import router from '../router'
import NavBar from './NavBar'
import VueMarkdown from 'vue-markdown'
const axios = require('axios');

export default {
	name: 'ProjectDetail',
	components: {
		'nav-bar': NavBar,
		'vue-markdown': VueMarkdown
	},
	data() {
		return {
			title: router.currentRoute.path,
			navMsg: 'View project details below',
			content: ""
		}
	},
	computed: {
		getContent: function() {
			console.log(this.content)
			return this.content;
		}
	},
	methods: {

	},
	created: function() {
		axios({
			method: 'get',
			url: 'https://raw.githubusercontent.com/KingArthurZ3/Dead-Reckoning/master/README.md',
			responseType: 'text'
		}).then( response => {
			this.content = response.data;
		})
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
blockquote {
    margin-left: 32px;
    border-left: 4px solid #CCC;
    padding-left: 16px;
}
</style>