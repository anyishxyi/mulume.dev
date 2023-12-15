import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Work. Hobby. Open Source.</h1>
          <div>
            <p>
              I have an intense passion for <strong>side projects</strong> and showcasing my
              creations. Explore a collection of my websites, apps, and libraries I've crafted.
              While some remain active, others have been retired.
            </p>
            <h2>All Projects</h2>
            <table id="content" class="mt-12 w-full border-collapse text-left">
              <thead
                class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                  <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                  <th class="wide-width py-4 pr-8 font-semibold text-slate-200">Project</th>
                  <th class="hidden py-4 pr-8 font-semibold text-slate-200 lg:table-cell">
                    Built with
                  </th>
                  <th class="hidden py-4 pr-8 font-semibold text-slate-200 sm:table-cell">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  *ngFor="let project of projectData"
                  class="border-b border-slate-300/10 last:border-none">
                  <td class="py-4 pr-4 align-top text-sm">
                    <div class="translate-y-px">{{ project.year }}</div>
                  </td>
                  <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div class="block">
                        <span class="hidden">{{ project.title }}</span>
                        <a
                          class="sm-hidden items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                          href="{{ project.link }}"
                          target="_blank"
                          rel="noreferrer"
                          ><span>
                            <span>{{ project.title }}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul class="flex -translate-y-1.5 flex-wrap">
                      <li *ngFor="let techno of project.technologies" class="my-1 mr-1.5">
                        <div
                          class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {{ techno }}
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td class="hidden py-4 align-top sm:table-cell">
                    <ul class="translate-y-1">
                      <li class="mb-1 flex items-center">
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                          href="{{ project.link }}"
                          target="_blank"
                          rel="noreferrer"
                          ><span>
                            <span>{{ project.link }}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectData: Array<Project> = new Array<Project>();

  ngOnInit() {
    this.projectData.push(
      {
        year: '2023',
        title: 'My portfolio v2',
        technologies: ['Angular', 'typescript', 'HTML/CSS', 'vercel/functions'],
        link: 'https://mulume.dev',
      },
      {
        year: '2021',
        title: 'My portfolio v1',
        technologies: ['Vue.js', 'javascript', 'HTML/CSS'],
        link: 'https://mulume-old.netlify.app',
      }
    );
  }
}
