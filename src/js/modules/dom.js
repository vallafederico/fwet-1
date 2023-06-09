import { Text } from "./animation/text";
import { Track } from "../util/track";

export class Dom {
  constructor() {
    this.create();
  }

  resize() {}

  render(t) {
    this.track?.render();
  }

  create() {
    // this.texts = [
    //   ...document.querySelectorAll(
    //     '[data-a="char"],[data-a="word"],[data-a="line"]'
    //   ),
    // ].map((el) => new Text({ element: el }));
  }

  destroy() {
    this.texts.forEach((text) => text.animateOut());
  }

  /* --  Pages */
  transitionOut(page) {
    // console.log("DOM•tranOut", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }

  transitionIn(page) {
    // console.log("DOM•tranIn", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }
}
