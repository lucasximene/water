// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/cronometro.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap\" rel=\"stylesheet\"><title>Cronometro</title></head><style>\r\n    * {\r\n        margin: 0 auto;\r\n        padding: 0;\r\n    }\r\n    h2{\r\n    font-size: 35px;\r\n    font-family: 'Nunito';\r\n    font-weight: bolder;\r\n    position: absolute;\r\n    color: white;\r\n    left: 558px;\r\n    top: 130px;\r\n    text-shadow: 2px 2px 2px black;\r\n\r\n}\r\n    body {\r\n        background-color: #c7d6d5;\r\n    }\r\n\r\n    .max-width {\r\n        max-width: 700px;\r\n        width: 100%;\r\n        padding: 180px;\r\n        box-sizing: border-box;\r\n        margin-top: 5%;\r\n        background-color: #0DCEC3;\r\n        box-shadow: 0 0 5px rgb(26, 25, 25);\r\n        text-align: center;\r\n        border-radius: 15px;\r\n        \r\n    }\r\n\r\n    h1 {\r\n        font-family: Arial;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    button {\r\n        padding: 20px;\r\n        border: none;\r\n        outline: none;\r\n        font-family: 'Arial';\r\n        font-size: 1.1em;\r\n        transition: all .5s;\r\n        cursor: pointer;\r\n        border-radius: 25px;\r\n    }\r\n\r\n    button:hover {\r\n        background-color: #a1c0d1;\r\n    }\r\n\r\n    button:active {\r\n        background-color: #111;\r\n    }\r\n\r\n    .bg-green {\r\n        background-color: #1f12d1;\r\n    }\r\n\r\n    .bg-yellow {\r\n        background-color: #3540df;\r\n    }\r\n\r\n    .bg-red {\r\n        background-color: #4d3ddd;\r\n    }\r\n\r\n</style><body>");

  component_globals_tag({}, out);

  out.w("<h2>Iniciar contagem</h2><div class=\"max-width\"><button onclick=\"start();\" class=\"bg-green\">Iniciar</button><button onclick=\"pause();\" class=\"bg-yellow\">Pausar</button><button onclick=\"stop();\" class=\"bg-red\">Parar</button><h1 id=\"counter\">00:00:00</h1></div><a href=\"/5\" style=\"top: 520px; left: 850px; position: absolute;\" class=\"black waves-light btn\">Próximo<i class=\"material-icons right\">arrow_forward</i></a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script><script src=\"cronometro.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "21");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/cronometro.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
