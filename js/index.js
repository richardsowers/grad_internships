var myConfig = {
  type: 'wordcloud',
  options: {
    words: [{
      text:"Greybar Electric",
      count:1,
    },
    {
      text:"Caterpillar",
      count:1,
    },
    {
      text:"Walmart Technology",
      count:1,
    },
    {
      text:"Schneider National",
      count:1,
    },
    {
      text:"Quantlab",
      count:1,
    },
    {
      text:"HERE Technologies",
      count:1,
    },{
      text:"3M",
      count:1,
    },
    {
      text:"CME Group",
      count:1,
    },],
    minLength: 3,
    maxItems: 40,
    aspect: 'flow-center',
    rotate: true,
    colorType: 'palette',
    palette: ['#D32F2F','#5D4037','#1976D2','#E53935','#6D4C41','#1E88E5','#F44336','#795548','#2196F3','#EF5350','#8D6E63','#42A5F5'],
    
    style: {
      fontFamily: 'Crete Round',
      
      hoverState: {
        backgroundColor: '#D32F2F',
        borderRadius: 2,
        fontColor: 'white'
      },
      tooltip: {
        text: '%text: %hits',
        visible: true,
        
        alpha: 0.9,
        backgroundColor: '#1976D2',
        borderRadius: 2,
        borderColor: 'none',
        fontColor: 'white',
        fontFamily: 'Georgia',
        textAlpha: 1
      }
    }
  },
  
  source: {
    text: "",
    fontColor: '#000000',
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: 'normal',
    marginBottom: '10%'
  }
};

zingchart.render({ 
	id: 'myChart', 
	data: myConfig, 
	height: 600, 
	width: '100%' 
});
