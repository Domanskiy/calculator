define(["dom", "setValue", "results", "operation"], function(DOM, setValue, results, operation){
    return {
        digitClicked : function(keyValue) {
            if (Math.abs(setValue.params.x) > setValue.params.maxLength) {return}
            setValue.params.x = setValue.params.x < 0 ? setValue.params.x*10 - keyValue : setValue.params.x*10 + keyValue;
            setValue.setScreenValue();
        },
        signClicked : function() {
            setValue.params.x = setValue.params.x*(-1);
            setValue.setScreenValue();
        },
        equalsClicked : function() {
            if (!setValue.params.x1 && setValue.params.x1 != 0) {return;}
            setValue.params.x2 = setValue.params.x;
            setValue.params.x = 0;
            setValue.setScreenValue("");
            setValue.setInfoValue(setValue.params.x1 + " " + operation[setValue.params.operation] + " " + setValue.params.x2 + " = ");
            results.getResult();
        },
        operationClicked : function(selectedOperation) {
            if (setValue.params.operation) {
                this.equalsClicked();
            } else {
                setValue.params.x1 = setValue.params.x;
                setValue.params.x = 0;
                setValue.params.operation = selectedOperation;
                setValue.setScreenValue();
                setValue.setInfoValue(setValue.params.x1 + " " + operation[setValue.params.operation]);
            }
        },
        clearClicked :function() {
            setValue.cleatParams();
            setValue.setScreenValue();
            setValue.setInfoValue("");
        },
        init : function() {
            setValue.setScreenValue();
            setValue.params.maxLength = Math.pow(10, (setValue.params.maxLength-1));
        }
    }
})