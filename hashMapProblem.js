queryType = ['insert','insert', 'addToValue', 'addToKey', 'get']
query = [[1,2], [2,3], [2], [1], [3]]

function hashMap(queryType, query) {
    let map = {}
    let sum = 0
    for(let i = 0; i < queryType.length; i++) {
        if(queryType[i] === "insert") {
            map[query[i][0]] = query[i][1]
            console.log(map, "insert")
        }
        if(queryType[i] === "get") {
            sum += map[query[i]]
            console.log(map, "get")
        }
        if(queryType[i] === "addToKey") {
            const curr = Object.keys(map).reverse()
            curr.forEach(key => {
                const newKey = Number(key) + query[i][0]
                map[newKey] = map[key]
                delete map[key]
            })
            console.log(map, "addKey")
        }
        if(queryType[i] === "addToValue") {
            Object.keys(map).forEach(key => {
                const newVal = map[key] + query[i][0]
                map[key] = newVal
            })
            console.log(map, "addVal")
        }
        
    }
    console.log(sum)
    return sum
}
hashMap(queryType, query)