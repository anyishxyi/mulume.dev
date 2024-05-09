import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { NotificationService } from '../../services/notification.service';
import { Notification, NotificationType } from '../../services/notification';

export const routeMeta: RouteMeta = {
  title: 'About // Jean-Paul NGALULA',
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, NgOptimizedImage],
  template: `
    <main class="c-cUWjlu c-cUWjlu-ihoTsLD-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icHFxNc-css">Innovate. Collaborate. Progress.</h1>
          <div class="c-exEMEo">
            <div class="c-jkdSvk">
              <span class="img-container">
                <img
                  alt="jeanpaul photo"
                  aria-hidden="true"
                  src="/img/jeanpaul_nm.jpg"
                  loading="lazy" />
              </span>
            </div>
            <div class="c-jkdSvk mt-5">
              <p class="c-chZgZR c-chZgZR-ibmnswx-css">
                <strong>Hello, I am Jean-Paul NGALULA MULUME</strong>. Passionate about computer
                development and technological innovation, I am a creator of web applications.
              </p>
              <p class="c-chZgZR">
                Currently <strong>Software engineer</strong> at Innov IT in
                <strong>Paris, France</strong>
              </p>
              <p class="c-chZgZR">
                I love dark mode, open source, and side projects. When I'm not working, I like to do
                some fitness, watch movies and
                <strong>eat cheese</strong>.
              </p>
            </div>
          </div>
          <div class="c-UazGY">
            <a
              (click)="downloadCV()"
              (keyup)="downloadCV()"
              role="button"
              class="c-gfjkKg"
              tabindex="0">
              <img src="/svg/download.svg" alt="download icon" class="download-icon" />Download my
              resume here
            </a>
          </div>
          <h2>Professional Career</h2>
          <div class="experience">
            <h3>Software engineer</h3>
            <p>
              <a href="https://www.soprasteria.com" target="_blank">Sopra Steria</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>{{ 'May 2024' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>Today</span>
              <span> • </span>
              <span>{{ seniority('05/13/2024', 'today') }}</span>
            </p>
          </div>
          <div class="experience">
            <h3>Software engineer</h3>
            <p>
              <a href="https://www.capgemini.com/" target="_blank">Capgemini</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>{{ 'Mar 2023' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ 'April 2024' | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span>{{ seniority('01/03/2023', '04/29/2024') }}</span>
            </p>
          </div>
          <div class="experience">
            <h3>Software Engineer - Consultant</h3>
            <p>
              <a href="https://www.alten.fr/" target="_blank">Alten</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>{{ 'Jul 2021' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ 'Feb 2023' | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span>{{ seniority('07/01/2021', '02/07/2023') }}</span>
            </p>
          </div>
          <div class="experience">
            <h3>Software Engineer</h3>
            <p>
              <a href="https://www.ownest.io/" target="_blank">Ownest</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>{{ 'Sept. 2018' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ 'Jan. 2021' | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span>{{ seniority('09/01/2018', '01/05/2021') }}</span>
            </p>
          </div>
          <div class="experience">
            <h3>Back end developer</h3>
            <p>
              <a href="https://www.jobnroll.fr/" target="_blank">Jobnroll</a>
              <span> • Paris, France</span>
            </p>
            <p>
              <span>{{ 'Jun 2018' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ 'Aug 2018' | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span>{{ seniority('06/01/2018', '08/06/2018') }}</span>
            </p>
          </div>
          <div class="experience">
            <h3>Back end developer</h3>
            <p>
              <a href="https://www.fpi-rdc.cd/" target="_blank">Industry Promotion Fund</a>
              <span> • Kinshasa, D.R.Congo</span>
            </p>
            <p>
              <span>{{ 'Jun 2016' | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ 'Aug 2017' | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span>1 year 3 months</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./about.page.scss'],
})
export default class AboutComponent {
  private readonly cvLink = '/cv/cv_jeanpaul_ngalula.pdf';

  constructor(private notificationService: NotificationService) {}

  /**
   * The method called when the user wants to download my CV
   */
  downloadCV(): void {
    const notification: Notification = {
      visibility: true,
      title: `Download...`,
      message: `Thank you for downloading my resume`,
      type: NotificationType.SUCCESS,
    };
    const link = document.createElement('a');
    link.href = this.cvLink;
    link.download = '';
    link.addEventListener('click', () => {
      this.notificationService.showNotification(notification);
    });
    link.click();
  }

  seniority(startDateString: string, endDateString: string): string {
    const startDate: Date = new Date(startDateString);
    const endDate: Date =
      endDateString.toLowerCase() === 'today' ? new Date() : new Date(endDateString);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInMonth = 30.44 * millisecondsInDay;

    const diffMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());

    let months = Math.floor(diffMilliseconds / millisecondsInMonth);
    const remainingDays = (diffMilliseconds % millisecondsInMonth) / millisecondsInDay;

    if (remainingDays >= 1) {
      months++;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = '';

    if (years > 0) {
      result += years + ' year';
      if (years > 1) {
        result += 's';
      }
    }

    if (remainingMonths > 0) {
      if (result !== '') {
        result += ' ';
      }
      result += remainingMonths + ' month';
      if (remainingMonths > 1) {
        result += 's';
      }
    }

    if (result === '') {
      result = '1 month';
    }

    return result;
  }
}
