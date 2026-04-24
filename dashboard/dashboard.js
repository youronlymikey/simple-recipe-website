function searchRecipe() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!input) return;

    let target = document.getElementById(input);

    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.style.border = "3px solid #3a7d44";

        setTimeout(() => {
            target.style.border = "none";
        }, 2000);
    } else {
        alert("Recipe not found!");
    }
}