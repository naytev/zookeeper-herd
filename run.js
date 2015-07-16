var ZooKeeper = require ("zookeeper");
var args = require("yargs").argv;

var zookeeperSeed = args.zookeeper || "localhost:2181";
var herdSize = args.size || 5;


var connections = [];
for(var i = 0; i < herdSize; i++){
    var localCount = i;
    var zk = new ZooKeeper({
      connect: zookeeperSeed
     ,timeout: 200000
     ,debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN
     ,host_order_deterministic: false
    });
    zk.connect(function (err) {
        if(err)
            console.log("zk error: ", err);
        else{
            console.log ("zk session established, id=%s, conn=%s", zk.client_id, localCount);
        }
    });
    connections.push(zk)
}
