define(["dom"], function(DOM){
    return {
        show : function() {
            DOM.$calc.addClass("loading");
        },
        hide : function() {
            DOM.$calc.removeClass("loading");
        }
    }
})