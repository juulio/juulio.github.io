#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;

void main(){
vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5+abs(sin(uTime))); 

    // gl_FragColor = vec4(abs(sin(uTime)),0.0,0.0,1.0);
    gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = vec4(0.0,1.0,0.0,1.0);
}