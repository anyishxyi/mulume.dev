<template>
	<div class="about_page m-0 w-content">
		<div class="heading flex">
      <div class="profile-width">
        <figure>
          <img :src=jeanpaul class="profile-about-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </div>
      <div class="bio">
				<h1 class="font-bold text-lg text-primary-color">Hello <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="alien-monster" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="bounce ml-12 ml-4 svg-inline--fa"><path fill="currentColor" d="M560,128H544a15.99954,15.99954,0,0,0-16,16v96H480V176a15.99954,15.99954,0,0,0-16-16H432V96h32a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H448a15.99954,15.99954,0,0,0-16,16V64H400a15.99954,15.99954,0,0,0-16,16v48H192V80a15.99954,15.99954,0,0,0-16-16H144V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h32v64H112a15.99954,15.99954,0,0,0-16,16v64H48V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V448a15.99954,15.99954,0,0,0-16-16H176V384H400v48H336a15.99954,15.99954,0,0,0-16,16v16a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM464,336H112V288h32V208h48V176H384v32h48v80h32ZM240,224H208a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,240,224Zm128,0H336a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,368,224Z" class=""></path></svg></h1>
				<div class="content">I'm Jean-Paul, a full-stack web developer 💻 with a strong educational background in software engineering. I am doing freelance work 🚀 based in Paris 🇫🇷, but I do work remotely for international clients.</div>
				<button class="close btn-border btn-pad">Download my resume</button>
			</div>
		</div>
		<div class="content">
			<div class="title">Work Experience <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-laptop-code fa-w-20"><path fill="currentColor" d="M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16zM277.66 261.65l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.34 58.34c6.25 6.25 16.39 6.25 22.64 0zm73.38-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63z" class=""></path></svg></div>
			<div class="works">
				<div class="work flex">
					<div class="container">
						<!-- anime-ping pour montrer l'activité actuelle -->
						<div class="ping anime-ping"></div>
					</div>
					<div class="content">
						<div class="periode">September 2018 - current · France 🇫🇷</div>
						<div class="role">Full-stack Web Developer Javascript</div>
						<div class="entreprise">Ownest</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">Juin 2018 - Aout 2018 · France 🇫🇷</div>
						<div class="role">Internship | Web Developer PHP</div>
						<div class="entreprise">Jobnroll</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">Juin 2016 - Aout 2017 · Congo R.D. 🇨🇩</div>
						<div class="role">Développeur Java/JavaEE</div>
						<div class="entreprise">FPI</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="title">Tech skills <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-wrench fa-w-16"><path fill="currentColor" d="M507.48 117.18c-3-12.17-12.41-21.79-24.5-25.15-12.1-3.34-25.16.11-33.97 8.97l-58.66 58.63-32.44-5.4-5.38-32.41 58.67-58.64c8.84-8.89 12.28-21.92 8.91-33.99-3.38-12.11-13.06-21.5-25.29-24.53-53.09-13.19-107.91 2.07-146.54 40.69-37.63 37.62-52.6 91.37-40.72 143.27L24.04 372.06C8.53 387.53 0 408.12 0 430.02s8.53 42.49 24.04 57.97C39.51 503.47 60.1 512 82.01 512c21.88 0 42.47-8.53 57.98-24.01l183.34-183.26c51.79 11.87 105.64-3.14 143.49-40.93 38.09-38.1 53.69-94.27 40.66-146.62zm-74.61 112.69c-28.47 28.46-70.2 38.1-109.01 25.21l-14.06-4.69-203.75 203.67c-12.85 12.84-35.29 12.81-48.07 0-6.44-6.42-9.97-14.96-9.97-24.04 0-9.08 3.53-17.61 9.97-24.03l203.84-203.78-4.63-14.03c-12.81-38.9-3.22-80.62 25.04-108.9 20.35-20.32 47.19-31.24 75.04-31.24h1.12l-57.32 57.3 15.13 90.59 90.57 15.09 57.35-57.29c.32 28.26-10.62 55.52-31.25 76.14zM88.01 408.02c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z" class=""></path></svg></div>
			<div class="skills flex flex-wrap justify-center">
				<div class="m-4 rounded-lg bg-white">
					<img :src=javascript alt="JavaScript" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=vuejs alt="Vuejs" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=html alt="HTML" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=css alt="CSS" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=mongodb alt="MongoDB" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=expressjs alt="ExpressJS" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=nodejs alt="NodeJS" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=docker alt="Docker" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=ionic alt="Angular" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=jest alt="Jest" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=angular alt="Angular" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=firebase alt="Firebase" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=java alt="Java" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=spring alt="Spring" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=mochajs alt="Mocha" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
				<div class="m-4 rounded-lg bg-white">
					<img :src=mysql alt="MySQL" class="skill h-16 m-4" style="max-width: 8rem;" />
				</div>
			</div>
			<hr>
			<div class="title">Education <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-graduation-cap fa-w-20"><path fill="currentColor" d="M606.72 147.91l-258-79.57c-18.81-5.78-38.62-5.78-57.44 0l-258 79.57C13.38 154.05 0 171.77 0 192.02s13.38 37.97 33.28 44.11l22.64 6.98c-2.46 5.19-4.4 10.62-5.7 16.31C39.53 264.6 32 275.33 32 288.01c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.95 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.66c8.17-5.8 13.86-14.87 13.86-25.65 0-10.6-5.49-19.54-13.43-25.36 1.13-3.55 2.96-6.67 4.85-9.83l54.87 16.92L128 384c0 35.34 85.96 64 192 64s192-28.65 192-64l-14.28-114.26 109-33.62c19.91-6.14 33.28-23.86 33.28-44.11s-13.38-37.96-33.28-44.1zM462.44 374.47c-59.7 34.2-225.9 33.78-284.87 0l11.3-90.36 102.42 31.59c11.15 3.43 32.24 7.77 57.44 0l102.42-31.59 11.29 90.36zM334.59 269.82c-9.44 2.91-19.75 2.91-29.19 0L154.62 223.3l168.31-31.56c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.72-10.09-14.36-18.66-12.76l-203.78 38.2c-6.64 1.24-12.8 3.54-18.71 6.27L53.19 192l252.22-77.79c9.44-2.91 19.75-2.91 29.19 0l252.22 77.82-252.23 77.79z" class=""></path></svg></div>
			<div class="education">
				<div class="educ">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">2020</div>
						<div class="role">Master of Science · Software architect, application developer</div>
						<div class="entreprise">École des Technologies Numériques Appliquées (ETNA) · France 🇫🇷</div>
					</div>
				</div>
				<div class="educ">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">2016</div>
						<div class="role">Bachelor's degree in Computer Science</div>
						<div class="entreprise">Université de Kinshasa · Congo R.D. 🇨🇩</div>
					</div>
				</div>
			</div>
			<div class="title">Language skills</div>
			<div class="languages">
				<div class="language flex">
					<div class="title">French 🇫🇷</div>
					<div class="content"> Mothertongue</div>
				</div>
				<div class="language flex">
					<div class="title">English 🇬🇧</div>
					<div class="content"> Bilingual</div>
				</div>
			</div>
			<div class="title">Interests</div>
			<div class="interests">
				<div class="interest">
					<div class="title">Jobs</div>
					<div class="content">If you want to hire me, I'm interested to work in companies that offer modern technologies such as Node.js, Vue.js, Express.js, MongoDB, etc. I am looking for a role that challenges me.</div>
				</div>
				<div class="interest">
					<div class="title">Travel</div>
					<div class="content">I love traveling, especially to cities. I love when a city is vibrant and full of diversity. It might not be a surprise that one of my favorite places on Earth is Paris.</div>
				</div>
				<div class="interest">
					<div class="title">Technology</div>
					<div class="content">I'm fascinated by technological advances which companies such as Tesla, SpaceX, Boston Dynamics make.</div>
				</div>
				<div class="interest">
					<div class="title">Startups & Companies</div>
					<div class="content">I have a big entrepreneurial and startup curiosity which is devided in two fields. On one hand, small companies which try to make it big such as Avena (Mexican-originated fitness app). On the other hand, I like following strategic moves and happenings in big players such as Facebook, Netflix, Spotify.</div>
				</div>
				<div class="interest">
					<div class="title">Coding</div>
					<div class="content">This is a classic cliché. After (or before) work, I enjoy some coding on the side. I am currently exploring Nuxt and diving deeping in the internal workings of Vue.js in order to be able to contribute to the projects.</div>
				</div>
				<div class="interest">
					<div class="title">Cinema & TV</div>
					<div class="content">I love almost any kind of movie, but I always prefer DC and Marvel movies. As of TV: I enjoy my sitcoms like F·R·I·E·N·D·S (all-time favorite), HIMYM, TBBT as well as superhero-themed shows (Flash, Arrow), dramas (Dexter, Breaking Bad, GoT), among others. (If you want to engange in lengthy conversations with me, these are the way to go.)</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const jeanpaul		= require('@/assets/images/png/jeanpaul_ngalula.png')
