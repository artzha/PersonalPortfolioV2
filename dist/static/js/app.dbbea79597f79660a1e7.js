webpackJsonp([0],{"7IGl":function(t,e){},DQDF:function(t,e){t.exports={0:{title:"Collegiate Electric Racing Team Telemetry System",url:"",date:"Fall 2018",src:"../../static/images/telemetry.png",type:"hardware",desc:"I built a telemetry system for my collegiate electric motorcycle racing team (SPARK) to help us analyze our motorcycle performance after races. I used an Arduino Uno and various sensors (GPS, IMU, temperature) to collect the data on the motorcycle and clean it using sensor fusion algorithms before saving it to an sd card. This data collected can be viewed on the telemetry dashboard (shown above). The dashboard supports a playback feature that allows users to view how the data changes by the second."},1:{title:"Mr.MarketWatch",url:"https://github.com/KingArthurZ3/StockDisplaySite",date:"Summer 2018",src:"../../static/images/Stock Display Site.png",type:"software",desc:"Mr. Stock Market is an intelligent trading advisor that analyzes numeric financial data and market sentiment using a gradient boosting machine learning model and predicts weekly stock prices. The frontend and backend parts of this project continuously update and display current financial predictions and graph data. The machine learning models used are built using Tensorflow and Sci-kit learn and the graphical display gui is built on top of the Vue.js framework."},2:{title:"FIRST Robotics Climber System",url:"../../static/images/ClimberDocumentation.pdf",date:"Winter 2017",src:"../../static/images/ClimberFullSystem.png",type:"hardware",desc:"In six weeks, I led a team of six students to design, manufacture, and test a climber system from scratch using Solidworks and Autodesk Inventor for the 2018 FIRST robotics competition. This is a highly adjustable system capable of lifting two other 150 lb robots, one on either side, in three seconds or lifting the attached robot in a second. It is comprised of three distinct mechanical assemblies: the gearbox, swing arm, and lifting forks."},3:{title:"Clothing Classifier",url:"https://github.com/KingArthurZ3/Clothing-Classifier",date:"Fall 2017",src:"../../static/images/clothing-classifier.png",type:"software",desc:"I created this Tensorflow algorithm and trained it to recognize clothing from images provided by Zalando (a fashion company). I used a dataset of over 55,000 training examples and 10,000 test examples. It classifies clothing into ten categories, ranging from t-shirts, trousers, pullovers, dresses, coats, sandals, shirts, sneakers, bags, and ankle boots."},4:{title:"In Hub Electric Longboard",url:"../../static/images/ElectricLongboard.pdf",date:"Fall 2018",src:"../../static/images/Hub_Motor_Assembly.png",type:"hardware",desc:"I’m designing and manufacturing an electric longboard, opting to increase the complexity by designing an in hub motor. The main challenges for this project are cost-effectively sourcing the materials used and performing calculations on optimizing motor performance. After testing the motor design, I plan on designing a custom battery management system and speed controllers as well (the current electrical system consists of store bought speed controllers and battery system). CAD renders of the current hub motor design are available below."},5:{title:"Breast Cancer Classifier",url:"https://github.com/KingArthurZ3/breastcancer-detector",date:"Winter 2017",src:"../../static/images/feature-comparison.png",type:"software",desc:"Doctors frequently have to diagnose breast cancer and determine if it is malignant or benign. I trained this model to help doctors quickly determine the condition of a patient's breast cancer. I used a Wisconsin breast cancer dataset from UCI's machine learning repository. After creating and tuning several machine learning models, I found that a Random Forest Classification model acheived the highest accuracy at 94.552% and also the highest cross validation scores."},6:{title:"Linear Algebra Library",url:"https://github.com/KingArthurZ3/linear-algebra",date:"Winter 2018",src:"../../static/images/linsystems.png",type:"software",desc:"This library provides implementations of vectors, lines, planes of nth dimensions, and also a linear systems of equations class. At a high level, the linear systems class can be used to solve for intersections and returns the intersection (if one exists), both as a unique point or as a parametrized equation. The library used a gaussian elimination algorithm to solve for a system of equations."},7:{title:"Yelp Sentiment Analysis",url:"https://github.com/KingArthurZ3/sentiment-reviewer",date:"Spring 2018",src:"../../static/images/yelp-review.png",type:"software",desc:"I trained this neural network to determine whether a user likes or dislikes a business based on their review. To do this, I used Natural Language Processing (NLP) to process their reviews. I used this dataset with 10,000 yelp reviews and classified them based on these 10 entries. I used Pandas, NLTK, and Scikit-learn libraries to help me analyze this dataset."},8:{title:"Constant Torque Spring Motor",url:"../../static/images/SpringMotor.pdf",date:"Spring 2018",src:"../../static/images/Negator Spring Motor.png",type:"hardware",desc:"I designed and machined a torque spring motor, which converts potential energy in constant torque springs to pulling force. I 3D printed custom ABS spools to wind two constant torque springs on. By adjusting the radius of the spool that the counterbalancing cable winds on, I can tune the motor to provide the exact amount of force produced. In 2018, I used this assembly to counterbalance a lift elevator on my team’s FIRST robot, which allowed us to rapidly move the entire 15 lb lift elevator with only one 775 pro motor."}}},ED8m:function(t,e){},"F8+k":function(t,e,n){t.exports=n.p+"static/img/profile.dbed72f.jpg"},Fxld:function(t,e){},MLy4:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("qGWJ")},null,null).exports,i=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[n("button",{staticClass:"title-btn",on:{click:function(e){t.navigate("Dashboard")}}},[n("h1",[t._v("\n\t\t\t\tHello, my name is Arthur.\n\t\t\t")])])]),t._v(" "),t._m(0),t._v(" "),n("div",[t._v("\n\t\tClick below to find out more about me, the projects I have worked on, and anything else that you might want to know about me! \n\t")]),t._v(" "),n("div",{staticClass:"nav-bar"},[n("li",[n("router-link",{attrs:{to:"/about"}},[n("button",{staticClass:"button-m"},[n("h4",[t._v("About Me")])])]),t._v(" "),n("router-link",{attrs:{to:"/projects"}},[n("button",{staticClass:"button-m"},[n("h4",[t._v("Projects")])])]),t._v(" "),n("router-link",{attrs:{to:"/musings"}},[n("button",{staticClass:"button-m"},[n("h4",[t._v("Random Musings")])])]),t._v(" "),n("router-link",{attrs:{to:"/contact"}},[n("button",{staticClass:"button-m"},[n("h4",[t._v("Contact")])])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h4",[this._v("\n\t\t\tWelcome to my personal website!\n\t\t")])])}]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{}}},o,!1,function(t){n("ED8m")},null,null).exports,l={name:"About",data:function(){return{currentRoute:x.currentRoute.name}},methods:{navigate:function(t){x.push({name:t})},isOnPage:function(t){return this.currentRoute==t}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[n("button",{staticClass:"title-btn",on:{click:function(e){t.navigate("Dashboard")}}},[n("h1",[t._v("\n\t\t\t\tArthur K Zhang \n\t\t\t")])])]),t._v(" "),n("div",[n("div",{staticClass:"nav-bar"},[n("li",[n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("About")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("About")}},[t._v("About Me")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Projects")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Projects")}},[t._v("Projects")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Musings")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Musings")}},[t._v("Musings")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Contact")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Contact")}},[t._v("Contact")])])])])]),t._v(" "),n("hr")])])},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("q/8h")},"data-v-13a73a2a",null).exports,h={name:"About",components:{"nav-bar":d},data:function(){return{}},methods:{}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("div",{staticClass:"info-container"},[a("div",{staticClass:"pf-picture"},[a("img",{staticClass:"pf-img",attrs:{src:n("F8+k"),alt:"Arthur Zhang",height:"100%",width:"100%"}})]),t._v(" "),a("div",{staticClass:"pf-img-description"},[a("p",[a("b",[t._v("Location:")]),t._v(" San Jose, CA\n\t\t\t\t\t"),a("br"),a("br"),t._v(" "),a("b",[t._v("School:")]),t._v(" University of Michigan, Ann Arbor\n\t\t\t\t\t"),a("br"),a("br"),t._v(" "),a("b",[t._v("Major:")]),t._v(" B.S.E in Computer Engineering\n\t\t\t\t\t"),a("br"),a("br"),t._v(" "),a("b",[t._v("Email:")]),t._v(" arthurzh@umich.edu\n\t\t\t\t\t"),a("br"),a("br"),t._v(" "),a("b",[t._v("Github:")]),t._v(" @kingarthurz3\n\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"pf-description"},[a("h3",{staticClass:"pf-greeting"},[t._v("\n\t\t\t\tHi! My name is Arthur.\n\t\t\t")]),t._v(" "),a("div",{staticClass:"pf-details"},[t._v("\n\t\t\t\tI'm currently a freshmen at the Univeristy of Michigan. I grew up in San Jose, CA and spent my early years playing club basketball, running track, and gaming a bit too much.\n\t\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\tI attended Lynbrook High School, where I first discovered my love for engineering after joining the school's FIRST robotics team, the Funky Monkeys. As Vice President, I led multiple mechanical subteams, delivering ambitious products under time crunches. I also learned to love learning, and an ability to apply my knowledge to produce awesome robotic assemblies. \n\t\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\tAside from robotics, I've built plenty of software for fun, such as a machine learning model that classifies breast cancer, a web platform that attempts to predict the stock market.\n\t\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\tCurrently, I'm helping to design a custom BMS system and telemetry system from scratch for SPARK, an electric motorcycle student project team at Michigan!\n\t\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\tIf you're interested at learning more about soe of the cool things I've worked on, feel free to check out my projects section!\n\t\t\t\t"),a("br"),a("br"),t._v("\n\t\t\t\tInterests: building awesomeness, boarding, and enjoying being young.\n\n\t\t\t")])])])}]};var p=n("VU/8")(h,m,!1,function(t){n("Fxld")},"data-v-0234a657",null).exports,v=n("DQDF"),g=n.n(v),f={name:"Project",props:{project:{type:Object,required:!0}},data:function(){return{currentRoute:x.currentRoute.name}},methods:{redirectUrl:function(t){"software"==this.project.type?window.location.href=t:(console.log("for hardware"),window.open(t))}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"project-img"},[n("div",{staticClass:"pf-picture",on:{click:function(e){t.redirectUrl(t.project.url)}}},[n("img",{staticClass:"pf-img",attrs:{src:t.project.imageSrc,alt:"Arthur Zhang",height:"100%",width:"100%"}})])]),t._v(" "),n("div",{staticClass:"project-desc"},[n("h2",{on:{click:function(e){t.redirectUrl(t.project.url)}}},[t._v("\n\t\t\t"+t._s(t.project.title)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"date"},[n("b",[t._v(t._s(t.project.date))])]),t._v(" "),n("span",[t._v("\n\t\t\t"+t._s(t.project.description)+"\n\t\t")]),t._v(" "),n("button",{staticClass:"info-btn",attrs:{type:"submit"},on:{click:function(e){t.redirectUrl(t.project.url)}}},["software"==t.project.type?n("span",[t._v("Github")]):n("span",[t._v("Paper")])])])])},staticRenderFns:[]};var _={name:"Projects",components:{"nav-bar":d,"project-card":n("VU/8")(f,b,!1,function(t){n("sqEs")},null,null).exports},data:function(){return{projectContainer:[],searchQuery:""}},computed:{filteredProjects:function(){var t=this;return this.projectContainer.filter(function(e){return e.title.toUpperCase().match(t.searchQuery.toUpperCase())})}},methods:{loadProjectData:function(){for(var t in g.a)this.projectContainer.push({title:g.a[t].title,url:g.a[t].url,date:g.a[t].date,imageSrc:g.a[t].src,description:g.a[t].desc,type:g.a[t].type})},removeSearchQuery:function(){this.searchQuery="",this.isProject=!1},submitSearch:function(){return this.isResult=!0,this.filteredProjects},projectId:function(t){return"#"+t}},created:function(){this.loadProjectData()}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar"),t._v(" "),n("div",{staticClass:"project-content"},[n("div",{staticClass:"table-contents"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{id:"search-bar",type:"text",placeholder:"Search for project..."},domProps:{value:t.searchQuery},on:{keyup:t.submitSearch,input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t._l(t.filteredProjects,function(e,a){return n("li",{key:a,staticClass:"list-links"},[n("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:t.projectId(e.title),expression:"projectId(project.title)"}]},[t._v(t._s(e.title))])])})],2)]),t._v(" "),n("div",{staticClass:"projects-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.filteredProjects.length<=0,expression:"filteredProjects.length <= 0"}]},[t._v("No results found :'(")]),t._v(" "),t._l(t.filteredProjects,function(t,e){return n("transition-group",{key:e,staticClass:"main-content",attrs:{name:"staggered-fade",tag:"div"}},[n("project-card",{key:e,staticClass:"project-container",attrs:{project:t,id:t.title}})],1)})],2)])],1)},staticRenderFns:[]};var w=n("VU/8")(_,y,!1,function(t){n("lYkg")},"data-v-0f2586d0",null).exports,k={name:"Musings",components:{"nav-bar":d},data:function(){return{}},methods:{}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar"),this._v(" "),e("h2",[this._v("Under construction, thought to come")])],1)},staticRenderFns:[]};var j=n("VU/8")(k,C,!1,function(t){n("MLy4")},"data-v-7a6f93bb",null).exports,I={name:"Contact",components:{"nav-bar":d},data:function(){return{}},methods:{redirectToLink:function(t){window.open(t)},openResume:function(){window.open("/../../static/images/Arthur_Zhang_Resume.pdf")}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar"),t._v(" "),n("h4",[t._v("\n\t\tFeel free to contact me about anything! I usually try to respond within a day or two.\n\t")]),t._v(" "),n("div",[n("b",[t._v("Email: ")]),t._v(" "),n("span",{staticClass:"link"},[t._v("arthurzh@umich.edu")]),t._v(" "),n("br"),n("br"),t._v(" "),n("b",[t._v(" Linkedin: ")]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.redirectToLink("https://www.linkedin.com/in/arthur-k-zhang/")}}},[t._v("https://www.linkedin.com/in/arthur-k-zhang/")]),t._v(" "),n("br"),n("br"),t._v(" "),n("b",[t._v(" Github: ")]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.redirectToLink("https://github.com/KingArthurZ3")}}},[t._v("https://github.com/KingArthurZ3")]),t._v(" "),n("br"),n("br")]),t._v(" "),n("div",[n("b",{staticClass:"link",attrs:{href:"/../assets/Arthur_Zhang_Resume.pdf"},on:{click:function(e){t.openResume()}}},[t._v("View Resume")])])],1)},staticRenderFns:[]};var S=n("VU/8")(I,A,!1,function(t){n("hD5/")},"data-v-f320ff68",null).exports,P={name:"ProjectDetail",components:{"nav-bar":d},data:function(){return{title:x.currentRoute.path}},methods:{},created:function(){}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar"),this._v(" "),e("h1",[this._v("\n\t\t"+this._s(this.title)+"\n\t")])],1)},staticRenderFns:[]};var M=n("VU/8")(P,R,!1,function(t){n("7IGl")},"data-v-74c4b297",null).exports;a.a.use(i.a);var x=new i.a({routes:[{path:"/",name:"Dashboard",component:c},{path:"/about",name:"About",component:p},{path:"/projects",name:"Projects",component:w},{path:"/musings",name:"Musings",component:j},{path:"/contact",name:"Contact",component:S},{path:"/projects/:type/:project_name",name:"Project_Detail",component:M}]}),F=n("bm7V"),T=n.n(F);a.a.config.productionTip=!1,a.a.use(T.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new a.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},"hD5/":function(t,e){},lYkg:function(t,e){},"q/8h":function(t,e){},qGWJ:function(t,e){},sqEs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dbbea79597f79660a1e7.js.map