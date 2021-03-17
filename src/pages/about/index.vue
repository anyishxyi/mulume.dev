<template>
	<div class="about_page m-0 w-content">
		<div class="heading flex">
      <div class="profile-width">
        <figure>
          <img :src="jeanpaul" class="profile-about-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </div>
      <div class="bio">
				<h1 class="font-bold text-lg text-primary-color">Hello <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="alien-monster" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="bounce ml-12 ml-4 svg-inline--fa"><path fill="currentColor" d="M560,128H544a15.99954,15.99954,0,0,0-16,16v96H480V176a15.99954,15.99954,0,0,0-16-16H432V96h32a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H448a15.99954,15.99954,0,0,0-16,16V64H400a15.99954,15.99954,0,0,0-16,16v48H192V80a15.99954,15.99954,0,0,0-16-16H144V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h32v64H112a15.99954,15.99954,0,0,0-16,16v64H48V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V448a15.99954,15.99954,0,0,0-16-16H176V384H400v48H336a15.99954,15.99954,0,0,0-16,16v16a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM464,336H112V288h32V208h48V176H384v32h48v80h32ZM240,224H208a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,240,224Zm128,0H336a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,368,224Z" class=""></path></svg></h1>
				<div class="content">I'm Jean-Paul, a full-stack web developer 💻 with a strong educational background in software engineering. I am doing freelance work 🚀 based in Paris 🇫🇷, but I do work remotely for international clients.</div>
				<button class="close btn-border btn-pad">Download my resume</button>
			</div>
		</div>
		<div class="content">
			<div class="title">Work Experience</div>
			<div class="works">
				<div class="work flex">
					<div class="container">
						<!-- anime-ping pour montrer l'activité actuelle -->
						<div class="ping anime-ping"></div>
					</div>
					<div class="content">
						<div class="periode">Sept 2018 - AUJOURD’HUI</div>
						<div class="role">Développeur Fullstack Javascript</div>
						<div class="entreprise">Ownest</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">Juin 2018 - Aout 2018</div>
						<div class="role">Internship | Web Developer PHP</div>
						<div class="entreprise">Jobnroll</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">Juin 2016 - Aout 2017</div>
						<div class="role">Développeur Java/JavaEE</div>
						<div class="entreprise">FPI</div>
					</div>
				</div>
			</div>
			<div class="title">Tech skills</div>
			<div class="skills"></div>
			<div class="title">Education</div>
			<div class="education">
				<div class="pulse"></div>
				<div class="content">
					<div class="periode">2020</div>
					<div class="role">Master degree</div>
					<div class="entreprise">ETNA</div>
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
const jeanpaul = require('@/assets/images/png/jeanpaul_ngalula.png')

export default {
  data() {
    return {
      jeanpaul
    }
  },
}
</script>

<style>

</style>templat