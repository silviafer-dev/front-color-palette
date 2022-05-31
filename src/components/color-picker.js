import { useState } from "react";
import { CompactPicker } from "react-color";
import "./color-picker.css";

export function ColorPicker({ addPalette }) {
    const [select, setSelect] = useState(false);
    const [color, setColor] = useState("#CCCCCC");
    const [newPalette, setNewPalette] = useState({
        title: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        color5: "",
    });

    const onChangeComplete = (color) => {
        setColor(color.hex);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(newPalette, "la newPalette");
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
        setSelect(!select);
        setNewPalette({
            ...newPalette,
            [evt.target.name]: evt.target.value,
        });
    };
    // let circleClassName = "small";
    // select ? (circleClassName = "big") : (circleClassName = "small");

    return (
        <div>
            {/* <Circle color={color} circleClassName={circleClassName} />
            <Circle color={color} circleClassName={circleClassName} /> */}

            <form onSubmit={handleSubmit}>
                <input
                    className="color-circle"
                    type="color"
                    name="color1"
                    value={newPalette.color1}
                    onClick={() => {
                        setSelect(!select);
                    }}
                    onChange={handleChange}
                />
                <input
                    className="color-circle"
                    type="color"
                    name="color2"
                    value={newPalette.color2}
                    onClick={() => {
                        setSelect(!select);
                    }}
                    onChange={handleChange}
                />
                <input
                    className="color-circle"
                    type="color"
                    name="color3"
                    value={newPalette.color3}
                    onClick={() => {
                        setSelect(!select);
                    }}
                    onChange={handleChange}
                />
                <input
                    className="color-circle"
                    type="color"
                    name="color4"
                    value={newPalette.color4}
                    onClick={() => {
                        setSelect(!select);
                    }}
                    onChange={handleChange}
                />
                <input
                    className="color-circle"
                    type="color"
                    name="color5"
                    value={newPalette.color5}
                    onClick={() => {
                        setSelect(!select);
                    }}
                    onChange={handleChange}
                />
                <div className="color-form">
                    <CompactPicker
                        color={color}
                        onChangeComplete={onChangeComplete}
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
