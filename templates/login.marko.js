// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/water$1.0.0/templates/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-compatible\" content=\"ie=edge\"><title> Login </title><link rel=\"stylesheet\" href=\"./css/login.css\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><link href=\"https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap\" rel=\"stylesheet\"><script src=\"https://kit.fontawesome.com/d9770b3dac.js\" crossorigin=\"anonymous\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"content first-content\"><div class=\"first-column\"><h2 class=\"title title-primany\"> Bem Vindo De Volta!</h2><p class=\"description description-primary\">Para se manter conectado conosco</p><p class=\"description description-primary\">por favor, faça o login com suas informações pessoais</p><button id=\"signin\" class=\"btn btn-primary\">Entrar</button></div><div class=\"second-column\"><h2 class=\"title title-second\">Criar Conta</h2><div class=\"social-media\"><ul class=\"list-social-media\"><a class=\"link-social-media\" href=\"#\"><li class=\"item-social-media\"><i class=\"fab fa-facebook-f\"></i></li></a><a class=\"link-social-media\" href=\"#\"><li class=\"item-social-media\"><i class=\"fab fa-google-plus-g\"></i></li></a><a class=\"link-social-media\" href=\"#\"><li class=\"item-social-media\"><i class=\"fab fa-linkedin-in\"></i></li></a></ul></div><p class=\"description description-second\">Ou utilize o seu e-mail para o registro: </p><form class=\"form\" action=\"/usuario\" method=\"POST\"><label class=\"label-input\" for=\"\"> <i class=\"far fa-user icon-modify\"></i><input type=\"text\" name=\"nome\" placeholder=\"Nome\" value=\"" +
    marko_escapeXmlAttr(data.nome) +
    "\"></label><label class=\"label-input\" for=\"\"> <i class=\"far fa-envelope icon-modify\"></i><input type=\"email\" name=\"email\" placeholder=\"Email\" value=\"" +
    marko_escapeXmlAttr(data.email) +
    "\"></label><label class=\"label-input\" for=\"\"> <i class=\"fas fa-lock icon-modify\"></i><input type=\"password\" name=\"senha\" placeholder=\"Senha\" value=\"" +
    marko_escapeXmlAttr(data.senha) +
    "\"></label><button class=\"btn btn-second\">inscrever-se</button></form></div></div> <div class=\"content second-content\"><div class=\"first-column\"><h2 class=\"title title-primary\"> Olá, amigo!</h2><p class=\"description description-primary\">Insira seus dados pessoais</p><p class=\"description description-primary\">e comece a jornada conosco</p><button id=\"signup\" class=\"btn btn-primary\">inscrever-se</button></div><div class=\"second-column\"><h2 class=\"title title-second\">Entrar Na Sua Conta</h2><div class=\"social-media\"><ul class=\"list-social-media\"><a class=\"link-social-media\" href=\"/\"><li class=\"item-social-media\"><i class=\"fab fa-facebook-f\"></i></li></a><a class=\"link-social-media\" href=\"/\"><li class=\"item-social-media\"><i class=\"fab fa-google-plus-g\"></i></li></a><a class=\"link-social-media\" href=\"/\"><li class=\"item-social-media\"><i class=\"fab fa-linkedin-in\"></i></li></a></ul></div><p class=\"description description-second\">Ou utilize o seu e-mail para o registro: </p><form class=\"form\"><label class=\"label-input\" for=\"\"> <i class=\"far fa-envelope icon-modify\"></i><input type=\"email\" placeholder=\"Email\"></label><label class=\"label-input\" for=\"\"> <i class=\"fas fa-lock icon-modify\"></i><input type=\"password\" placeholder=\"Senha\"></label><a class=\"password\" href=\"/\">Esqueceu sua senha?</a><button href=\"/5\" class=\"btn btn-second\">Entrar</button></form></div></div></div><script src=\"./app.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "73");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/water$1.0.0/templates/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
