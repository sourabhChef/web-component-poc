import { LitElement, html,css, customElement, query, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('my-dialog')
class MyDialog extends LitElement {

    constructor () {
      super()
      this.opened = false
    }
    static styles = [css`
    .opened {
        display: flex;
    }
    .closed {
        display: none;
    }
    .dialog {
        flex-direction: column;
        border: 2px outset black;
        padding: 1em;
        margin: 1em;
    }
    .buttons {
        display: flex;
        flex-direction: row;
    }
    .accept {
        justify-content: space-around;
        align-content: space-around;
    }
    .cancel {
        justify-content: space-around;
        align-content: space-around;
    }
    `];
    static get properties () {
      return {
        opened: {type: Boolean}
      }
    }
    @property({type: Boolean})
    opened;
    render () {
      return html`
  <div class="${classMap({dialog: true, opened: !this.opened, closed: this.opened})}">
      <h1 class="title ">Title</h1>
      <p class="content">This is a dialog</p>
      <div class="buttons">
        <button class="accept" @click="${() => this.dispatchEvent(new CustomEvent('dialog.accept'))}">Ok</button>
        <button class="cancel" @click="${() => this.dispatchEvent(new CustomEvent('dialog.cancel'))}">Cancel</button>    
      </div>
  </div>`
    }
  }