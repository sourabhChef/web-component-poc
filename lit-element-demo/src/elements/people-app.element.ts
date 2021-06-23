import { LitElement, html, customElement, property } from "lit-element";
import { people } from "../people";

@customElement("people-app")
class PeopleAppElement extends LitElement {
  people = people;

  @property({type: Boolean})
  dialogVisible = false;

  onMakeFavourite(event) {
    console.log("make favourite", event.detail);
  }

  render() {
    return html`
      <h1>hello I am modal</h1>
      <div>
        <button @click="${this.toggleDialog.bind(this)}">Toggle dialog</button>
        <my-dialog
          ?opened="${this.dialogVisible}"
          @dialog.accept="${this.closeDialog.bind(this)}"
          @dialog.cancel="${this.closeDialog.bind(this)}"
        ></my-dialog>
      </div>
      <h1>List of people</h1>
      ${this.people.map(
        (person) => html`
          <person-card
            .person=${person}
            @makeFavourite=${this.onMakeFavourite}
          ></person-card>
        `
      )}
    `;
  }
  toggleDialog (e) {
    this.dialogVisible = !this.dialogVisible
    console.log(this.dialogVisible)
  }

  closeDialog (e) {
    console.log(e)
    this.dialogVisible = false
  }
}
