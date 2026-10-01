export const transitionVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform float uProgress;

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Minimal, ultra-restrained displacement wave (architectural stability, zero liquid ripple)
    float wave = sin(pos.x * 1.5 + uTime * 0.6) * cos(pos.y * 1.2 + uTime * 0.5) * 0.005 * sin(uProgress * 3.14159);
    pos.z += wave;

    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const transitionFragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying vec3 vPosition;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;

    // Center coordinates for vignette
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);

    // Subtle interactive parallax offset
    vec2 mouseOffset = uMouse * 0.005;
    vec2 baseUv = uv + mouseOffset;

    // Minimal organic surface noise (reduced 10x for photographic stability)
    float noise1 = snoise(baseUv * 3.0 + vec2(uTime * 0.03, uTime * 0.015));
    float noise2 = snoise(baseUv * 6.0 - vec2(uTime * 0.04, uTime * 0.02));
    float combinedNoise = (noise1 * 0.7 + noise2 * 0.3);

    // Directional diagonal threshold
    float angleGrad = baseUv.x * 0.45 + (1.0 - baseUv.y) * 0.55;
    float threshold = smoothstep(0.0, 1.0, uProgress);
    
    // Minimal liquid displacement factor (restrained, photographic clarity)
    float dispFactor = sin(uProgress * 3.14159) * 0.012;
    vec2 dispUv1 = baseUv + vec2(combinedNoise * dispFactor, combinedNoise * dispFactor * 0.4);
    vec2 dispUv2 = baseUv - vec2(combinedNoise * dispFactor * 0.6, -combinedNoise * dispFactor * 0.3);

    // Minimal chromatic separation along edge (crisp, zero color bleed)
    float chroma = dispFactor * 0.006;
    vec4 tex1_r = texture2D(uTexture1, dispUv1 + vec2(chroma, 0.0));
    vec4 tex1_g = texture2D(uTexture1, dispUv1);
    vec4 tex1_b = texture2D(uTexture1, dispUv1 - vec2(chroma, 0.0));
    vec4 color1 = vec4(tex1_r.r, tex1_g.g, tex1_b.b, 1.0);

    vec4 tex2_r = texture2D(uTexture2, dispUv2 + vec2(chroma, 0.0));
    vec4 tex2_g = texture2D(uTexture2, dispUv2);
    vec4 tex2_b = texture2D(uTexture2, dispUv2 - vec2(chroma, 0.0));
    vec4 color2 = vec4(tex2_r.r, tex2_g.g, tex2_b.b, 1.0);

    // Clean, crisp boundary transition (minimal wave distortion)
    float edge = angleGrad + combinedNoise * 0.03;
    float mixWeight = smoothstep(threshold - 0.12, threshold + 0.12, edge);

    vec4 finalColor = mix(color2, color1, mixWeight);

    // Ultra-subtle OTIS precision edge accent
    float energyBand = 1.0 - abs(mixWeight - 0.5) * 2.0;
    energyBand = pow(max(energyBand, 0.0), 3.0) * sin(uProgress * 3.14159);
    
    vec3 otisOrange = vec3(0.97, 0.58, 0.11);
    vec3 otisGreen = vec3(0.12, 0.65, 0.32);
    vec3 energyColor = mix(otisOrange, otisGreen, baseUv.x);

    finalColor.rgb += energyColor * energyBand * 0.08;

    // Deep architectural shadow grading
    finalColor.rgb = mix(finalColor.rgb, finalColor.rgb * vec3(0.95, 0.97, 1.0), 0.08);

    // Subtle edge vignette
    float dist = length(st);
    finalColor.rgb *= smoothstep(1.35, 0.4, dist);

    gl_FragColor = finalColor;
  }
`;

export const particleVertexShader = `
  uniform float uTime;
  uniform float uProgress;
  attribute float aScale;
  attribute float aSpeed;
  attribute vec3 aRandom;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Atmospheric drift mimicking airborne micro-particulates under architectural daylight
    pos.x += sin(uTime * 0.4 * aSpeed + aRandom.x * 6.28) * 0.3;
    pos.y += cos(uTime * 0.35 * aSpeed + aRandom.y * 6.28) * 0.25;
    pos.z += sin(uTime * 0.5 * aSpeed + aRandom.z * 6.28) * 0.35;

    pos.y += uProgress * 1.5;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    gl_PointSize = (aScale * 12.0) * (1.0 / -mvPosition.z);

    // Soft warm ambient luminescence
    vColor = mix(vec3(0.97, 0.72, 0.25), vec3(0.35, 0.85, 0.55), aRandom.z);
    vAlpha = (0.2 + 0.35 * sin(uTime * 1.2 + aRandom.x * 3.14)) * smoothstep(9.0, 1.8, -mvPosition.z);
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float strength = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vColor, vAlpha * strength);
  }
`;
