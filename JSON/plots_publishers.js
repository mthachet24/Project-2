
// publisher plots.js
//d3.json("samples.json").then(function(data) {
    //console.log(data)
  //});
  

function buildsetCharts(sample){
    d3.json("samples.json").then(function(data){
        //var  = data.samples;
        //var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        //var result = resultArray[0];
        
        //var values = result.sample_values;
        //var otu_ids = result.otu_ids;
        //var otu_labels = result.otu_labels;
        //var dataY = otu_ids.map(id => `OTU ${id}`).slice(0,10).reverse();
        //var dataX =values.slice(0,10).reverse()


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

        });
    });
};

function buildchangablechart(publisher){


    //put code to get variables here

    //making publisher line chart x = decades y = revenue 
    var trace1 = {
        x: publisher_decade,
        y: publisher_revenue,
        type: 'scatter'
      };
      
    var pub_line_data = [trace1];
    var pub_line_layout = {
        title: "Publisher Revenue by Decade",
        margin: {t :30},
        yaxis: {title: "Publisher Revenue"},
        xaxis: {title: "Decade"}
    }

      Plotly.newPlot('publisher_line', pub_line_data, pub_line_layout);
}

function init(){
    var dropdown = d3.select("#selDataset");
    d3.json("samples.json").then(function(data){
        //var sampleName = data.names;
        //sampleName.forEach((sample)=>{
            //dropdown.append("option")        
            //.text(sample)        
            //.property("value", sample);
       // });
        buildsetCharts(pub_data);
        //const sampleOne = sampleName[0];
        buildMetadata(sampleOne);
        buildchangablechart(Publisher);
    });
}

function optionChanged(newPublisher) {

    //drop down of publisher names scatter plot and metadata will update
    console.log(newPublisher);
    buildchangablechart(newPublisher);
    buildMetadata(newPublisher);
};

function buildMetadata(sample){

    // change to be top 5 books by units sold for the publisher
    d3.json("samples.json").then((data)=>{
       // var metadata = data.metadata;       
        //var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);   
        //var result = resultArray[0];        
        //var PANEL = d3.select("#publisher-metadata");  
        //PANEL.html("");     
        //Object.entries(result).forEach(([key, value]) => {      
        //PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);    
        });
      });  
    }

    init();
