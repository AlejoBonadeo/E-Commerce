const categoriesContainer = document.querySelector(".categorias-container")
    const categoriesButton = document.querySelector(".categorias-btn")

    categoriesButton.addEventListener("click", () => {
    categoriesContainer.classList.toggle("mostrar-categorias")
})