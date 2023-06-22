document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") === "kyllä") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
    } else {
        document.getElementById("kirjaudu_ulos").style.display = "none";
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}

function kirjauduUlos() {
    localStorage.removeItem("nimi");
    localStorage.removeItem("kirjautunut")
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
    document.getElementById("nimi").value = "";
}