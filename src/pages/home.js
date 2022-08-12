import { useState, useEffect } from "react";
import * as api from "../services/api.js";
import { ColorPicker } from "../components/color-picker.js";
import "./home.css";
import { BsPalette } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

export function Home() {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        api.getAll().then((resp) => {
            return setPalettes(resp.data);
        });
    }, []);

    const addPalette = (newPalette) => {
        api.set(newPalette).then((resp) => {
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
            <div className="home-title">
                <BsPalette className="icon-palette" />
                <h1>Color palette generator</h1>
            </div>

            <ColorPicker addPalette={addPalette} />
            <div className="block">
                {palettes.length ? (
                    <h2 className="title-list">Saved palettes</h2>
                ) : (
                    <h2 className="title-list">Loading...</h2>
                )}
                <div className="list-palette">
                    {palettes.map((palette) => (
                        <ul key={palette._id}>
                            <div className="title-trash">
                                <li className="list">{palette.title}</li>
                                <FaTrashAlt
                                    className="trash"
                                    onClick={deletePalette}
                                />
                            </div>
                            <div className="buttons">
                                <button
                                    className="button-list"
                                    style={{ backgroundColor: palette.color1 }}
                                ></button>
                                <button
                                    className="button-list"
                                    style={{ backgroundColor: palette.color2 }}
                                ></button>
                                <button
                                    className="button-list"
                                    style={{ backgroundColor: palette.color3 }}
                                ></button>
                                <button
                                    className="button-list"
                                    style={{ backgroundColor: palette.color4 }}
                                ></button>
                                <button
                                    className="button-list"
                                    style={{ backgroundColor: palette.color5 }}
                                ></button>
                            </div>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
