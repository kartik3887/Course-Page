// Tabs Functionality
function openTab(evt, tabName) {
    let tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
}

// Accordion Functionality
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        let content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
