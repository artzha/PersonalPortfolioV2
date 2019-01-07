<template>
<div>
	<nav-bar :description="navMsg"></nav-bar>
	<div class="picture-grid">
		<div class="row">
			<div class="col">
				<img src="../../static/images/square/StockDisplaySite.png" class="picture-grid-detail"></img>
			</div>
			<div class="col">
				<img src="../../static/images/square/Hub_Motor_Assembly_Open.png" class="picture-grid-detail"></img>
			</div>
			<div class="col">
				<img src="../../static/images/square/telemetry.png" class="picture-grid-detail"></img>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<img src="../../static/images/square/ClimberSystemWinch.png" class="picture-grid-detail"></img>
			</div>
			<div class="col">
				<img src="../../static/images/square/feature-comparison.png" class="picture-grid-detail"></img>
			</div>
			<div class="col">
				<img src="../../static/images/square/Schematic.png" class="picture-grid-detail"></img>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import router from '../router'
import NavBar from './NavBar'

export default {
	name: 'HelloWorld',
	components: {
		'nav-bar': NavBar
	},
	data () {
		return {
			navMsg: "Discover more about me below!"
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
.picture-grid {
	display: block;
	width: 75%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
}
.picture-grid-detail {
	width: 100%; 
	height: auto;
}
.row {
	display: block;
	width: 100%;
	height: 45%;
}
.col {
	display: inline-block;
	width: 30%;
	height: 100%;
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
