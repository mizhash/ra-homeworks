'use strict';

function ChartItem(props) {
    return (
        <div
            className={`Charts--item ${props.stacked ? 'stacked' : ''} ${props.layered ? 'layered' : ''}`}
            style={props.style}
        >
            <b style={{ color: props.style.backgroundColor }}>{props.children}</b>
        </div>
    );
}