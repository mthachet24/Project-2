// author plots.js

d3.json("samples.json").then(function(data) {
    console.log(data)
  });
  

function buildsetCharts(sample){
    d3.json("samples.json").then(function(data){
        // var  = data.samples;
        // var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        // var result = resultArray[0];
        
        // var values = result.sample_values;
        // var otu_ids = result.otu_ids;
        // var otu_labels = result.otu_labels;
        // var dataY = otu_ids.map(id => `OTU ${id}`).slice(0,10).reverse();
        // var dataX =values.slice(0,10).reverse()


        Highcharts.chart('container', {
            chart: {
                type: 'packedbubble',
            },
            series: [{
                name: avg_pub_rating,
                data: [{
                    value: book_revenue,
                    name: pub_name,
                 }]

        Plotly.newPlot("bubble", dataBubbleChart, bubbleLayout);

    });
};

function buildchangablechart(Decade){
    //put code to get variables here
    // avg rating top authors (top author by units sold)
    var trace1 = {
        x: top_auth_names,
        y: avg_auth_rating,
        type: 'bar'
      };
      
    var auth_bar_data = [trace1];
    var auth_bar_layout = {
        title: "Avg Rating of Top Authors of the Decade",
        margin: {t :30},
        yaxis: {title: "Average Rating (scale 1 to 5)"},
        xaxis: {title: "Author Names"}
    }

      Plotly.newPlot('Author_bar', auth_bar_data, auth_bar_layout);

}

function init(){
    // var dropdown = d3.select("#selDataset");
    // d3.json("samples.json").then(function(data){
    //     var sampleName = data.names;
    //     sampleName.forEach((sample)=>{
    //         dropdown.append("option")        
    //         .text(sample)        
    //         .property("value", sample);
    //     });
        buildsetCharts(author_data);
        //const sampleOne = sampleName[0];
        buildMetadata(decade);
        buildchangablechart(decade);

    });
}

function optionChanged(newSample) {
    //drop down of decades new metadata and new bar chart
    console.log(newSample);
    buildchangablechart(decade);
    buildMetadata(newSample);
};

function buildMetadata(sample){
    //top books by decade units sold
    d3.json("samples.json").then((data)=>{
    //     var metadata = data.metadata;       
    //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);   
    //     var result = resultArray[0];        
    //     var PANEL = d3.select("#publisher-metadata");  
    //     PANEL.html("");     
    //     Object.entries(result).forEach(([key, value]) => {      
    //     PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);    
    //     });
    //   });  
    }

    init();
