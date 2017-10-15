'use babel';

import ElmBoilerplateView from './elm-boilerplate-view';
import {CompositeDisposable, Disposable} from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable(
      // Add an opener for our view.
      atom.workspace.addOpener(uri => {
        if (uri === 'atom://elm-boilerplate') {
          return new ElmBoilerplateView();
        }
      }),

      // Register command that toggles this view
      atom.commands.add('atom-workspace', {
        'elm-boilerplate:toggle': () => this.toggle()
      }),

      // Destroy any ElmBoilerplateViews when the package is deactivated.
      new Disposable(() => {
        atom.workspace.getPaneItems().forEach(item => {
          if (item instanceof ElmBoilerplateView) {
            item.destroy();
          }
        });
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    atom.workspace.toggle('atom://elm-boilerplate');
  },

  deserializeElmBoilerplateView(serialized) {
    return new ElmBoilerplateView();
  }

};
