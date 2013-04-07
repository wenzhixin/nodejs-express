#! /bin/bash

NODE_ENV=production
DAEMON="node cluster.js"
NAME=nodejs_express
PIDFILE="nodejs_express.pid"

case "$1" in
  start)
        echo "Starting $NAME."
        nohup $DAEMON >/dev/null 2>/dev/null &
        echo $! > $PIDFILE
        ;;
  stop)
        echo "Stopping $NAME."
        pid=`cat $PIDFILE`
        kill $pid
        rm $PIDFILE
        ;;
  status)
      ps -ef | grep nodejs
      ;;
    esac

    exit 0
