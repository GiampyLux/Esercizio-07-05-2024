const salva = function() {
    const text = document.getElementById("content");
    const contentText = text.value;
    localStorage.setItem("content-value", contentText);
    console.log("Contenuto salvato", contentText);
    contentText.
};

document.getElementById("save").addEventListener("click", salva);

const text = document.getElementById("content");

