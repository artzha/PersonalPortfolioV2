<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<div class="project-content">
		<div class="table-contents table-contents-small">
			<div>
				<input id="search-bar" type="text"
            		v-model="searchQuery" placeholder="Search for project..." @keyup="submitSearch">
				<li class="list-links" v-for="(project, index) in filteredProjects" :key="index">
					<span v-scroll-to="projectId(project.title)">{{project.title}}</span>
				</li>
			</div>
		</div>
		<div class="projects-container">
			<span v-show="filteredProjects.length <= 0">No projects found with that name :'(</span>
			<transition-group name="staggered-fade" tag="div" class="main-content" v-for="(projects, index) in filteredProjects" :key="index"> 
				<project-card class="project-container"
					:project="projects" :key="index" :id="projects.title">
				</project-card>
			</transition-group>
		</div>
	</div>
</div>
</template>
<script>
import router from '../router'
import projectData from '../assets/projects.json'
import NavBar from './NavBar'
import ProjectCard from './ProjectCard'

export default {
	name: 'Projects',
	components: {
		'nav-bar': NavBar,
		'project-card': ProjectCard
	},
	data() {
		return {
			projectContainer: [],
			searchQuery: '',
			navMsg: 'Just a kid trying to build big things.'
		}
	},
	computed: {
		 filteredProjects: function () {
           	return this.projectContainer.filter((project) => {
                return project.title.toUpperCase().match(this.searchQuery.toUpperCase())
            })
        }
	},
	methods: {
		loadProjectData: function() {
			for (let index in projectData) {
				this.projectContainer.push(
					{
						'title': projectData[index]['title'],
						'url': projectData[index]['url'],
						'date': projectData[index]['date'],
						'imageSrc': projectData[index]['src'],
						'description': projectData[index]['desc'],
						'type': projectData[index]['type']
					}
				)
			}
		},
		removeSearchQuery: function () {
            this.searchQuery = ''
            this.isProject = false
        },
        submitSearch: function () {
            this.isResult = true
            return this.filteredProjects
        },
        projectId: function(projectTitle) {
        	let elementId = '#' + projectTitle
        	return elementId
        }
	},
	created: function() {
		this.loadProjectData()
	}
};
</script>
<style scoped>
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
@media only screen and (max-width: 900px){
	.table-contents-small .list-links {
		position: absolute;
		visibility: hidden;
		height: 0px;
		width: 0px;
	}
	.table-contents-small #search-bar {
		position: absolute;
		visibility: hidden;
		height: 0px;
		width: 0px;
	}

	.project-content .projects-container {
		display: block;
		width: 100%;
	}
}
#search-bar {
	margin-bottom: 10px;
	outline: none;
}
.main-content {
	display: inline-block;
	width: 100%;
	margin-bottom: 30px;
}
.table-contents {
	display: inline-block;
	width: 10%;
	height: 100%;
	margin-right: 20px;
	font-size: 12px;
}
.projects-container {
	display: inline-block;
	width: 85%;
	float: right;
	height: auto;
	margin-left: 20px;
	margin-top: 20px;
}
.project-container {
	display: block;
	width: 100%;
	height: 40%;
}
.list-links {
	margin-bottom: 10px;
	text-align: center;
}
</style>