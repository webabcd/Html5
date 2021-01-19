(function () {
    'use strict';

    function addScript(src) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.src = src;
      document.body.appendChild(script);
    }

    function callback(data) {
      //定义处理数据的函数
      alert(data);
    }

    callback('1');

    window.onload = function () {
      addScript('http://localhost:42858/jsonp');
    };

}());
