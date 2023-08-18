import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="c-cUWjlu c-cUWjlu-iepuTsq-css">
      <section class="c-EnlPs">
        <div class="c-ekdbvK">
          <h1 class="c-dcthTY c-dcthTY-icWhawk-css">Envoyez moi un email.</h1>
          <div class="PJLV">
            <p><strong>J'adore discuter</strong> donc si vous êtes ingénieurs, étudiants, créateurs passionnés, ou autres, je suis ouvert aux échanges inspirants ! <strong>Contactez-moi</strong> et ensemble, explorons des opportunités de collaboration. Je répondrai dans les meilleurs délais.
            </p>
            <!-- <h2>Envoyez un email</h2> -->
            <form class="c-ccFqkw">
              <div class="c-fAxVVm">
                <label for="name" class="c-cpOVIy">Noms</label>
                <input id="name" type="text" placeholder="Marian Croak" required="" class="c-jLJtXG">
              </div>
              <div class="c-fAxVVm">
                <label for="email" class="c-cpOVIy">Email</label>
                <input id="email" type="email" placeholder="marian@croak.com" required="" class="c-jLJtXG">
              </div>
              <div class="c-fAxVVm">
                <label for="message" class="c-cpOVIy">Message</label>
                <textarea id="message" placeholder="Comment puis je vous aider ?" rows="4" required="" class="c-jLJtXG"></textarea>
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

}
