import jQuery from "jquery";
(function ($) {
  $.fn.typewrite = function (options) {
    var settings = $.extend({
      speed: 12,
      blinkSpeed: 2,
      showCursor: true,
      blinkingCursor: true,
      cursor: "|",
      selectedBackground: "#F1F1F1",
      selectedText: "#333333"
    }, options);

    settings.blinkSpeed = 1000 / settings.blinkSpeed;

    if (settings.showCursor) {
      $(this).html(
        '<span></span><span class="blinkingCursor">' + settings.cursor + "</span>"
      );

      if (settings.blinkingCursor) {
        setInterval(function () {
          $(".blinkingCursor").toggle();
        }, settings.blinkSpeed);
      }
    } else {
      $(this).html("<span></span>");
    }

    settings.mainel = this;
    settings.el = $(this).children("span")[0];
    settings.speed = 1000 / settings.speed;

    let actions = options.actions;
    settings.queue = actions.length;

    $(settings.mainel).trigger("typewriteStarted");

    actions.forEach(function (element, index) {
      if (Object.keys(element)[0] !== "select") {
        removeSelection();
      }

      if (Object.keys(element)[0] === "type") {
        if (element.type === "<br>") {
          newLine();
        } else {
          var text = $("<div/>").html(element.type).text();
          typeText(text, settings);
        }
      }

      if (Object.keys(element)[0] === "delay") {
        delay(element.delay);
      }

      if (Object.keys(element)[0] === "speed") {
        settings.speed = 1000 / element.speed;
      }

      if (Object.keys(element)[0] === "remove") {
        remove(element.remove);
      }

      if (Object.keys(element)[0] === "select") {
        select(element.select);
      }
    });

    let done = setInterval(function () {
      if (settings.queue === 0) {
        clearInterval(done);
        $(settings.mainel).trigger("typewriteComplete");
      }
    }, 500);

    function select(action, callback) {
      var charLen = action.to - action.from;
      var spanOpen = '<span class="typewriteSelected" style="background-color:' + settings.selectedBackground + "; color: " + settings.selectedText + '">';
      var blankstr = new Array(charLen + 1).join(" ");
      var chars = blankstr.split("");

      chars.forEach(function (char, index) {
        $(settings.el).delay(settings.speed).queue(function (next) {
          index++;
          var newTo = action.to - index;
          $(settings.el).html($(settings.el).html().replace(/<br.*?>/g, " \n "));
          var currentString = $(settings.el).text();
          var firstPart = currentString.slice(0, newTo);
          var selectPart = currentString.slice(newTo, action.to);
          var lastPart = currentString.slice(action.to, currentString.length);
          var newString = firstPart + spanOpen + selectPart + "</span>" + lastPart;
          $(this).html(newString.replace(/ \n /g, "<br>"));
          next();

          if (index === chars.length - 1) {
            settings.queue = settings.queue - 1;
            $(settings.mainel).trigger("typewriteSelected", action);
          }
        });
      });
    }

    function delay(time) {
      $(settings.el).delay(time).queue(function (next) {
        next();
        settings.queue = settings.queue - 1;
        $(settings.mainel).trigger("typewriteDelayEnded");
      });
    }

    function remove(remove) {
      var blankstr = new Array(remove.num + 1).join(" ");
      var chars = blankstr.split("");
      var removeType = typeof remove.type !== "undefined" ? remove.type : "stepped";

      if (removeType !== "stepped" && removeType !== "whole") {
        removeType = "stepped";
      }

      if (removeType === "stepped") {
        chars.forEach(function (char, index) {
          $(settings.el).delay(settings.speed).queue(function (next) {
            $(settings.el).html($(settings.el).html().replace(/<br.*?>/g, " \n "));
            var currText = $(this).text().substring(0, $(this).text().length - 1);
            $(this).html(currText.replace(/ \n /g, "<br>"));
            next();

            if (index === chars.length - 1) {
              settings.queue = settings.queue - 1;
              $(settings.mainel).trigger("typewriteRemoved", remove);
            }
          });
        }, this);
      }

      if (removeType === "whole") {
        $(settings.el).delay(settings.speed).queue(function (next) {
          $(settings.el).html($(settings.el).html().replace(/<br.*?>/g, " \n "));
          var currText = $(this).text().substring(0, $(this).text().length - remove.num);
          $(this).html(currText.replace(/ \n /g, "<br>"));
          next();
          settings.queue = settings.queue - 1;
          $(settings.mainel).trigger("typewriteRemoved", remove);
        });
      }
    }

    function typeText(text) {
      var chars = text.split("");

      chars.forEach(function (char, index) {
        $(settings.el).delay(settings.speed).queue(function (next) {
          var text = $(this).html() + char;
          $(this).html(text);
          next();

          if (index === chars.length - 1) {
            settings.queue = settings.queue - 1;
            $(settings.mainel).trigger("typewriteTyped", text);
          }
        });
      }, this);
    }

    function newLine() {
      $(settings.el).delay(settings.speed).queue(function (next) {
        var currTextNoCurr = $(this).html().substring(0, $(this).html().length - 1);
        $(this).html(currTextNoCurr + "<br>");
        next();
        settings.queue = settings.queue - 1;
        $(settings.mainel).trigger("typewriteNewLine");
      });
    }

    function removeSelection() {
      if ($(".typewriteSelected").length > 0) {
        var selectionText = $(".typewriteSelected").text();
        $(".typewriteSelected").replaceWith(selectionText);
      }
    }
  };
})(jQuery);