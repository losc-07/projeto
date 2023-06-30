function mudar_cor(){
    let agateemeele = document.documentElement
    agateemeele.classList.toggle('light')

    let ismaige = document.querySelector("#profile img");

    if (agateemeele.classList.contains('light')) {
        ismaige.setAttribute("src", "./assets/assets/avatar-light.png")
    } else {
        ismaige.setAttribute("src", "./assets/assets/avatar.png")
    }
}