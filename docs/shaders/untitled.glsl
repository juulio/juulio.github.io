#ifdef GL_ES
precision mediump float;
#endif
 
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
 
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv-p);
 
    float c = smoothstep(r, r-blur, d);
 
    return c;
}
 
float Smiley(vec2 uv, vec2 p, float size){
    uv -= p; // translating coordinate system
    uv /= size; // scaling coordinate system
 
    float mask = Circle(uv, vec2(0.), .4, .01);
 
    mask -= Circle(uv, vec2(-.13, .2), .07, .01);
    mask -= Circle(uv, vec2(.13, .2), .07, .01);
 
    float mouth = Circle(uv, vec2(0.), .3, .01);
    mouth -= Circle(uv, vec2(0, 0.1), .3, .02);
 
    mask -= mouth;
 
    return mask;
}

float Band(float t, float start, float end, float blur){
    float step1 = smoothstep(start-blur, start+blur, t);
    float step2 = smoothstep(end+blur, end-blur, t);
    
    return step1 * step2;
}

float Rect(vec2 uv, float left, float right, float bottom, float top, float blur){
    float band1 = Band(uv.x, left, right, blur);
    float band2 = Band(uv.y, bottom, top, blur);
    
    return band1 * band2;
}

float remap01(float a, float b, float t){
    return (t-a) / (b-a);
}

float remap(float a, float b, float c, float d, float t){
    return remap01(a, b, t) * (d-c) + c;
}

void main(){
   	vec2 uv = gl_FragCoord.xy / u_resolution.xy; // 0 <> 1
    float t = u_time;

    uv -= .5; // -0.5 <> 0.5
 
    uv.x *= u_resolution.x/u_resolution.y; // Aspect Ratio
 
    vec3 col = vec3(0.);
 
    // float mask = Smiley(uv, vec2(0.), 1.);
    float mask = 0.;
 
    float x = uv.x;
    float m = sin (t+x*8.) * .1; 
    float y = uv.y-m;
 
    float blur = remap(-.1, .5, .01, .45, x);
    blur = pow(blur, 3.);

    mask = Rect(vec2(x, y), -.5, .5, -.1, .1, blur);
 
    col = vec3(1., 1., 1.) * mask;
 
    gl_FragColor = vec4(col, 1.0);
}