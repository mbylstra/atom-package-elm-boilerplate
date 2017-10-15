'use babel';

export default class ElmBoilerplateView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('elm-boilerplate');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The ElmBoilerplate package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);

    this.subscriptions = atom.workspace.getCenter().observeActivePaneItem(item => {
      if (!atom.workspace.isTextEditor(item)) return;
      message.innerHTML = "Elm will take care of this!";
    });
  }

  getTitle() {
    // Used by Atom for tab text
    return 'Elm Boilerplate';
  }

  getDefaultLocation() {
    // This location will be used if the user hasn't overridden it by dragging the item elsewhere.
    // Valid values are "left", "right", "bottom", and "center" (the default).
    return 'right';
  }

  getAllowedLocations() {
    // The locations into which the item can be moved.
    return ['left', 'right', 'bottom'];
  }

  getURI() {
    // Used by Atom to identify the view when toggling.
    return 'atom://elm-boilerplate'
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {
    return {
      deserializer: 'elm-boilerplate/ElmBoilerplateView'
    };
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
    this.subscriptions.dispose();
  }

  getElement() {
    return this.element;
  }

}
