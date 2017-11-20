'use strict';

function ChartsDemo(props) {
    return (
        <div>
            <Charts {...props} opacity />
            <Charts {...props} stacked />
            <Charts {...props} opacity layered />
            <Charts {...props} opacity horizontal />
            <Legend labels={props.labels} colors={props.colors} />
        </div>
    )
}