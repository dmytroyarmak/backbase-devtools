console.log('devtools.js');

chrome.devtools.panels.create('Backbase', 'backbase.png', 'panel.html', function(panel) {
    console.log('Panel created', panel);
});

chrome.devtools.panels.elements.createSidebarPane('Backbase Item Model', function(sidebar) {

    var getInfo = function (){
       // var elm = b$.portal.portalModel.all[$0.attributes['data-pid'].value];
        var propertyList = ['Description','TemplateName','templateUrl','title','version'];
        var dataList = ['contextItemName','extendedItemName','name','securityProfile'];
        var elm, pref;
        var obj = {};
        var errorMSg = {message : 'This element do not have a widget content'};
        obj.preference = {};

        if ($0.closest("[data-pid]") == null) {
            errorMSg;
        } else {
            elm = b$.portal.portalModel.all[$0.closest("[data-pid]").attributes['data-pid'].value];
            pref = elm.attributes;

            // get preference
            for (key in pref) {
                if (propertyList.indexOf(pref[key].localName) > -1 ){
                    obj.preference[pref[key].localName] = pref[key].nodeValue;
                }
            }
            //get other information
            for (key in elm) {
                if (dataList.indexOf(key) > -1 ){
                    obj[key] = elm[key];
                }
            }
            obj;
        }
    };

    function update() {
        sidebar.setExpression(getInfo.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]);
    }
    update();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(update);

});
