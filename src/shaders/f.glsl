#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying vec2 vUv;

// Hash function for pseudo-random values
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Smooth noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Fractal Brownian Motion
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

void main() {
    vec2 uv = vUv;
    float time = uTime * 0.3;
    
    // Create flowing organic patterns with more turbulence for lava effect
    vec2 flow1 = vec2(
        fbm(uv * 3.0 + time * 0.5),
        fbm(uv * 3.0 + time * 0.7 + 100.0)
    );
    
    vec2 flow2 = vec2(
        fbm(uv * 6.0 + time * 0.8 + flow1 * 0.3),
        fbm(uv * 6.0 + time * 1.2 + flow1 * 0.3 + 200.0)
    );
    
    // Add bubbling effect like lava bubbles
    float bubbles = 0.0;
    for(int i = 0; i < 3; i++) {
        float fi = float(i);
        vec2 bubblePos = uv + sin(time * (2.0 + fi) + fi * 10.0) * 0.1;
        float bubble = smoothstep(0.1, 0.0, length(bubblePos - 0.5 - sin(time + fi) * 0.2));
        bubbles += bubble * (0.5 + sin(time * 3.0 + fi) * 0.5);
    }
    
    // Add ripple effect
    float dist = length(uv - 0.5);
    float ripple = sin(dist * 15.0 - time * 6.0) * 0.05;
    
    // Combine patterns with more chaos for lava look
    float pattern = fbm(uv * 5.0 + flow1 * 0.8 + flow2 * 0.4 + ripple);
    pattern += fbm(uv * 8.0 + flow2 * 0.6 + time * 0.5) * 0.3;
    pattern += bubbles * 0.4;
    
    // Add veins/cracks effect
    float veins = smoothstep(0.7, 1.0, sin(uv.x * 20.0 + flow1.x * 5.0) * sin(uv.y * 15.0 + flow1.y * 4.0));
    pattern += veins * 0.3;
    
    // Create lava-like color gradient (hot to cool)
    vec3 hotLava = vec3(1.0, 0.3, 0.1);      // Bright orange-red
    vec3 warmLava = vec3(0.8, 0.1, 0.0);     // Deep red
    vec3 coolLava = vec3(0.2, 0.0, 0.0);     // Dark red/black
    
    // Mix user colors with lava colors for customization
    vec3 color1 = mix(coolLava, u_colorA, 0.3);
    vec3 color2 = mix(warmLava, u_colorB, 0.4);
    vec3 color3 = mix(hotLava, mix(u_colorA, u_colorB, 0.5), 0.5);
    
    // Multi-color mixing based on pattern with lava characteristics
    vec3 finalColor;
    if(pattern < 0.3) {
        finalColor = mix(color1, color2, pattern * 3.33);
    } else if(pattern < 0.7) {
        finalColor = mix(color2, color3, (pattern - 0.3) * 2.5);
    } else {
        finalColor = mix(color3, hotLava, (pattern - 0.7) * 3.33);
    }
    
    // Add hot spots/glow
    float hotSpots = fbm(uv * 12.0 + time * 2.0) * bubbles;
    finalColor += hotSpots * vec3(1.0, 0.4, 0.1) * 0.5;
    
    // Add subtle edge glow
    float glow = 1.0 - dist * 1.2;
    finalColor *= (0.8 + glow * 0.4);
    
    // Make it slightly more opaque for lava effect
    gl_FragColor = vec4(finalColor, 0.9);
}