
function CreateVersionElement() {
    let version = "2025-03-07 02:53:01";
    let versionDiv = document.createElement("div");
    versionDiv.id = "versionDiv";
    versionDiv.innerText = version;
    versionDiv.style.position = "fixed";
    versionDiv.style.bottom = "10px";
    versionDiv.style.right = "10px";
    versionDiv.style.zIndex = "1000";
    versionDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    versionDiv.style.color = "white";
    versionDiv.style.padding = "1px 5px";
    versionDiv.style.borderRadius = "5px";
    versionDiv.style.fontSize = "14px";
    versionDiv.style.fontFamily = "Arial, sans-serif";
    document.body.appendChild(versionDiv);
}

function RemoveVersionElement() {
    let versionDiv = document.getElementById("versionDiv");
    if (versionDiv) versionDiv.remove();
}


function CheckCanShowVersion() {
    let canShow = localStorage.getItem('versionDisplayEnabled') === 'true';
    if (canShow) CreateVersionElement();
}


function ToggleVersionDisplay() {
    let canShow = localStorage.getItem('versionDisplayEnabled') === 'true';
    localStorage.setItem('versionDisplayEnabled', !canShow);
    if (!canShow) CreateVersionElement();
    else RemoveVersionElement();
}

document.addEventListener("DOMContentLoaded", function() {
  CheckCanShowVersion();
});
