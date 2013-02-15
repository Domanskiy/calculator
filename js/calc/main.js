var calcrequire = require.config({
    urlArgs : "bust="+new Date().getTime()
});

calcrequire(["dom", "calcFunctions"], function(DOM, calcFunctions) {

    calcFunctions.init();

    DOM.$num.on("click", "button[value='|']", function(event){
        calcFunctions.signClicked()
        event.stopImmediatePropagation()
    })
    DOM.$num.on("click", "button[value='=']", function(event){
        calcFunctions.equalsClicked()
        event.stopImmediatePropagation()
    })
    DOM.$num.on("click", "button", function(){
        calcFunctions.digitClicked(parseInt($(this).val()))
    })
    DOM.$operations.on("click", "button", function(){
        calcFunctions.operationClicked($(this).val())
    })
    DOM.$calc.on("click", ".cscreen", function(){
        calcFunctions.clearClicked()
    })
})