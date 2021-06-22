function updateTime() {
    var dt = new Date();
    document.getElementById("time").innerHTML = dt.getTime();
}

function changeColor() {
    var body = document.body;
    var html = document.documentElement;
    body.classList.toggle("body-light-mode");
    html.classList.toggle("html-light-mode");
}
 
document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    
    for (var checkbox of checkboxes)
    {
        checkbox.addEventListener('change', function(event)
        {
            if (event.target.checked) {
                console.log("Checked");
                changeColor();
            }
            else {
                console.log("Unchecked");
                changeColor();
            }
        });
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        changeColor();
        document.getElementById("toggle").checked = true;
        
    }
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        switch (newColorScheme = e.matches ? "light" : "dark") {
            case "light":
                changeColor();
                document.getElementById("toggle").checked = true;
                break;
            case "dark":
                changeColor();
                document.getElementById("toggle").checked = false;
        }
    });
}, false);



