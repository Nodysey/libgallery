const years = document.querySelectorAll("gallery year")
const months = document.querySelectorAll("gallery month")
const images = document.querySelectorAll("gallery img")

const hoverAudio = new Audio("./hover.wav");
const activeAudio = new Audio("./active.wav");

// handle showing and hiding year content
years.forEach(element => {
    const legend = element.getElementsByTagName("legend")[0]
    const content = element.getElementsByTagName("content")[0]
    legend.addEventListener("mouseenter", () => {
        new Audio("./hover.wav").play();
    });
    legend.addEventListener("click", () => {
        new Audio("./active.wav").play();
        const isVisible = (String(content.getAttribute("visible")).toLowerCase() === 'true');
        content.setAttribute("visible", !isVisible);
    })
});

// handle showing and hiding month content
months.forEach(element => {
    const legend = element.getElementsByTagName("legend")[0]
    const content = element.getElementsByTagName("content")[0]
    legend.addEventListener("mouseenter", () => {
        new Audio("./hover.wav").play();
    });
    legend.addEventListener("click", () => {
        new Audio("./active.wav").play();
        const isVisible = (String(content.getAttribute("visible")).toLowerCase() === 'true');
        content.setAttribute("visible", !isVisible);
    })
});

// handle image viewing
images.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        new Audio("./hover.wav").play();
    });
    element.addEventListener("click", () => {
        new Audio("./active.wav").play();
        window.open(element.src).focus();
    });
})