import { render, screen } from "@testing-library/react"
import SearchSuperHero from "../../components/SearchSuperHero"
test('comprobar que el input se haya renderizado ', () => {
    render(<SearchSuperHero />)
    const searchInput = screen.getByPlaceholderText(/Search superhero.../i)
    expect(searchInput).toBeInTheDocument();
})


test('comprobar que el input de búsqueda esté vacío ', () => {
    render(<SearchSuperHero />)
    const searchInput = screen.getByPlaceholderText(/Search superhero.../i)
    expect(searchInput.value).toBe("");
})


test('Mensaje de personaje no encontrado oculto', () => {
    render(<SearchSuperHero />)
    const searchInput = screen.getByPlaceholderText(/Search superhero.../i)
    expect(searchInput.value).toBe("");
})