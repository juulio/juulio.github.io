uniform vec2 resolution;
uniform float time;

#define animSpeed 0.05

//-----------------------------------------------------------------------------
// Crater in -1.0 to 1.0 space
float crater(in vec2 pos) {
    float len = length(pos);
    float pi = 3.1415926535;
    float x = clamp(pow(len, 4.0) * 8.0, pi*0.5, pi*2.5);
    float t = clamp(len, 0.0, 1.0);
    return sin(-x) + 0.5 - 0.5 * cos(t * pi);
}

//-----------------------------------------------------------------------------
vec2 pseudoRand(in vec2 uv) {
    // from http://gamedev.stackexchange.com/questions/32681/random-number-hlsl
    float noiseX = (fract(sin(dot(uv, vec2(12.9898,78.233)      )) * 43758.5453));
    float noiseY = (fract(sin(dot(uv, vec2(12.9898,78.233) * 2.0)) * 43758.5453));
    return vec2(noiseX, noiseY);}

//-----------------------------------------------------------------------------
float repeatingCraters(in vec2 pos, in float repeat, in float scaleWeight) {
    vec2 pos01 = fract(pos * vec2(repeat));
    vec2 index = (pos * vec2(repeat) - pos01) / repeat;
    vec2 scale = pseudoRand(index);
    float craterY = crater(vec2(2.0) * (pos01 - vec2(0.5)));
    return mix(1.0, pow(0.5*(scale.x + scale.y), 4.0), scaleWeight) * craterY; 
}

//-----------------------------------------------------------------------------
float getY(in vec2 pos) {    
    float y = 0.5;
    for(int i=0;i<int(100);++i) {
        float f01 = float(i) / float(99.0);
        float magnitude = pow(f01, 2.3);
        vec2 offs = pseudoRand(vec2(float(i+2), pow(float(i+7), 3.1)));
        float repeat = 0.5 / (magnitude + 0.0001);

        y += magnitude * repeatingCraters(pos+offs, repeat, 1.0);
    }
    
	return y;
}

//-----------------------------------------------------------------------------
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2 pos = (fragCoord.xy - resolution.xy*0.5) / vec2(resolution.y);
    pos += vec2(1.0); // avoid negative coords

    vec2 offs = vec2(0.001, -0.001);
    
    pos.x += time * animSpeed;
    pos.y -= time * animSpeed * 0.25;
    
    float y = getY(pos);
    float y1 = getY(pos - offs);
    //float y2 = getY(pos + offs);

    vec3 normal = normalize(vec3(0.01, y-y1, 0.01));

    float d = 0.5 + 0.5 * dot(normal, normalize(vec3(2.0, 1.0, 2.0)));
    
    float shadeScale = 1.0;

    float c = y * 0.02 - 0.5 + d * 1.3;

    // color ramp
    vec3 rgb = vec3(mix(mix(vec3(0.0,0.0,0.0), vec3(0.8,0.6,0.4), c), vec3(1.0,0.95,0.90), c));
    
    fragColor = vec4(rgb,1.0);
}

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}