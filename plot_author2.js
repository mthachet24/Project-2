function getUnits(data){
    console.log("getUnits", data);
    var unitsBubbles = [];
    for (var u = 0; u <data.length; u ++){
        if(data[u].book_count > 2) {
            unitsBubbles.push({
                "name": data[u].author,
                "value": data[u].units_sold
            });
    
        }
    };

    //console.log(authorList)
    return unitsBubbles;
}; 

function buildSecondSetChart(data){
    d3.json("author.json").then(function(data){
                var unitsBubbles = getUnits(data);
                
                console.log(unitsBubbles)
                Highcharts.chart('bubblechart', 
                {
                    chart: {
                        type: 'packedbubble',
                        height: '50%',
                        outerWidth: '10%'
                    },
                    plotOptions: {
                        packedbubble: {
                            minSize: 15,
                            maxSize: 200
                        }
                    },
                    title: {
                        text: 'Number of Units Sold by Author (2+ Books)'
                    },
                    tooltip: {
                        useHTML: true,
                        pointFormat: '<b>{point.name}:</b> {point.y}</sub>'
                    },
                    SplotOptions: {
                        packedbubble: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {
                                    color: 'black',
                                    textOutline: 'none',
                                    fontWeight: 'normal'
                                }
                            },
                            minPointSize: 5
                        }
                    },
                    series: [
                        {
                            name: "Units Sold",
                            data: unitsBubbles
                        }
                    ]
                }
            )
        }
    )
}; 

function init(){
    d3.json("author.json").then(function(authordata){
        buildSecondSetChart(authordata);
        }
    )
}
init();