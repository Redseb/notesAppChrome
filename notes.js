var notepad = document.getElementById("notepad");

document.body.onload = function () {
    chrome.storage.sync.get("data", function (items) {
        if (!chrome.runtime.error) {
            console.log(items);
            if(items.data != null){
                notepad.value = items.data;
            }
        }
    });
}

document.onkeyup = function(){
    var leftOverData = notepad.value;
    console.log(leftOverData);
    chrome.storage.sync.set({ "data": leftOverData }, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });
}