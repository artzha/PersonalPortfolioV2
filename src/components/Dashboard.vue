<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<div class="picture-grid">
		<div class="row" v-for="i in total_rows" :key="i">
			<div class="col" v-for="j in total_cols" :key="j">
				<anchor-router-link :to="{name: 'Projects', hash: projects[usedProjects[i-1][j-1]].hash}"
					:scrollOptions="{
				        container: 'body',
				        duration: 700,
				        easing: 'ease',
				        offset: 0,
				        cancelable: true,
				        onStart: false,
				        onDone: false,
				        onCancel: false,
				        x: false,
				        y: true
				    }">
					<img :src="projects[usedProjects[i-1][j-1]].image" class="picture-grid-detail"></img> 
					<span class="picture-grid-description">{{projects[usedProjects[i-1][j-1]].title}}</span>
				</anchor-router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import VueAnchorRouterLink from 'vue-anchor-router-link'
import ProjectDetails from '../assets/project_images.json'
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'HelloWorld',
	components: {
		'nav-bar': NavBar,
		'anchor-router-link': VueAnchorRouterLink
	},
	data () {
		return {
			navMsg: "Discover more about me below!",
			projects: null,
			previousProject: "",
			total_cols: [
				1,2,3,4
			],
			total_rows: [
				1,2
			],
			usedProjects: []
		}
	},
	methods: {
		loadProjects: function() {
			this.projects = []
			for (let project in ProjectDetails) {
				this.projects.push({
					"title": ProjectDetails[project].title,
					"image": ProjectDetails[project].image,
					"hash": ProjectDetails[project].hash
				})
			}
		},
		generateRange: function(pCount, pMin, pMax) {
			let min = pMin < pMax ? pMin : pMax;
		    let max = pMax > pMin ? pMax : pMin;
		    var resultArr = [], randNumber;
		    while ( pCount > 0) {
		        randNumber = Math.round(min + Math.random() * (max - min));
		        if (resultArr.indexOf(randNumber) == -1) {
		            resultArr.push(randNumber);
		            pCount--;
		        }
		    }
		    let result = []
		    for (let i = 0; i < 4; i++) {
		    	result.push(resultArr[i])
		    }
			this.usedProjects.push(result)
			result = []
			for (let i = 4; i < 8; i++) {
		    	result.push(resultArr[i])
		    }
		    this.usedProjects.push(result)
		},
		redirectToProjects: function() {
			router.push({ name: 'Projects'})
		}
	},
	created: function() {
		this.loadProjects()
		this.generateRange(8, 0, this.projects.length-1)
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
