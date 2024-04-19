#ifdef GL_ES
precision mediump float;
#endif

vec4 RGBLeft = vec4(1.0,0.0,0.0,1.0); //red
vec4 RGBMiddle = vec4(0.0,1.0,0.0,1.0); // green
vec4 RGBRight = vec4(0.0,0.0,1.0,1.0); // blue

uniform vec2 u_resolution;
uniform float u_time;

void main( )
{
    const float GAMMA = 2.2;
    
    vec2 xy = gl_FragCoord.xy / u_resolution.xy;
    //vec2 xy = uv; // resolume wrap
    
    float h = 1./3.; // adjust position of middleColor
    float h2 = 2./3.; // adjust position of middleColor
    
    vec4 black = vec4(0.,0.,0.,1.);

    vec4 col1 = xy.x < h ? mix(RGBLeft, RGBMiddle, xy.x/h) : black;
  
    vec4 c2b = mix(RGBMiddle, RGBRight, (xy.x - h)/(1.0 - h2));
    
    vec4 col2 = h < xy.x ? xy.x < h2 ? c2b :black : black;
    
    vec4 c3b = mix(RGBRight, RGBLeft, (xy.x - h2)/(1.0 - h2));
    
	vec4 col3 = h2<xy.x ? xy.x<1. ? c3b : black : black;    
        
    vec4 col4 = col1+col2+col3;
    
    gl_FragColor = pow(col1 + col2 + col3,vec4(1./GAMMA));

}
