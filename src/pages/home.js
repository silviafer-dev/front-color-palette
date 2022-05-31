import { useState, useEffect } from "react";
import * as api from "../services/api.js";
import { ColorPicker } from "../components/color-picker.js";
import "./home.css";
import { BsPalette } from "react-icons/bs";

export function Home() {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        api.getAll().then((resp) => {
            console.log(resp, "la resp");

            return setPalettes(resp.data);
        });
    }, []);

    const addPalette = (newPalette) => {
        api.set(newPalette).then((resp) => {
            console.log(resp.data, "la palette");

            return setPalettes([...palettes, resp.data]);
        });
    };

    const deletePalette = (palette) => {
        api.remove(palette._id).then((resp) => {
            if (resp.status === 200) {
                setPalettes(palettes.filter((item) => item.id !== palette._id));
            }
        });
    };

    return (
        <div className="home">
            <BsPalette />
            <h1>Color palette generator</h1>
            <ColorPicker addPalette={addPalette} />
            {palettes.length ? <h2>Saved palettes</h2> : ""}

            {palettes.map((palette) => (
                <ul key={palette._id} className="palette-list">
                    <li>{palette.title}</li>

                    <button
                        style={{ backgroundColor: palette.color1 }}
                    ></button>
                    <button
                        style={{ backgroundColor: palette.color2 }}
                    ></button>
                    <button
                        style={{ backgroundColor: palette.color3 }}
                    ></button>
                    <button
                        style={{ backgroundColor: palette.color4 }}
                    ></button>
                    <button
                        style={{ backgroundColor: palette.color5 }}
                    ></button>
                    <button onClick={deletePalette}>🗑️</button>
                </ul>
            ))}
        </div>
    );
}
