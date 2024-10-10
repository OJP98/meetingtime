class Tag extends HTMLElement {
  constructor(label, value) {
    super();
    this.label = label;
    this.value = value;
  }

  getTagData() {
    this.label = this.getAttribute("data-label");
    this.value = this.getAttribute("data-value");
  }

  bindClickEvent(tag, button) {
    button.addEventListener("click", () => {
      tag.remove();
      alert(this.label + ": " + this.value);
    });
  }

  renderElement() {
    const tag = document.createElement("astro-tag");
    const tagButton = document.createElement("button");

    tagButton.classList.add("tag");
    tagButton.textContent = this.label;

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "❌";

    tagButton.appendChild(deleteSpan);
    tag.appendChild(tagButton);
    tag.setAttribute("data-value", this.value);

    this.bindClickEvent(tag, tagButton);
    return tag;
  }

  render() {
    return this.renderElement();
  }
}

customElements.define("astro-tag", Tag);

export default Tag;
