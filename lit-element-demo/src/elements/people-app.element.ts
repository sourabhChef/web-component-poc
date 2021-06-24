import { LitElement, html, css, customElement, property } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
import { people } from "../people";

@customElement("people-app")
class PeopleAppElement extends LitElement {
  people = people;

  static styles = [
    css`
      :host {
        display: block;
        background-color: #eee;
      }
    `,
  ];

  @property({ type: Boolean })
  dialogVisible = true;

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
      <h1>Button vorwerk</h1>
      <button
        style=${styleMap({
          border: "2px solid #47DB3F",
          color: "#47DB3F",
          backgroundColor: "transparent",
          padding: "14px 18px",
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "10px",
          marginLeft: "15px",
          cursor: "pointer",
          outline: "none",
        })}
      >
        In Pantry
      </button>
      <button
        style=${styleMap({
          border: "none",
          backgroundColor: "#FBFFFF",
          color: "#47DB3F",
          padding: "14px 18px",
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "10px",
          marginLeft: "15px",
          cursor: "pointer",
          outline: "none",
        })}
      >
        ADD TO PANTRY
      </button>
      <button
      style=${styleMap({
        border: "2px solid #47DB3F",
        color: "#ffff",
        backgroundColor: "#47DB3F",
        padding: "14px 18px",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "10px",
        marginLeft: "15px",
        cursor: "pointer",
        outline: "none",
      })}
    >
      3 / 19 IN PANTRY
    </button>
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
  toggleDialog(e) {
    this.dialogVisible = !this.dialogVisible;
    console.log(this.dialogVisible);
  }

  closeDialog(e) {
    console.log(e);
    this.dialogVisible = false;
  }
}
