// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/pop-up.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link href=\"https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap\" rel=\"stylesheet\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Rakkas&amp;display=swap\" rel=\"stylesheet\"><title>Lembrete</title></head><body>");

  component_globals_tag({}, out);

  out.w("<style>\r\n\r\n#lembrete{\r\n    color: #1B64D2;\r\n    font-weight: bolder;\r\n    font-size: 30px;\r\n    font-family: 'Nunito';\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 613px;\r\n    text-shadow: 2px 2px 2px #4B8E97;\r\n}\r\n\r\n#beba{\r\n    color: #2D109E;\r\n    font-size: 36px;\r\n    position: absolute;\r\n    font-family: 'Rakkas', cursive;\r\n    left: 910px;\r\n    text-shadow:2px 2px #0E3DE1;\r\n\r\n}\r\n\r\n#agua{\r\n    color: #2D109E;\r\n    font-size: 36px;\r\n    position: absolute;\r\n    font-family: 'Rakkas', cursive;\r\n    left: 910px;\r\n    top: 50px;\r\n    text-shadow:2px 2px #0E3DE1;\r\n}\r\n\r\n.botao-v{\r\n    position: absolute;\r\n    left: 470px;\r\n    bottom: 90px;\r\n}\r\n\r\n.botao-x{\r\n    position: absolute;\r\n    left: 75px;\r\n    bottom: -1px;\r\n\r\n}\r\n\r\n#bebeu{\r\n    font-size: 35px;\r\n    font-family: 'Nunito';\r\n    color: #000000;\r\n    text-shadow: 2px 2px 2px #0E3DE1;\r\n    position: absolute;\r\n    top: -50px;\r\n    right: 5px;\r\n}\r\n#ml{\r\n    font-size: 36px;\r\n    font-family: 'Nunito';\r\n    font-weight: bolder;\r\n    position: absolute;\r\n    left: 290px;\r\n    top: -45px;\r\n}\r\n.copo-lembrete{\r\n    width: 360px;\r\n    height: 280px;\r\n    top: -342px;\r\n    left: -27px;\r\n    position: absolute;\r\n}\r\n    </style><div style=\"background-color: #0DCEC3;\r&#10;border-radius: 10px; \r&#10;-moz-border-radius: 10px; \r&#10;-webkit-border-radius: 15px;\r&#10; border: 1px solid #0000; \r&#10; padding: 10px;\r&#10; width: 645px;\r&#10; height: 586px;\r&#10; position: absolute;\r&#10; left: 363px;\"></div><div id=\"lembrete\">LEMBRETE</div><div id=\"beba\">BEBA</div><div id=\"agua\">ÁGUA</div><div class=\"botao-v\"><input type=\"image\" src=\"./images/botaov.png\" width=\"70px\"></div><div class=\"botao-x\"><input type=\"image\" src=\"./images/botaox.png\" width=\"70px\"></div><div id=\"bebeu\">BEBEU?</div><div id=\"ml\">200ML</div><div class=\"copo-lembre\"><img class=\"copo-lembrete\" src=\"./images/copo.jpg\"></div><a href=\"/6\" style=\"top: 520px; left: 850px; position: absolute;\" class=\"black waves-light btn\">Próximo<i class=\"material-icons right\">arrow_forward</i></a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/pop-up.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
