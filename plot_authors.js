// author plots.js
function getAuthors(data){
    console.log("getAuthors", data);
    var authorBubbles = [];
    for (var a = 0; a <data.length; a ++){
        if(data[a].book_count > 2) {
            authorBubbles.push({
                "name": data[a].author,
                "value": data[a].book_count
            });
    
        }
    };

    //console.log(authorList)
    return authorBubbles;
}; 

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

function buildsetCharts(data){
     d3.json("author.json").then(function(data){

            var authorsdata = getAuthors(data);
            console.log(authorsdata);

            Highcharts.chart('bubblechart', 
                {
                    chart: {
                        type: 'packedbubble',
                        height: '50%',
                    },
                    plotOptions: {
                        packedbubble: {
                            minSize: 15,
                            maxSize: 200
                        }
                    },
                    title: {
                        text: 'Number of Books Published by Author (2+ Books)'
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
                            name: "Authors",
                            data: authorsdata,
                        }
                    ]
                }
            )
            
                
            }
        )

};


// function buildchangablechart(Decade){
// //     values = [1,65,8,98,689,12,33,2,3,789];
// // var topValues = values.sort((a,b) => b-a).slice(0,5);
// // console.log(topValues); // [789,689,98,65,33]
//     d3.json("books.json").then(function(data){
//     var filtered_data = 

    
//     console.log(filtered_data)
//     var units_sold = filtered_data.units_sold
//     console.log(units_sold)

//     //put code to get variables here
//     // avg rating top authors (top author by units sold)


//     var trace1 = {
//         x: top_auth_names,
//         y: avg_auth_rating,
//         type: 'bar'
//       };
      
//     var auth_bar_data = [trace1];
//     var auth_bar_layout = {
//         title: "Avg Rating of Top Authors of the Decade",
//         margin: {t :30},
//         yaxis: {title: "Average Rating (scale 1 to 5)"},
//         xaxis: {title: "Author Names"}
//     }

//       Plotly.newPlot('Author_bar', auth_bar_data, auth_bar_layout);


function init(){
    d3.json("author.json").then(function(authordata){
        buildsetCharts(authordata);
        // var authorsdata = getAuthors(authordata)

        // console.log(authorList)
        // console.log(authorBookCount)
        // buildsetCharts(authorsdata)


    });
    // var dropdown = d3.select("#selDataset");
    // d3.json("books.json").then(function(data){
         
    //      var decades = Object.keys(data)
    //      decades.forEach((decade) =>{
    //         dropdown.append("option")
    //         .text(decade)
    //         .property("value", decade);
    //     const decadeOne = decades[0]
    //     buildchangablechart(decadeOne)
    //     });
    //     })}
     //     sampleName.forEach((sample)=>{
     //         dropdown.append("option")        
     //         .text(sample)        
     //         .property("value", sample);
     //     });
        
         //const sampleOne = sampleName[0];
         //buildMetadata(decade);
         //buildchangablechart(decade);
    
    //_________________________________________________________
    //wont stay here this is to test that the function works

    //________________________________________________________;
// }

// function optionChanged(newSample) {
//     //drop down of decades new metadata and new bar chart
//     console.log(newSample);
//     buildchangablechart(decade);
//     buildMetadata(newSample);
// };

// function buildMetadata(sample){
//     //top books by decade units sold
//     d3.json("samples.json").then((data)=>{
//     //     var metadata = data.metadata;       
//     //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);   
//     //     var result = resultArray[0];        
//     //     var PANEL = d3.select("#publisher-metadata");  
//     //     PANEL.html("");     
//     //     Object.entries(result).forEach(([key, value]) => {      
//     //     PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);    
//     //     });
//     //   });  
     }
init();
