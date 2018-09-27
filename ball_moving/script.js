'use strict';
var field = document.getElementById('field');
    var ball = document.getElementById('ball');

    field.onclick = function(event) {

      var fieldBorders = this.getBoundingClientRect();

      var fieldInnerBorders = {
        top: fieldBorders.top + field.clientTop,
        left: fieldBorders.left + field.clientLeft
      };

      var ballPosition = {
        top: event.clientY - fieldInnerBorders.top - ball.clientHeight / 2,
        left: event.clientX - fieldInnerBorders.left - ball.clientWidth / 2
      };

      if (ballPosition.top < 0) ballPosition.top = 0;

      if (ballPosition.left < 0) ballPosition.left = 0;

      if (ballPosition.left + ball.clientWidth > field.clientWidth) {
        ballPosition.left = field.clientWidth - ball.clientWidth;
      }

      if (ballPosition.top + ball.clientHeight > field.clientHeight) {
        ballPosition.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballPosition.left + 'px';
      ball.style.top = ballPosition.top + 'px';
    }