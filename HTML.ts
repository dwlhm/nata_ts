class HTML {
  _virtual: string[][];
  _dom: HTMLElement;

  constructor(tag: string, dom: HTMLElement) {
    this._dom = dom;
    this._virtual = [["tag", tag]];
  }

  static element(tag: string) {
    return new HTML(tag, document.createElement(tag));
  }

  class(newClass: string) {
    this._virtual.push(["class", newClass]);
    this._dom.className = newClass;

    return this;
  }

  child(value: string | HTML): HTML {
    if (typeof value !== "string") {
      this._dom.appendChild(value.getDom());
    } else {
      this._dom.textContent = value;
    }
    return this;
  }

  getDom() {
    return this._dom;
  }
}

export default HTML;
