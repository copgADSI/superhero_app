import { render, screen } from "@testing-library/react";
import SuperHeros from "../../components/SuperHeros";

describe('superhero api ', () => {
    it('superhero app', () => {
        render(<SuperHeros />);
        expect(screen.getByText('Superheros')).toBeInTheDocument();
    });
});