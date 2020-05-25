<template>
	<div>
		<div class="project-img">
			<div class="pf-picture" @click="redirectUrl(project.url)">
				<img class="pf-img" :src=project.imageSrc alt="Arthur Zhang" height="100%" width="100%">
			</div>
		</div>
		<div class="project-desc">
			<h2 @click="redirectUrl(project.url)">
				{{project.title}}
			</h2>
			<div class="date">
				 <b>{{project.date}}</b>
			</div>
			<span>
				{{project.description}}
			</span>
			<button class="info-btn" type="submit"
			@click="redirectUrl(project.url)">
				<span v-if="project.type=='software'">Github</span>
				<span v-else-if="project.type=='hardware'">Paper</span>
			</button>
			<!-- <button class="info-btn" type="submit"
			@click="navigate()">
				<span v-if="project.type=='software'">Github</span>
				<span v-else="project.type=='hardware'">Paper</span>
			</button> -->
		</div>
	</div>
</template>
<script>
import router from '../router'

export default {
	name:'Project',
	props: {
		project: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			currentRoute: router.currentRoute.name
		}
	},
	methods: {
		redirectUrl: function(url) {
			if (this.project.type == "software") {
				window.open(url)
			} else {
				console.log("for hardware")
				window.open(url)
			}
		},
		navigate: function() {
			const pathName = '/projects/' + this.project.type + '/' + this.project.title;
			console.log("HIT PATH ", pathName)
			router.push({path: pathName});
		}
	}
};
</script>

<style>
h2 {
	margin-top: 0px;
	margin-bottom: 5px;
}
h2:hover {
	cursor: pointer;
}
.project-container {
	display: block;
	width: 100%;
	height: 40%;
}
.project-img {
	display: inline-block;
	float: left;
	width: 45%;
	height: 100%;
}

.project-desc {
	display: inline-block;
	text-align: left;
	float: left;
	width: 50%;
	height: 100%;
	margin-left: 30px;
}

@media screen and (max-width: 650px), (max-height: 650px) {
	.project-desc {
		display: inline-block;
		text-align: center;
		float: none;
		width: 100%;
		height: 100%;
		margin-left: 0px;
	}
	.project-img {
		display: inline-block;
		float: none;
		width: 70%;
		height: 70%;
	}

	.info-btn {
		display: block;
		background-color: #3399ff;
		outline: none;
		border: none;
		border-radius: 4px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		height: 25px;
		width: auto;
		padding: 5px;
		margin: 0 auto;
	}
}

.date {
	padding-bottom: 5px;
	font-size: 14px;
}
.info-btn {
	display: block;
	background-color: #3399ff;
	outline: none;
	border: none;
	border-radius: 4px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	height: 25px;
	width: auto;
	padding: 5px;
	margin-top: 5px;
}
.info-btn:hover {
	cursor: pointer;
}
</style>
