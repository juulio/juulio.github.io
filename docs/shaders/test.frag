#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;

float Circle(vec2 uv, vec2 p, float r,  float blur) {
    float d = length(uv - p);
    float c = smoothstep(r, r-blur, d);

    return c;
}

void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution.xy; // 0 <> 1
    uv -= .5; // convert uv to  -0.5 <> 0.5
    
    //uv += 0.06; // convert uv to  -0.5 <> 0.5

    uv.x *= u_resolution.x / u_resolution.y;

    float c = Circle(uv, vec2(.2, .1), .4, .05);
    
    c -= Circle(uv, vec2(.1, .1), .07, .01);
    c -= Circle(uv, vec2(-.1, .1), .07, .01);

    //float d = length(uv);
    //float r = 0.3;
    //float c = smoothstep(r, r-abs(sin(u_time*.3)), d);

    gl_FragColor = vec4(vec3(c), 1.0);
}



// uniform float u_time;
// uniform vec2 u_resolution;

// void main(){
//     vec2 uv = gl_FragCoord.xy/u_resolution.xy; // 0 <> 1
//     // uv -= abs(sin(u_time)); // convert uv to  -0.5 <> 0.5
//     uv -= .5; // convert uv to  -0.5 <> 0.5

//     uv.x *= u_resolution.x / u_resolution.y;

//     float d = length(uv);

//     float r = 0.3;

//     float c = smoothstep(r, r-abs(sin(u_time*.3)), d);

//     gl_FragColor = vec4(vec3(c), 1.0);
// }