const angular			= require('@/assets/images/skills/angular.svg')
const html				= require('@/assets/images/skills/html.svg')
const css					= require('@/assets/images/skills/css.svg')
const docker			= require('@/assets/images/skills/docker.svg')
const expressjs		= require('@/assets/images/skills/expressjs.svg')
const firebase		= require('@/assets/images/skills/firebase.svg')
const java				= require('@/assets/images/skills/java.svg')
const javascript	= require('@/assets/images/skills/javascript.svg')
const jest				= require('@/assets/images/skills/jest.svg')
const mochajs			= require('@/assets/images/skills/mochajs.svg')
const mongodb			= require('@/assets/images/skills/mongodb.svg')
const mysql				= require('@/assets/images/skills/mysql.svg')
const nodejs			= require('@/assets/images/skills/node.svg')
const spring			= require('@/assets/images/skills/spring.svg')
const vuejs				= require('@/assets/images/skills/vue.svg')
const ionic				= require('@/assets/images/skills/ionic.svg')


export default {
  data() {
    return {
      jeanpaul,
      angular,
      html,
      css,
      docker,
      expressjs,
      firebase,
      java,
      javascript,
      jest,
      mochajs,
      mongodb,
      mysql,
      nodejs,
      spring,
      ionic,
      vuejs
    }
  },
}
</script>

<style>

</style>templat