import React, { Component } from 'react';

var Graph = React.createClass({
	componentDidMount() {
		this.createGraph()
	},

	createGraph() {
		var config = {
			dataSource: {
				"comment": "Network Graph",
				"nodes": [
					{
						"id": "s1",
						"caption": "Kyle",
						"role": "http_server",
						"memoryUsage": 50,
						"root": true
					},
					{
						"id": "s2",
						"caption": "192.168.0.21",
						"role": "http_server",
						"memoryUsage": 22,
						"root": false
					},
					// {
					// 	"id": "s3",
					// 	"caption": "192.168.0.22",
					// 	"role": "http_server",
					// 	"memoryUsage": 95,
					// 	"root": false
					// },
					// {
					// 	"id": "s4",
					// 	"caption": "192.168.2.4",
					// 	"role": "neo4j",
					// 	"memoryUsage": 10,
					// 	"root": false
					// },
					// {
					// 	"id": "s5",
					// 	"caption": "192.168.2.6",
					// 	"role": "postgres",
					// 	"memoryUsage": 30,
					// 	"root": false
					// }
				],
				"edges": [

					{
						"source": "s2",
						"target": "s1",
						"load": 'REPORTS_TO'
					},
					// {
					// 	"source": "s4",
					// 	"target": "s1",
					// 	"load": 'REPORTS_TO'
					// },
					// {
					// 	"source": "s1",
					// 	"target": "s5",
					// 	"load": 1
					// },
					// {
					// 	"source": "s2",
					// 	"target": "s4",
					// 	"load": 1
					// },
					// {
					// 	"source": "s2",
					// 	"target": "s5",
					// 	"load": 1
					// },
					// {
					// 	"source": "s3",
					// 	"target": "s4",
					// 	"load": 0
					// },
					// {
					// 	"source": "s3",
					// 	"target": "s5",
					// 	"load": 1
					// },
					// {
					// 	"source": "s4",
					// 	"target": "s5",
					// 	"load": 0
					// }

				]
			},
			graphWidth: () => 1000,
			graphHeight: () => 1000,
			directedEdges: true,
			nodeTypes: {
				"role":
				["http_server", "postgres", "neo4j", "load_balancer"]
			},
			edgeCaption: "relatedness",
			nodeCaptionsOnByDefault: true,
			nodeStyle: {
				"all": {
					"borderWidth": 1,
					"color": function (d) {
						return "rgba(104, 185, 254, " +
							(d.getProperties().memoryUsage / 100) + " )"
					},
					"radius": 30,
					"captionColor": "#000",
					"highlighted": {
						"color" : "#EEEEFF"
					},
				},
				// "http_server": {
				// 	"color": "#000067",
				// 	"selected": {
				// 		"color": "#ffffff",
				// 	},
				// 	"highlighted": {
				// 		"color": "#b4dcff"
				// 	}
				// }
			},
			edgeStyle: {
				"all": {
					"width": 4,
					"color": "#000",
				}
			},
			edgeCaption: 'load',
		};

		alchemy = new Alchemy(config)
	},

	render() {
		return (<div>
			<h1>Graph Relationships</h1>
			<div className="alchemy" id="alchemy" style={{ background: '#fff' }}></div>
		</div>
		)
	}
});

export default Graph;