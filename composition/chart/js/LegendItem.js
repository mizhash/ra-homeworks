'use strict';

function LegendItem({label, color}) {
    return (
        <div>
            <span className="Legend--color" style={{backgroundColor: color}} />
            <span className="Legend--label">{label}</span>
        </div>
    );
}