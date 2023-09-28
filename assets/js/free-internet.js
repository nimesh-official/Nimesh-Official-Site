function httpproxyinjectorfile() {

    var a = document.createElement("a");

    a.href = "your_file_url_here"; 

    a.download = "your_file_name_here"; 

    a.click();
}

var button = document.getElementById("httpproxyinjectorfiledownload");
button.addEventListener("click", httpproxyinjectorfile);

function proxifierfile() {

    var a = document.createElement("a");

    a.href = "your_file_url_here"; 

    a.download = "your_file_name_here"; 

    a.click();
}

var button = document.getElementById("proxifierfiledownload");
button.addEventListener("click", proxifierfile);