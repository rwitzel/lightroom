// ==UserScript==
// @name         lightroom
// @namespace    http://rwitzel.github.io/lightroom/
// @version      0.1
// @description  The greasemonkey scripts darkens text if a specific key combination is pressed. Useful during presentations in bright rooms.
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.1/jquery.min.js
// @author       R Witzel
// @include      *
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var lightroom = {};
lightroom.$ = $.noConflict( true );
// text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;
// font-weight: 100 200 300 400 500 600 700 800 900
// Defines from thin to thick characters. 400 is the same as normal, and 700 is the same as bold

var styles = "";
styles += "\n html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { ";
styles += "\n     color: black !important;";
styles += "\n     font-weight: 900 !important;";
//styles += "\n     text-shadow: 2px 5px 5px black !important;";
styles += "\n }";

lightroom.$(document).ready(function() {
    
  lightroom.$( document ).keypress(function(ev) {
      //console.log( "keypressed", "altKey", ev.altKey, "ctrlKey", ev.ctrlKey, "metaKey", ev.metaKey, "shiftKey", ev.shiftKey, "keyCode", ev.keyCode, "key", ev.key );
            
      if (ev.key == "n" && ev.metaKey) {
         lightroom.$(".lightroom_styles").remove();
         styles = window.prompt("defined styles",styles);
         lightroom.$("body").prepend("<style class='lightroom_styles'>" + styles + "</style>");
         console.log("lightroom: new styles applied");
      }
  });
});


