if ( !("easyFetch" in window) ) {
    window.easyFetch = function (url, fnOk, fnErr){
        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onreadystatechange = function (e){
            if (this.readyState == 4) {
                if (this.status == 200)
                  fnOk(this.responseText);
                else
                  fnErr(this.status);
            }
        }
        xhr.send(null);
    }
}

var url = "https://jsonplaceholder.typicode.com/users";

easyFetch(url,
    function(data) {
        console.log("Sukces");
        console.log(data);
    },
    function(err) {
        console.log("Wystąpił błąd!");
        console.log(err);
});