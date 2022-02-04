
let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        let obj = JSON.parse(this.responseText);
        document.getElementById("repo").innerHTML = obj[0].name;
        document.getElementById("repo1").innerHTML = obj[0].owner.repos_url;
    }
}
gitHubRequest.open("GET", "https://api.github.com/users/j-zilla1/repos", true);
gitHubRequest.send();



$(document).ready(function() {
    $(".icons").hover(function() {
      $(this).toggleClass("resize");
    });
  });