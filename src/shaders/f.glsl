#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
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

// Simplified Fractal Brownian Motion with fewer iterations
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    // Reduced from 4 to 2 iterations for better performance
    for(int i = 0; i < 2; i++) {
        value += amplitude * noise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}


// Utility: HSL to RGB for vibrant color cycling
vec3 hsl2rgb(vec3 hsl) {
    vec3 rgb = clamp(abs(mod(hsl.x*6.0+vec3(0,4,2),6.0)-3.0)-1.0,0.0,1.0);
    return hsl.z + hsl.y*(rgb-0.5)*(1.0-abs(2.0*hsl.z-1.0));
}

// Utility: 2D rotation
mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float time = uTime * 0.15;

    // Animate and distort UVs for liquid effect
    float swirl = sin(uv.x*3.0 + time*2.0) * cos(uv.y*3.0 - time*1.5);
    uv *= rot(time*0.2 + swirl*0.2);

    // Layered caustic ripples
    float ripple = 0.0;
    for (float i = 1.0; i < 4.0; i += 1.0) {
        float t = time * (0.7 + i*0.15);
        ripple += sin(uv.x*i*2.0 + t) * cos(uv.y*i*2.0 - t) / i;
    }

    // --- BG COLOR CYCLE: blend 8 colors slowly over time ---
    vec3 bgColors[8];
    bgColors[0] = vec3(0.3, 1.0, 0.6);    // turquoise green
    bgColors[1] = vec3(0.2, 0.8, 1.0);    // light blue
    bgColors[2] = vec3(0.7, 0.4, 1.0);    // purple
    bgColors[3] = vec3(0.5, 1.0, 0.9);    // turquoise
    bgColors[4] = vec3(0.5, 0.4, 0.25);   // dusty brown
    bgColors[5] = vec3(0.9, 0.7, 0.4);    // warm amber
    bgColors[6] = vec3(0.7, 0.45, 0.2);   // deep orange
    bgColors[7] = vec3(0.85, 0.8, 0.65);  // pale yellow

    float bgSpeed = 0.04; // very slow
    float bgPhase = mod(uTime * bgSpeed, 8.0);
    int idxA = int(floor(bgPhase)) % 8;
    int idxB = (idxA + 1) % 8;
    float blendT = fract(bgPhase);
    vec3 bgColor = mix(bgColors[idxA], bgColors[idxB], blendT);

    // Use ripple to blend with bgColor for pattern
    float t1 = smoothstep(-1.0, 1.0, sin(ripple + time));
    float t2 = smoothstep(-1.0, 1.0, cos(ripple - time*0.7));
    float t3 = smoothstep(-1.0, 1.0, sin(ripple*0.7 + time*0.5));
    float t4 = 1.0 - t1;

    // Blend the pattern with the animated bgColor
    vec3 color = mix(bgColor, bgColors[4], t1 * 0.5); // blend with dusty brown
    color = mix(color, bgColors[5], t2 * 0.4); // blend with warm amber
    color = mix(color, bgColors[6], t3 * 0.3); // blend with deep orange
    color = mix(color, bgColors[7], t4 * 0.2); // blend with pale yellow

    // Add floating orbs with additive blending, using the same palette
    float orb = 0.0;
    for (float i = 0.0; i < 5.0; i += 1.0) {
        float angle = time*0.4 + i*1.2566;
        vec2 center = 0.5 * vec2(sin(angle*1.3 + i), cos(angle*1.7 - i));
        float d = length(uv - center);
        orb += 0.15 / (d*12.0 + 0.05);
    }
    // Orbs use a bright blend of pale yellow and warm amber
    color += orb * mix(bgColors[7], bgColors[5], 0.6);

    // Subtle caustic highlights in deep orange
    color += 0.08 * pow(abs(ripple), 2.5) * bgColors[6];

    // --- FOG ---
    float fogNoise = fbm(uv * 1.5 + time * 0.07);
    float fog = smoothstep(0.0, 0.7, fogNoise + 0.25 - length(uv) * 0.7);
    vec3 fogColor = mix(bgColors[7], bgColors[5], 0.5);
    color = mix(color, fogColor, fog * 0.32);

    // --- CLOUDS ---
    float cloudLayer = fbm(uv * 1.2 + vec2(time * 0.03, -time * 0.02));
    float cloudMask = smoothstep(0.45, 0.7, cloudLayer);
    vec3 cloudColor = mix(bgColors[7], bgColors[5], 0.7);
    color = mix(color, cloudColor, cloudMask * 0.18);

    // --- FIREFLIES (Colorful, Avatar palette) ---
    vec3 fireflyColors[4];
    fireflyColors[0] = vec3(0.3, 1.0, 0.6);    // turquoise green
    fireflyColors[1] = vec3(0.2, 0.8, 1.0);    // light blue
    fireflyColors[2] = vec3(0.7, 0.4, 1.0);    // purple
    fireflyColors[3] = vec3(0.5, 1.0, 0.9);    // turquoise
    float fireflyGlow = 0.0;
    vec3 fireflyColorSum = vec3(0.0);
    for (float i = 0.0; i < 8.0; i += 1.0) {
        float t = time * (0.7 + i * 0.13);
        float phase = i * 2.3;
        vec2 pos = vec2(sin(t + phase), cos(t * 0.8 - phase)) * (0.5 + 0.2 * sin(t + phase * 0.7));
        float d = length(uv - pos);
        float flicker = 0.7 + 0.3 * sin(time * 2.0 + i * 1.7 + sin(time + i));
        float glow = 0.13 * flicker / (d * 30.0 + 0.04);
        int colorIdx = int(mod(i, 4.0));
        fireflyColorSum += glow * fireflyColors[colorIdx];
    }
    color += fireflyColorSum;

    // Vignette for focus
    float vignette = smoothstep(1.2, 0.7, length(uv));
    color *= vignette;

    // Final output
    gl_FragColor = vec4(color, 0.85);
}