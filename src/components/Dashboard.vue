<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<div class="picture-grid">
		<div class="row" v-for="num_row in rows" :key="num_row">
			<div v-for="num_col in cols" class="col" :key="num_col">
				<img @click="redirectToProjects()" :src="randomizeProjects().image" class="picture-grid-detail"></img>
				<span @click="redirectToProjects()" class="picture-grid-description">{{previousProject.title}}</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import ProjectDetails from '../assets/project_images.json'
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'HelloWorld',
	components: {
		'nav-bar': NavBar
	},
	data () {
		return {
			navMsg: "Discover more about me below!",
			projects: [],
			previousProject: "",
			cols: [0, 1, 2, 3],
			rows: [0, 1]
		}
	},
	methods: {
		loadProjects: function() {
			for (let project in ProjectDetails) {
				this.projects.push({
					"title": ProjectDetails[project].title,
					"image": ProjectDetails[project].image,
					"url": ProjectDetails[project].url
				})
			}
		},
		randomizeProjects: function() {
			let index = Math.floor(Math.random()*this.projects.length)
			this.previousProject = this.projects[index]
			this.projects.splice(index, 1)
			return this.previousProject
		},
		redirectToProjects: function() {
			router.push({ name: 'Projects'})
		}
	},
	created: function() {
		this.loadProjects()
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
.picture-grid {
	display: block;
	width: 100%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
}
.col:hover .picture-grid-description {
	visibility: visible;
	cursor: pointer;
}
.picture-grid-description {
	visibility: hidden;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	color: white;
}
.picture-grid-detail {
	width: 100%; 
	height: auto;
}
.col:hover .picture-grid-detail{
	cursor: pointer;
	-webkit-filter: brightness(60%);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.row {
	display: block;
	width: 100%;
	height: 45%;
}
.col {
	display: inline-block;
	position: relative;
	width: 23%;
	height: 100%;
	margin: 3px;
}
.title {
	color: #3399ff;
	margin-bottom: 0px;
	padding-bottom: 0px;
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
.gif-pf {
	width: 15%;
	height: auto;
}
</style>
