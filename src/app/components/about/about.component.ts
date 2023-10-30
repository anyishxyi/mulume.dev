import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/services/notification';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-ihoTsLD-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icHFxNc-css" i18n>Innovate. Collaborate. Progress.</h1>
          <div class="c-exEMEo">
            <div class="c-jkdSvk">
              <span class="img-container">
                <img alt="jeanpaul photo" i18n-alt aria-hidden="true" src="/assets/img/jeanpaul_ng.png" loading="lazy">
              </span>
            </div>
            <div class="c-jkdSvk mt-5">
              <p class="c-chZgZR c-chZgZR-ibmnswx-css" i18n><strong>Hello, I am Jean-Paul NGALULA MULUME</strong>. Passionate about computer development and technological innovation, I am a creator of web applications.</p>
              <p class="c-chZgZR" i18n>Currently <strong>Software engineer</strong> at Innov IT in <strong>Paris, France</strong></p>
              <p class="c-chZgZR" i18n>I love dark mode, open source, and side projects. When I'm not working, I like to do some fitness, watch movies and <strong>eat cheese</strong>.</p>
            </div>
          </div>
          <div class="c-UazGY">
            <a (click)="downloadCV()" role="button" class="c-gfjkKg" i18n>
              <img src="/assets/svg/download.svg" alt="download icon" i18n-alt class="download-icon"/>Download my resume here
            </a>
          </div>
          <h2 i18n>Professional Career</h2>
          <div class="experience">
            <h3 i18n>Software engineer</h3>
            <p>
              <a href="https://www.capgemini.com/" target="_blank">Capgemini</a>
              <span i18n> • Paris, France</span>
            </p>
            <p>
              <span>{{ "Mar 2023" | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>Today</span>
              <span> • </span>
              <span i18n>{{ seniority("03/01/2023", "today") }}</span>
            </p>
          </div>
          <div class="experience">
            <h3 i18n>Software Engineer - Consultant</h3>
            <p>
              <a href="https://www.alten.fr/" target="_blank">Alten</a>
              <span i18n> • Paris, France</span>
            </p>
            <p>
              <span>{{ "Jul 2021" | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ "Feb 2023" | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span i18n>{{ seniority("07/01/2021", "02/07/2023") }}</span>
            </p>
          </div>
          <div class="experience">
            <h3 i18n>Software Engineer</h3>
            <p>
              <a href="https://www.ownest.io/" target="_blank">Ownest</a>
              <span i18n> • Paris, France</span>
            </p>
            <p>
              <span>{{ "Sept. 2018" | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ "Jan. 2021" | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span i18n>{{ seniority("09/01/2018", "01/05/2021") }}</span>
            </p>
          </div>
          <div class="experience">
            <h3 i18n>Back end developer</h3>
            <p>
              <a href="https://www.jobnroll.fr/" target="_blank">Jobnroll</a>
              <span i18n> • Paris, France</span>
            </p>
            <p>
              <span>{{ "Jun 2018" | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ "Aug 2018" | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span i18n>{{ seniority("06/01/2018", "08/06/2018") }}</span>
            </p>
          </div>
          <div class="experience">
            <h3 i18n>Back end developer</h3>
            <p>
              <a href="https://www.fpi-rdc.cd/" target="_blank" i18n>Industry Promotion Fund</a>
              <span i18n> • Kinshasa, D.R.Congo</span>
            </p>
            <p>
              <span>{{ "Jun 2016" | date: 'MMM yyyy' }}</span>
              <span> – </span>
              <span>{{ "Aug 2017" | date: 'MMM yyyy' }}</span>
              <span> • </span>
              <span i18n>1 year 3 months</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private cvLink: string = '../../../assets/cv/cv_jeanpaul_ngalula.pdf';

  constructor(private notificationService: NotificationService) {}

  /**
   * The method called when the user wants to download my CV
   */
  downloadCV(): void {
    const notification: Notification = {
      title: $localize`Download...`,
      message: $localize`Thank you for downloading my resume`
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
    const endDate: Date = endDateString.toLowerCase() === 'today' ? new Date() : new Date(endDateString);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInMonth = 30.44 * millisecondsInDay;

    const diffMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());

    let months = Math.floor(diffMilliseconds / millisecondsInMonth);
    const remainingDays = diffMilliseconds % millisecondsInMonth / millisecondsInDay;

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
