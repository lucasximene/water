// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/principal.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title> Página Inicial </title><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Rouge+Script&amp;display=swap\" rel=\"stylesheet\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=News+Cycle&amp;display=swap\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<style>\r\n.FotoAgua{ \r\n    display: inline-block;\r\n    margin-left: 235px;\r\n    margin-right: auto;\r\n     width: 650pt;\r\n     height: 460pt;\r\n     border-radius: 15pt; \r\n     background-image: (\"./images/copoLogo.jpg\");\r\n    background-repeat: round;\r\n    position: absolute;\r\n    box-shadow: 0 0 5px rgb(26, 25, 25);\r\n    }\r\n\r\n   #pag-inicial{\r\n       font-size: 50px;\r\n       font-family: 'News Cycle', sans-serif;\r\n       position: absolute;\r\n       left: 447px;\r\n       top: 34px;\r\n       text-shadow: 2px 2px 2px black;\r\n   }\r\n\r\n\r\n#frase{\r\n    font-size: 115px;\r\n    position: absolute;\r\n    left: 331px;\r\n    top: 135px;\r\n    font-family: 'Rouge Script', cursive;\r\n    background: linear-gradient( #33D7FB, #000000);\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    color: rgba(1, 0, 0, .5);\r\n    font-weight: bolder;\r\n    text-shadow:5px 5px 5px;\r\n  \r\n}\r\n\r\n#inicial1{\r\n    font-size: 30px;\r\n    position: absolute;\r\n    font-family: 'News Cycle', sans-serif;\r\n    top: 250px;\r\n    left: 285px;\r\n    color: #072242;\r\n}\r\n\r\n#inicial2{\r\n    font-size: 30px;\r\n    position: absolute;\r\n    font-family: 'News Cycle', sans-serif;\r\n    bottom: 225px ;\r\n    left: 445px;\r\n    color: #072242;\r\n}\r\n\r\n#inicial3{\r\n    font-size: 30px;\r\n    position: absolute;\r\n    font-family: 'News Cycle', sans-serif;\r\n    bottom: 185px ;\r\n    left: 285px;\r\n    color: #072242;\r\n}\r\n\r\n.copo1{\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 255px;\r\n    position: absolute;\r\n    bottom: 140px;\r\n}\r\n\r\n.copo2{\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 288px;\r\n    position: absolute;\r\n    bottom: 140px;\r\n}\r\n\r\n.copo3{\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 255px;\r\n    position: absolute;\r\n    bottom: 80px;\r\n}\r\n\r\n.copo4{\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 255px;\r\n    position: absolute;\r\n    bottom: 25px;\r\n}\r\n\r\n#explica1{\r\nfont-size: 25px;\r\nposition: absolute;\r\nfont-family: 'News Cycle', sans-serif;\r\nbottom: 149px;\r\nleft: 333px;\r\ncolor: black;\r\ntext-shadow: 2px 2px 2px #112BB5;\r\n\r\n}\r\n\r\n#explica2{\r\nfont-size: 15px;\r\nposition: absolute;\r\nfont-family: 'News Cycle', sans-serif;\r\ncolor: whitesmoke;\r\nleft: 332px;\r\nbottom: 133px;\r\ntext-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#explica3{\r\n    font-size: 25px;\r\n    font-family: 'News Cycle', sans-serif;\r\n    position: absolute;\r\n    left: 332px;\r\n    bottom: 90px;\r\n    color: black;\r\n    text-shadow: 2px 2px 2px #112BB5;\r\n}\r\n\r\n#explica4{\r\n    font-size: 15px;\r\n    font-family: 'News Cycle', sans-serif;\r\n    position: absolute;\r\n    color: whitesmoke;\r\n    left: 332px;\r\n    bottom: 73px;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#explica5{\r\n    font-size: 25px;\r\n    font-family: 'News Cycle', sans-serif;\r\n    position: absolute;\r\n    left: 332px;\r\n    bottom: 35px;\r\n    text-shadow: 2px 2px 2px #112BB5;\r\n}\r\n\r\n\r\n#explica6{\r\n    font-size: 15px;\r\n    font-family: 'News Cycle', sans-serif;\r\n    position: absolute;\r\n    color: whitesmoke;\r\n    left: 332px;\r\n    bottom: 17px;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n</style><img class=\"FotoAgua\"><div id=\"pag-inicial\"><b>Benefícios de</b></div><div id=\"frase\">Beber Água</div><div id=\"inicial1\"><p>Ajuda a melhorar o</p></div><div id=\"inicial2\"><p>desempenho</p></div><div id=\"inicial3\"><p>do seu corpo em várias funções</p></div><div class=\"fot\"><img class=\"copo1\" src=\"copoEmoji.png\"></div><div class=\"fot2\"><img class=\"copo2\" src=\"copoEmoji.png\"></div><div class=\"fot3\"><img class=\"copo3\" src=\"copoEmoji.png\"></div><div class=\"fot4\"><img class=\"copo4\" src=\"copoEmoji.png\"></div><div id=\"explica1\">Dois copos ao acordar</div><div id=\"explica2\">Ajuda a ativar os órgãos internos</div><div id=\"explica3\">Um copo antes da refeição</div><div id=\"explica4\">Ajuda na digestão</div><div id=\"explica5\">Um copo antes de dormir</div><div id=\"explica6\">Previne AVC e infarto</div><a href=\"/2\" style=\"top: 550px; left: 950px; position: absolute;\" class=\"black waves-light btn\">Próximo<i class=\"material-icons right\">arrow_forward</i></a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/principal.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
