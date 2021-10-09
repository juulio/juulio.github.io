uniform sampler2D sandyTexture;
uniform sampler2D rockyTexture;
uniform sampler2D snowyTexture;
uniform sampler2D volcanicTexture;

varying vec2 vUV;

varying float vAmount;

void main() 
{
	vec4 sandy = (smoothstep(0.2, 0.27, vAmount) - smoothstep(0.28, 0.35, vAmount)) * texture2D( sandyTexture, vUV * 10.0 );
	vec4 rocky = (smoothstep(0.27, 0.45, vAmount) - smoothstep(0.10, 0.40, vAmount)) * texture2D( rockyTexture, vUV * 20.0 );
	vec4 volcanic = (smoothstep(0.3, 0.50, vAmount) - smoothstep(0.45, 0.70, vAmount)) * texture2D( volcanicTexture, vUV * 20.0 );
	vec4 snowy = (smoothstep(0.59, 0.65, vAmount))                                   * texture2D( snowyTexture, vUV * 10.0 );
	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) + sandy + snowy + volcanic; //, 1.0);
}  