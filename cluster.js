/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var cluster = require('cluster'),
	os = require('os'),
	
	numCPUs = os.cpus().length,// 获取 CPU 的数量

	workers = {};
	
if (cluster.isMaster) {
      // 主进程分支
      cluster.on('death', function(worker) {
        // 当一个工作进程结束时，重启工作进程
        delete workers[worker.pid];
        worker = cluster.fork();
        workers[worker.pid] = worker;
      });
      // 初始开启与 CPU 数量相同的工作进程
      for ( var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
        workers[worker.pid] = worker;
      }
} else {
      // 工作进程分支，启动服务器
      var app = require('./app');
      app.listen(app.get('port'), function() {
        console.log('Server listening on port %d in %s mode', app.get('port'), app.get('env'));
      });
}

// 当进程被终止时，关闭所有工作进程
process.on('SIGTERM', function() {
      for ( var pid in workers) {
        process.kill(pid);
      }
      process.exit(0);
});