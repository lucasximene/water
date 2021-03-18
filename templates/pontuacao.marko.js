// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/pontuacao.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@500&amp;display=swap\" rel=\"stylesheet\"><title>Sim</title></head><body>");

  component_globals_tag({}, out);

  out.w("<style>\r\n#parabens1{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 600px;\r\n    left: 500px;\r\n    bottom: 523px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#parabens2{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 358px;\r\n    left: 638px;\r\n    bottom: 483px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#parabens3{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 458px;\r\n    bottom: 443px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#parabens4{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 300px;\r\n    left: 620px;\r\n    bottom: 403px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#parabens5{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 600px;\r\n    left: 450px;\r\n    bottom: 362px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#parabens6{\r\n    font-size: 28px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 600px;\r\n    bottom: 322px;\r\n    font-weight: bolder;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#total{\r\n    font-size: 30px;\r\n    font-family: 'Roboto';\r\n    position: absolute;\r\n    bottom: 205px;\r\n    left: 475px;\r\n    color: #1739EC;\r\n    text-shadow: 2px 2px 2px #77116D;\r\n}\r\n\r\nbutton {\r\n        padding: 20px;\r\n        width: 250px;\r\n        border: none;\r\n        outline: none;\r\n        font-family: 'Arial';\r\n        font-size: 1.1em;\r\n        transition: all .5s;\r\n        cursor: pointer;\r\n        border-radius: 25px;\r\n        position: absolute;\r\n        bottom: 80px;\r\n        left: 570px;\r\n        display: inline-block;\r\n        z-index: 10;\r\n    }\r\n\r\n    button:hover {\r\n        background-color: #056497;\r\n    }\r\n\r\n    button:active {\r\n        background-color: #075D70;\r\n    }\r\n\r\n    </style><a href=\"/4\" style=\"top: 550px; left: 950px; position: absolute;\" class=\"black waves-light btn-large\">Voltar para o Cronômetro</a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script><div style=\"background-color: #0DCEC3;\r&#10;    border-radius: 10px; \r&#10;    -moz-border-radius: 10px; \r&#10;    -webkit-border-radius: 15px;\r&#10;     border: 1px solid #0000; \r&#10;     padding: 10px;\r&#10;     width: 645px;\r&#10;     height: 586px;\r&#10;     position: absolute;\r&#10;     left: 363px;\"></div><div id=\"parabens1\">PARABÉNS, VOCÊ GANHOU 200</div><div id=\"parabens2\">PONTOS!!</div><div id=\"parabens3\">CONTINUE ACUMULANDO ATÉ O FINAL</div><div id=\"parabens4\">DO DIA PARA</div><div id=\"parabens5\">OBTER 1000 PONTOS, EQUIVALENTE À 2</div><div id=\"parabens6\">LITROS DE ÁGUA</div><div style=\"background-color: #020321;\r&#10;    border-radius: 8px; \r&#10;    -moz-border-radius: 10px; \r&#10;    -webkit-border-radius: 15px;\r&#10;     border: 1px solid #0000; \r&#10;     padding: 10px;\r&#10;     width: 433px;\r&#10;     height: 58px;\r&#10;     position: absolute;\r&#10;     left: 463px;\r&#10;     bottom: 185px;\"></div><div id=\"total\">Seu total de pontos é:</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/pontuacao.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
