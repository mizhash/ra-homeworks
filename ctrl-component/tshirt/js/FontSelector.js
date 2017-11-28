'use strict';

const FontSelector = ({fonts, selected, onSelect}) => {
    const fontElements = fonts.map(font => <Font key={font.name} font={font} onSelect={onSelect} value={selected && (selected.name === font.name)}/>);
    return (
        <div className="font-picker">
            Выберите шрифт
            {fontElements}
        </div>
    )
};

function Font({font, onSelect, value}) {
    return (
        <div className="grid center font-item">
            <input
                type="radio"
                name="font"
                value={font.name}
                id={font.name}
                onChange={() => onSelect(font)}
                checked={value}
            />
            <label htmlFor={font.name} className="grid-1">
                <PictureFont text="abc" path={font.path} />
            </label>
        </div>
    )
}