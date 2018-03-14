import React, {Component} from 'react'
import './chart-diagram.scss';

const d3 = require('d3');
const d3Dsv = require('d3-dsv');
const d3Scale = require('d3-scale');
const d3Shape = require('d3-shape');
const d3Tip = require('d3-tip');
const d3Format = require('d3-format');
const d3Array = require('d3-array');
const d3Axis = require('d3-axis');




export class D3JSPieChart extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){

  }
  componentDidMount(){

    const svgElement = d3.select('svg#d3-pie-chart');
    const svgWidth = + svgElement.attr('width');
    const svgHeight = + svgElement.attr('height');
    const svgRadius = Math.min(svgWidth, svgHeight)/2;
    console.log('WIDTH')
    console.log(svgWidth)
    console.log(svgHeight)
    console.log(svgRadius)
    const gElement = svgElement.append('g')
      .attr('transform',`translate(${svgWidth/2}, ${svgHeight/2})`);

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    const d3Pie = d3.pie()
      .sort(null)
      .value((d) => {
        return d['Affinity']
      })

    const arcPath = d3.arc()
      .outerRadius(svgRadius - 10)
      .innerRadius(0)

    const label = d3.arc()
      .outerRadius(svgRadius - 40)
      .innerRadius(svgRadius - 40)

    const ArcTextStyle = {
      font: `10px san-serif`,
      textAnchor: `middle`
    }
    console.log(this.props.file)
    d3.csv(this.props.file, (d) => {
      d['Affinity'] = + d['Affinity'];
      return d;
    }, (error, data) => {


      var arc = gElement.selectAll(".arc")
        .data(d3Pie(data))
        .enter().append("g")
        .attr("class", "arc");

      arc.append("path")
        .attr("d", arcPath)
        .attr("fill", function(d) { return color(d.data['Name']); });

      arc.append("text")
        .attr('style', ArcTextStyle)
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data['Name']; });
    })
  }

  render(){
    return(
      <div>
        <div className={`svg-wrapper`}>
          <svg id={`d3-pie-chart`} width={`640`} height={`480`}></svg>
        </div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}


export class D3ToolTipChart extends Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    const formatPercentage = d3.format('%');
    const x = d3.scaleBand().rangeRound([0,640])
    const y = d3.scaleLinear()
      .range([480, 0]);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
      .tickFormat(formatPercentage);

    const svgElement = d3.select('svg#bar-chart-tooltip')

    d3.tip = d3Tip;
    const tip = d3.tip()
      .attr('class','d3-tip')
      .offset([-10,0])
      .html((d) => `<strong>Name</strong>:${d['Name']}`)

    const gElement = svgElement.append('g')
    svgElement.call(tip);

    d3.csv(this.props.file, (d)=>{
      d['Index'] = + d[`Index`];
      return d;
    }, (error, data) => {
      x.domain(data.map(function(d) { return d['Name']; }));
      y.domain([0, d3.max(data, function(d) { return d[' Index']; })]);

      svgElement.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 480 + ")")
        .call(xAxis);

      svgElement.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

      svgElement.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d['Name']); })
        .attr("width", x.bandwidth())
        .attr('y', (d) => {
          const dIndex = d[' Index'];
          return dIndex;
        })
        .attr('height', (d) => {
          console.log(d)
          const dIndex = d[' Index'];
          console.log(dIndex)
          console.log(y(dIndex))
          console.log('Height')
          return (480 - dIndex);
        })
        // .attr("y", function(d) { return y(d['Name']); })
        // .attr("height", function(d) { return 480 - y(d['Index']); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
    })
  }

  render(){
    return (
      <div>
        <svg width={640} height={480} id={`bar-chart-tooltip`}></svg>
      </div>
    )
  }
}


export default class ChartDiagram extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className={`grid-container`}>
        <div className="grid-x grid-margin-x">
          <div className="small-12 large-12 cell">
            <D3JSPieChart title={`Simple Pie Chart | Affinity.csv`} file={`/csv/affinity.csv`}/>
          </div>
          <div className="small-12 large-12 cell">
            <div className="d3-tool-tip-chart">
              <D3ToolTipChart title={`Simple Bar Chart | index.csv`} file={`/csv/index.csv`}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}