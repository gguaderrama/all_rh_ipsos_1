export default class StringUtils {
    
    static jsonToQueryString (obj) {
        var pairs = [];
        for(var key in obj) {
            if(obj.hasOwnProperty(key)){
                pairs.push(key + "=" + obj[key]);        
            }
        }
        if(pairs.length) {
            return "?" + pairs.join("&");
        }
        return "";
    };
}