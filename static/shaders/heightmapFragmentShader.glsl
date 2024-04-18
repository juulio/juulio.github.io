uniform sampler2D rockyTexture;
uniform sampler2D snowyTexture;
uniform sampler2D volcanicTexture;

varying vec2 vUV;

varying float vAmount;

void main() 
{
	vec4 volcanic = (smoothstep(0.3, 0.80, vAmount)) * texture2D( volcanicTexture, vUV * 10.0 );
	vec4 rocky = (smoothstep(0.2, 0.79, vAmount)) * texture2D( rockyTexture, vUV * 10.0 );
	vec4 snowy = (smoothstep(0.79, 0.8, vAmount)) * texture2D( snowyTexture, vUV * 10.0 );
	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) + snowy + volcanic; //, 1.0);
}  