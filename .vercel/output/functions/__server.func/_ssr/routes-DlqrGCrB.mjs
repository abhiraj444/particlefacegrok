import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ScanFace, c as ImagePlus, d as Contrast, f as ChevronUp, l as FlipHorizontal2, m as Aperture, n as Video, o as RotateCcw, p as Camera, r as Upload, s as LoaderCircle, t as Wind, u as Download } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlqrGCrB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-transform duration-[var(--motion-quick,150ms)] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] select-none", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:bg-accent",
			secondary: "bg-bg-elevated text-fg border border-border hover:border-border-strong hover:bg-bg-subtle",
			ghost: "bg-transparent text-fg hover:bg-bg-elevated",
			accent: "bg-accent text-accent-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-[var(--radius-sm)]",
			md: "h-11 px-4 text-sm rounded-[var(--radius-md)]",
			lg: "h-12 px-5 text-base rounded-[var(--radius-md)]",
			icon: "size-11 rounded-[var(--radius-md)]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-8 w-full touch-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full grow rounded-full bg-bg-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-accent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full border border-border-strong bg-fg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50" })]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border bg-bg-subtle transition-colors data-[state=checked]:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg transition-transform data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-accent-fg" })
	});
}
var WORKING_H = 1024;
var N_MAX = 15e4;
var N_DEFAULT = 5e4;
var POINT_SIZE_REF_N = 5e4;
var ORBIT_LIMIT = 25 * Math.PI / 180;
var TOUCH_RADIUS_FRAC = .12;
var DEFAULT_PARAMS = {
	particles: N_DEFAULT,
	size: 2,
	contrast: 1.2,
	detail: .8,
	feature: .5,
	floor: .08,
	softness: .4,
	depth: .5,
	color: false,
	invert: false,
	straighten: true,
	removeBg: true
};
var HASH_KEYS = [
	"particles",
	"size",
	"contrast",
	"detail",
	"feature",
	"floor",
	"softness",
	"depth",
	"color",
	"invert",
	"straighten",
	"removeBg"
];
function defaultParticleCount() {
	if (typeof navigator === "undefined") return N_DEFAULT;
	const mem = navigator.deviceMemory;
	if (mem && mem <= 4) return 28e3;
	if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return 4e4;
	return N_DEFAULT;
}
function workingSize() {
	if (typeof navigator === "undefined") return {
		w: 768,
		h: WORKING_H
	};
	const mem = navigator.deviceMemory;
	if (mem && mem <= 4) return {
		w: 576,
		h: 768
	};
	return {
		w: 768,
		h: WORKING_H
	};
}
function parseHash() {
	if (typeof window === "undefined") return {};
	const raw = window.location.hash.replace(/^#/, "").trim();
	if (!raw) return {};
	try {
		const parsed = JSON.parse(decodeURIComponent(raw));
		const out = {};
		for (const k of HASH_KEYS) if (k in parsed) out[k] = parsed[k];
		return out;
	} catch {
		return {};
	}
}
function writeHash(params) {
	if (typeof window === "undefined") return;
	const slim = {};
	for (const k of HASH_KEYS) slim[k] = params[k];
	const next = `#${encodeURIComponent(JSON.stringify(slim))}`;
	if (window.location.hash !== next) history.replaceState(null, "", `${window.location.pathname}${window.location.search}${next}`);
}
function loadParams() {
	const hash = parseHash();
	return {
		...DEFAULT_PARAMS,
		particles: defaultParticleCount(),
		...hash
	};
}
var SAMPLES = [
	{
		id: "amara",
		src: "/samples/amara.jpg",
		label: "Amara"
	},
	{
		id: "kofi",
		src: "/samples/kofi.jpg",
		label: "Kofi"
	},
	{
		id: "mei",
		src: "/samples/mei.jpg",
		label: "Mei"
	}
];
function createMat4() {
	return /* @__PURE__ */ new Float32Array(16);
}
function multiply(out, a, b) {
	const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return out;
}
function perspective(out, fovy, aspect, near, far) {
	const f = 1 / Math.tan(fovy / 2);
	const nf = 1 / (near - far);
	out.fill(0);
	out[0] = f / aspect;
	out[5] = f;
	out[10] = (far + near) * nf;
	out[11] = -1;
	out[14] = 2 * far * near * nf;
	return out;
}
function lookAt(out, eye, target, up) {
	let zx = eye[0] - target[0];
	let zy = eye[1] - target[1];
	let zz = eye[2] - target[2];
	let len = Math.hypot(zx, zy, zz) || 1;
	zx /= len;
	zy /= len;
	zz /= len;
	let xx = up[1] * zz - up[2] * zy;
	let xy = up[2] * zx - up[0] * zz;
	let xz = up[0] * zy - up[1] * zx;
	len = Math.hypot(xx, xy, xz) || 1;
	xx /= len;
	xy /= len;
	xz /= len;
	const yx = zy * xz - zz * xy;
	const yy = zz * xx - zx * xz;
	const yz = zx * xy - zy * xx;
	out[0] = xx;
	out[1] = yx;
	out[2] = zx;
	out[3] = 0;
	out[4] = xy;
	out[5] = yy;
	out[6] = zy;
	out[7] = 0;
	out[8] = xz;
	out[9] = yz;
	out[10] = zz;
	out[11] = 0;
	out[12] = -(xx * eye[0] + xy * eye[1] + xz * eye[2]);
	out[13] = -(yx * eye[0] + yy * eye[1] + yz * eye[2]);
	out[14] = -(zx * eye[0] + zy * eye[1] + zz * eye[2]);
	out[15] = 1;
	return out;
}
function invert(out, a) {
	const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	const b00 = a00 * a11 - a01 * a10;
	const b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10;
	const b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11;
	const b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30;
	const b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30;
	const b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31;
	const b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}
function unprojectToZ0(ndcX, ndcY, viewProj, invScratch) {
	const inv = invert(invScratch, viewProj);
	if (!inv) return [ndcX, ndcY];
	const p0 = transform4(inv, ndcX, ndcY, -1);
	const p1 = transform4(inv, ndcX, ndcY, 1);
	const dz = p1[2] - p0[2];
	const t = Math.abs(dz) < 1e-6 ? 0 : (0 - p0[2]) / dz;
	return [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
}
function transform4(m, x, y, z) {
	const w = m[3] * x + m[7] * y + m[11] * z + m[15] || 1;
	return [
		(m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
		(m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
		(m[2] * x + m[6] * y + m[10] * z + m[14]) / w
	];
}
function clamp(v, lo, hi) {
	return Math.max(lo, Math.min(hi, v));
}
function hash21(x, y) {
	const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
	return n - Math.floor(n);
}
var UPDATE_VS = `#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aVel;
layout(location = 2) in vec3 aHome;
layout(location = 3) in float aSeed;
uniform float uDt, uTime, uSpring, uDamp, uAssemble, uTurb;
uniform vec4 uTouch[5];
uniform vec2 uTouchVel[5];
uniform float uMode;
uniform float uEffectT;
uniform float uEffectAmp;
uniform vec2 uEffectOrigin;
out vec3 vPos;
out vec3 vVel;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash(i);
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

vec3 curlNoise(vec3 p) {
  float n1 = vnoise(p);
  float n2 = vnoise(p + vec3(17.1, 31.7, 9.4));
  float n3 = vnoise(p + vec3(5.2, 41.3, 23.8));
  return vec3(n2 - 0.5, n3 - 0.5, n1 - 0.5);
}

void main() {
  float k = smoothstep(aSeed * 0.6, aSeed * 0.6 + 0.4, uAssemble);
  vec3 f = (aHome - aPos) * uSpring * k;
  for (int i = 0; i < 5; i++) {
    vec2 d = aPos.xy - uTouch[i].xy;
    float rz = max(uTouch[i].z, 0.0001);
    float g = exp(-dot(d, d) / (rz * rz));
    vec2 nrm = d * inversesqrt(dot(d, d) + 1e-6);
    f.xy += nrm * g * uTouch[i].w;
    f.xy += uTouchVel[i] * g * 2.0;
  }
  f += curlNoise(aPos * 0.8 + vec3(0.0, uTime * 0.1, uTime * 0.07)) * uTurb;

  if (uMode > 0.5 && uMode < 1.5) {
    vec2 t = aPos.xy - uEffectOrigin;
    f.xy += vec2(-t.y, t.x) * uEffectAmp * (1.0 - k * 0.25);
  } else if (uMode > 1.5 && uMode < 2.5) {
    float wave = smoothstep(uEffectOrigin.x - 0.55, uEffectOrigin.x + 0.15, aPos.x);
    f.x += uEffectAmp * wave;
    f.z += uEffectAmp * 0.18 * wave;
  } else if (uMode > 2.5 && uMode < 3.5) {
    vec2 d = aPos.xy - uEffectOrigin;
    float dist = length(d);
    float ring = exp(-pow(dist - uEffectT * 1.85, 2.0) * 26.0);
    f.xy += (d / (dist + 1e-4)) * ring * uEffectAmp;
  } else if (uMode > 3.5) {
    vec3 d = aPos - vec3(uEffectOrigin, 0.0);
    float dist = length(d);
    f += normalize(d + vec3(0.0, 0.0, 0.12) + 1e-4) * uEffectAmp * (0.45 + aSeed) / (dist + 0.18);
  }

  vVel = (aVel + f * uDt) * exp(-uDamp * uDt);
  vPos = aPos + vVel * uDt;
}
`;
var UPDATE_FS = `#version 300 es
precision mediump float;
out vec4 fragColor;
void main() { fragColor = vec4(0.0); }
`;
var RENDER_VS = `#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 1) in float aTone;
layout(location = 2) in float aSeed;
layout(location = 3) in vec3 aColor;
uniform mat4 uViewProj;
uniform float uSize;
uniform float uDpr;
uniform vec2 uPointRange;
uniform float uTime;
uniform float uBreath;
uniform float uColorMode;
uniform float uInvert;
out float vBright;
out vec3 vColor;

void main() {
  vec3 p = aPos;
  p.z += sin(uTime * 1.35 + aSeed * 6.28318) * uBreath;
  gl_Position = uViewProj * vec4(p, 1.0);
  float depthScale = 0.72 + 0.28 * (1.0 - clamp(p.z * 0.85 + 0.35, 0.0, 1.0));
  float size = uSize * uDpr * depthScale;
  gl_PointSize = clamp(size, uPointRange.x, uPointRange.y);
  float tone = aTone;
  vBright = (0.58 + 0.42 * tone) * (0.82 + 0.18 * depthScale);
  vec3 col = mix(vec3(1.0), aColor, uColorMode);
  if (uInvert > 0.5) col = mix(vec3(0.12, 0.11, 0.10), col * 0.35, uColorMode);
  vColor = col;
}
`;
var RENDER_FS = `#version 300 es
precision mediump float;
in float vBright;
in vec3 vColor;
out vec4 fragColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 2.85) * vBright;
  fragColor = vec4(vColor * a, a);
}
`;
function compile(gl, type, src) {
	const sh = gl.createShader(type);
	if (!sh) throw new Error("Shader alloc failed");
	gl.shaderSource(sh, src);
	gl.compileShader(sh);
	if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
		const log = gl.getShaderInfoLog(sh) ?? "compile error";
		gl.deleteShader(sh);
		throw new Error(log);
	}
	return sh;
}
function link(gl, vsSrc, fsSrc, varyings) {
	const vs = compile(gl, gl.VERTEX_SHADER, vsSrc);
	const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
	const prog = gl.createProgram();
	if (!prog) throw new Error("Program alloc failed");
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	if (varyings) gl.transformFeedbackVaryings(prog, varyings, gl.SEPARATE_ATTRIBS);
	gl.linkProgram(prog);
	gl.deleteShader(vs);
	gl.deleteShader(fs);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
		const log = gl.getProgramInfoLog(prog) ?? "link error";
		gl.deleteProgram(prog);
		throw new Error(log);
	}
	return prog;
}
var ParticleEngine = class {
	canvas;
	gl;
	supported;
	onState;
	set = null;
	drawCount = 0;
	maxCount = 0;
	ping = 0;
	updateProg = null;
	renderProg = null;
	posBuf = null;
	velBuf = null;
	homeBuf = null;
	seedBuf = null;
	toneBuf = null;
	colorBuf = null;
	vaoUpdate = null;
	vaoRender = null;
	tf = null;
	uUpdate = {};
	uRender = {};
	pointRange = [1, 64];
	raf = 0;
	running = false;
	lastT = 0;
	acc = 0;
	time = 0;
	frameTimes = [];
	renderScale = 1;
	yaw = 0;
	pitch = .04;
	gyroYaw = 0;
	gyroPitch = 0;
	idleOrbit = true;
	userOrbit = false;
	size = 2;
	colorMode = 0;
	invert = 0;
	assemble = 0;
	targetAssemble = 1;
	spring = 14;
	damp = 3.2;
	turb = .22;
	breath = .012;
	mode = 0;
	effectT = 0;
	effectAmp = 0;
	effectOrigin = [0, 0];
	state = "building";
	effectTimer = 0;
	effectName = null;
	touches = Array.from({ length: 5 }, () => ({
		x: 0,
		y: 0,
		z: 1,
		w: 0,
		vx: 0,
		vy: 0,
		id: -1
	}));
	pointers = /* @__PURE__ */ new Map();
	lastTap = 0;
	viewProj = createMat4();
	invViewProj = createMat4();
	proj = createMat4();
	view = createMat4();
	tmpEye = [
		0,
		0,
		2.3
	];
	constructor(canvas) {
		this.canvas = canvas;
		const gl = canvas.getContext("webgl2", {
			alpha: false,
			antialias: false,
			preserveDrawingBuffer: true,
			powerPreference: "high-performance"
		});
		this.gl = gl;
		this.supported = Boolean(gl);
		if (!gl) return;
		const range = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);
		this.pointRange = [range[0] ?? 1, range[1] ?? 64];
		this.updateProg = link(gl, UPDATE_VS, UPDATE_FS, ["vPos", "vVel"]);
		this.renderProg = link(gl, RENDER_VS, RENDER_FS);
		this.uUpdate = this.uniforms(this.updateProg, [
			"uDt",
			"uTime",
			"uSpring",
			"uDamp",
			"uAssemble",
			"uTurb",
			"uMode",
			"uEffectT",
			"uEffectAmp",
			"uEffectOrigin"
		]);
		for (let i = 0; i < 5; i++) {
			this.uUpdate[`uTouch[${i}]`] = gl.getUniformLocation(this.updateProg, `uTouch[${i}]`);
			this.uUpdate[`uTouchVel[${i}]`] = gl.getUniformLocation(this.updateProg, `uTouchVel[${i}]`);
		}
		this.uRender = this.uniforms(this.renderProg, [
			"uViewProj",
			"uSize",
			"uDpr",
			"uPointRange",
			"uTime",
			"uBreath",
			"uColorMode",
			"uInvert"
		]);
		this.bindInput();
	}
	uniforms(prog, names) {
		const gl = this.gl;
		const out = {};
		for (const n of names) out[n] = gl.getUniformLocation(prog, n);
		return out;
	}
	start() {
		if (this.running) return;
		this.running = true;
		this.lastT = performance.now();
		const loop = (now) => {
			if (!this.running) return;
			const raw = Math.min(.1, (now - this.lastT) / 1e3);
			this.lastT = now;
			this.acc += raw;
			const step = 1 / 60;
			while (this.acc >= step) {
				this.simulate(step);
				this.acc -= step;
			}
			this.render();
			this.adapt(raw);
			this.raf = requestAnimationFrame(loop);
		};
		this.raf = requestAnimationFrame(loop);
	}
	stop() {
		this.running = false;
		cancelAnimationFrame(this.raf);
	}
	dispose() {
		this.stop();
		this.unbindInput();
		const gl = this.gl;
		if (!gl) return;
		const delBuf = (b) => b && gl.deleteBuffer(b);
		if (this.posBuf) {
			delBuf(this.posBuf[0]);
			delBuf(this.posBuf[1]);
		}
		if (this.velBuf) {
			delBuf(this.velBuf[0]);
			delBuf(this.velBuf[1]);
		}
		delBuf(this.homeBuf);
		delBuf(this.seedBuf);
		delBuf(this.toneBuf);
		delBuf(this.colorBuf);
		if (this.updateProg) gl.deleteProgram(this.updateProg);
		if (this.renderProg) gl.deleteProgram(this.renderProg);
	}
	load(set, opts) {
		this.set = set;
		this.maxCount = set.count;
		this.drawCount = set.count;
		const gl = this.gl;
		if (!gl) return;
		const scatter = opts?.scatter !== false;
		const pos = new Float32Array(set.home.length);
		const vel = new Float32Array(set.home.length);
		if (scatter) for (let i = 0; i < set.count; i++) {
			const s = set.seed[i] ?? 0;
			const a = s * Math.PI * 2;
			const r = .6 + (set.seed[(i + 3) % set.count] ?? .4) * 1.6;
			pos[i * 3] = Math.cos(a) * r;
			pos[i * 3 + 1] = (s - .5) * 2.6;
			pos[i * 3 + 2] = Math.sin(a * 1.7) * r * .5;
		}
		else pos.set(set.home);
		const buf = (data, usage = gl.STATIC_DRAW) => {
			const b = gl.createBuffer();
			if (!b) throw new Error("buffer");
			gl.bindBuffer(gl.ARRAY_BUFFER, b);
			gl.bufferData(gl.ARRAY_BUFFER, data, usage);
			return b;
		};
		if (this.posBuf) {
			gl.deleteBuffer(this.posBuf[0]);
			gl.deleteBuffer(this.posBuf[1]);
		}
		if (this.velBuf) {
			gl.deleteBuffer(this.velBuf[0]);
			gl.deleteBuffer(this.velBuf[1]);
		}
		this.posBuf = [buf(pos, gl.DYNAMIC_COPY), buf(pos, gl.DYNAMIC_COPY)];
		this.velBuf = [buf(vel, gl.DYNAMIC_COPY), buf(vel, gl.DYNAMIC_COPY)];
		if (this.homeBuf) gl.deleteBuffer(this.homeBuf);
		if (this.seedBuf) gl.deleteBuffer(this.seedBuf);
		if (this.toneBuf) gl.deleteBuffer(this.toneBuf);
		if (this.colorBuf) gl.deleteBuffer(this.colorBuf);
		this.homeBuf = buf(set.home);
		this.seedBuf = buf(set.seed);
		this.toneBuf = buf(set.tone);
		this.colorBuf = buf(set.color);
		const makeUpdateVao = (read) => {
			const vao = gl.createVertexArray();
			gl.bindVertexArray(vao);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuf[read]);
			gl.enableVertexAttribArray(0);
			gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.velBuf[read]);
			gl.enableVertexAttribArray(1);
			gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.homeBuf);
			gl.enableVertexAttribArray(2);
			gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.seedBuf);
			gl.enableVertexAttribArray(3);
			gl.vertexAttribPointer(3, 1, gl.FLOAT, false, 0, 0);
			gl.bindVertexArray(null);
			return vao;
		};
		const makeRenderVao = (read) => {
			const vao = gl.createVertexArray();
			gl.bindVertexArray(vao);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuf[read]);
			gl.enableVertexAttribArray(0);
			gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.toneBuf);
			gl.enableVertexAttribArray(1);
			gl.vertexAttribPointer(1, 1, gl.UNSIGNED_BYTE, true, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.seedBuf);
			gl.enableVertexAttribArray(2);
			gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuf);
			gl.enableVertexAttribArray(3);
			gl.vertexAttribPointer(3, 3, gl.UNSIGNED_BYTE, true, 0, 0);
			gl.bindVertexArray(null);
			return vao;
		};
		if (this.vaoUpdate) {
			gl.deleteVertexArray(this.vaoUpdate[0]);
			gl.deleteVertexArray(this.vaoUpdate[1]);
		}
		if (this.vaoRender) {
			gl.deleteVertexArray(this.vaoRender[0]);
			gl.deleteVertexArray(this.vaoRender[1]);
		}
		this.vaoUpdate = [makeUpdateVao(0), makeUpdateVao(1)];
		this.vaoRender = [makeRenderVao(0), makeRenderVao(1)];
		const makeTf = (write) => {
			const tf = gl.createTransformFeedback();
			gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
			gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, this.posBuf[write]);
			gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, this.velBuf[write]);
			gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
			return tf;
		};
		if (this.tf) {
			gl.deleteTransformFeedback(this.tf[0]);
			gl.deleteTransformFeedback(this.tf[1]);
		}
		this.tf = [makeTf(1), makeTf(0)];
		this.ping = 0;
	}
	setDrawCount(n) {
		this.drawCount = clamp(n | 0, 1e3, this.maxCount || n);
	}
	setPointSize(px) {
		this.size = px;
	}
	setColorMode(on) {
		this.colorMode = on ? 1 : 0;
	}
	setInvert(on) {
		this.invert = on ? 1 : 0;
	}
	updateHomeZ(set) {
		const gl = this.gl;
		if (!gl || !this.homeBuf) return;
		gl.bindBuffer(gl.ARRAY_BUFFER, this.homeBuf);
		gl.bufferSubData(gl.ARRAY_BUFFER, 0, set.home);
	}
	play(name) {
		this.effectName = name;
		this.effectTimer = 0;
		if (name === "build") {
			this.assemble = 0;
			this.targetAssemble = 1;
			this.spring = 16;
			this.damp = 3.4;
			this.turb = .55;
			this.mode = 0;
			this.setState("building");
		} else if (name === "assemble") {
			this.targetAssemble = 1;
			this.spring = 18;
			this.damp = 3.6;
			this.turb = .2;
			this.mode = 0;
			this.setState("assembling");
		} else if (name === "disassemble") {
			this.targetAssemble = 0;
			this.mode = 4;
			this.effectAmp = 6.5;
			this.effectOrigin = [0, 0];
			this.turb = 1.1;
			this.spring = 2;
			this.damp = 1.4;
			this.setState("disassembling");
		} else if (name === "wind") {
			this.mode = 2;
			this.effectAmp = 4.2;
			this.effectOrigin = [-1.4, 0];
			this.effectT = 0;
			this.setState("effect");
		} else if (name === "vortex") {
			this.mode = 1;
			this.effectAmp = 3.4;
			this.effectOrigin = [0, .05];
			this.setState("effect");
		} else if (name === "ripple") {
			this.mode = 3;
			this.effectAmp = 5.5;
			this.effectT = 0;
			this.setState("effect");
		} else if (name === "idle") {
			this.targetAssemble = 1;
			this.mode = 0;
			this.setState("assembled");
		}
	}
	snapshot() {
		return new Promise((resolve, reject) => {
			this.canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("snapshot failed")), "image/png");
		});
	}
	getCanvasStream(fps = 30) {
		return this.canvas.captureStream(fps);
	}
	lockIdleOrbit(lock) {
		this.idleOrbit = !lock;
	}
	setState(s) {
		if (this.state === s) return;
		this.state = s;
		this.onState?.(s);
	}
	getState() {
		return this.state;
	}
	simulate(dt) {
		this.time += dt;
		this.effectTimer += dt;
		this.assemble += (this.targetAssemble - this.assemble) * Math.min(1, dt * 1.35);
		if (this.state === "building" && this.assemble > .92) {
			this.turb = .18;
			this.setState("assembled");
		}
		if (this.state === "assembling" && this.assemble > .92) {
			this.turb = .18;
			this.mode = 0;
			this.setState("assembled");
		}
		if (this.state === "disassembling") {
			this.effectAmp *= Math.exp(-dt * 1.8);
			if (this.assemble < .08 && this.effectTimer > 1.2) this.setState("scattered");
		}
		if (this.state === "effect") {
			if (this.mode === 2) this.effectOrigin[0] = -1.4 + this.effectTimer * 1.15;
			if (this.mode === 3) this.effectT = this.effectTimer;
			if (this.effectTimer > 2.4) {
				this.mode = 0;
				this.effectAmp = 0;
				this.targetAssemble = 1;
				this.setState("assembled");
			}
		}
		if (this.state === "assembled") {
			this.turb = .16;
			this.breath = .012;
		}
		const gl = this.gl;
		if (!gl || !this.updateProg || !this.vaoUpdate || !this.tf || !this.set) return;
		const read = this.ping;
		gl.useProgram(this.updateProg);
		gl.uniform1f(this.uUpdate.uDt, dt);
		gl.uniform1f(this.uUpdate.uTime, this.time);
		gl.uniform1f(this.uUpdate.uSpring, this.spring);
		gl.uniform1f(this.uUpdate.uDamp, this.damp);
		gl.uniform1f(this.uUpdate.uAssemble, this.assemble);
		gl.uniform1f(this.uUpdate.uTurb, this.turb);
		gl.uniform1f(this.uUpdate.uMode, this.mode);
		gl.uniform1f(this.uUpdate.uEffectT, this.effectT);
		gl.uniform1f(this.uUpdate.uEffectAmp, this.effectAmp);
		gl.uniform2f(this.uUpdate.uEffectOrigin, this.effectOrigin[0], this.effectOrigin[1]);
		for (let i = 0; i < 5; i++) {
			const t = this.touches[i];
			gl.uniform4f(this.uUpdate[`uTouch[${i}]`] ?? null, t.x, t.y, t.z, t.w);
			gl.uniform2f(this.uUpdate[`uTouchVel[${i}]`] ?? null, t.vx, t.vy);
			t.vx *= Math.exp(-dt * 8);
			t.vy *= Math.exp(-dt * 8);
			if (t.id < 0) t.w *= Math.exp(-dt * 6);
		}
		gl.bindVertexArray(this.vaoUpdate[read]);
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.tf[read]);
		gl.enable(gl.RASTERIZER_DISCARD);
		gl.beginTransformFeedback(gl.POINTS);
		gl.drawArrays(gl.POINTS, 0, this.maxCount);
		gl.endTransformFeedback();
		gl.disable(gl.RASTERIZER_DISCARD);
		gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
		gl.bindVertexArray(null);
		this.ping = 1 - read;
	}
	resize() {
		const canvas = this.canvas;
		const gl = this.gl;
		if (!gl) return;
		const dpr = Math.min(2, window.devicePixelRatio || 1) * this.renderScale;
		const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
		const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}
		gl.viewport(0, 0, w, h);
	}
	camera() {
		const gl = this.gl;
		const aspect = gl.drawingBufferWidth / Math.max(1, gl.drawingBufferHeight);
		perspective(this.proj, 32 * Math.PI / 180, aspect, .1, 20);
		const idleY = this.idleOrbit && !this.userOrbit ? Math.sin(this.time * .18) * .1 : 0;
		const idleP = this.idleOrbit && !this.userOrbit ? Math.cos(this.time * .13) * .03 : 0;
		const yaw = clamp(this.yaw + this.gyroYaw + idleY, -ORBIT_LIMIT, ORBIT_LIMIT);
		const pitch = clamp(this.pitch + this.gyroPitch + idleP, -ORBIT_LIMIT, ORBIT_LIMIT);
		const dist = 2.45;
		this.tmpEye[0] = Math.sin(yaw) * Math.cos(pitch) * dist;
		this.tmpEye[1] = Math.sin(pitch) * dist;
		this.tmpEye[2] = Math.cos(yaw) * Math.cos(pitch) * dist;
		lookAt(this.view, this.tmpEye, [
			0,
			.02,
			0
		], [
			0,
			1,
			0
		]);
		multiply(this.viewProj, this.proj, this.view);
	}
	render() {
		const gl = this.gl;
		if (!gl || !this.renderProg || !this.vaoRender) return;
		this.resize();
		this.camera();
		if (this.invert) gl.clearColor(.91, .887, .84, 1);
		else gl.clearColor(.027, .027, .031, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.disable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		if (this.invert) gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		else gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		gl.useProgram(this.renderProg);
		gl.uniformMatrix4fv(this.uRender.uViewProj, false, this.viewProj);
		const n = Math.max(1e3, this.drawCount);
		const size = this.size * Math.sqrt(POINT_SIZE_REF_N / n);
		const dpr = Math.min(2, window.devicePixelRatio || 1) * this.renderScale;
		gl.uniform1f(this.uRender.uSize, size);
		gl.uniform1f(this.uRender.uDpr, dpr);
		gl.uniform2f(this.uRender.uPointRange, this.pointRange[0], this.pointRange[1]);
		gl.uniform1f(this.uRender.uTime, this.time);
		gl.uniform1f(this.uRender.uBreath, this.breath);
		gl.uniform1f(this.uRender.uColorMode, this.colorMode);
		gl.uniform1f(this.uRender.uInvert, this.invert);
		gl.bindVertexArray(this.vaoRender[this.ping]);
		gl.drawArrays(gl.POINTS, 0, n);
		gl.bindVertexArray(null);
	}
	adapt(dt) {
		this.frameTimes.push(dt);
		if (this.frameTimes.length > 45) this.frameTimes.shift();
		if (this.frameTimes.length < 30) return;
		const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
		if (avg > .022 && this.renderScale > .62) this.renderScale = Math.max(.6, this.renderScale * .9);
		else if (avg > .022 && this.drawCount > 12e3) this.drawCount = Math.max(12e3, this.drawCount * .88 | 0);
		else if (avg < .014 && this.renderScale < 1) this.renderScale = Math.min(1, this.renderScale * 1.04);
	}
	worldFromClient(clientX, clientY) {
		const r = this.canvas.getBoundingClientRect();
		return unprojectToZ0((clientX - r.left) / r.width * 2 - 1, 1 - (clientY - r.top) / r.height * 2, this.viewProj, this.invViewProj);
	}
	bindInput() {
		const c = this.canvas;
		c.style.touchAction = "none";
		c.addEventListener("pointerdown", this.onDown);
		c.addEventListener("pointermove", this.onMove);
		window.addEventListener("pointerup", this.onUp);
		window.addEventListener("pointercancel", this.onUp);
		c.addEventListener("contextmenu", this.onMenu);
		window.addEventListener("deviceorientation", this.onOrient);
	}
	unbindInput() {
		const c = this.canvas;
		c.removeEventListener("pointerdown", this.onDown);
		c.removeEventListener("pointermove", this.onMove);
		window.removeEventListener("pointerup", this.onUp);
		window.removeEventListener("pointercancel", this.onUp);
		c.removeEventListener("contextmenu", this.onMenu);
		window.removeEventListener("deviceorientation", this.onOrient);
	}
	onMenu = (e) => e.preventDefault();
	onDown = (e) => {
		if (e.button === 2 || e.altKey) {
			this.userOrbit = true;
			this.idleOrbit = false;
			this.pointers.set(-2, {
				x: e.clientX,
				y: e.clientY,
				t: performance.now()
			});
			return;
		}
		this.canvas.setPointerCapture(e.pointerId);
		const now = performance.now();
		if (now - this.lastTap < 280 && this.pointers.size === 0) {
			const [x, y] = this.worldFromClient(e.clientX, e.clientY);
			this.effectOrigin = [x, y];
			this.play("ripple");
			this.lastTap = 0;
			return;
		}
		this.lastTap = now;
		this.pointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY,
			t: now
		});
		this.syncTouches();
	};
	onMove = (e) => {
		const orbit = this.pointers.get(-2);
		if (orbit && (e.buttons & 2 || e.altKey)) {
			this.yaw = clamp(this.yaw + (e.clientX - orbit.x) * .004, -ORBIT_LIMIT, ORBIT_LIMIT);
			this.pitch = clamp(this.pitch + (e.clientY - orbit.y) * .003, -ORBIT_LIMIT, ORBIT_LIMIT);
			orbit.x = e.clientX;
			orbit.y = e.clientY;
			return;
		}
		if (this.pointers.size >= 2) {
			const pts = [...this.pointers.values()];
			if (pts.length >= 2) {
				const a = pts[0];
				this.yaw = clamp(this.yaw + e.movementX * .003, -ORBIT_LIMIT, ORBIT_LIMIT);
				this.pitch = clamp(this.pitch + e.movementY * .0025, -ORBIT_LIMIT, ORBIT_LIMIT);
				this.userOrbit = true;
				this.idleOrbit = false;
				a.x = e.clientX;
				a.y = e.clientY;
			}
			return;
		}
		const p = this.pointers.get(e.pointerId);
		if (!p) return;
		p.x = e.clientX;
		p.y = e.clientY;
		this.syncTouches();
	};
	onUp = (e) => {
		this.pointers.delete(e.pointerId);
		this.pointers.delete(-2);
		this.syncTouches();
	};
	syncTouches() {
		const radius = TOUCH_RADIUS_FRAC * 2;
		const ids = [...this.pointers.entries()].filter(([id]) => id >= 0);
		for (let i = 0; i < 5; i++) {
			const slot = this.touches[i];
			const pair = ids[i];
			if (!pair) {
				slot.id = -1;
				continue;
			}
			const [id, p] = pair;
			const [x, y] = this.worldFromClient(p.x, p.y);
			if (slot.id === id) {
				slot.vx = (x - slot.x) * 28;
				slot.vy = (y - slot.y) * 28;
			}
			slot.id = id;
			slot.x = x;
			slot.y = y;
			slot.z = radius;
			slot.w = 2.8;
		}
	}
	onOrient = (e) => {
		if (e.gamma == null || e.beta == null) return;
		this.gyroYaw = clamp(e.gamma / 45 * .18, -.22, .22);
		this.gyroPitch = clamp((e.beta - 45) / 45 * .14, -.2, .2);
	};
	async requestGyro() {
		const DOE = DeviceOrientationEvent;
		try {
			if (typeof DOE.requestPermission === "function") return await DOE.requestPermission() === "granted";
			return true;
		} catch {
			return false;
		}
	}
};
async function loadImage(file) {
	let bitmap;
	try {
		bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
	} catch {
		bitmap = await createImageBitmap(file);
	}
	const scale = Math.min(1, 1024 / Math.max(bitmap.width, bitmap.height));
	const w = Math.max(1, Math.round(bitmap.width * scale));
	const h = Math.max(1, Math.round(bitmap.height * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) throw new Error("Could not create a 2D canvas.");
	ctx.drawImage(bitmap, 0, 0, w, h);
	bitmap.close();
	return canvas;
}
async function loadUrl(url) {
	const res = await fetch(url, { cache: "force-cache" });
	if (!res.ok) throw new Error(`Could not load image (${res.status}).`);
	return loadImage(await res.blob());
}
var WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm";
var FACE_MODEL = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
var SEG_MODEL = "https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/1/selfie_multiclass_256x256.tflite";
var mpPromise = null;
var landmarker = null;
var segmenter = null;
var fileset = null;
var status = {
	landmarker: false,
	segmenter: false,
	loading: false,
	error: null
};
function getVisionStatus() {
	return { ...status };
}
function getFaceLandmarkerClass() {
	return landmarker ? landmarker.constructor : null;
}
async function loadMp() {
	if (mpPromise) return mpPromise;
	mpPromise = import("../_libs/mediapipe__tasks-vision.mjs").then((n) => n.t).then((m) => m).catch(() => null);
	return mpPromise;
}
async function preloadVision(onProgress) {
	if (status.landmarker && status.segmenter) return getVisionStatus();
	status.loading = true;
	onProgress?.(.05, "Loading vision runtime");
	const mp = await loadMp();
	if (!mp) {
		status.loading = false;
		status.error = "Vision runtime unavailable";
		return getVisionStatus();
	}
	try {
		if (!fileset) fileset = await mp.FilesetResolver.forVisionTasks(WASM_URL);
		onProgress?.(.35, "Face landmarker");
		if (!landmarker) try {
			landmarker = await mp.FaceLandmarker.createFromOptions(fileset, {
				baseOptions: {
					modelAssetPath: FACE_MODEL,
					delegate: "GPU"
				},
				runningMode: "IMAGE",
				numFaces: 1,
				outputFaceBlendshapes: false,
				outputFacialTransformationMatrixes: false
			});
			status.landmarker = true;
		} catch {
			try {
				landmarker = await mp.FaceLandmarker.createFromOptions(fileset, {
					baseOptions: {
						modelAssetPath: FACE_MODEL,
						delegate: "CPU"
					},
					runningMode: "IMAGE",
					numFaces: 1
				});
				status.landmarker = true;
			} catch {
				status.landmarker = false;
			}
		}
		onProgress?.(.7, "Portrait segmenter");
		if (!segmenter) try {
			segmenter = await mp.ImageSegmenter.createFromOptions(fileset, {
				baseOptions: {
					modelAssetPath: SEG_MODEL,
					delegate: "GPU"
				},
				runningMode: "IMAGE",
				outputCategoryMask: true,
				outputConfidenceMasks: false
			});
			status.segmenter = true;
		} catch {
			try {
				segmenter = await mp.ImageSegmenter.createFromOptions(fileset, {
					baseOptions: {
						modelAssetPath: SEG_MODEL,
						delegate: "CPU"
					},
					runningMode: "IMAGE",
					outputCategoryMask: true,
					outputConfidenceMasks: false
				});
				status.segmenter = true;
			} catch {
				status.segmenter = false;
			}
		}
		onProgress?.(1, "Vision ready");
	} catch (err) {
		status.error = err instanceof Error ? err.message : "Vision failed to load";
	}
	status.loading = false;
	return getVisionStatus();
}
async function analyze(image) {
	await preloadVision();
	const sourceW = image.width;
	const sourceH = image.height;
	let landmarks = null;
	let classes = null;
	let classW = 0;
	let classH = 0;
	if (landmarker) try {
		const faces = landmarker.detect(image).faceLandmarks;
		if (faces && faces.length > 0) {
			let best = faces[0];
			if (faces.length > 1) {
				let bestArea = -1;
				for (const face of faces) {
					let minX = 1, minY = 1, maxX = 0, maxY = 0;
					for (const p of face) {
						minX = Math.min(minX, p.x);
						minY = Math.min(minY, p.y);
						maxX = Math.max(maxX, p.x);
						maxY = Math.max(maxY, p.y);
					}
					const area = (maxX - minX) * (maxY - minY);
					if (area > bestArea) {
						bestArea = area;
						best = face;
					}
				}
			}
			landmarks = best.map((pt) => ({
				x: pt.x,
				y: pt.y,
				z: pt.z
			}));
		}
	} catch {
		landmarks = null;
	}
	if (segmenter) try {
		const result = segmenter.segment(image);
		const mask = result.categoryMask;
		if (mask) {
			classW = mask.width;
			classH = mask.height;
			const data = mask.getAsUint8Array();
			classes = new Uint8Array(data);
		}
		result.close();
	} catch {
		classes = null;
	}
	return {
		hasFace: Boolean(landmarks && landmarks.length >= 100),
		landmarks,
		classes,
		classW,
		classH,
		sourceW,
		sourceH,
		degraded: {
			landmarker: !landmarks,
			segmenter: !classes
		}
	};
}
var IDX = {
	rightEyeOuter: 33,
	leftEyeOuter: 263,
	noseTip: 1,
	chin: 152,
	forehead: 10,
	mouthRight: 61,
	mouthLeft: 291
};
var loop = (ids) => {
	const out = [];
	for (let i = 0; i < ids.length; i++) out.push({
		start: ids[i],
		end: ids[(i + 1) % ids.length]
	});
	return out;
};
/** Compact fallback contours if MediaPipe connection tables are unavailable. */
var FALLBACK_CONNECTIONS = {
	lips: loop([
		61,
		146,
		91,
		181,
		84,
		17,
		314,
		405,
		321,
		375,
		291,
		409,
		270,
		269,
		267,
		0,
		37,
		39,
		40,
		185
	]),
	leftEye: loop([
		263,
		249,
		390,
		373,
		374,
		380,
		381,
		382,
		362,
		398,
		384,
		385,
		386,
		387,
		388,
		466
	]),
	rightEye: loop([
		33,
		7,
		163,
		144,
		145,
		153,
		154,
		155,
		133,
		173,
		157,
		158,
		159,
		160,
		161,
		246
	]),
	leftBrow: [
		{
			start: 276,
			end: 283
		},
		{
			start: 283,
			end: 282
		},
		{
			start: 282,
			end: 295
		},
		{
			start: 295,
			end: 285
		},
		{
			start: 300,
			end: 293
		},
		{
			start: 293,
			end: 334
		},
		{
			start: 334,
			end: 296
		},
		{
			start: 296,
			end: 336
		}
	],
	rightBrow: [
		{
			start: 46,
			end: 53
		},
		{
			start: 53,
			end: 52
		},
		{
			start: 52,
			end: 65
		},
		{
			start: 65,
			end: 55
		},
		{
			start: 70,
			end: 63
		},
		{
			start: 63,
			end: 105
		},
		{
			start: 105,
			end: 66
		},
		{
			start: 66,
			end: 107
		}
	],
	leftIris: loop([
		473,
		474,
		475,
		476
	]),
	rightIris: loop([
		468,
		469,
		470,
		471
	]),
	oval: loop([
		10,
		338,
		297,
		332,
		284,
		251,
		389,
		356,
		454,
		323,
		361,
		288,
		397,
		365,
		379,
		378,
		400,
		377,
		152,
		148,
		176,
		149,
		150,
		136,
		172,
		58,
		132,
		93,
		234,
		127,
		162,
		21,
		54,
		103,
		67,
		109
	])
};
function featureGroups(mp) {
	if (mp) return [
		{
			name: "lips",
			connections: mp.FACE_LANDMARKS_LIPS
		},
		{
			name: "leftEye",
			connections: mp.FACE_LANDMARKS_LEFT_EYE
		},
		{
			name: "rightEye",
			connections: mp.FACE_LANDMARKS_RIGHT_EYE
		},
		{
			name: "leftBrow",
			connections: mp.FACE_LANDMARKS_LEFT_EYEBROW
		},
		{
			name: "rightBrow",
			connections: mp.FACE_LANDMARKS_RIGHT_EYEBROW
		},
		{
			name: "leftIris",
			connections: mp.FACE_LANDMARKS_LEFT_IRIS
		},
		{
			name: "rightIris",
			connections: mp.FACE_LANDMARKS_RIGHT_IRIS
		}
	];
	return Object.entries(FALLBACK_CONNECTIONS).filter(([k]) => k !== "oval").map(([name, connections]) => ({
		name,
		connections
	}));
}
var CLASS_HAIR = 1;
var CLASS_BODY = 2;
var CLASS_FACE = 3;
function sampleClass(classes, classW, classH, u, v) {
	if (!classes || classW <= 0 || classH <= 0) return 0;
	const x = clamp(Math.floor(u * classW), 0, classW - 1);
	return classes[clamp(Math.floor(v * classH), 0, classH - 1) * classW + x] ?? 0;
}
function headBounds(vision, srcW, srcH) {
	let minX = srcW, minY = srcH, maxX = 0, maxY = 0;
	let found = false;
	if (vision.classes && vision.classW > 0) {
		const { classW, classH, classes } = vision;
		if (!classes) return null;
		for (let y = 0; y < classH; y++) for (let x = 0; x < classW; x++) {
			const c = classes[y * classW + x] ?? 0;
			if (c === CLASS_HAIR || c === CLASS_FACE || c === CLASS_BODY) {
				const px = x / classW * srcW;
				const py = y / classH * srcH;
				minX = Math.min(minX, px);
				minY = Math.min(minY, py);
				maxX = Math.max(maxX, px);
				maxY = Math.max(maxY, py);
				found = true;
			}
		}
	}
	if (!found && vision.landmarks && vision.landmarks.length) {
		for (const p of vision.landmarks) {
			minX = Math.min(minX, p.x * srcW);
			minY = Math.min(minY, p.y * srcH);
			maxX = Math.max(maxX, p.x * srcW);
			maxY = Math.max(maxY, p.y * srcH);
		}
		found = true;
	}
	if (!found) return null;
	return {
		minX,
		minY,
		maxX,
		maxY
	};
}
function headCrop(source, vision, params) {
	const { w: outW, h: outH } = workingSize();
	const srcW = source.width;
	const srcH = source.height;
	const canvas = document.createElement("canvas");
	canvas.width = outW;
	canvas.height = outH;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) throw new Error("Could not create crop canvas.");
	let angle = 0;
	let iod = Math.min(srcW, srcH) * .18;
	srcW * .5;
	srcH * .42;
	const lm = vision.landmarks;
	if (lm && lm.length > IDX.leftEyeOuter) {
		const r = lm[IDX.rightEyeOuter];
		const l = lm[IDX.leftEyeOuter];
		const dx = (l.x - r.x) * srcW;
		const dy = (l.y - r.y) * srcH;
		iod = Math.hypot(dx, dy) || iod;
		if (params.straighten) angle = Math.atan2(dy, dx);
		const nose = lm[IDX.noseTip];
		nose ? nose.x * srcW : (r.x + l.x) / 2 * srcW;
		nose ? nose.y * srcH : (r.y + l.y) / 2 * srcH;
	}
	const bounds = headBounds(vision, srcW, srcH);
	let bw;
	let bh;
	let bx;
	let by;
	if (bounds) {
		bw = (bounds.maxX - bounds.minX) * 1.24;
		bh = (bounds.maxY - bounds.minY) * 1.24;
		bx = (bounds.minX + bounds.maxX) / 2;
		by = (bounds.minY + bounds.maxY) / 2;
	} else {
		const side = Math.min(srcW, srcH) * .78;
		bw = side;
		bh = side * (4 / 3);
		bx = srcW / 2;
		by = srcH / 2;
	}
	const targetAspect = outW / outH;
	let cropW = bw;
	let cropH = bh;
	if (cropW / cropH > targetAspect) cropH = cropW / targetAspect;
	else cropW = cropH * targetAspect;
	by = by + cropH * (.45 - .5);
	ctx.save();
	ctx.fillStyle = "#050506";
	ctx.fillRect(0, 0, outW, outH);
	ctx.translate(outW / 2, outH / 2);
	ctx.rotate(-angle);
	ctx.scale(outW / cropW, outH / cropH);
	ctx.translate(-bx, -by);
	ctx.drawImage(source, 0, 0);
	ctx.restore();
	const imageData = ctx.getImageData(0, 0, outW, outH);
	const mask = new Float32Array(outW * outH);
	const hairSkin = new Float32Array(outW * outH);
	const faceSkin = new Float32Array(outW * outH);
	const cos = Math.cos(-angle);
	const sin = Math.sin(-angle);
	const sx = outW / cropW;
	const sy = outH / cropH;
	const mapSrcToCrop = (srcX, srcY) => {
		const dx = srcX - bx;
		const dy = srcY - by;
		const rx = dx * cos - dy * sin;
		const ry = dx * sin + dy * cos;
		return {
			x: rx * sx + outW / 2,
			y: ry * sy + outH / 2
		};
	};
	let chinCropY = outH * .72;
	if (lm && lm[IDX.chin]) chinCropY = mapSrcToCrop(lm[IDX.chin].x * srcW, lm[IDX.chin].y * srcH).y;
	if (vision.classes && vision.classW > 0) for (let y = 0; y < outH; y++) for (let x = 0; x < outW; x++) {
		const lx = (x - outW / 2) / sx;
		const ly = (y - outH / 2) / sy;
		const srcX = lx * Math.cos(angle) - ly * Math.sin(angle) + bx;
		const srcY = lx * Math.sin(angle) + ly * Math.cos(angle) + by;
		const u = srcX / srcW;
		const v = srcY / srcH;
		const c = u < 0 || v < 0 || u > 1 || v > 1 ? 0 : sampleClass(vision.classes, vision.classW, vision.classH, u, v);
		const i = y * outW + x;
		const isHair = c === CLASS_HAIR;
		const isFace = c === CLASS_FACE;
		const neck = c === CLASS_BODY && y > chinCropY - 8 && y < chinCropY + outH * .16;
		hairSkin[i] = isHair || isFace || neck ? 1 : 0;
		faceSkin[i] = isFace ? 1 : 0;
		mask[i] = isHair || isFace ? 1 : neck ? clamp(1 - (y - chinCropY) / (outH * .14), 0, 1) : 0;
	}
	else {
		const cx = outW * .5;
		const cy = outH * .44;
		const rx = outW * .36;
		const ry = outH * .42;
		for (let y = 0; y < outH; y++) for (let x = 0; x < outW; x++) {
			const nx = (x - cx) / rx;
			const ny = (y - cy) / ry;
			const d = nx * nx + ny * ny;
			const m = d < 1 ? clamp(1 - (d - .72) / .28, 0, 1) : 0;
			const i = y * outW + x;
			mask[i] = m;
			hairSkin[i] = m > .2 ? 1 : 0;
			faceSkin[i] = ny > -.15 && d < .72 ? m : 0;
		}
	}
	let landmarks = null;
	if (lm) {
		landmarks = lm.map((p) => {
			const mapped = mapSrcToCrop(p.x * srcW, p.y * srcH);
			return {
				x: mapped.x,
				y: mapped.y,
				z: p.z
			};
		});
		if (landmarks[IDX.leftEyeOuter] && landmarks[IDX.rightEyeOuter]) {
			const a = landmarks[IDX.rightEyeOuter];
			const b = landmarks[IDX.leftEyeOuter];
			iod = Math.hypot(b.x - a.x, b.y - a.y) || iod * (outW / cropW);
		}
	}
	return {
		canvas,
		imageData,
		width: outW,
		height: outH,
		landmarks,
		mask,
		hairSkin,
		faceSkin,
		iod,
		hasFace: Boolean(landmarks)
	};
}
/** Mesh + ellipsoid dome. near = 1. */
function meshDomeDepth(crop) {
	const { width: w, height: h, landmarks, mask, iod } = crop;
	const depth = new Float32Array(w * h);
	const mesh = new Float32Array(w * h);
	const weight = new Float32Array(w * h);
	const cx = w * .5;
	let cy = h * .45;
	let rx = w * .38;
	let ry = h * .42;
	if (landmarks && landmarks[IDX.forehead] && landmarks[IDX.chin]) {
		const top = landmarks[IDX.forehead];
		const chin = landmarks[IDX.chin];
		cy = (top.y + chin.y) * .5;
		ry = Math.abs(chin.y - top.y) * .72;
		rx = Math.max(iod * 1.35, w * .28);
	}
	const radius = Math.max(6, iod * .22);
	const r2 = radius * radius;
	if (landmarks && landmarks.length > 10) {
		let zMin = Infinity;
		let zMax = -Infinity;
		for (const p of landmarks) {
			zMin = Math.min(zMin, p.z);
			zMax = Math.max(zMax, p.z);
		}
		const zRange = Math.max(1e-4, zMax - zMin);
		for (const p of landmarks) {
			const z01 = clamp(1 - (p.z - zMin) / zRange, 0, 1);
			const x0 = p.x | 0;
			const y0 = p.y | 0;
			const rad = radius | 0;
			for (let y = y0 - rad; y <= y0 + rad; y++) {
				if (y < 0 || y >= h) continue;
				for (let x = x0 - rad; x <= x0 + rad; x++) {
					if (x < 0 || x >= w) continue;
					const dx = x - p.x;
					const dy = y - p.y;
					const d2 = dx * dx + dy * dy;
					if (d2 > r2) continue;
					const g = Math.exp(-d2 / (r2 * .45));
					const i = y * w + x;
					mesh[i] += z01 * g;
					weight[i] += g;
				}
			}
		}
		for (let i = 0; i < mesh.length; i++) if (weight[i] > 1e-5) mesh[i] /= weight[i];
		boxBlurInPlace(mesh, w, h, Math.max(2, Math.round(iod * .06)));
	}
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		const i = y * w + x;
		const nx = (x - cx) / rx;
		const ny = (y - cy) / ry;
		const d = nx * nx + ny * ny;
		const dome = d < 1 ? Math.sqrt(Math.max(0, 1 - d)) : 0;
		const m = mask[i] ?? 0;
		const meshV = mesh[i];
		const seam = meshV > .01 ? .72 : 0;
		depth[i] = (meshV * seam + dome * (1 - seam)) * (.35 + .65 * m);
	}
	return depth;
}
function boxBlurInPlace(buf, w, h, radius) {
	if (radius < 1) return;
	const tmp = new Float32Array(buf.length);
	const span = radius * 2 + 1;
	for (let y = 0; y < h; y++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const x = clamp(k, 0, w - 1);
			acc += buf[y * w + x];
		}
		for (let x = 0; x < w; x++) {
			tmp[y * w + x] = acc / span;
			const leave = clamp(x - radius, 0, w - 1);
			const enter = clamp(x + radius + 1, 0, w - 1);
			acc += buf[y * w + enter] - buf[y * w + leave];
		}
	}
	for (let x = 0; x < w; x++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const y = clamp(k, 0, h - 1);
			acc += tmp[y * w + x];
		}
		for (let y = 0; y < h; y++) {
			buf[y * w + x] = acc / span;
			const leave = clamp(y - radius, 0, h - 1);
			const enter = clamp(y + radius + 1, 0, h - 1);
			acc += tmp[enter * w + x] - tmp[leave * w + x];
		}
	}
}
function gaussianKernel(sigma) {
	const radius = Math.max(1, Math.ceil(sigma * 3));
	const k = new Float32Array(radius * 2 + 1);
	let sum = 0;
	for (let i = -radius; i <= radius; i++) {
		const v = Math.exp(-.5 * i * i / (sigma * sigma));
		k[i + radius] = v;
		sum += v;
	}
	for (let i = 0; i < k.length; i++) k[i] /= sum;
	return k;
}
function blurChannel(src, w, h, sigma) {
	const kernel = gaussianKernel(sigma);
	const radius = kernel.length - 1 >> 1;
	const tmp = new Float32Array(w * h);
	const out = new Float32Array(w * h);
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const xx = clamp(x + k, 0, w - 1);
			acc += src[y * w + xx] * kernel[k + radius];
		}
		tmp[y * w + x] = acc;
	}
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const yy = clamp(y + k, 0, h - 1);
			acc += tmp[yy * w + x] * kernel[k + radius];
		}
		out[y * w + x] = acc;
	}
	return out;
}
function percentileMasked(src, mask, p) {
	const hist = /* @__PURE__ */ new Uint32Array(256);
	let n = 0;
	for (let i = 0; i < src.length; i++) {
		if ((mask[i] ?? 0) < .35) continue;
		hist[clamp(src[i] * 255 | 0, 0, 255)]++;
		n++;
	}
	if (n < 16) {
		for (let i = 0; i < src.length; i++) hist[clamp(src[i] * 255 | 0, 0, 255)]++;
		n = src.length;
	}
	const target = p * (n - 1);
	let acc = 0;
	for (let i = 0; i < 256; i++) {
		acc += hist[i];
		if (acc > target) return i / 255;
	}
	return 1;
}
function dilate(src, w, h, radius) {
	const out = new Float32Array(src);
	if (radius < 1) return out;
	const tmp = new Float32Array(w * h);
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		let m = 0;
		for (let k = -radius; k <= radius; k++) m = Math.max(m, src[y * w + clamp(x + k, 0, w - 1)]);
		tmp[y * w + x] = m;
	}
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		let m = 0;
		for (let k = -radius; k <= radius; k++) m = Math.max(m, tmp[clamp(y + k, 0, h - 1) * w + x]);
		out[y * w + x] = m;
	}
	return out;
}
function featureMap(crop) {
	const { width: w, height: h, landmarks, iod } = crop;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	const out = new Float32Array(w * h);
	if (!ctx || !landmarks || landmarks.length < 80) return out;
	ctx.clearRect(0, 0, w, h);
	ctx.strokeStyle = "#fff";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	const width = Math.max(2, iod * .06);
	const groups = featureGroups(getFaceLandmarkerClass());
	for (const g of groups) {
		ctx.lineWidth = g.name.includes("Iris") || g.name === "lips" ? width * 1.15 : width;
		ctx.beginPath();
		for (const c of g.connections) {
			const a = landmarks[c.start];
			const b = landmarks[c.end];
			if (!a || !b) continue;
			ctx.moveTo(a.x, a.y);
			ctx.lineTo(b.x, b.y);
		}
		ctx.stroke();
	}
	const data = ctx.getImageData(0, 0, w, h).data;
	for (let i = 0, p = 0; i < out.length; i++, p += 4) out[i] = data[p] / 255;
	return blurChannel(out, w, h, Math.max(1, iod * .018));
}
function buildWeights(crop, params) {
	const { width: w, height: h, imageData, mask, hairSkin, faceSkin } = crop;
	const px = imageData.data;
	const lum = new Float32Array(w * h);
	for (let i = 0, p = 0; i < lum.length; i++, p += 4) lum[i] = (.2126 * px[p] + .7152 * px[p + 1] + .0722 * px[p + 2]) / 255;
	const p5 = percentileMasked(lum, faceSkin, .05);
	const p95 = Math.max(p5 + .04, percentileMasked(lum, faceSkin, .95));
	const tone = new Float32Array(w * h);
	const invRange = 1 / (p95 - p5);
	for (let i = 0; i < lum.length; i++) {
		let t = clamp((lum[i] - p5) * invRange, 0, 1);
		if (params.invert) t = 1 - t;
		tone[i] = t;
	}
	const blurA = blurChannel(tone, w, h, 1);
	const blurB = blurChannel(tone, w, h, 1.6);
	const edges = new Float32Array(w * h);
	const edgeHist = /* @__PURE__ */ new Uint32Array(256);
	for (let i = 0; i < edges.length; i++) {
		const e = clamp(Math.abs(blurA[i] - blurB[i]) * 6, 0, 1);
		edges[i] = e;
		edgeHist[e * 255 | 0]++;
	}
	let edgeP95 = .2;
	{
		const target = .95 * (edges.length - 1);
		let acc = 0;
		for (let i = 0; i < 256; i++) {
			acc += edgeHist[i];
			if (acc > target) {
				edgeP95 = i / 255;
				break;
			}
		}
	}
	const edgeNorm = 1 / Math.max(.04, edgeP95);
	for (let i = 0; i < edges.length; i++) edges[i] = clamp(edges[i] * edgeNorm, 0, 1);
	const L = featureMap(crop);
	const M = blurChannel(dilate(mask, w, h, 3), w, h, Math.max(1.2, Math.min(w, h) * .02 * (.35 + params.softness)));
	const weight = new Float32Array(w * h);
	const gamma = params.contrast;
	const a = params.detail;
	const b = params.feature;
	const floor = params.floor;
	for (let i = 0; i < weight.length; i++) {
		let wv = Math.pow(Math.max(tone[i], 1e-5), gamma) * (1 + a * edges[i]) * (1 + b * L[i]);
		wv = Math.max(wv, floor * (hairSkin[i] ?? 0));
		if (params.removeBg) wv *= M[i];
		weight[i] = wv;
	}
	return {
		weight,
		tone,
		width: w,
		height: h
	};
}
var cached = null;
function blur(src, n, sigma) {
	const radius = Math.max(1, Math.ceil(sigma * 2.5));
	const kernel = new Float32Array(radius * 2 + 1);
	let ksum = 0;
	for (let i = -radius; i <= radius; i++) {
		const v = Math.exp(-.5 * i * i / (sigma * sigma));
		kernel[i + radius] = v;
		ksum += v;
	}
	for (let i = 0; i < kernel.length; i++) kernel[i] /= ksum;
	const tmp = new Float32Array(n * n);
	const out = new Float32Array(n * n);
	for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const xx = (x + k + n) % n;
			acc += src[y * n + xx] * kernel[k + radius];
		}
		tmp[y * n + x] = acc;
	}
	for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
		let acc = 0;
		for (let k = -radius; k <= radius; k++) {
			const yy = (y + k + n) % n;
			acc += tmp[yy * n + x] * kernel[k + radius];
		}
		out[y * n + x] = acc;
	}
	return out;
}
/** Void-and-cluster-ish rank texture via high-pass + ranking (Ulichney-style). */
function getBlueNoise() {
	if (cached) return cached;
	const n = 128;
	const size = 16384;
	const values = new Float32Array(size);
	let seed = 1337;
	const rnd = () => {
		seed = seed * 1664525 + 1013904223 >>> 0;
		return seed / 4294967296;
	};
	for (let i = 0; i < size; i++) values[i] = rnd();
	for (let iter = 0; iter < 6; iter++) {
		const b = blur(values, n, 1.15);
		for (let i = 0; i < size; i++) values[i] -= b[i] * .85;
	}
	const idx = new Uint32Array(size);
	for (let i = 0; i < size; i++) idx[i] = i;
	idx.sort((a, b) => values[a] - values[b]);
	const out = new Float32Array(size);
	const denom = Math.max(1, 16383);
	for (let i = 0; i < size; i++) out[idx[i]] = i / denom;
	cached = out;
	return out;
}
function blueAt(noise, x, y) {
	const n = 128;
	const xx = (x % n + n) % n;
	return noise[(y % n + n) % n * n + xx];
}
function sample(maps, depth, crop, nMax = N_MAX) {
	const { width: w, height: h, weight, tone } = maps;
	const noise = getBlueNoise();
	const nPix = w * h;
	const keys = new Uint16Array(nPix);
	const index = new Uint32Array(nPix);
	let n = 0;
	for (let i = 0; i < nPix; i++) {
		const wv = weight[i];
		if (wv < .001) continue;
		const t = blueAt(noise, i % w, i / w | 0);
		const r = Math.min(1, t / wv);
		keys[n] = r * 65535 | 0;
		index[n] = i;
		n++;
	}
	const counts = /* @__PURE__ */ new Uint32Array(65536);
	for (let i = 0; i < n; i++) counts[keys[i]]++;
	let sum = 0;
	for (let i = 0; i < 65536; i++) {
		const c = counts[i];
		counts[i] = sum;
		sum += c;
	}
	const sorted = new Uint32Array(n);
	for (let i = 0; i < n; i++) {
		const k = keys[i];
		sorted[counts[k]] = index[i];
		counts[k]++;
	}
	const count = Math.min(nMax, n);
	const home = new Float32Array(count * 3);
	const restZ = new Float32Array(count);
	const toneOut = new Uint8Array(count);
	const seed = new Float32Array(count);
	const color = new Uint8Array(count * 3);
	const px = crop.imageData.data;
	const aspect = h / w;
	for (let i = 0; i < count; i++) {
		const pi = sorted[i];
		const x = pi % w;
		const y = pi / w | 0;
		const jx = hash21(x + .3, y + 1.7) - .5;
		const jy = hash21(x + 9.1, y + 4.2) - .5;
		const wx = (x + jx + .5) / w * 2 - 1;
		const wy = -((y + jy + .5) / h * 2 - 1) * aspect;
		const z01 = depth[pi] ?? 0;
		home[i * 3] = wx;
		home[i * 3 + 1] = wy;
		home[i * 3 + 2] = (z01 - .35) * .85;
		restZ[i] = home[i * 3 + 2];
		toneOut[i] = clampByte((tone[pi] ?? 0) * 255);
		seed[i] = hash21(x + 21.3, y + 8.9);
		const p = pi * 4;
		color[i * 3] = px[p];
		color[i * 3 + 1] = px[p + 1];
		color[i * 3 + 2] = px[p + 2];
	}
	return {
		count,
		home,
		restZ,
		tone: toneOut,
		seed,
		color
	};
}
function clampByte(v) {
	return v < 0 ? 0 : v > 255 ? 255 : v | 0;
}
function makeCloud(count = 4e4) {
	const home = new Float32Array(count * 3);
	const restZ = new Float32Array(count);
	const tone = new Uint8Array(count);
	const seed = new Float32Array(count);
	const color = new Uint8Array(count * 3);
	for (let i = 0; i < count; i++) {
		const u = hash21(i, 1.2);
		const v = hash21(i, 7.7);
		const w = hash21(i, 13.9);
		const theta = u * Math.PI * 2;
		const r = Math.sqrt(v) * 1.15;
		home[i * 3] = Math.cos(theta) * r;
		home[i * 3 + 1] = (w - .5) * 2.2;
		home[i * 3 + 2] = Math.sin(theta) * r * .4;
		restZ[i] = home[i * 3 + 2];
		tone[i] = 90 + (hash21(i, 3.3) * 140 | 0);
		seed[i] = hash21(i, 19.1);
		const g = tone[i];
		color[i * 3] = g;
		color[i * 3 + 1] = g;
		color[i * 3 + 2] = g;
	}
	return {
		count,
		home,
		restZ,
		tone,
		seed,
		color
	};
}
function applyDepthScale(set, depth) {
	const s = .35 + depth * 1.4;
	for (let i = 0; i < set.count; i++) set.home[i * 3 + 2] = set.restZ[i] * s;
}
async function generateFromFile(file, params, onProgress) {
	onProgress?.({
		stage: "Reading photo",
		fraction: .05
	});
	return generateFromCanvas(await loadImage(file), params, onProgress);
}
async function generateFromUrl(url, params, onProgress) {
	onProgress?.({
		stage: "Loading portrait",
		fraction: .05
	});
	return generateFromCanvas(await loadUrl(url), params, onProgress);
}
async function generateFromCanvas(img, params, onProgress) {
	onProgress?.({
		stage: "Finding a face",
		fraction: .18
	});
	const vision = await analyze(img);
	onProgress?.({
		stage: "Framing the head",
		fraction: .4
	});
	const crop = headCrop(img, vision, params);
	onProgress?.({
		stage: "Sculpting depth",
		fraction: .55
	});
	const depth = meshDomeDepth(crop);
	onProgress?.({
		stage: "Laying the field",
		fraction: .72
	});
	const maps = buildWeights(crop, params);
	onProgress?.({
		stage: "Sampling particles",
		fraction: .88
	});
	const set = sample(maps, depth, crop);
	applyDepthScale(set, params.depth);
	onProgress?.({
		stage: "Ready",
		fraction: 1
	});
	return {
		source: img,
		vision,
		crop,
		depth,
		set
	};
}
function recrop(cache, params) {
	cache.crop = headCrop(cache.source, cache.vision, params);
	cache.depth = meshDomeDepth(cache.crop);
	return rebuildField(cache, params);
}
function rebuildField(cache, params) {
	const set = sample(buildWeights(cache.crop, params), cache.depth, cache.crop);
	applyDepthScale(set, params.depth);
	cache.set = set;
	return set;
}
/** Academic head study painted in canvas — instant demo, no network. */
function paintStudy(preset = 0) {
	const w = 768;
	const h = 1024;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("2D context unavailable");
	const skins = [
		[
			196,
			149,
			118
		],
		[
			92,
			62,
			46
		],
		[
			232,
			201,
			176
		]
	];
	const hairs = [
		[
			28,
			22,
			18
		],
		[
			18,
			14,
			12
		],
		[
			62,
			42,
			28
		]
	];
	const skin = skins[preset];
	const hair = hairs[preset];
	ctx.fillStyle = "#070708";
	ctx.fillRect(0, 0, w, h);
	const cx = 384;
	const cy = 430;
	const faceRx = 168;
	const faceRy = 218;
	const shade = (r, g, b, k) => `rgb(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)})`;
	const neck = ctx.createLinearGradient(cx, 620, cx, 980);
	neck.addColorStop(0, shade(skin[0], skin[1], skin[2], .72));
	neck.addColorStop(1, shade(skin[0], skin[1], skin[2], .4));
	ctx.fillStyle = neck;
	ctx.beginPath();
	ctx.ellipse(cx, 820, 86, 180, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = shade(skin[0], skin[1], skin[2], .78);
	ctx.beginPath();
	ctx.ellipse(224, 450, 28, 48, -.15, 0, Math.PI * 2);
	ctx.ellipse(544, 450, 28, 48, .15, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = shade(hair[0], hair[1], hair[2], 1);
	ctx.beginPath();
	if (preset === 1) ctx.ellipse(cx, 390, 210, 230, 0, 0, Math.PI * 2);
	else if (preset === 2) ctx.ellipse(cx, 420, 200, 250, 0, 0, Math.PI * 2);
	else ctx.ellipse(cx, 470, 220, 280, 0, 0, Math.PI * 2);
	ctx.fill();
	const face = ctx.createRadialGradient(334, 360, 20, cx, cy, 240);
	face.addColorStop(0, shade(skin[0], skin[1], skin[2], 1.12));
	face.addColorStop(.45, shade(skin[0], skin[1], skin[2], 1));
	face.addColorStop(1, shade(skin[0], skin[1], skin[2], .55));
	ctx.fillStyle = face;
	ctx.beginPath();
	ctx.ellipse(cx, cy, faceRx, faceRy, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = shade(hair[0], hair[1], hair[2], 1.05);
	ctx.beginPath();
	ctx.ellipse(cx, 280, 170, 90, 0, Math.PI, Math.PI * 2);
	ctx.fill();
	if (preset === 0) {
		ctx.beginPath();
		ctx.moveTo(224, 390);
		ctx.quadraticCurveTo(184, 900, 294, 980);
		ctx.quadraticCurveTo(344, 700, 234, cy);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(544, 390);
		ctx.quadraticCurveTo(594, 900, 484, 980);
		ctx.quadraticCurveTo(434, 700, 534, cy);
		ctx.fill();
	}
	ctx.save();
	ctx.globalCompositeOperation = "multiply";
	ctx.fillStyle = "rgba(80,40,30,0.28)";
	ctx.beginPath();
	ctx.ellipse(316, 412, 48, 28, .1, 0, Math.PI * 2);
	ctx.ellipse(452, 412, 48, 28, -.1, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
	const drawEye = (ex, ey) => {
		ctx.fillStyle = shade(skin[0], skin[1], skin[2], 1.05);
		ctx.beginPath();
		ctx.ellipse(ex, ey, 38, 18, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#f3efe8";
		ctx.beginPath();
		ctx.ellipse(ex, ey, 32, 14, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = preset === 1 ? "#2a1c12" : "#3b2a1c";
		ctx.beginPath();
		ctx.ellipse(ex, ey + 1, 14, 14, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#0b0a09";
		ctx.beginPath();
		ctx.ellipse(ex, ey + 1, 6, 6, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "rgba(255,255,255,0.85)";
		ctx.beginPath();
		ctx.ellipse(ex - 4, ey - 3, 3.2, 3.2, 0, 0, Math.PI * 2);
		ctx.fill();
	};
	drawEye(322, 422);
	drawEye(446, 422);
	ctx.strokeStyle = shade(hair[0], hair[1], hair[2], 1.2);
	ctx.lineWidth = 7;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(288, 388);
	ctx.quadraticCurveTo(322, 372, 356, 390);
	ctx.moveTo(480, 388);
	ctx.quadraticCurveTo(446, 372, 412, 390);
	ctx.stroke();
	ctx.strokeStyle = shade(skin[0], skin[1], skin[2], .55);
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(386, 422);
	ctx.quadraticCurveTo(402, 480, 378, 508);
	ctx.stroke();
	ctx.fillStyle = shade(skin[0], skin[1], skin[2], .5);
	ctx.beginPath();
	ctx.ellipse(372, 510, 7, 5, 0, 0, Math.PI * 2);
	ctx.ellipse(394, 510, 7, 5, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "rgba(255,255,255,0.18)";
	ctx.beginPath();
	ctx.ellipse(376, 460, 6, 22, .2, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = shade(skin[0] * .9, skin[1] * .55, skin[2] * .55, 1);
	ctx.beginPath();
	ctx.ellipse(cx, 558, 36, 12, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.strokeStyle = shade(skin[0] * .5, skin[1] * .3, skin[2] * .3, 1);
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(350, 558);
	ctx.quadraticCurveTo(cx, 566, 418, 558);
	ctx.stroke();
	ctx.fillStyle = "rgba(160,70,60,0.12)";
	ctx.beginPath();
	ctx.ellipse(306, 488, 40, 22, .2, 0, Math.PI * 2);
	ctx.ellipse(462, 488, 40, 22, -.2, 0, Math.PI * 2);
	ctx.fill();
	if (preset === 1) {
		ctx.fillStyle = shade(hair[0], hair[1], hair[2], 1.1);
		ctx.beginPath();
		ctx.ellipse(cx, 585, 70, 48, 0, 0, Math.PI);
		ctx.fill();
	}
	const img = ctx.getImageData(0, 0, w, h);
	const d = img.data;
	for (let i = 0; i < d.length; i += 4) {
		const n = (i * 1103515245 + 12345 >>> 0) % 13;
		d[i] = Math.min(255, d[i] + n - 6);
		d[i + 1] = Math.min(255, d[i + 1] + n - 6);
		d[i + 2] = Math.min(255, d[i + 2] + n - 6);
	}
	ctx.putImageData(img, 0, 0);
	return canvas;
}
var MIME_CANDIDATES = [
	"video/mp4;codecs=avc1",
	"video/mp4;codecs=avc1.42E01E",
	"video/mp4",
	"video/webm;codecs=vp9",
	"video/webm;codecs=vp8",
	"video/webm"
];
function pickMime() {
	if (typeof MediaRecorder === "undefined") return null;
	for (const t of MIME_CANDIDATES) if (MediaRecorder.isTypeSupported(t)) return t;
	return "";
}
function wait(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
async function recordTimeline(engine, seconds = 8, onTick) {
	const mime = pickMime();
	if (mime === null) throw new Error("Recording is not supported in this browser.");
	const stream = engine.getCanvasStream(30);
	const recorder = mime ? new MediaRecorder(stream, {
		mimeType: mime,
		videoBitsPerSecond: 6e6
	}) : new MediaRecorder(stream);
	const chunks = [];
	recorder.ondataavailable = (e) => {
		if (e.data.size) chunks.push(e.data);
	};
	const done = new Promise((resolve, reject) => {
		recorder.onerror = () => reject(/* @__PURE__ */ new Error("Recorder failed"));
		recorder.onstop = () => {
			resolve(new Blob(chunks, { type: recorder.mimeType || "video/webm" }));
		};
	});
	engine.lockIdleOrbit(true);
	recorder.start(200);
	onTick?.("Assemble");
	engine.play("build");
	await wait(1800);
	onTick?.("Hold");
	await wait(1400);
	onTick?.("Sweep");
	engine.play("wind");
	await wait(1600);
	onTick?.("Scatter");
	engine.play("disassemble");
	await wait(1400);
	onTick?.("Return");
	engine.play("assemble");
	await wait(Math.max(400, seconds * 1e3 - 1800 - 1400 - 1600 - 1400));
	recorder.stop();
	engine.lockIdleOrbit(false);
	stream.getTracks().forEach((t) => t.stop());
	return done;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
function FaceParticlesApp() {
	const canvasRef = (0, import_react.useRef)(null);
	const engineRef = (0, import_react.useRef)(null);
	const cacheRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const camRef = (0, import_react.useRef)(null);
	const paramsRef = (0, import_react.useRef)(loadParams());
	const rebuildTimer = (0, import_react.useRef)(0);
	const [params, setParams] = (0, import_react.useState)(paramsRef.current);
	const [hero, setHero] = (0, import_react.useState)(true);
	const [sheet, setSheet] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [glOk, setGlOk] = (0, import_react.useState)(true);
	const [anim, setAnim] = (0, import_react.useState)("building");
	const [recording, setRecording] = (0, import_react.useState)(null);
	const [hasPortrait, setHasPortrait] = (0, import_react.useState)(false);
	const [visionReady, setVisionReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const engine = new ParticleEngine(canvas);
		engineRef.current = engine;
		engine.onState = setAnim;
		setGlOk(engine.supported);
		if (engine.supported) {
			engine.load(makeCloud(32e3));
			engine.play("idle");
			engine.assemble = 1;
			engine.targetAssemble = 1;
			engine.start();
		}
		(async () => {
			try {
				await preloadVision();
				setVisionReady(true);
			} catch {
				setVisionReady(false);
			}
			try {
				setBusy({
					stage: "Composing a study",
					fraction: .2
				});
				const cache = await generateFromCanvas(paintStudy(0), paramsRef.current, (p) => setBusy(p));
				cacheRef.current = cache;
				engine.load(cache.set);
				engine.setDrawCount(paramsRef.current.particles);
				engine.setPointSize(paramsRef.current.size);
				engine.setColorMode(paramsRef.current.color);
				engine.setInvert(paramsRef.current.invert);
				engine.play("build");
				setHasPortrait(true);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Could not start the study.");
			} finally {
				setBusy(null);
			}
		})();
		return () => engine.dispose();
	}, []);
	(0, import_react.useEffect)(() => {
		paramsRef.current = params;
		writeHash(params);
		const engine = engineRef.current;
		if (!engine) return;
		engine.setDrawCount(params.particles);
		engine.setPointSize(params.size);
		engine.setColorMode(params.color);
		engine.setInvert(params.invert);
	}, [params]);
	const runSource = (0, import_react.useCallback)(async (job, hideHero = true) => {
		setError(null);
		setBusy({
			stage: "Starting",
			fraction: .02
		});
		try {
			const cache = await job();
			cacheRef.current = cache;
			const engine = engineRef.current;
			if (!engine) return;
			engine.load(cache.set);
			engine.setDrawCount(paramsRef.current.particles);
			engine.setPointSize(paramsRef.current.size);
			engine.setColorMode(paramsRef.current.color);
			engine.setInvert(paramsRef.current.invert);
			engine.play("build");
			setHasPortrait(true);
			if (hideHero) setHero(false);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not build this portrait.");
		} finally {
			setBusy(null);
		}
	}, []);
	const onFile = (file) => {
		if (!file) return;
		runSource(() => generateFromFile(file, paramsRef.current, setBusy));
	};
	const onSample = (src) => {
		runSource(() => generateFromUrl(src, paramsRef.current, setBusy));
	};
	const patch = (partial) => {
		setParams((p) => {
			const next = {
				...p,
				...partial
			};
			paramsRef.current = next;
			const engine = engineRef.current;
			const cache = cacheRef.current;
			if (!engine || !cache) return next;
			if (partial.particles != null) engine.setDrawCount(next.particles);
			if (partial.size != null) engine.setPointSize(next.size);
			if (partial.color != null) engine.setColorMode(next.color);
			if (partial.invert != null) engine.setInvert(next.invert);
			if (partial.depth != null) {
				applyDepthScale(cache.set, next.depth);
				engine.updateHomeZ(cache.set);
			}
			const needsField = [
				"contrast",
				"detail",
				"feature",
				"floor",
				"softness",
				"invert",
				"removeBg"
			].some((k) => k in partial);
			const needsCrop = "straighten" in partial;
			if (needsCrop || needsField) {
				window.clearTimeout(rebuildTimer.current);
				rebuildTimer.current = window.setTimeout(() => {
					setBusy({
						stage: "Updating the field",
						fraction: .5
					});
					try {
						const set = needsCrop ? recrop(cache, paramsRef.current) : rebuildField(cache, paramsRef.current);
						engine.load(set, { scatter: false });
						engine.setDrawCount(paramsRef.current.particles);
						engine.play("assemble");
					} catch (err) {
						setError(err instanceof Error ? err.message : "Update failed");
					} finally {
						setBusy(null);
					}
				}, 90);
			}
			return next;
		});
	};
	const play = (name) => engineRef.current?.play(name);
	const onRecord = async () => {
		const engine = engineRef.current;
		if (!engine || recording) return;
		setRecording("Preparing");
		setHero(false);
		setSheet(false);
		try {
			const blob = await recordTimeline(engine, 8, (label) => setRecording(label));
			downloadBlob(blob, `face-particles.${blob.type.includes("mp4") ? "mp4" : "webm"}`);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not record.");
		} finally {
			setRecording(null);
		}
	};
	const onSaveStill = async () => {
		const engine = engineRef.current;
		if (!engine) return;
		try {
			downloadBlob(await engine.snapshot(), "face-particles.png");
		} catch {
			setError("Could not save a still.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 size-full touch-none",
				"aria-label": "Particle portrait stage"
			}),
			!glOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-30 flex items-center justify-center bg-bg px-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl",
						children: "This device cannot draw particles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg-muted",
						children: "Face Particles needs WebGL2, which this browser does not expose."
					})]
				})
			}),
			busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[max(1.25rem,env(safe-area-inset-top))] z-20 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-bg-elevated/90 px-4 py-2.5 text-sm text-fg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: busy.stage }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-fg-subtle",
							children: [Math.round(busy.fraction * 100), "%"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tracking-tight text-fg",
						children: "Face Particles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-fg-subtle",
						children: "On-device"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex gap-2",
					children: [
						!hero && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "icon",
							"aria-label": "New photo",
							onClick: () => setHero(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "icon",
							"aria-label": "Save still",
							onClick: () => void onSaveStill(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							size: "icon",
							"aria-label": "Record",
							disabled: !hasPortrait || Boolean(recording),
							onClick: () => void onRecord(),
							children: recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "size-5" })
						})
					]
				})]
			}),
			hero && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "absolute inset-x-0 bottom-0 z-10 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-16 bg-gradient-to-t from-bg via-bg/85 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-md rounded-[28px] border border-border bg-bg-elevated/85 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[2rem] leading-tight tracking-tight",
							children: "A portrait that comes apart in your hands."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg-muted",
							children: "Photos stay on this device. Drag through the cloud, then make it yours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "w-full",
								onClick: () => fileRef.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Upload"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								className: "w-full",
								onClick: () => camRef.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), "Camera"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[11px] uppercase tracking-[0.16em] text-fg-subtle",
							children: "Try a study"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex gap-3",
							children: SAMPLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSample(s.src),
								className: "group flex flex-1 flex-col items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-md)] border border-border bg-bg-subtle",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.src,
										alt: s.label,
										className: "size-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-fg-muted",
									children: s.label
								})]
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-[11px] text-fg-subtle",
							children: visionReady ? "Vision models ready" : "Loading face analysis in the background"
						})
					]
				})
			}),
			!hero && hasPortrait && !recording && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-10 flex justify-center px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-bg-elevated/90 p-1",
					children: [
						[
							"assemble",
							"Assemble",
							ScanFace
						],
						[
							"disassemble",
							"Break",
							Aperture
						],
						[
							"wind",
							"Wind",
							Wind
						],
						[
							"vortex",
							"Vortex",
							RotateCcw
						],
						[
							"ripple",
							"Ripple",
							Contrast
						]
					].map(([id, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => play(id),
						className: cn("flex h-10 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-medium text-fg-muted hover:bg-bg-subtle hover:text-fg", anim === "effect" && "text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), label]
					}, id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-x-0 bottom-0 z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", sheet ? "translate-y-0" : "translate-y-[calc(100%-5.25rem)]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-lg rounded-t-[28px] border border-border bg-bg-elevated/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full flex-col items-center pb-2 pt-1 text-fg-muted",
							onClick: () => setSheet((s) => !s),
							"aria-expanded": sheet,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mb-2 h-1 w-10 rounded-full bg-border-strong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-xs uppercase tracking-[0.16em]",
								children: ["Structure", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: cn("size-3.5 transition-transform", sheet ? "rotate-0" : "rotate-180") })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Color",
								checked: params.color,
								onCheckedChange: (v) => patch({ color: v })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Invert",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipHorizontal2, { className: "size-3.5" }),
								checked: params.invert,
								onCheckedChange: (v) => patch({ invert: v })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Particles",
							value: `${Math.round(params.particles / 1e3)}k`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 5e3,
								max: 1e5,
								step: 1e3,
								value: [params.particles],
								onValueChange: ([v]) => patch({ particles: v ?? params.particles })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Size",
							value: params.size.toFixed(1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: .8,
								max: 4,
								step: .1,
								value: [params.size],
								onValueChange: ([v]) => patch({ size: v ?? params.size })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Contrast",
							value: params.contrast.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: .6,
								max: 2,
								step: .05,
								value: [params.contrast],
								onValueChange: ([v]) => patch({ contrast: v ?? params.contrast })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Detail",
							value: params.detail.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: 2,
								step: .05,
								value: [params.detail],
								onValueChange: ([v]) => patch({ detail: v ?? params.detail })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Features",
							value: params.feature.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: 1.5,
								step: .05,
								value: [params.feature],
								onValueChange: ([v]) => patch({ feature: v ?? params.feature })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Shadow lift",
							value: params.floor.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .3,
								step: .01,
								value: [params.floor],
								onValueChange: ([v]) => patch({ floor: v ?? params.floor })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Silhouette",
							value: params.softness.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: 1,
								step: .05,
								value: [params.softness],
								onValueChange: ([v]) => patch({ softness: v ?? params.softness })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Depth",
							value: params.depth.toFixed(2),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: 1,
								step: .05,
								value: [params.depth],
								onValueChange: ([v]) => patch({ depth: v ?? params.depth })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Straighten",
								checked: params.straighten,
								onCheckedChange: (v) => patch({ straighten: v })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Cut background",
								checked: params.removeBg,
								onCheckedChange: (v) => patch({ removeBg: v })
							})]
						})
					]
				})
			})] }),
			recording && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-full border border-border bg-bg-elevated/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-fg-muted",
					children: ["Recording · ", recording]
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-4 top-[5.5rem] z-30 mx-auto max-w-md rounded-[var(--radius-md)] border border-border bg-bg-elevated px-3 py-2 text-sm text-danger",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: camRef,
				type: "file",
				accept: "image/*",
				capture: "user",
				className: "hidden",
				onChange: (e) => onFile(e.target.files?.[0])
			})
		]
	});
}
function Field({ label, value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-2 block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-1 flex items-center justify-between text-xs text-fg-muted",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-fg-subtle",
				children: value
			})]
		}), children]
	});
}
function ToggleRow({ label, checked, onCheckedChange, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex h-11 items-center justify-between rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 text-fg-muted",
			children: [icon, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceParticlesApp, {});
}
//#endregion
export { Home as component };
