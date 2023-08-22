import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Envoyez moi un email.</h1>
          <div class="PJLV">
            <p><strong>J'adore discuter</strong> donc si vous êtes ingénieurs, étudiants, créateurs passionnés, ou autres, je suis ouvert aux échanges inspirants ! <strong>Contactez-moi</strong> et ensemble, explorons des opportunités de collaboration. Je répondrai dans les meilleurs délais.
            </p>
            <!-- <h2>Envoyez un email</h2> -->
            <form (ngSubmit)="sendEmail()" #contactForm="ngForm" class="c-ccFqkw">
              <div class="c-fAxVVm">
                <label for="name" class="c-cpOVIy">Noms</label>
                <input id="name" name="user.name" [(ngModel)]="user.name" type="text" placeholder="Marian Croak" class="c-jLJtXG" required>
              </div>
              <div class="c-fAxVVm">
                <label for="email" class="c-cpOVIy">Email</label>
                <input id="email" name="user.email" [(ngModel)]="user.email" type="email" placeholder="marian@croak.com" class="c-jLJtXG" required>
              </div>
              <div class="c-fAxVVm">
                <label for="message" class="c-cpOVIy">Message</label>
                <textarea id="message" name="user.message" [(ngModel)]="user.message" placeholder="Comment puis je vous aider ?" rows="4" class="c-jLJtXG" required></textarea>
              </div>
              <div class="c-fAxVVm">
                <button type="submit" class="c-eKOIRR">Envoyer</button>
              </div>
            </form>
            <div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events: none;">
              <ol tabindex="-1" class="c-jfqASj"></ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  user = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const emailData = {
      email: this.user.email,
      message: this.user.message
    };

    this.http.post('../../../../.netlify/functions/sendEmail', emailData).subscribe(response => { console.log(response); });
  }
}
