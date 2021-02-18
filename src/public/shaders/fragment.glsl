uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

// --------[ Original ShaderToy begins here ]---------- //
const vec3 YELLOW = vec3(.9921, .898, .4823);
const vec3 RED = vec3(.5294, .1294, .2862);
const vec3 PINK = vec3(.9764, .7568, .8705);
const vec3 BLACK = vec3(0.);
const vec3 WHITE = vec3(1.);

const vec3 DARK_YELLOW_1 = vec3(.949, .8627, .2313);
const vec3 DARK_YELLOW_2 = vec3(.945, .9058, .6627);
const vec3 LIGHT_YELLOW_1 = vec3(.9921, .9843, .5019);
const vec3 LIGHT_YELLOW_2 = vec3(.9372, .9294, .8313);

float circle(vec2 uv, vec2 center, float r, float sm)
{
    return 1. - smoothstep(r - sm, r, distance(uv, center));
}

vec3 background(vec2 uv)
{
    float angle = atan(uv.y, uv.x);
    float dist = length(uv) * 2.;
    
    vec3 c1 = mix(DARK_YELLOW_2, DARK_YELLOW_1, dist);
    vec3 c2 = mix(LIGHT_YELLOW_2, LIGHT_YELLOW_1, dist);
    
    float v = cos(u_time + angle * 8.0) * .5 + .5;
    return mix(c1, c2, smoothstep(0.48, 0.52, v));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{    
    vec2 uv = (fragCoord / u_resolution.xy) * 2.0 - 1.0;
    const float ratio = 16./9.;
    
    //uv -= .5;
    uv.x *= u_resolution.x / u_resolution.y;
        
    vec3 col = background(uv);
    fragColor = vec4(col, 1.0);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
} 