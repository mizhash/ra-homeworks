'use strict';

const compareNumbers = (a, b) => a - b;

function Chart({serie, label, colors, ...props}) {
    let sortedSerie, sum;

    if (props.stacked) {
        sum = serie.reduce((carry, current) => carry + current, 0);
    }

    if (props.layered) {
        sortedSerie = serie.slice(0);
        sortedSerie.sort(compareNumbers);
    }

    const chartItems = serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = props.stacked
                        ? item / sum * 100
                        : props.children.getSize(item);
        const style = {
            backgroundColor: color,
            opacity: props.children.getOpacity(item),
            zIndex: item
        };
        if (props.layered) {
            style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
        }
        if (props.horizontal) {
            style.width = size + '%'
        } else {
            style.height = size + '%'
        }


        return <ChartItem key={itemIndex} style={style} stacked={props.stacked} layered={props.layered}>{item}</ChartItem>
    });

    return (
        <div className={`Charts--serie ${props.stacked ? 'stacked' : ''} ${props.layered ? 'layered' : ''}`}
             style={props.horizontal ? {height: 'auto'} : {height: 250}}
            >
            <label>{label}</label>
            {chartItems}
        </div>
    );
}