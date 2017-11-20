'use strict';

function Legend({labels, colors}) {
    const legendItems = labels.map((label, labelIndex) => {
        return (
            <LegendItem
                key={labelIndex}
                label={label}
                color={colors[labelIndex % colors.length]}
            />
        );
    });
    
    return (
        <div className="Legend">
            {legendItems}
        </div>
    );
}