
// Create JSON object:
const jsonData = {
    "name": "John",
    "age": 30,
    "car": null
}

// Print JSON object to console:
console.log("JSON data: " + JSON.stringify(jsonData));

//Convert JSON to XML using jsonxml():
let xmlData = json2xml(jsonData);
console.log("XMLData: " + xmlData);