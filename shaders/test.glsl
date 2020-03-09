
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {


	vec2 xy = gl_FragCoord.xy / u_resolution.xy; //We obtain our coordinates for the current pixel

	// xy.x = xy.x / u_resolution.x; //We divide the coordinates by the screen size
    // xy.y = xy.y / u_resolution.y;

    vec4 color = vec4(0,0.0,0.0,1.0);//This is actually black right now
    
	// color.r = xy.x;
	// color.g = xy.y;
	// color.b = xy.x;

    color.r = abs(sin(u_time));
	color.g = abs(cos(u_time));
	color.b = abs(sin(u_time) * cos(u_time));

    gl_FragColor = color;
}
					