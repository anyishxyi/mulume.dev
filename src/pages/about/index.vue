<template>
	<div class="about_page m-0 w-content">
		<div class="heading flex-content">
      <div class="profile-width m-auto">
        <figure>
          <img :src="require('@/assets/images/png/jeanpaul_ngalula.png')" class="profile-about-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </div>
      <div class="bio pl-70">
				<h1 class="font-bold text-lg text-primary-color">{{ $t('page.about.hello') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="alien-monster" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="bounce ml-12 ml-4 svg-inline--fa"><path fill="currentColor" d="M560,128H544a15.99954,15.99954,0,0,0-16,16v96H480V176a15.99954,15.99954,0,0,0-16-16H432V96h32a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H448a15.99954,15.99954,0,0,0-16,16V64H400a15.99954,15.99954,0,0,0-16,16v48H192V80a15.99954,15.99954,0,0,0-16-16H144V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h32v64H112a15.99954,15.99954,0,0,0-16,16v64H48V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V448a15.99954,15.99954,0,0,0-16-16H176V384H400v48H336a15.99954,15.99954,0,0,0-16,16v16a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM464,336H112V288h32V208h48V176H384v32h48v80h32ZM240,224H208a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,240,224Zm128,0H336a15.99954,15.99954,0,0,0-16,16v48a16.00079,16.00079,0,0,0,16,16h32a16.00079,16.00079,0,0,0,16-16V240A15.99954,15.99954,0,0,0,368,224Z" class=""></path></svg></h1>
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
			<div class="title">{{ $t('page.about.works.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-laptop-code fa-w-20"><path fill="currentColor" d="M624 352h-48V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v288H16c-8.8 0-16 7.2-16 16v48c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-48c0-8.8-7.2-16-16-16zM112 64c0-8.67 7.33-16 16-16h384c8.67 0 16 7.33 16 16v288H112V64zm480 352c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-16h180.9c5.57 9.39 15.38 16 27.1 16h128c11.72 0 21.52-6.61 27.1-16H592v16zM277.66 261.65l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.34 58.34c6.25 6.25 16.39 6.25 22.64 0zm73.38-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63z" class=""></path></svg></div>
			<div class="works">
				<div class="work flex">
					<div class="container">
						<!-- anime-ping pour montrer l'activité actuelle -->
						<div class="ping anime-ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.work1.periode') }}</div>
						<div class="role">{{ $t('page.about.works.work1.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.work1.entreprise') }}</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.work2.periode') }}</div>
						<div class="role">{{ $t('page.about.works.work2.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.work2.entreprise') }}</div>
					</div>
				</div>
				<div class="work">
					<div class="container">
						<div class="ping"></div>
					</div>
					<div class="content">
						<div class="periode">{{ $t('page.about.works.work3.periode') }}</div>
						<div class="role">{{ $t('page.about.works.work3.role') }}</div>
						<div class="entreprise">{{ $t('page.about.works.work3.entreprise') }}</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="title">{{ $t('page.about.skills') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-wrench fa-w-16"><path fill="currentColor" d="M507.48 117.18c-3-12.17-12.41-21.79-24.5-25.15-12.1-3.34-25.16.11-33.97 8.97l-58.66 58.63-32.44-5.4-5.38-32.41 58.67-58.64c8.84-8.89 12.28-21.92 8.91-33.99-3.38-12.11-13.06-21.5-25.29-24.53-53.09-13.19-107.91 2.07-146.54 40.69-37.63 37.62-52.6 91.37-40.72 143.27L24.04 372.06C8.53 387.53 0 408.12 0 430.02s8.53 42.49 24.04 57.97C39.51 503.47 60.1 512 82.01 512c21.88 0 42.47-8.53 57.98-24.01l183.34-183.26c51.79 11.87 105.64-3.14 143.49-40.93 38.09-38.1 53.69-94.27 40.66-146.62zm-74.61 112.69c-28.47 28.46-70.2 38.1-109.01 25.21l-14.06-4.69-203.75 203.67c-12.85 12.84-35.29 12.81-48.07 0-6.44-6.42-9.97-14.96-9.97-24.04 0-9.08 3.53-17.61 9.97-24.03l203.84-203.78-4.63-14.03c-12.81-38.9-3.22-80.62 25.04-108.9 20.35-20.32 47.19-31.24 75.04-31.24h1.12l-57.32 57.3 15.13 90.59 90.57 15.09 57.35-57.29c.32 28.26-10.62 55.52-31.25 76.14zM88.01 408.02c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z" class=""></path></svg></div>
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
			<div class="title">{{ $t('page.about.education.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-graduation-cap fa-w-20"><path fill="currentColor" d="M606.72 147.91l-258-79.57c-18.81-5.78-38.62-5.78-57.44 0l-258 79.57C13.38 154.05 0 171.77 0 192.02s13.38 37.97 33.28 44.11l22.64 6.98c-2.46 5.19-4.4 10.62-5.7 16.31C39.53 264.6 32 275.33 32 288.01c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.95 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.66c8.17-5.8 13.86-14.87 13.86-25.65 0-10.6-5.49-19.54-13.43-25.36 1.13-3.55 2.96-6.67 4.85-9.83l54.87 16.92L128 384c0 35.34 85.96 64 192 64s192-28.65 192-64l-14.28-114.26 109-33.62c19.91-6.14 33.28-23.86 33.28-44.11s-13.38-37.96-33.28-44.1zM462.44 374.47c-59.7 34.2-225.9 33.78-284.87 0l11.3-90.36 102.42 31.59c11.15 3.43 32.24 7.77 57.44 0l102.42-31.59 11.29 90.36zM334.59 269.82c-9.44 2.91-19.75 2.91-29.19 0L154.62 223.3l168.31-31.56c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.72-10.09-14.36-18.66-12.76l-203.78 38.2c-6.64 1.24-12.8 3.54-18.71 6.27L53.19 192l252.22-77.79c9.44-2.91 19.75-2.91 29.19 0l252.22 77.82-252.23 77.79z" class=""></path></svg></div>
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
			<div class="title">{{ $t('page.about.language.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="language" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-language fa-w-20"><path fill="currentColor" d="M160.3 203.8h-.5s-4.3 20.9-7.8 33l-11 37.3h37.9l-10.7-37.3c-3.6-12.1-7.9-33-7.9-33zM616 96H24c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zM233.2 352h-22.6a12 12 0 0 1-11.5-8.6l-9.3-31.7h-59.9l-9.1 31.6c-1.5 5.1-6.2 8.7-11.5 8.7H86.8c-8.2 0-14-8.1-11.4-15.9l57.1-168c1.7-4.9 6.2-8.1 11.4-8.1h32.2c5.1 0 9.7 3.3 11.4 8.1l57.1 168c2.6 7.8-3.2 15.9-11.4 15.9zM600 376H320V136h280zM372 228h110.8c-6.3 12.8-15.1 25.9-25.9 38.5-6.6-7.8-12.8-15.8-18.3-24-3.5-5.3-10.6-6.9-16.1-3.6l-13.7 8.2c-5.9 3.5-7.6 11.3-3.8 17 6.5 9.7 14.4 20.1 23.5 30.6-9 7.7-18.6 14.8-28.7 21.2-5.4 3.4-7.1 10.5-3.9 16l7.9 13.9c3.4 5.9 11 7.9 16.8 4.2 12.5-7.9 24.6-17 36-26.8 10.7 9.6 22.3 18.6 34.6 26.6 5.8 3.7 13.6 1.9 17-4.1l8-13.9c3.1-5.5 1.5-12.5-3.8-16-9.2-6-18.4-13.1-27.2-20.9 1.5-1.7 2.9-3.3 4.3-5 17.1-20.6 29.6-41.7 36.8-62H540c6.6 0 12-5.4 12-12v-16c0-6.6-5.4-12-12-12h-64v-16c0-6.6-5.4-12-12-12h-16c-6.6 0-12 5.4-12 12v16h-64c-6.6 0-12 5.4-12 12v16c0 6.7 5.4 12.1 12 12.1z" class=""></path></svg></div>
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
			<div class="title">{{ $t('page.about.interest.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-smile-beam fa-w-16"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z" class=""></path></svg></div>
			<div class="interests">
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.jobs.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-tie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user-tie fa-w-14"><path fill="currentColor" d="M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm91.9 256.2l-56.5 154.5L240 376l32-56h-96l32 56-19.5 82.7L132 304.2C58.9 305.5 0 365 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-73.4-58.9-132.9-132.1-134.2zM96 464H48v-25.6c0-35.4 21.9-66.2 53-79.4l38.4 105H96zm304 0h-91.3L347 359c31 13.2 53 44 53 79.4V464z" class=""></path></svg></div>
					<div class="content">{{ $t('page.about.interest.jobs.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.travel.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plane-departure" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-plane-departure fa-w-20"><path fill="currentColor" d="M624 464H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM74.64 367.77A48.002 48.002 0 0 0 110.62 384h.21l124.25-.54c12.03-.02 24.23-3.07 35.13-8.82L550.46 226.7c30.06-15.87 54.47-38.04 70.58-64.11 19.42-31.42 23.95-58.48 13.46-80.44-10.38-21.78-33.53-34.06-68.79-36.44-3.23-.22-6.46-.32-9.68-.32-26.8 0-54.1 7.23-81.12 21.5l-88.68 46.82-.36.19-.39-.15-201-78.46a47.99 47.99 0 0 0-39.86 2.26L108.7 56.52a48.002 48.002 0 0 0-3.84 82.64l103.92 67.88.29.19-.35.18-66.79 35.26-.42.22-.42-.22-54.64-28.65a47.96 47.96 0 0 0-22.29-5.49c-7.7 0-15.4 1.85-22.41 5.55l-16.16 8.53A47.987 47.987 0 0 0 .78 256.42a47.981 47.981 0 0 0 11.23 40.4l62.63 70.95zM64.16 256.52l77.43 40.6 161.98-85.51L131.11 98.97 167.03 80l221.83 86.59 108.46-57.25c20.05-10.59 39.81-15.95 58.72-15.95 2.14 0 4.29.07 6.44.21 15.03 1.02 26.56 4.71 28.71 9.24 2.08 4.36.46 16.01-10.98 34.51-11.62 18.8-29.66 35.02-52.16 46.9L247.81 332.19c-4.04 2.13-8.52 3.26-12.94 3.27l-124.25.54L48 265.05l16.16-8.53z" class=""></path></svg></div>
					<div class="content">{{ $t('page.about.interest.travel.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.tech.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="microchip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-microchip fa-w-16"><path fill="currentColor" d="M368.5 0H144c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48h224.5c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 457c0 3.3-2.7 7-6 7H150c-3.3 0-6-3.7-6-7V54c0-3.3 2.7-6 6-6h212.5c3.3 0 6 2.7 6 6v403zM512 106v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42V88h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zM30 376h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6z" class=""></path></svg></div>
					<div class="content">{{ $t('page.about.interest.tech.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.companies.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-rocket fa-w-16"><path fill="currentColor" d="M367.96813,103.99609a39.999,39.999,0,1,0,40.00384,40A40.02908,40.02908,0,0,0,367.96813,103.99609ZM505.07337,19.3418c-1.21875-5.60742-6.75-11.13868-12.34373-12.3418-32.62885-7-58.162-7-83.57017-7C305.39988,0,242.95858,55.0918,196.236,127.99609H94.82015c-16.34567.01563-35.53314,11.875-42.87883,26.48243L2.53125,253.28906A28.12512,28.12512,0,0,0,0,263.99219a24.00617,24.00617,0,0,0,24.00191,23.998h92.63266l-10.59373,21.42188c-9.33592,18.91016,4.27733,34.77344,6.15624,36.62305l53.75381,53.71875c15.56443,15.54492,33.81635,7.52929,36.6601,6.13867l21.34567-10.57617V488a24.00659,24.00659,0,0,0,24.00191,24,28.618,28.618,0,0,0,10.71873-2.51562l98.6971-49.4043c14.625-7.29688,26.50191-26.5,26.50191-42.85938V315.69336c72.72449-46.76367,128.10525-109.44922,128.10525-212.69727C512.07531,77.4668,512.07531,51.99805,505.07337,19.3418ZM358.53065,274.99023c-36.94135,18.48438-121.10527,60.14063-166.7966,82.73243l-37.50189-37.49805c22.59567-45.6875,64.25575-129.99609,82.72447-166.88672C284.33741,79.5293,335.96623,47.99805,409.15947,47.99805c18.00192,0,34.2851,0,52.56632,2.34375,2.375,18.71875,2.31249,35.27929,2.25,52.63867C463.97578,175.75977,432.41138,227.30469,358.53065,274.99023Z" class=""></path></svg></div>
					<div class="content">{{ $t('page.about.interest.companies.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.coding.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-code fa-w-18"><path fill="currentColor" d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" class=""></path></svg></div>
					<div class="content">{{ $t('page.about.interest.coding.content') }}</div>
				</div>
				<div class="interest">
					<div class="title">{{ $t('page.about.interest.tv.title') }} <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="tv-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-tv-alt fa-w-20"><path fill="currentColor" d="M528 464H112a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h544a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm0 368H48V48h544z" class=""></path></svg></div>
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