define(["setValue", "spinner", "operation"], function(setValue, spinner, operation){
    return {
        getResult : function() {
            var thisfile = this;
            $.ajax({
                dataType: "jsonp",
                url: "http://train.eu01.aws.af.cm/calc.php",
                data: {
                    x1: setValue.params.x1,
                    x2: setValue.params.x2,
                    operation:  setValue.params.operation
                },
                beforeSend: function() {
                    spinner.show();
                },
                success: function(answer){
                    spinner.hide();
                    thisfile.setResult(answer);
                }
            });
        },
        setResult : function(answer) {
            var value = setValue.params.x1 + " " + operation[setValue.params.operation] + " " + setValue.params.x2 + " = " + answer.result;
            setValue.cleatParams();
            setValue.setScreenValue();
            setValue.setInfoValue(value);
            setValue.addHistory(value);
        }
    }
})