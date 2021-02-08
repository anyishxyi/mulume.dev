<template>
	<div class="about_page m-0 w-content">
		<div class="heading flex">
      <div class="profile-width">
        <figure>
          <img :src="jeanpaul" class="profile-about-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </div>
      <div class="bio">
				<div class="font-bold hello name-size">Hello</div>
				<div class="content">I'm Jean-Paul, a full-stack web developer 💻 with a strong educational background in software engineering. I am doing freelance work 🚀 based in Paris 🇫🇷, but I do work remotely for international clients.</div>
			</div>
		</div>
		<div class="content">
			<div class="title">Work Experience</div>
			<div class="work">
				<div class="pulse"></div>
				<div class="work">
					<div class="periode">Sept 2018 - AUJOURD’HUI</div>
					<div class="role">Développeur Fullstack JS</div>
					<div class="entreprise">Ownest</div>
				</div>
			</div>
			<div class="work">
				<div class="pulse"></div>
				<div class="work">
					<div class="periode">Juin 2018 - Aout 2018</div>
					<div class="role">Stage | Développeur PHP</div>
					<div class="entreprise">Jobnroll</div>
				</div>
			</div>
			<div class="work">
				<div class="pulse"></div>
				<div class="content">
					<div class="periode">Juin 2016 - Aout 2017</div>
					<div class="role">Développeur Java/JavaEE</div>
					<div class="entreprise">FPI</div>
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