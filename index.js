//create the array with the object in it
data = [{
    "principal": 2500,
    " time": 1.8
}, {
    "principal": 1000,
    " time": 5
}, {
    "principal": 3000,
    " time": 1
}, {
    "principal": 2000,
    " time": 3
}];

function interestCalculator(data) {
    var interest; //storet the calculated interest
    var interestData = []; // store the updated object; this array is return by the function
    for (let i = 0; i < data.length; i++) {
        if (data[i]["principal"] >= 2500 && data[i]["time"] >= 3) {
            data[i]["rate"] = 4;
        } else if (data[i]["principal"] >= 2500 && data[i]["time"] > 1 && data[i]["time"] < 3) {
            data[i]["rate"] = 3;
        } else if (data[i]["principal"] < 2500 || data[i]["time"] <= 1) {
            data[i]["rate"] = 2;
        } else {
            data[i]["rate"] = 1;
        }
        interest = (data[i]["principal"] * data[i]["time"] * data[i]["rate"]) / 100;
        data[i]["interest"] = interest;
        interestData.push(data[i]);

    }
    console.log(Data);
    return interestData;
}
interestCalculator(data);