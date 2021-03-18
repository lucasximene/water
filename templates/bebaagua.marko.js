// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/bebaagua.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@500&amp;display=swap\" rel=\"stylesheet\"><title>Não</title></head><body>");

  component_globals_tag({}, out);

  out.w("<style>\r\n\r\nbutton {\r\n        padding: 20px;\r\n        width: 250px;\r\n        border: none;\r\n        outline: none;\r\n        font-family: 'Arial';\r\n        font-size: 1.1em;\r\n        transition: all .5s;\r\n        cursor: pointer;\r\n        border-radius: 25px;\r\n        position: absolute;\r\n        bottom: 80px;\r\n        left: 570px;\r\n        display: inline-block;\r\n        z-index: 10;\r\n    }\r\n\r\n    button:hover {\r\n        background-color: #056497;\r\n    }\r\n\r\n    button:active {\r\n        background-color: #075D70;\r\n    }\r\n\r\n    #meta{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 600px;\r\n    left: 400px;\r\n    bottom: 550px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n    \r\n}\r\n\r\n#volte{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 600px;\r\n    left: 405px;\r\n    bottom: 505px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n    \r\n}\r\n\r\n.triste{\r\n    width: 250px;\r\n    height: 250px;\r\n    position: absolute;\r\n    left: 560px;\r\n    bottom: 210px;\r\n   \r\n}\r\n\r\n</style><div style=\"background-color: #0DCEC3;\r&#10;    border-radius: 10px; \r&#10;    -moz-border-radius: 10px; \r&#10;    -webkit-border-radius: 15px;\r&#10;     border: 1px solid #0000; \r&#10;     padding: 10px;\r&#10;     width: 645px;\r&#10;     height: 586px;\r&#10;     position: absolute;\r&#10;     left: 363px;\"></div><div id=\"meta\">PARECE QUE VOCÊ NÃO COMPLETOU A META.</div><div href=\"/\" id=\"volte\">VOLTE PARA O CRONÔMETRO PARA FAZÊ-LO</div><div class=\"carinha-triste\"><img class=\"triste\" src=\"./images/Rosto Triste Em Quadrado Arredondado ícones em vetor livre criados por Freepik.png\"></div><a href=\"/4\" style=\"top: 475px; left: 545px; position: absolute;\" class=\"black waves-light btn-large\">Voltar para o Cronômetro</a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/bebaagua.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
