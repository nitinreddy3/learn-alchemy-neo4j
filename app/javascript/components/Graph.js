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
						"caption": "192.168.0.20",
						"role": "http_server",
						"memoryUsage": 50,
						"root": true
					},
					{
						"id": "s2",
						"caption": "192.168.0.21",
						"role": "http_server",
						"memoryUsage": 22,
						"root": true
					},
					{
						"id": "s3",
						"caption": "192.168.0.22",
						"role": "http_server",
						"memoryUsage": 95,
						"root": true
					},
					{
						"id": "s4",
						"caption": "192.168.2.4",
						"role": "neo4j",
						"memoryUsage": 10,
						"root": false
					},
					{
						"id": "s5",
						"caption": "192.168.2.6",
						"role": "postgres",
						"memoryUsage": 30,
						"root": false
					},
					{
						"id": "s6",
						"caption": "192.168.2.7",
						"role": "db_backups",
						"memoryUsage": 10,
						"root": false
					},
					{
						"id": "s7",
						"caption": "192.168.2.12",
						"role": "load balancer",
						"memoryUsage": 42,
						"root": false
					}
				],
				"edges": [
					{
						"source": "s7",
						"target": "s1",
						"load": 5
					},
					{
						"source": "s7",
						"target": "s2",
						"load": 2
					},
					{
						"source": "s7",
						"target": "s3",
						"load": 2
					},
					{
						"source": "s1",
						"target": "s4",
						"load": 4
					},
					{
						"source": "s1",
						"target": "s5",
						"load": 1
					},
					{
						"source": "s2",
						"target": "s4",
						"load": 1
					},
					{
						"source": "s2",
						"target": "s5",
						"load": 1
					},
					{
						"source": "s3",
						"target": "s4",
						"load": 0
					},
					{
						"source": "s3",
						"target": "s5",
						"load": 1
					},
					{
						"source": "s4",
						"target": "s6",
						"load": 0
					},
					{
						"source": "s5",
						"target": "s6",
						"load": 0
					}

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
					"borderColor": "#127DC1",
					"borderWidth": function (d, radius) {
						return radius / 4
					},
					"color": function (d) {
						return "rgba(104, 185, 254, " +
							(d.getProperties().memoryUsage / 100) + " )"
					},
					"radius": function (d) {
						if (d.getProperties().root)
							return 15; else return 10
					},
				},
				"http_server": {
					"color": "#000067",
					"selected": {
						"color": "#ffffff",
					},
					"highlighted": {
						"color": "#b4dcff"
					}
				}
			},
			edgeStyle: {
				"all": {
					"width": 4,
					"color": "#000",
				}
			},
			edgeCaption: 'load'
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