'use strict';

function getDataMax(data, minValue = 0) {
    return data.reduce((itemMax, item) => {
        if (Array.isArray(item)) {
            item = getDataMax(item, minValue);
        }
        return Math.max(itemMax, item)
    }, minValue);
}

function Charts({data, colors, labels, series, ...props}) {
    const max = getDataMax(data, 0);

    const charts = data.map((serie, serieIndex) => {
        return (
            <Chart
                key={serieIndex}
                serie={serie}
                label={props.horizontal ? series[serieIndex] : labels[serieIndex]}
                colors={colors}
                horizontal={props.horizontal}
                stacked={props.stacked}
                layered={props.layered}
            >
                {
                    {
                        getOpacity: props.opacity ? item => item / max + .05 : () => 1,
                        getSize: item => item / max * 100
                    }
                }
            </Chart>
        )
    });

    return (
        <div className={`Charts ${props.horizontal ? 'horizontal' : ''}`}>
            {charts}
        </div>
    );
}