const $ = function(selector) {
    return document.querySelector(selector);
};

function processEntries1() {
    let error = false;  

    if ($("#full_name1").value == "" || ($("#email1").value == "") || ($("#phone1").value == "")) {
        error = true;
    }

    if (!(error)){
        $("#inq-error").innerText = "";
        $("#inquiry").submit();
    }
    else{
        $("#inq-error").innerText = "All Contact Information is required.";
    }
};

function processEntries2() {
    let error = false;  

    let inputs = document.querySelectorAll(".req");
    for (let i=0; i < inputs.length; i++){
        if (inputs[i].value == "") {
            error = true;
        }
    }
    
    if (!(error)){
        $("#resv-error").innerText = "";
        $("#reservation").submit();
    }
    else{
        $("#resv-error").innerText = "All information is required.";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit_inq").addEventListener("click", processEntries1);
    $("#submit_resv").addEventListener("click", processEntries2);
});