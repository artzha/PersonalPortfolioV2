<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<div class="main-content">
		<div class="info-container">
			<div class="pf-picture">
				<img class="pf-img" src="../assets/profile.jpg" alt="Arthur Zhang" height="100%" width="100%">
			</div>	
			<div class="pf-img-description">
				<p>
					<b>Location:</b> San Jose, CA
					<br><br>
					<b>School:</b> University of Michigan, Ann Arbor
					<br></br>
					<b>Major:</b> B.S.E in Computer Engineering
					<br></br>
					<b>Email:</b> arthurzh@umich.edu
					<br></br>
					<b>Github:</b> @kingarthurz3
					<br></br>
					<b>Instagram:</b> @kingarthurz3
					<br></br>
					<b @click="openUrl('https://www.linkedin.com/in/arthur-k-zhang/')" class="link-button">View My Linkedin</b>
				</p>
			</div>
		</div>
		<div class="pf-description">
			<h3 class="pf-greeting">
				Hi! My name is Arthur.
			</h3>
			<div class="pf-details">
				I'm currently a junior at the University of Michigan. I grew up in San Jose, CA and spent my early years playing sports, tinkering with projects, and gaming a bit too much.
				<br></br>
				I attended Lynbrook High School, where I first discovered my love for engineering after joining the school's FIRST robotics team, the Funky Monkeys. There, I learned to love learning, and an ability to apply my knowledge to produce awesome robotic assemblies. 
				<br></br>
				During my first year in college, I'm helping to design a custom BMS system and telemetry system from scratch for SPARK, an electric motorcycle student project team at Michigan.
				<br></br>
				Currently, I'm helping to develop avionics hardware for MASA, a student project design team that builds rockets that fly to the edge of space! I'm also
				writing embedded control software for MiTEE, a U of M lab that researches miniature satellites that use atmospheric currents to prolong mission life.
				<br></br>
				If you're interested at learning more about some of the cool things I've worked on, feel free to check out my projects section!
				<br></br>
				Interests: building awesomeness, boarding, and enjoying being young.

			</div>
		</div>
	</div>
</div>
</template>
<script>
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'About',
	components: {
		'nav-bar': NavBar
	},
	data() {
		return {
			navMsg: 'Resourceful Learner | Passionate Engineer | Easygoing Friend'
		}
	},
	methods: {
		openUrl: function(url) {
			window.open(url)
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
a {
	color: #42b983;
}
body, html {
	margin: 0px;
	padding: 0;
}
.link-button {
	color: blue;
}
.link-button:hover {
	cursor: pointer;
}
.main-content {
	margin: 40px;
}
.info-container {
	float: left;
	display: inline-block;
	width: 25%;
	height: 25%;
}
.pf-picture {
	float: left;
	display: inline-block;
	width: 100%;
	height: 50%;
	padding: 5px 5px 1px 5px;
	border: 1px solid grey;
	border-radius: 5px;
	margin-bottom: 10px;
}

.pf-image {
	width: auto;
	height: auto;
}
.pf-img-description {
	font-size: 12px;
}
.pf-greeting {
	display: block;
	text-align: left;
	width: auto;
	margin-top: 0px;
}
.pf-description {
	display: inline-block;
	width: 60%;
	float: left;
	margin-left: 40px;
	text-align: left;
}
.pf-details {
	float: left;
}
</style>