
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;

	float y = step(0.5, st.x);
	float x = step(0.5, st.x);

	vec3 color = vec3(y, y, y);

	gl_FragColor = vec4(color,1.0);
}