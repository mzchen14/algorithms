var isIsomorphic = function(s, t) {
    const map = {}
    for(let i = 0; i<s.length; i++) {
        if(!map[s[i]] && checkRepeat(map, s[i], t[i])){
            map[s[i]] = t[i];
        }
    }
     for(let j = 0; j < t.length; j++){
         if(map[s[j]] !== t[j]){
             return false;
         }
     }
     return true;
 };
 
 function checkRepeat(map, key, val) {
     for(key in map) {
         if(map[key] === val) {
             return false;
         }
     }
     return true;
 }