# Zookeeper Herd

**Description**:  This is a simple load testing tool to simulate connections to Zookeeper. When
testing upgrades and other configuration changes, it is helpful to have a bunch of connections to simulate them.


## Dependencies

You must have `node` and `npm` installed. I have only tested on Node version 0.10 and higher

## Installation

`npm install -g zookeeper-herd`

## Configuration

There are two arguments to control the herd:

* zookeeper: The connection string for the seed nodes of the Zookeeper ensemble. ie: node1:2181,node2:9181
* size: The amount of connections to make to the Zookeeper nodes

## Usage

It is very simple:

```
herd --zookeeper "node1:2181,node2:9181 --size 100
```