import { useState } from "react";
import { CompactPicker } from "react-color";
import "./color-picker.css";

export function ColorPicker({ addPalette }) {
    const [color, setColor] = useState("#CCCCCC");
    const [newPalette, setNewPalette] = useState({
        title: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
    });

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addPalette(newPalette);
        setNewPalette({
            title: "",
            color1: "",
            color2: "",
            color3: "",
            color4: "",
            color5: "",
        });
    };
    const handleChange = (evt) => {
        setNewPalette({
            ...newPalette,
            [evt.target.name]: evt.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="color-pick">
                    <input
                        className="color-circle"
                        type="color"
                        name="color1"
                        value={newPalette.color1}
                        onChange={handleChange}
                    />
                    <input
                        className="color-circle"
                        type="color"
                        name="color2"
                        value={newPalette.color2}
                        onChange={handleChange}
                    />
                    <input
                        className="color-circle"
                        type="color"
                        name="color3"
                        value={newPalette.color3}
                        onChange={handleChange}
                    />
                    <input
                        className="color-circle"
                        type="color"
                        name="color4"
                        value={newPalette.color4}
                        onChange={handleChange}
                    />
                    <input
                        className="color-circle"
                        type="color"
                        name="color5"
                        value={newPalette.color5}
                        onChange={handleChange}
                    />
                </div>
                <div className="color-form">
                    <CompactPicker
                        color={color}
                        onChangeComplete={handleChangeComplete}
                    />
                    <div className="save-color">
                        <span className="name">Name</span>
                        <div className="input-add">
                            <input
                                className="input"
                                type="text"
                                name="title"
                                placeholder="Website color scheme"
                                value={newPalette.title}
                                onChange={handleChange}
                            />
                            <button className="button-add" type="submit">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
