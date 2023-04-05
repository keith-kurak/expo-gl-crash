import React from "react";
import { GLView } from "expo-gl";

export default function GLScene() {
  return (
    <GLView
      style={{ width: 50, height: 50 }}
      onContextCreate={onContextCreate}
    />
  );
}

function onContextCreate(gl) {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0, 1, 1, 1);

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.flush();
  gl.endFrameEXP();
}
