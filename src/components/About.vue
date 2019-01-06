<template>
<div>
	<nav-bar></nav-bar>
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
				</p>
			</div>
		</div>
		<div class="pf-description">
			<h3 class="pf-greeting">
				Hi! My name is Arthur.
			</h3>
			<div class="pf-details">
				I'm currently a freshmen at the Univeristy of Michigan. I grew up in San Jose, CA and spent my early years playing club basketball, running track, and gaming a bit too much.
				<br></br>
				I attended Lynbrook High School, where I first discovered my love for engineering after joining the school's FIRST robotics team, the Funky Monkeys. As Vice President, I led multiple mechanical subteams, delivering ambitious products under time crunches. I also learned to love learning, and an ability to apply my knowledge to produce awesome robotic assemblies. 
				<br></br>
				Aside from robotics, I've built plenty of software for fun, such as a machine learning model that classifies breast cancer, a web platform that attempts to predict the stock market.
				<br></br>
				Currently, I'm helping to design a custom BMS system and telemetry system from scratch for SPARK, an electric motorcycle student project team at Michigan!
				<br></br>
				If you're interested at learning more about soe of the cool things I've worked on, feel free to check out my projects section!
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
a {
	color: #42b983;
}
body, html {
	margin: 0px;
	padding: 0;
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