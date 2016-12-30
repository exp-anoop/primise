// Creatred by Anoop P R

var cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        // Code 
        var isClean = true; // 1 , 2, 3

        if (isClean == 1) {
            resolve("today")
        } if (isClean == 2) {
            resolve("tomorrow")
        } else {
            reject("room : failed");
        }

    });
}


var garbage = function() {
    return new Promise(function(resolve, reject) {

        // Code

        var out = false;

        if (out) {
            resolve(1,2,3)
        } else {
            reject('garbage : failed');
        }
    })

}

var buyIceCream = function() {
    return new Promise(function(resolve, reject) {

        // Code

        var ice = true;

        if (ice) {
            resolve()
        } else {
            reject('ice failed');
        }
    })

}


cleanRoom()
    .then(function(data) {

    	console.log("Clean " + data);

        return garbage();

    })
    .then(function(one, two, three) {
        return buyIceCream();
    })
    .then(function() {
            console.log("Happy");
	    })
	.catch(function(error) {
	    console.log("failed due to "  + error);
	});