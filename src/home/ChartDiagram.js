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
    d3.tip = d3Tip;

    const tip = d3.tip()
      .attr('class','d3-tip')
      .offset([-10,10])
      .html((d) => {
        const {data:{Name,Affinity}} = d;
        return `<div class="tooltip-box-a"><strong>${Name}</strong><i>${Affinity}</i></div>`
      });

    const svgElement = d3.select('svg#d3-pie-chart').call(tip);
    const svgWidth = + svgElement.attr('width');
    const svgHeight = + svgElement.attr('height');
    const svgRadius = Math.min(svgWidth, svgHeight)/2;

    const gElement = svgElement.append('g')
      .attr('transform',`translate(${svgWidth/2}, ${svgHeight/2})`)

    const color = d3.scaleOrdinal(d3.schemeCategory20c);
    const d3Pie = d3.pie()
      .sort(null)
      .value((d) => {
        return d['Affinity']
      });
    const arcPath = d3.arc()
      .outerRadius(svgRadius - 10)
      .innerRadius(0);
    const label = d3.arc()
      .outerRadius(svgRadius - 40)
      .innerRadius(svgRadius - 40);
    const ArcTextStyle = {
      font: `10px san-serif`,
      textAnchor: `middle`
    };




    d3.csv(this.props.file, (d) => {
      d['Affinity'] = + d['Affinity'];
      return d;
    }, (error, data) => {
      const arc = gElement.selectAll(".arc")
        .data(d3Pie(data))
        .enter().append("g")
        .attr("class", "arc")



      arc.append("path")
        .attr("d", arcPath)
        .attr("fill", (d) => color(d.data['Name']))
        .call(tip)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
      arc.append("text")
        .attr('style', ArcTextStyle)
        .attr("transform", (d) => {
          return `translate(${label.centroid(d)})`;
        })
        .attr("dy", "0.35em")
        // .text((d) => d.data['Name']);
    })
  }

  render(){
    return(
      <div className={`chart-wrapper`}>
        <div className={`svg-wrapper`}>
          <svg id={`d3-pie-chart`} width={`640`} height={`480`}></svg>
        </div>
        <h3 className={`text-center`}>{this.props.title}</h3>
      </div>
    )
  }
}


export class D3ToolTipChart extends Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    const svgElement = d3.select('svg#bar-chart-tooltip')
    const formatPercentage = d3.format('%');
    const margin = {top: 30, right:30, bottom:230, left: 30};
    const width = +svgElement.attr('width') - (margin.left + margin.right);
    const height = +svgElement.attr('height') - (margin.top + margin.bottom);

    const x = d3.scaleBand().rangeRound([0,width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([height,0]);


    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).tickFormat(d3.format('d'));
      // .tickFormat(formatPercentage);



    d3.tip = d3Tip;
    const tip = d3.tip()
      .attr('class','d3-tip')
      .offset([-10,0])
      .html((d) => {
        return `<div class="tooltip-box"><strong>${d['Name']}</strong><i>${d[' Index']}</i></div>`
      });

    const gElement = svgElement.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)
    svgElement.call(tip);

    d3.csv(this.props.file, (d)=>{
      d['Index'] = + d[` Index`];
      return d;
    }, (error, data) => {
      x.domain(data.map((d) => d['Name']));
      y.domain([0, d3.max(data, (d) => d['Index'])]);

      gElement.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .selectAll('text')
          .attr("dx", "-10em")
          .attr("dy", "-.55em")
          .attr('transform', (d) => `rotate(-90)`);


      gElement.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Index")
        .call(yAxis)

      gElement.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d['Name']))
        .attr('y', (d) => {
          return y(d['Index']);
        })
        .attr("width", x.bandwidth())
        .attr('height', (d) => {
          const dIndex = y(d['Index']);
          return (height - dIndex);
        })
        // .attr("y", function(d) { return y(d['Name']); })
        // .attr("height", function(d) { return 480 - y(d['Index']); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
    })
  }

  render(){
    return (
      <div className={`chart-wrapper`}>
        <div className="svg-wrapper">
          <svg width={640} height={480} id={`bar-chart-tooltip`}></svg>
        </div>
        <h3 className={`text-center`}>{this.props.title}</h3>
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
      <div className={`page-content chart-content`}>
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
      </div>
    )
  }
}