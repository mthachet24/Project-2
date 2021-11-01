// author plots.js
function getAuthors(data){
    authorList = []
    authorBookCount = []
    for (var a = 0; a <data.length; a ++){
        authorList.push(data[a].author)
        authorBookCount.push(data[a].book_count)
        
    }
    //console.log(authorList)
}; 
 
function buildsetCharts(data){
     d3.json("authors.json").then(function(data){

        authorsdata = getAuthors(data);

         Highcharts.chart('bubble container', {
             chart: {
                 type: 'packedbubble',
             },
             title: {
                 text: 'Number of Books Published by Author'
             },
             series: [{
                 data: [{
                     value:authorBookCount,
                     name: authorList,
                  }]



     }]
})
})};
// function buildchangablechart(Decade){
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

// }

function init(){
    var dropdown = d3.select("#selDataset");
    d3.json("books.json").then(function(data){
         
         var decades = Object.keys(data)
         decades.forEach((decade) =>{
            dropdown.append("option")
            .text(decade)
        })})
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
         d3.json("author.json").then(function(authordata){
            buildsetCharts(authordata);
        // var authorsdata = getAuthors(authordata)

        // console.log(authorList)
        // console.log(authorBookCount)
        // buildsetCharts(authorsdata)


    })
    //_________________________________________________________
     };
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
//     }
init();
