// Select elements
const sections = document.querySelectorAll('.section_div')
const ds_button = document.getElementById("data_sources_button")
const cm_button = document.getElementById("collect_methods_button")
const am_button = document.getElementById("analysis_methods_button")
const pv_button = document.getElementById("venues_button")

// Makes all sections invisible & makes the given index's section visible
function change_tab(tab_index) {
    for (const element of sections) {
        element.hidden = true
    }
    sections[tab_index].hidden = false
}

// Sets the only visible section to data_sources when 1st loading the page
change_tab(0)

// Adds an event listener to each button that switches to their coorosponding tab
ds_button.addEventListener("click", () => {
    change_tab(0)
});
cm_button.addEventListener("click", () => {
    change_tab(1)
});
am_button.addEventListener("click", () => {
    change_tab(2)
});
pv_button.addEventListener("click", () => {
    change_tab(3)
});