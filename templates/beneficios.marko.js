// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/beneficios.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title> Benefícios da água </title><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"><link rel=\"stylesheet\" href=\"Pagina2.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap\" rel=\"stylesheet\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Numans&amp;display=swap\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<style>\r\n\r\n#frase1{\r\n    font-size: 25px;\r\n    font-family: 'Nunito';\r\n    font-weight: bolder;\r\n    position: absolute;\r\n    color: white;\r\n    left: 520px;\r\n    top: 50px;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#contFrase1{\r\n    font-size: 25px;\r\n    font-family: 'Nunito';\r\n    font-weight: bolder;\r\n    color: white;\r\n    position: absolute;\r\n    left: 598px;\r\n    bottom: 500px;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n   #frase2{\r\n    font-family: 'Numans';\r\n    font-size: 15px;\r\n    top: -364px;\r\n    width: 458px;\r\n    position: absolute;\r\n    right: 40px;\r\n}\r\n    #frase3{\r\n    font-family: 'Numans';\r\n    font-size: 15px;\r\n    position: absolute;\r\n    width: 458px;\r\n    top: -344px;\r\n    right: -10px;\r\n    }\r\n\r\n    #frase4{\r\n    font-family: 'Numans';\r\n    font-size: 15px;\r\n    position: absolute;\r\n    width: 458px;\r\n    left: -410px;\r\n    top: -324px;\r\n\r\n    }\r\n   \r\n    #frase5{\r\n    font-family: 'Numans';\r\n    font-size: 15px;\r\n    position: absolute;\r\n    width: 458px;\r\n    left: -435px;\r\n    top: -304px;\r\n    }\r\n\r\n    #frase6{\r\n    font-family: 'Numans';\r\n    font-size: 15px;\r\n    position: absolute;\r\n    width: 458px;\r\n    left: -350px;\r\n    top: -284px;\r\n    }\r\n\r\n    #frase7{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        left: -485px;\r\n        bottom: 208px;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    #frase8{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        left: -439px;\r\n        bottom: 181px;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    #frase9{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        left: -467px;\r\n        bottom: 154px;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    #frase10{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        left: -490px;\r\n        bottom: 128px;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    #frase11{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        left: -468px;\r\n        bottom: 104px;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    #frase12{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        bottom: 204px;\r\n        font-weight: bolder;\r\n        left: -120px;\r\n    }\r\n\r\n    #frase13{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        bottom: 176px;\r\n        font-weight: bolder;\r\n        left: -123px;\r\n    }\r\n\r\n    #frase14{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        bottom: 148px;\r\n        font-weight: bolder;\r\n        left: -120px;\r\n    }\r\n\r\n    #frase15{\r\n        font-family: 'Nunito';\r\n        font-size: 15px;\r\n        position: absolute;\r\n        bottom: 120px;\r\n        font-weight: bolder;\r\n        left: -133px;\r\n    }\r\n\r\n    </style><div style=\"background-color: #0DCEC3;\r&#10;border-radius: 10px; \r&#10;-moz-border-radius: 10px; \r&#10;-webkit-border-radius: 15px;\r&#10; border: 1px solid #0000; \r&#10; padding: 10px;\r&#10; width: 645px;\r&#10; height: 586px;\r&#10; position: absolute;\r&#10; left: 363px;\"></div><div id=\"frase1\">POR QUE BEBER ÁGUA É TÃO</div><div id=\"contFrase1\">IMPORTANTE?</div><a href=\"/3\" style=\"top: 520px; left: 850px; position: absolute;\" class=\"black waves-light btn\">Próximo<i class=\"material-icons right\">arrow_forward</i></a><script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script><div style=\"background-color: #5EB5E5;\r&#10;     padding: 10px;\r&#10;     width: 545px;\r&#10;     height: 156px;\r&#10;     position: absolute;\r&#10;     right: -12px;\r&#10;     top: -400px;\"></div><div style=\"background-color: #BAE6FF;\r&#10;     padding: 10px;\r&#10;     width: 215px;\r&#10;     height: 156px;\r&#10;     position: absolute;\r&#10;     right: -12px;\r&#10;     top: -200px;\"></div><div style=\"background-color: #BAE6FF;\r&#10;     padding: 10px;\r&#10;     width: 215px;\r&#10;     height: 156px;\r&#10;     position: absolute;\r&#10;     right: 317px;\r&#10;     top: -200px;\"></div><div id=\"frase2\">Entre 60% e 70% do corpo humano é composto por água. </div><div id=\"frase3\">Ela ajuda a hidratar, a levar os nutrientes, </div><div id=\"frase4\">como oxigênio e sais minerais até as células, </div><div id=\"frase5\">além de expulsar as substâncias tóxicas do corpo</div><div id=\"frase6\">por meio do suor e da urina</div><div id=\"frase7\">Seus principais benefícios são: </div><div id=\"frase8\">hidratar o corpo,</div><div id=\"frase9\">ajuda no emagrecimento,</div><div id=\"frase10\">melhora a circulação sanguínea,</div><div id=\"frase11\">mantém a pele saudável</div><div id=\"frase12\">Estimula o cérebro</div><div id=\"frase13\">Evita a desidratação</div><div id=\"frase14\">Combate doenças</div><div id=\"frase15\">Entre outros benefícios</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/beneficios.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
