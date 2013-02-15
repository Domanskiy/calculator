define(["dom"], function(DOM){
    return {
        params : {
            // maxLength will transform to 10^(maxLength-1) after init
            maxLength : 8,
            x: 0,
            x1: null,
            operation: null,
            x2 : null
        },
        cleatParams : function() {
            delete this.params.x1;
            delete this.params.x2;
            delete this.params.operation;
            this.params.x = 0;
        },
        setScreenValue: function(value){
            if (typeof value == "undefined") {
                DOM.$screen.val(this.params.x);
            } else {
                DOM.$screen.val(value);
            }
        },
        setInfoValue : function(value) {
            DOM.$info.val(value);
        },
        addHistory : function(value) {
            var li = $("<li/>", {
                text: value,
                style: "display:none"
            }).prependTo(DOM.$history).slideDown(800);
        }
    }
})