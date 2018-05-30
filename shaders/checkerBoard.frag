uniform float u_time;
uniform vec2 u_resolution;

#define PI 3.14159265359

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

float checker(vec2 uv, float repeats) {
	float cx = floor(repeats * uv.x);
	float cy = floor(repeats * uv.y); 
	float result = mod(cx + cy, 2.0);
	return sign(result);
}


void main( ) {
     vec2 uv = vec2(gl_FragCoord.xy / u_resolution.xy);
 
  //optionally fix aspect ratio 
  uv.x *= u_resolution.x / u_resolution.y;
 
  //18x18 checkered background 
  float gray = mix(0.8, 1.0, checker(uv, 18.0));
  
  gl_FragColor.rgb = vec3(gray);
  gl_FragColor.a = 1.0;
}