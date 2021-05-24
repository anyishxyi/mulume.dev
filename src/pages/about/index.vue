<template>
	<div class="about_page m-0 w-content">
		<div class="heading flex-content">
      <div class="profile-width m-auto">
        <figure>
          <img :src="require('@/assets/images/png/jeanpaul_ngalula.png')" class="profile-about-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </div>
      <div class="bio pl-70">
				<h1 class="font-bold text-lg text-primary-color">{{ $t('page.about.hello') }} <img :src="require('@/assets/images/svg/hello.svg')" alt="hello" class="icon-tilte" style="width: 40px; height: 40px" /></h1>
				<div class="content">{{ $t('page.about.presentation') }}</div>      
				<div class="flex space-x-2 text-lg mt-2 pb-25">
					<a href="https://github.com/nmcodes" title="Github" class="social-media-link mr-6 relative flex flex-col items-center" target="_blank">
						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 icon">
							<path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path>
						</svg>
					</a> 
					<a href="https://twitter.com/mulume_" title="Twitter" class="social-media-link mr-6 relative flex flex-col items-center" target="_blank">
						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 icon">
							<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path>
						</svg>
					</a> 
					<a href="https://www.linkedin.com/in/jeanpaulngalula" title="LinkedIn" class="social-media-link mr-6 relative flex flex-col items-center" target="_blank">
						<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin fa-w-14 icon">
							<path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" class=""></path>
						</svg>
					</a>
				</div>
				<a :href="resume_fr" class="btn_download_pdf" target="_blank" download="CV_jeanpaul_ngalula_dev_js"> {{ $t('page.about.downloadResume') }}</a>
			</div>
		</div>
		<div class="content">
			<div class="title">{{ $t('page.about.works.title') }} <img :src="require('@/assets/images/svg/works.svg')" alt="works" class="icon-tilte" style="width: 30px; height: 30px" /></div>
			<div class="works">
				<div class="work flex">
					<div class="container">
						<!-- anime-ping pour montrer l'activité actuelle -->
						<div class="ping anime-ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.ownest.periode') }}</div>
						<div class="role">{{ $t('page.about.works.ownest.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.ownest.entreprise') }}</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.jobnrol.periode') }}</div>
						<div class="role">{{ $t('page.about.works.jobnrol.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.jobnrol.entreprise') }}</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.fpi.periode') }}</div>
						<div class="role">{{ $t('page.about.works.fpi.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.fpi.entreprise') }}</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="title">{{ $t('page.about.skills') }} <img :src="require('@/assets/images/svg/skills.svg')" alt="skills" class="icon-tilte" style="width: 30px; height: 30px" /></div>
			<div class="skills flex flex-wrap justify-center">
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/javascript.svg')" alt="JavaScript" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/vue.svg')" alt="Vuejs" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/html.svg')" alt="HTML" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/css.svg')" alt="CSS" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/mongodb.svg')" alt="MongoDB" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/expressjs.svg')" alt="ExpressJS" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/node.svg')" alt="NodeJS" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/docker.svg')" alt="Docker" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/ionic.svg')" alt="ionic" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/jest.svg')" alt="Jest" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/angular.svg')" alt="Angular" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/typescript.svg')" alt="typescript" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/firebase.svg')" alt="Firebase" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/java.svg')" alt="Java" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/spring.svg')" alt="Spring" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/mochajs.svg')" alt="Mocha" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
				<div class="m-skill rounded-lg">
					<img :src="require('@/assets/images/skills/mysql.svg')" alt="MySQL" class="skill h-skill m-skill" style="max-width: 8rem;" />
				</div>
			</div>
			<hr>
			<div class="title">{{ $t('page.about.education.title') }} <img :src="require('@/assets/images/svg/education.svg')" alt="education" class="icon-tilte" style="width: 30px; height: 30px" /></div>
			<div class="education">
				<div class="educ">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.education.etna.year') }}</div>
						<div class="role">{{ $t('page.about.education.etna.degree') }}</div>
						<div class="entreprise">{{ $t('page.about.education.etna.school') }}</div>
					</div>
				</div>
				<div class="educ">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.education.unikin.year') }}</div>
						<div class="role">{{ $t('page.about.education.unikin.degree') }}</div>
						<div class="entreprise">{{ $t('page.about.education.unikin.school') }}</div>
					</div>
				</div>
			</div>
			<div class="title">{{ $t('page.about.language.title') }} <img :src="require('@/assets/images/svg/language.svg')" alt="language" class="icon-tilte" style="width: 30px; height: 30px" /></div>
			<div class="languages">
				<div class="language flex">
					<div class="label">{{ $t('page.about.language.french.title') }} 🇫🇷</div>
					<div class="level">{{ $t('page.about.language.french.level') }}</div>
				</div>
				<div class="language flex">
					<div class="label">{{ $t('page.about.language.english.title') }} 🇬🇧</div>
					<div class="level">{{ $t('page.about.language.english.level') }}</div>
				</div>
			</div>
			<div class="title">{{ $t('page.about.interest.title') }} <img :src="require('@/assets/images/svg/interest.svg')" alt="interest" class="icon-tilte" style="width: 30px; height: 30px" /></div>
			<div class="interests">
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.jobs.title') }} <img :src="require('@/assets/images/svg/job.svg')" alt="job" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.jobs.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.travel.title') }} <img :src="require('@/assets/images/svg/travel.svg')" alt="travel" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.travel.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.tech.title') }} <img :src="require('@/assets/images/svg/technology.svg')" alt="technology" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.tech.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.companies.title') }} <img :src="require('@/assets/images/svg/company.svg')" alt="company" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.companies.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.coding.title') }} <img :src="require('@/assets/images/svg/coding.svg')" alt="coding" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.coding.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.tv.title') }} <img :src="require('@/assets/images/svg/tv.svg')" alt="tv" class="icon-tilte" style="width: 30px; height: 30px" /></div>
					<div class="content">{{ $t('page.about.interest.tv.content') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const resume_en 	= require('@/assets/resume/Resume_jeanpaul_ngalula_dev_js.pdf')
const resume_fr 	= require('@/assets/resume/CV_jeanpaul_ngalula_dev_js.pdf')

export default {
  data() {
    return {
			resume_en,
			resume_fr
    }
  },
	methods: {
		downloadMyResume() {
			
		},
		// forceFileDownload(response, title) {
    //   console.log(title)
    //   const url = window.URL.createObjectURL(new Blob([response.data]))
    //   const link = document.createElement('a')
    //   link.href = url
    //   link.setAttribute('download', title)
    //   document.body.appendChild(link)
    //   link.click()
    // },
    // async downloadWithAxios(title) {
		// 	try {
		// 		const resp = await axios({ method: 'get', resume, responseType: 'arraybuffer' })
		// 		if(resp) {
		// 			this.forceFileDownload(resp, title)
		// 		}
		// 	} catch (error) {
		// 		console.log({error})
		// 	}
		// }

	}
}
</script>

<style>

</style>