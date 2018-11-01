console.log(d3.select('p'), 'D3 all set!');
// remove all notes
d3.select('#delete').on('click', function(){
    d3.event.preventDefault();
    d3.selectAll('.note').remove();
})

// feel lucky
d3.select('#lucky').on('click', function(){
    d3.event.preventDefault();
    
    d3.selectAll('.note')
        .style('background-color', function(){
            var colorful = ['red', 'blue', 'green', 'orange', 'steelblue', 'pink', 'gold', '#fff', '#ab45b2', 'brown'];            
            return colorful[Math.floor(Math.random() * 10)]; 
        });
});

// Preview
var input = d3.select('input');
var preview = d3.select('.preview');

d3.select('#new-note').on('submit', function(){
    d3.event.preventDefault();
    
    d3.select('#notes')
        .append('p')
        .classed('note', true)
        .text(input.property("value"));
    input.property("value", "");
    setPreview("");
});

input.on('input', function(){
    var idea = d3.event.target.value;
    setPreview(idea);
})

function setPreview(value){
    preview.text(value)
        .classed('hide', value === "");
}