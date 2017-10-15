import { Main } from '../../elm/src/Main.elm';
import '../../styles/elm-boilerplate.css';

var elmApp = Main.embed(document.getElementById('root'));

var example1 =
    { fileName: "cool-project.js"
    , softWrap: true
    , tabLength: 2
    , encoding: "ASCII"
    , lineCount: 2
    }

var example2 =
    { fileName: "CoolProject.elm"
    , softWrap: false
    , tabLength: 4
    , encoding: "UTF-8"
    , lineCount: 1000000000000
    }

elmApp.ports.textEditorPaneChanged.send(example1);

setTimeout(() => elmApp.ports.textEditorPaneChanged.send(example2), 3000);
