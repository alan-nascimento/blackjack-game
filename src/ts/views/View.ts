export abstract class View<T> {

  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.getElementById(selector);
  }

  update(model: T): void {
    const template = this.render(model);
    this.element.innerHTML = template;
  }

  abstract render(model: T): string;
}
