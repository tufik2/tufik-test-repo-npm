export function log(values){ try{ var args = arguments; for(var i = 0; i < args.length; i++){ console.log(args[i]); } }catch(err){ }; };
export const cuppa = { debug:false };

/* bindAll */
cuppa.bindAll = function(element, isFunction){
    var propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(element));
    if(isFunction)  propertyNames = Object.keys(element);
    for(var i = 0; i < propertyNames.length; i++){
        if(typeof element[propertyNames[i]] == "function"){
            element[propertyNames[i]]= element[propertyNames[i]].bind(element);
        };
    };
};
