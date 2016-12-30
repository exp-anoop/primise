var httpRequest = function(method, url, input) {

    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject({
                        url: url,
                        method: method
                    });
                }
            }
        }

        xhttp.open(method, url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(input);
    });

}

var user = {
    email: "demo@experionglobal.com",
    password: "exp@123"
}

var loginInput = "userName=" + user.email + "&password=" + user.password;

httpRequest("POST", "https://exptest.herokuapp.com/api/login", loginInput)
    .then(function(loginInfo) {
        if(loginInfo.status == 200) {
        	console.log("Login Success!!");
        	return httpRequest("GET", "https://exptest.herokuapp.com/api/imageGallery");
        } else {
        	console.log("Login Failed!!")
        }
    })
    .then(function(gallery) {
    	console.log("Gallery Images!!", gallery);
    })
    .catch(function(err) {
        console.log("Something went wrong!!", err);
    });