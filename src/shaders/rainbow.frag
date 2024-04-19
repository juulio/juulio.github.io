#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 linearInterpolationVec3(vec3 a, vec3 b, float interpolation_factor) {
    return (1. - interpolation_factor) * a + interpolation_factor * b;
}

float edgeLinearInterpolation(float e0, float e1, float interpolation_factor) {
    return clamp((interpolation_factor - e0) / (e1 - e0), 0., 1.);
}

vec3 getColour(int index) {
    if (index == 0) {
        return  vec3(1., 0., 0.);
    } else
    if (index == 1) {
        return  vec3(1., 0.65, 0.);
    } else
    if (index == 2) {
        return  vec3(1., 1., 0.);
    } else
    if (index == 3) {
        return  vec3(0., 1., 0.);
    } else
    if (index == 4) {
        return  vec3(0., 0., 1.);
    } else
    if (index == 5) {
        return  vec3(0.3, 0., 0.5);
    } else
    if (index == 6) {
        return  vec3(0.93, 0.51, 0.93);
    }
        
}

void main() {
    
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // Set colours on designated portion of screen
    float interpolation_factor = edgeLinearInterpolation(0.05, 0.95, fract(uv.x * 6.));
    int index = int(uv.x * 6.);
    vec3 colour = linearInterpolationVec3(getColour(index), getColour(index + 1), interpolation_factor);

    gl_FragColor = vec4(colour, 1.);
}
