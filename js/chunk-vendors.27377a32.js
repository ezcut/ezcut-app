(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),s=n("5c6c"),o=n("fc6a"),a=n("a04b"),c=n("1a2d"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=o(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return s(!i.f.call(t,e),t[e])}},"07ac":function(t,e,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Nu})),n.d(e,"b",(function(){return Ac})),n.d(e,"c",(function(){return dc})),n.d(e,"d",(function(){return ec})),n.d(e,"e",(function(){return ou})),n.d(e,"f",(function(){return kc})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return Cc})),n.d(e,"i",(function(){return au})),n.d(e,"j",(function(){return cu})),n.d(e,"k",(function(){return j})),n.d(e,"l",(function(){return Pu})),n.d(e,"m",(function(){return Ba})),n.d(e,"n",(function(){return st})),n.d(e,"o",(function(){return H})),n.d(e,"p",(function(){return Ya})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return G})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return Wa})),n.d(e,"u",(function(){return Wu})),n.d(e,"v",(function(){return nl})),n.d(e,"w",(function(){return el})),n.d(e,"x",(function(){return bc})),n.d(e,"y",(function(){return ic})),n.d(e,"z",(function(){return sc})),n.d(e,"A",(function(){return tc})),n.d(e,"B",(function(){return Hu})),n.d(e,"C",(function(){return Zu})),n.d(e,"D",(function(){return Ic})),n.d(e,"E",(function(){return oc})),n.d(e,"F",(function(){return gc})),n.d(e,"G",(function(){return vc})),n.d(e,"H",(function(){return _c})),n.d(e,"I",(function(){return ku})),n.d(e,"J",(function(){return Su})),n.d(e,"K",(function(){return pc})),n.d(e,"L",(function(){return Qu})),n.d(e,"M",(function(){return Mu})),n.d(e,"N",(function(){return Fu})),n.d(e,"O",(function(){return Uu})),n.d(e,"P",(function(){return Vu})),n.d(e,"Q",(function(){return $u})),n.d(e,"R",(function(){return qu})),n.d(e,"S",(function(){return rl})),n.d(e,"T",(function(){return bu})),n.d(e,"U",(function(){return wu})),n.d(e,"V",(function(){return Tc})),n.d(e,"W",(function(){return Ec})),n.d(e,"X",(function(){return Gu})),n.d(e,"Y",(function(){return Ku})),n.d(e,"Z",(function(){return vu})),n.d(e,"ab",(function(){return fu})),n.d(e,"bb",(function(){return cc})),n.d(e,"cb",(function(){return ac})),n.d(e,"db",(function(){return Xu})),n.d(e,"eb",(function(){return tl})),n.d(e,"fb",(function(){return Bu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return lu})),n.d(e,"ib",(function(){return Tu})),n.d(e,"jb",(function(){return Iu})),n.d(e,"kb",(function(){return zu})),n.d(e,"lb",(function(){return wc})),n.d(e,"mb",(function(){return mu}));var r=n("5606"),i=n("ffa6"),s=n("4fc1"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.2.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(v);h.debug(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(v);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(v);h.warn(`Firestore (${l}): ${t}`,...n)}}function v(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||y()}function w(t,e){t||y()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class x{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */N.T=-1;class R{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function P(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function M(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new j(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new j(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends q{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends q{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.fields=t,t.sort(H.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new K(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new K(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Y(t){if(b(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function X(t){return"string"==typeof t?K.fromBase64String(t):K.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(t){const e=t.mapValue.fields.__previous_value__;return Z(e)?tt(e):e}function et(t){const e=Y(t.mapValue.fields.__local_write_time__.timestampValue);return new j(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return null==t}function rt(t){return 0===t&&1/t==-1/0}function it(t){return"number"==typeof t&&Number.isInteger(t)&&!rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(B.fromString(t))}static fromName(t){return new st(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z(t)?4:10:y()}function at(t,e){const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return et(t).isEqual(et(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Y(t.timestampValue),r=Y(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return X(t.bytesValue).isEqual(X(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return J(t.geoPointValue.latitude)===J(e.geoPointValue.latitude)&&J(t.geoPointValue.longitude)===J(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return J(t.integerValue)===J(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=J(t.doubleValue),r=J(e.doubleValue);return n===r?rt(n)===rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(U(n)!==U(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!at(n[i],r[i])))return!1;return!0}(t,e);default:return y()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){const n=ot(t),r=ot(e);if(n!==r)return P(n,r);switch(n){case 0:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=J(t.integerValue||t.doubleValue),r=J(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return lt(t.timestampValue,e.timestampValue);case 4:return lt(et(t),et(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(t,e){const n=X(t),r=X(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=P(n[i],r[i]);if(0!==t)return t}return P(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=P(J(t.latitude),J(e.latitude));return 0!==n?n:P(J(t.longitude),J(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ut(n[i],r[i]);if(t)return t}return P(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=P(r[o],s[o]);if(0!==t)return t;const e=ut(n[r[o]],i[s[o]]);if(0!==e)return e}return P(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return P(t,e);const n=Y(t),r=Y(e),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function ht(t){return dt(t)}function dt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Y(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?X(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,st.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=dt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${dt(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function ft(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pt(t){return!!t&&"integerValue"in t}function mt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yt(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=bt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bt(e)}setAll(t){let e=H.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=bt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];yt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new wt(bt(this.value))}}function _t(t){const e=[];return V(t.fields,(t,n)=>{const r=new H([t]);if(yt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new W(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class It{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new It(t,0,F.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new It(t,1,e,n,0)}static newNoDocument(t,e){return new It(t,2,e,wt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new It(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Et(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Tt(t,e,n,r,i,s,o)}function St(t){const e=_(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>xt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),nt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Vt(e.startAt)),e.endAt&&(t+="|ub:",t+=Vt(e.endAt)),e.A=t}return e.A}function kt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),nt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Vt(t.startAt)),t.endAt&&(e+=", endAt: "+Vt(t.endAt)),`Target(${e})`}function At(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!at(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function Ot(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ct extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Nt(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new Mt(t,n):"not-in"===e?new jt(t,n):"array-contains-any"===e?new Ft(t,n):new Ct(t,e,n)}static R(t,e,n){return"in"===e?new Dt(t,n):new Rt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(ut(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.P(ut(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function xt(t){return t.field.canonicalString()+t.op.toString()+ht(t.value)}class Nt extends Ct{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.P(e)}}class Dt extends Ct{constructor(t,e){super(t,"in",e),this.keys=Pt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rt extends Ct{constructor(t,e){super(t,"not-in",e),this.keys=Pt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>st.fromName(t.referenceValue))}class Lt extends Ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mt(e)&&ct(e.arrayValue,this.value)}}class Mt extends Ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class jt extends Ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Ft extends Ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ut{constructor(t,e){this.position=t,this.before=e}}function Vt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ht(t)).join(",")}`}class $t{constructor(t,e="asc"){this.field=t,this.dir=e}}function qt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ut(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Wt(t,e,n,r,i,s,o,a){return new Ht(t,e,n,r,i,s,o,a)}function Gt(t){return new Ht(t)}function Kt(t){return!nt(t.limit)&&"F"===t.limitType}function Qt(t){return!nt(t.limit)&&"L"===t.limitType}function Yt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Xt(t){return null!==t.collectionGroup}function Zt(t){const e=_(t);if(null===e.V){e.V=[];const t=Jt(e),n=Yt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new $t(t)),e.V.push(new $t(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new $t(H.keyField(),t))}}}return e.V}function te(t){const e=_(t);if(!e.S)if("F"===e.limitType)e.S=Et(e.path,e.collectionGroup,Zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Zt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new $t(i.field,e))}const n=e.endAt?new Ut(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ut(e.startAt.position,!e.startAt.before):null;e.S=Et(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function ee(t,e,n){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ne(t,e){return At(te(t),te(e))&&t.limitType===e.limitType}function re(t){return`${St(te(t))}|lt:${t.limitType}`}function ie(t){return`Query(target=${kt(te(t))}; limitType=${t.limitType})`}function se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Bt(t.startAt,Zt(t),e))&&(!t.endAt||!Bt(t.endAt,Zt(t),e))}(t,e)}function oe(t){return(e,n)=>{let r=!1;for(const i of Zt(t)){const t=ae(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ae(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ut(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rt(e)?"-0":e}}function ue(t){return{integerValue:""+t}}function le(t,e){return it(e)?ue(e):ce(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this._=void 0}}function de(t,e,n){return t instanceof me?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ge?ve(t,e):t instanceof ye?be(t,e):function(t,e){const n=pe(t,e),r=_e(n)+_e(t.C);return pt(n)&&pt(t.C)?ue(r):ce(t.N,r)}(t,e)}function fe(t,e,n){return t instanceof ge?ve(t,e):t instanceof ye?be(t,e):n}function pe(t,e){return t instanceof we?pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class me extends he{}class ge extends he{constructor(t){super(),this.elements=t}}function ve(t,e){const n=Ie(e);for(const r of t.elements)n.some(t=>at(t,r))||n.push(r);return{arrayValue:{values:n}}}class ye extends he{constructor(t){super(),this.elements=t}}function be(t,e){let n=Ie(e);for(const r of t.elements)n=n.filter(t=>!at(t,r));return{arrayValue:{values:n}}}class we extends he{constructor(t,e){super(),this.N=t,this.C=e}}function _e(t){return J(t.integerValue||t.doubleValue)}function Ie(t){return mt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.field=t,this.transform=e}}function Ee(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ge&&e instanceof ge||t instanceof ye&&e instanceof ye?L(t.elements,e.elements,at):t instanceof we&&e instanceof we?at(t.C,e.C):t instanceof me&&e instanceof me}(t.transform,e.transform)}class Se{constructor(t,e){this.version=t,this.transformResults=e}}class ke{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ke}static exists(t){return new ke(void 0,t)}static updateTime(t){return new ke(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ae(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oe{}function Ce(t,e,n){t instanceof Pe?function(t,e,n){const r=t.value.clone(),i=je(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ae(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=je(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xe(t,e,n){t instanceof Pe?function(t,e,n){if(!Ae(t.precondition,e))return;const r=t.value.clone(),i=Fe(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Re(e),r).setHasLocalMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ae(t.precondition,e))return;const r=Fe(t.fieldTransforms,n,e),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(Re(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ae(t.precondition,e)&&e.convertToNoDocument(F.min())}(t,e)}function Ne(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=pe(r.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(r.field,i))}return n||null}function De(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Ee(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Re(t){return t.isFoundDocument()?t.version:F.min()}class Pe extends Oe{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Le extends Oe{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Me(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function je(t,e,n){const r=new Map;b(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fe(o,a,n[i]))}return r}function Fe(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,de(t,s,e))}return r}class Ue extends Oe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ve extends Oe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,Be;function ze(t){switch(t){default:return y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function He(t){if(void 0===t)return m("GRPC error has no .code"),I.UNKNOWN;switch(t){case qe.OK:return I.OK;case qe.CANCELLED:return I.CANCELLED;case qe.UNKNOWN:return I.UNKNOWN;case qe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case qe.INTERNAL:return I.INTERNAL;case qe.UNAVAILABLE:return I.UNAVAILABLE;case qe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case qe.NOT_FOUND:return I.NOT_FOUND;case qe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case qe.ABORTED:return I.ABORTED;case qe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case qe.DATA_LOSS:return I.DATA_LOSS;default:return y()}}(Be=qe||(qe={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t,e){this.comparator=t,this.root=e||Ke.EMPTY}insert(t,e){return new We(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new We(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ge(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ge(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ge(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ge(this.root,t,this.comparator,!0)}}class Ge{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ke.RED,this.left=null!=r?r:Ke.EMPTY,this.right=null!=i?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ke(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ke.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1,Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t){this.comparator=t,this.data=new We(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ye(this.data.getIterator())}getIteratorFrom(t){return new Ye(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Qe(this.comparator);return e.data=t,e}}class Ye{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new We(st.comparator);function Xe(){return Je}const Ze=new We(st.comparator);function tn(){return Ze}const en=new We(st.comparator);function nn(){return en}const rn=new Qe(st.comparator);function sn(...t){let e=rn;for(const n of t)e=e.add(n);return e}const on=new Qe(P);function an(){return on}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e)),new cn(F.min(),n,an(),Xe(),sn())}}class un{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new un(K.EMPTY_BYTE_STRING,e,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class hn{constructor(t,e){this.targetId=t,this.O=e}}class dn{constructor(t,e,n=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class fn{constructor(){this.F=0,this.M=gn(),this.L=K.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=sn(),e=sn(),n=sn();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new un(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=gn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(t){this.tt=t,this.et=new Map,this.nt=Xe(),this.st=mn(),this.it=new Qe(P)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Ot(t))if(0===n){const n=new st(t.path);this.ct(e,n,It.newNoDocument(n,F.min()))}else b(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Ot(i.target)){const e=new st(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.ct(r,e,It.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=sn();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new cn(t,e,this.it,this.nt,n);return this.nt=Xe(),this.st=mn(),this.it=new Qe(P),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new fn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Qe(P),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new fn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function mn(){return new We(st.comparator)}function gn(){return new We(st.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class bn{constructor(t,e){this.databaseId=t,this.D=e}}function wn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _n(t,e){return t.D?e.toBase64():e.toUint8Array()}function In(t,e){return wn(t,e.toTimestamp())}function Tn(t){return b(!!t),F.fromTimestamp(function(t){const e=Y(t);return new j(e.seconds,e.nanos)}(t))}function En(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sn(t){const e=B.fromString(t);return b(Zn(e)),e}function kn(t,e){return En(t.databaseId,e.path)}function An(t,e){const n=Sn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(Nn(n))}function On(t,e){return En(t.databaseId,e)}function Cn(t){const e=Sn(t);return 4===e.length?B.emptyPath():Nn(e)}function xn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Dn(t,e,n){return{name:kn(t,e),fields:n.value.mapValue.fields}}function Rn(t,e,n){const r=An(t,e.name),i=Tn(e.updateTime),s=new wt({mapValue:{fields:e.fields}}),o=It.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Pn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=An(t,e.found.name),r=Tn(e.found.updateTime),i=new wt({mapValue:{fields:e.found.fields}});return It.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=An(t,e.missing),r=Tn(e.readTime);return It.newNoDocument(n,r)}(t,e):y()}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(b(void 0===e||"string"==typeof e),K.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),K.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?I.UNKNOWN:He(t.code);return new T(e,t.message||"")}(o);n=new dn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=An(t,r.document.name),s=Tn(r.document.updateTime),o=new wt({mapValue:{fields:r.document.fields}}),a=It.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ln(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=An(t,r.document),s=r.readTime?Tn(r.readTime):F.min(),o=It.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=An(t,r.document),s=r.removedTargetIds||[];n=new ln([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new $e(r),s=t.targetId;n=new hn(s,i)}}return n}function Mn(t,e){let n;if(e instanceof Pe)n={update:Dn(t,e.key,e.value)};else if(e instanceof Ue)n={delete:kn(t,e.key)};else if(e instanceof Le)n={update:Dn(t,e.key,e.data),updateMask:Xn(e.fieldMask)};else{if(!(e instanceof Ve))return y();n={verify:kn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ye)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:In(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function jn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?ke.updateTime(Tn(t.updateTime)):void 0!==t.exists?ke.exists(t.exists):ke.none()}(e.currentDocument):ke.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new me;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ge(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ye(t)}else"increment"in e?n=new we(t,e.increment):y();const r=H.fromServerFormat(e.fieldPath);return new Te(r,n)}(t,e)):[];if(e.update){e.update.name;const i=An(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new W(e.map(t=>H.fromServerFormat(t)))}(e.updateMask);return new Le(i,s,t,n,r)}return new Pe(i,s,n,r)}if(e.delete){const r=An(t,e.delete);return new Ue(r,n)}if(e.verify){const r=An(t,e.verify);return new Ve(r,n)}return y()}function Fn(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Tn(t.updateTime):Tn(e);return n.isEqual(F.min())&&(n=Tn(e)),new Se(n,t.transformResults||[])}(t,e))):[]}function Un(t,e){return{documents:[On(t,e.path)]}}function Vn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=On(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=On(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(vt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(t.field),op:Gn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Kn(t.field),direction:Wn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||nt(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=zn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zn(e.endAt)),n}function $n(t){let e=Cn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Bn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new $t(Qn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Hn(n.startAt));let u=null;return n.endAt&&(u=Hn(n.endAt)),Wt(e,i,o,s,a,"F",c,u)}function qn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bn(t){return t?void 0!==t.unaryFilter?[Jn(t)]:void 0!==t.fieldFilter?[Yn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Bn(t)).reduce((t,e)=>t.concat(e)):y():[]}function zn(t){return{before:t.before,values:t.position}}function Hn(t){const e=!!t.before,n=t.values||[];return new Ut(n,e)}function Wn(t){return vn[t]}function Gn(t){return yn[t]}function Kn(t){return{fieldPath:t.canonicalString()}}function Qn(t){return H.fromServerFormat(t.fieldPath)}function Yn(t){return Ct.create(Qn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Jn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qn(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qn(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qn(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qn(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Xn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nr(e)),e=er(t.get(n),e);return nr(e)}function er(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function nr(t){return t+""}function rr(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),B.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&y(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=t.substring(s,e),i+="\0";break;case"":i+=t.substring(s,e+1);break;default:y()}s=e+2}return new B(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class sr{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}sr.store="owner",sr.key="owner";class or{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}or.store="mutationQueues",or.keyPath="userId";class ar{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ar.store="mutations",ar.keyPath="batchId",ar.userMutationsIndex="userMutationsIndex",ar.userMutationsKeyPath=["userId","batchId"];class cr{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,tr(e)]}static key(t,e,n){return[t,tr(e),n]}}cr.store="documentMutations",cr.PLACEHOLDER=new cr;class ur{constructor(t,e){this.path=t,this.readTime=e}}class lr{constructor(t,e){this.path=t,this.version=e}}class hr{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}hr.store="remoteDocuments",hr.readTimeIndex="readTimeIndex",hr.readTimeIndexPath="readTime",hr.collectionReadTimeIndex="collectionReadTimeIndex",hr.collectionReadTimeIndexPath=["parentPath","readTime"];class dr{constructor(t){this.byteSize=t}}dr.store="remoteDocumentGlobal",dr.key="remoteDocumentGlobalKey";class fr{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fr.store="targets",fr.keyPath="targetId",fr.queryTargetsIndexName="queryTargetsIndex",fr.queryTargetsKeyPath=["canonicalId","targetId"];class pr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}pr.store="targetDocuments",pr.keyPath=["targetId","path"],pr.documentTargetsIndex="documentTargetsIndex",pr.documentTargetsKeyPath=["path","targetId"];class mr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}mr.key="targetGlobalKey",mr.store="targetGlobal";class gr{constructor(t,e){this.collectionId=t,this.parent=e}}gr.store="collectionParents",gr.keyPath=["collectionId","parent"];class vr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}vr.store="clientMetadata",vr.keyPath="clientId";class yr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}yr.store="bundles",yr.keyPath="bundleId";class br{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}br.store="namedQueries",br.keyPath="name";const wr=[or.store,ar.store,cr.store,hr.store,fr.store,sr.store,mr.store,pr.store,vr.store,dr.store,gr.store,yr.store,br.store],_r="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ir{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tr?e:Tr.resolve(e)}catch(t){return Tr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.reject(e)}static resolve(t){return new Tr((e,n)=>{e(t)})}static reject(t){return new Tr((e,n)=>{n(t)})}static waitFor(t){return new Tr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Tr.resolve(!1);for(const n of t)e=e.next(t=>t?Tr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.Et=new E,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{e.error?this.Et.reject(new Ar(t,e.error)):this.Et.resolve()},this.transaction.onerror=e=>{const n=Dr(e.target.error);this.Et.reject(new Ar(t,n))}}static open(t,e,n,r){try{return new Er(e,t.transaction(r,n))}catch(t){throw new Ar(e,t)}}get It(){return this.Et.promise}abort(t){t&&this.Et.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Cr(e)}}class Sr{constructor(t,e,n){this.name=t,this.version=e,this.At=n,12.2===Sr.Rt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),xr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Sr.Pt())return!0;const t=Object(o["l"])(),e=Sr.Rt(t),n=0<e&&e<10,r=Sr.vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static Pt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyDO9eCHD8CX04dmUWcravflVbWnDskI0LI",VUE_APP_FIREBASE_AUTH_DOMAIN:"queue-app-8370f.firebaseapp.com",VUE_APP_FIREBASE_PROJECT_ID:"queue-app-8370f",VUE_APP_FIREBASE_STORAGE_BUCKET:"queue-app-8370f.appspot.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"676140542433",VUE_APP_FIREBASE_APP_ID:"1:676140542433:web:ddf51192fcf8635138caa0",VUE_APP_MEASUREMENT_ID:"G-NH3X1K4NF8",BASE_URL:"/ezcut-app/"}))||void 0===e?void 0:e.Vt)}static St(t,e){return t.store(e)}static Rt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Ar(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ar(t,r))},r.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.At.Ct(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(t){this.Nt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Dt(t);const e=Er.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).catch(t=>(e.abort(t),Tr.reject(t))).toPromise();return s.catch(()=>{}),await e.It,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kr{constructor(t){this.kt=t,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(t){this.kt=t}done(){this.$t=!0}Mt(t){this.Ot=t}delete(){return xr(this.kt.delete())}}class Ar extends T{constructor(t,e){super(I.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Or(t){return"IndexedDbTransactionError"===t.name}class Cr{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),xr(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),xr(this.store.add(t))}get(t){return xr(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),xr(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),xr(this.store.count())}Lt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Bt(n,(t,e)=>{r.push(e)}).next(()=>r)}Ut(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.qt=!1;const r=this.cursor(n);return this.Bt(r,(t,e,n)=>n.delete())}Kt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Bt(r,e)}jt(t){const e=this.cursor({});return new Tr((n,r)=>{e.onerror=t=>{const e=Dr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Bt(t,e){const n=[];return new Tr((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new kr(i),o=e(i.primaryKey,i.value,s);if(o instanceof Tr){const t=o.catch(t=>(s.done(),Tr.reject(t)));n.push(t)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}}).next(()=>Tr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.qt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xr(t){return new Tr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Dr(t.target.error);n(e)}})}let Nr=!1;function Dr(t){const e=Sr.Rt(Object(o["l"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nr||(Nr=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ir{constructor(t,e){super(),this.Qt=t,this.currentSequenceNumber=e}}function Pr(t,e){const n=_(t);return Sr.St(n.Qt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ce(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(F.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>De(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>De(t,e))}}class Mr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){b(t.mutations.length===n.length);let r=nn();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Mr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,n,r,i=F.min(),s=F.min(),o=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.Wt=t}}function Ur(t,e){if(e.document)return Rn(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=st.fromSegments(e.noDocument.path),n=zr(e.noDocument.readTime),r=It.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=st.fromSegments(e.unknownDocument.path),n=zr(e.unknownDocument.version);return It.newUnknownDocument(t,n)}return y()}function Vr(t,e,n){const r=$r(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:kn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:wn(t,e.version.toTimestamp())}}(t.Wt,e),s=e.hasCommittedMutations;return new hr(null,null,n,s,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Br(e.version),s=e.hasCommittedMutations;return new hr(null,new ur(t,n),null,s,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Br(e.version);return new hr(new lr(t,n),null,null,!0,r,i)}return y()}function $r(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qr(t){const e=new j(t[0],t[1]);return F.fromTimestamp(e)}function Br(t){const e=t.toTimestamp();return new ir(e.seconds,e.nanoseconds)}function zr(t){const e=new j(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function Hr(t,e){const n=(e.baseMutations||[]).map(e=>jn(t.Wt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(e=>jn(t.Wt,e)),i=j.fromMillis(e.localWriteTimeMs);return new Lr(e.batchId,i,n,r)}function Wr(t){const e=zr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?zr(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return void 0!==t.query.documents?(b(1===(i=t.query).documents.length),r=te(Gt(Cn(i.documents[0])))):r=function(t){return te($n(t))}(t.query),new jr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,K.fromBase64String(t.resumeToken))}function Gr(t,e){const n=Br(e.snapshotVersion),r=Br(e.lastLimboFreeSnapshotVersion);let i;i=Ot(e.target)?Un(t.Wt,e.target):Vn(t.Wt,e.target);const s=e.resumeToken.toBase64();return new fr(e.targetId,St(e.target),n,s,e.sequenceNumber,r,i)}function Kr(t){const e=$n({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ee(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{getBundleMetadata(t,e){return Yr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:zr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Yr(t).put({bundleId:(n=e).id,createTime:Br(Tn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Jr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Kr(e.bundledQuery),readTime:zr(e.readTime)};var e})}saveNamedQuery(t,e){return Jr(t).put(function(t){return{name:t.name,readTime:Br(Tn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Yr(t){return Pr(t,yr.store)}function Jr(t){return Pr(t,br.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.Gt=new Zr}addToCollectionParentIndex(t,e){return this.Gt.add(e),Tr.resolve()}getCollectionParents(t,e){return Tr.resolve(this.Gt.getEntries(e))}}class Zr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Qe(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Qe(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.zt=new Zr}addToCollectionParentIndex(t,e){if(!this.zt.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.zt.add(e)});const i={collectionId:n,parent:tr(r)};return ei(t).put(i)}return Tr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[M(e),""],!1,!0);return ei(t).Lt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(rr(r.parent))}return n})}}function ei(t){return Pr(t,gr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ri{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ri(t,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e,n){const r=t.store(ar.store),i=t.store(cr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const t=cr.key(e,l.key.path,n.batchId);s.push(i.delete(t)),u.push(l.key)}return Tr.waitFor(s).next(()=>u)}function si(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw y();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);class oi{constructor(t,e,n,r){this.userId=t,this.N=e,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(t,e,n,r){b(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new oi(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Kt({index:ar.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=ui(t),s=ci(t);return s.add({}).next(o=>{b("number"==typeof o);const a=new Lr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>Mn(t.Wt,e)),i=n.mutations.map(e=>Mn(t.Wt,e));return new ar(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),u=[];let l=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));for(const t of r){const e=cr.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(i.put(e,cr.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Ht.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),Tr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return ci(t).get(e).next(t=>t?(b(t.userId===this.userId),Hr(this.N,t)):null)}Xt(t,e){return this.Jt[e]?Tr.resolve(this.Jt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Jt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ci(t).Kt({index:ar.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(b(e.batchId>=n),i=Hr(this.N,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ci(t).Kt({index:ar.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Lt(ar.userMutationsIndex,e).next(t=>t.map(t=>Hr(this.N,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=cr.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return ui(t).Kt({range:r},(n,r,s)=>{const[o,a,c]=n,u=rr(a);if(o===this.userId&&e.path.isEqual(u))return ci(t).get(c).next(t=>{if(!t)throw y();b(t.userId===this.userId),i.push(Hr(this.N,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);const r=[];return e.forEach(e=>{const i=cr.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=ui(t).Kt({range:s},(t,r,i)=>{const[s,o,a]=t,c=rr(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Tr.waitFor(r).next(()=>this.Zt(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=cr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Qe(P);return ui(t).Kt({range:s},(t,e,i)=>{const[s,a,c]=t,u=rr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Zt(t,o))}Zt(t,e){const n=[],r=[];return e.forEach(e=>{r.push(ci(t).get(e).next(t=>{if(null===t)throw y();b(t.userId===this.userId),n.push(Hr(this.N,t))}))}),Tr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return ii(t.Qt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.te(e.batchId)}),Tr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}te(t){delete this.Jt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Tr.resolve();const n=IDBKeyRange.lowerBound(cr.prefixForUser(this.userId)),r=[];return ui(t).Kt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=rr(t[1]);r.push(e)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(t,e){return ai(t,this.userId,e)}ee(t){return li(t).get(this.userId).next(t=>t||new or(this.userId,-1,""))}}function ai(t,e,n){const r=cr.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ui(t).Kt({range:s,qt:!0},(t,n,r)=>{const[s,a,c]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function ci(t){return Pr(t,ar.store)}function ui(t){return Pr(t,cr.store)}function li(t){return Pr(t,or.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new hi(0)}static ie(){return new hi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e){this.referenceDelegate=t,this.N=e}allocateTargetId(t){return this.re(t).next(e=>{const n=new hi(e.highestTargetId);return e.highestTargetId=n.next(),this.oe(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.re(t).next(t=>F.fromTimestamp(new j(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.re(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.re(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.oe(t,r)))}addTargetData(t,e){return this.ce(t,e).next(()=>this.re(t).next(n=>(n.targetCount+=1,this.ae(e,n),this.oe(t,n))))}updateTargetData(t,e){return this.ce(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>fi(t).delete(e.targetId)).next(()=>this.re(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.oe(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return fi(t).Kt((s,o)=>{const a=Wr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>Tr.waitFor(i)).next(()=>r)}forEachTarget(t,e){return fi(t).Kt((t,n)=>{const r=Wr(n);e(r)})}re(t){return pi(t).get(mr.key).next(t=>(b(null!==t),t))}oe(t,e){return pi(t).put(mr.key,e)}ce(t,e){return fi(t).put(Gr(this.N,e))}ae(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.re(t).next(t=>t.targetCount)}getTargetData(t,e){const n=St(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return fi(t).Kt({range:r,index:fr.queryTargetsIndexName},(t,n,r)=>{const s=Wr(n);At(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=mi(t);return e.forEach(e=>{const s=tr(e.path);r.push(i.put(new pr(n,s))),r.push(this.referenceDelegate.addReference(t,n,e))}),Tr.waitFor(r)}removeMatchingKeys(t,e,n){const r=mi(t);return Tr.forEach(e,e=>{const i=tr(e.path);return Tr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=mi(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=mi(t);let i=sn();return r.Kt({range:n,qt:!0},(t,e,n)=>{const r=rr(t[1]),s=new st(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=tr(e.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let i=0;return mi(t).Kt({index:pr.documentTargetsIndex,qt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Tt(t,e){return fi(t).get(e).next(t=>t?Wr(t):null)}}function fi(t){return Pr(t,fr.store)}function pi(t){return Pr(t,mr.store)}function mi(t){return Pr(t,pr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==_r)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi([t,e],[n,r]){const i=P(t,n);return 0===i?P(e,r):i}class yi{constructor(t){this.ue=t,this.buffer=new Qe(vi),this.he=0}le(){return++this.he}fe(t){const e=[t,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();vi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bi{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.de=!1,this.we=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(t)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(t){const e=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.we=null,this.de=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Or(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gi(t)}await this._e(t)})}}class wi{constructor(t,e){this.me=t,this.params=e}calculateTargetCount(t,e){return this.me.ge(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Tr.resolve(N.T);const n=new yi(e);return this.me.forEachTarget(t,t=>n.fe(t.sequenceNumber)).next(()=>this.me.ye(t,t=>n.fe(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.me.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.me.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Tr.resolve(ni)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ni):this.pe(t,e))}getCacheSize(t){return this.me.getCacheSize(t)}pe(t,e){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Tr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new wi(t,e)}(this,e)}ge(t){const e=this.Te(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Te(t){let e=0;return this.ye(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}ye(t,e){return this.Ee(t,(t,n)=>e(n))}addReference(t,e,n){return Ii(t,n)}removeReference(t,e,n){return Ii(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ii(t,e)}Ie(t,e){return function(t,e){let n=!1;return li(t).jt(r=>ai(t,r,e).next(t=>(t&&(n=!0),Tr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ee(t,(s,o)=>{if(o<=e){const e=this.Ie(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s),mi(t).delete([0,tr(s.path)])))});r.push(e)}}).next(()=>Tr.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ii(t,e)}Ee(t,e){const n=mi(t);let r,i=N.T;return n.Kt({index:pr.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==N.T&&e(new st(rr(r)),i),i=o,r=s):i=N.T}).next(()=>{i!==N.T&&e(new st(rr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ii(t,e){return mi(t).put(function(t,e){return new pr(0,tr(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return $(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.changes=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:F.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:It.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Tr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.N=t,this.Ht=e}addEntry(t,e,n){return Oi(t).put(Ci(e),n)}removeEntry(t,e){const n=Oi(t),r=Ci(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Ae(t,n)))}getEntry(t,e){return Oi(t).get(Ci(e)).next(t=>this.Re(e,t))}be(t,e){return Oi(t).get(Ci(e)).next(t=>({document:this.Re(e,t),size:si(t)}))}getEntries(t,e){let n=Xe();return this.Pe(t,e,(t,e)=>{const r=this.Re(t,e);n=n.insert(t,r)}).next(()=>n)}ve(t,e){let n=Xe(),r=new We(st.comparator);return this.Pe(t,e,(t,e)=>{const i=this.Re(t,e);n=n.insert(t,i),r=r.insert(t,si(e))}).next(()=>({documents:n,Ve:r}))}Pe(t,e,n){if(e.isEmpty())return Tr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let s=i.getNext();return Oi(t).Kt({range:r},(t,e,r)=>{const o=st.fromSegments(t);for(;s&&st.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,e),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=Xe();const i=e.path.length+1,s={};if(n.isEqual(F.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=$r(n);s.range=IDBKeyRange.lowerBound([t,r],!0),s.index=hr.collectionReadTimeIndex}return Oi(t).Kt(s,(t,n,s)=>{if(t.length!==i)return;const o=Ur(this.N,n);e.path.isPrefixOf(o.key.path)?se(e,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(t){return new ki(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Ai(t).get(dr.key).next(t=>(b(!!t),t))}Ae(t,e){return Ai(t).put(dr.key,e)}Re(t,e){if(e){const t=Ur(this.N,e);if(!t.isNoDocument()||!t.version.isEqual(F.min()))return t}return It.newInvalidDocument(t)}}class ki extends Ei{constructor(t,e){super(),this.Se=t,this.trackRemovals=e,this.De=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=Vr(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=si(a);n+=c-o,e.push(this.Se.addEntry(t,i,a))}else if(n-=o,this.trackRemovals){const n=Vr(this.Se.N,It.newNoDocument(i,F.min()),this.getReadTime(i));e.push(this.Se.addEntry(t,i,n))}else e.push(this.Se.removeEntry(t,i))}),r.forEach(n=>{e.push(this.Se.Ht.addToCollectionParentIndex(t,n))}),e.push(this.Se.updateMetadata(t,n)),Tr.waitFor(e)}getFromCache(t,e){return this.Se.be(t,e).next(t=>(this.De.set(e,t.size),t.document))}getAllFromCache(t,e){return this.Se.ve(t,e).next(({documents:t,Ve:e})=>(e.forEach((t,e)=>{this.De.set(t,e)}),t))}}function Ai(t){return Pr(t,dr.store)}function Oi(t){return Pr(t,hr.store)}function Ci(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t){this.N=t}Ct(t,e,n,r){b(n<r&&n>=0&&r<=11);const i=new Er("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(sr.store)}(t),function(t){t.createObjectStore(or.store,{keyPath:or.keyPath}),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0}),t.createObjectStore(cr.store)}(t),Ni(t),function(t){t.createObjectStore(hr.store)}(t));let s=Tr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(pr.store),t.deleteObjectStore(fr.store),t.deleteObjectStore(mr.store)}(t),Ni(t)),s=s.next(()=>function(t){const e=t.store(mr.store),n=new mr(0,0,F.min().toTimestamp(),0);return e.put(mr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ar.store).Lt().next(n=>{t.deleteObjectStore(ar.store),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0});const r=e.store(ar.store),i=n.map(t=>r.put(t));return Tr.waitFor(i)})}(t,i))),s=s.next(()=>{!function(t){t.createObjectStore(vr.store,{keyPath:vr.keyPath})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Ce(i))),n<6&&r>=6&&(s=s.next(()=>(function(t){t.createObjectStore(dr.store)}(t),this.Ne(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.ke(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(hr.store);e.createIndex(hr.readTimeIndex,hr.readTimeIndexPath,{unique:!1}),e.createIndex(hr.collectionReadTimeIndex,hr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(s=s.next(()=>this.$e(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(yr.store,{keyPath:yr.keyPath})}(t),function(t){t.createObjectStore(br.store,{keyPath:br.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}Ne(t){let e=0;return t.store(hr.store).Kt((t,n)=>{e+=si(n)}).next(()=>{const n=new dr(e);return t.store(dr.store).put(dr.key,n)})}Ce(t){const e=t.store(or.store),n=t.store(ar.store);return e.Lt().next(e=>Tr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Lt(ar.userMutationsIndex,r).next(n=>Tr.forEach(n,n=>{b(n.userId===e.userId);const r=Hr(this.N,n);return ii(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(pr.store),n=t.store(hr.store);return t.store(mr.store).get(mr.key).next(t=>{const r=[];return n.Kt((n,i)=>{const s=new B(n),o=function(t){return[0,tr(t)]}(s);r.push(e.get(o).next(n=>n?Tr.resolve():(n=>e.put(new pr(0,tr(n),t.highestListenSequenceNumber)))(s)))}).next(()=>Tr.waitFor(r))})}ke(t,e){t.createObjectStore(gr.store,{keyPath:gr.keyPath});const n=e.store(gr.store),r=new Zr,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:tr(r)})}};return e.store(hr.store).Kt({qt:!0},(t,e)=>{const n=new B(t);return i(n.popLast())}).next(()=>e.store(cr.store).Kt({qt:!0},([t,e,n],r)=>{const s=rr(e);return i(s.popLast())}))}$e(t){const e=t.store(fr.store);return e.Kt((t,n)=>{const r=Wr(n),i=Gr(this.N,r);return e.put(i)})}}function Ni(t){t.createObjectStore(pr.store,{keyPath:pr.keyPath}).createIndex(pr.documentTargetsIndex,pr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(fr.store,{keyPath:fr.keyPath}).createIndex(fr.queryTargetsIndexName,fr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(mr.store)}const Di="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ri{constructor(t,e,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=t=>Promise.resolve(),!Ri.bt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _i(this,r),this.We=e+"main",this.N=new Fr(a),this.Ge=new Sr(this.We,11,new xi(this.N)),this.ze=new di(this.referenceDelegate,this.N),this.Ht=new ti,this.He=function(t,e){return new Si(t,e)}(this.N,this.Ht),this.Je=new Qr,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Di);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ze.getHighestSequenceNumber(t))}).then(t=>{this.Le=new N(t,this.Fe)}).then(()=>{this.Be=!0}).catch(t=>(this.Ge&&this.Ge.close(),Promise.reject(t)))}nn(t){return this.Qe=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ge.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Li(t).put(new vr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(t)).next(e=>this.isPrimary&&!e?this.on(t).next(()=>!1):!!e&&this.cn(t).next(()=>!0))).catch(t=>{if(Or(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.Qe(t)),this.isPrimary=t})}sn(t){return Pi(t).get(sr.key).next(t=>Tr.resolve(this.an(t)))}un(t){return Li(t).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Pr(t,vr.store);return e.Lt().next(t=>{const n=this.fn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Tr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ye)for(const e of t)this.Ye.removeItem(this.dn(e.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}an(t){return!!t&&t.ownerId===this.clientId}rn(t){return this.Me?Tr.resolve(!0):Pi(t).get(sr.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)){if(this.an(e)&&this.networkEnabled)return!0;if(!this.an(e)){if(!e.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Di);return!1}}return!(!this.networkEnabled||!this.inForeground)||Li(t).Lt().next(t=>void 0===this.fn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[sr.store,vr.store],t=>{const e=new Rr(t,N.T);return this.on(e).next(()=>this.un(e))}),this.Ge.close(),this.yn()}fn(t,e){return t.filter(t=>this.ln(t.updateTimeMs,e)&&!this.wn(t.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",t=>Li(t).Lt().next(t=>this.fn(t,18e5).map(t=>t.clientId)))}get started(){return this.Be}getMutationQueue(t){return oi.Yt(t,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.Ge.runTransaction(t,r,wr,r=>(i=new Rr(r,this.Le?this.Le.next():N.T),"readwrite-primary"===e?this.sn(i).next(t=>!!t||this.rn(i)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(I.FAILED_PRECONDITION,_r);return n(i)}).next(t=>this.cn(i).next(()=>t)):this.Tn(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}Tn(t){return Pi(t).get(sr.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.an(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,Di)})}cn(t){const e=new sr(this.clientId,this.allowTabSynchronization,Date.now());return Pi(t).put(sr.key,e)}static bt(){return Sr.bt()}on(t){const e=Pi(t);return e.get(sr.key).next(t=>this.an(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(sr.key)):Tr.resolve())}ln(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["v"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(t){var e;try{const n=null!==(null===(e=this.Ye)||void 0===e?void 0:e.getItem(this.dn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(t){}}dn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Pi(t){return Pr(t,sr.store)}function Li(t){return Pr(t,vr.store)}function Mi(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(t,e){this.progress=t,this.En=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Xt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new st(e)).next(t=>{let e=tn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=tn();return this.Ht.getCollectionParents(t,r).next(s=>Tr.forEach(s,s=>{const o=function(t,e){return new Ht(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=It.newInvalidDocument(n),r=r.insert(n,i)),xe(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{se(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=sn();for(const s of e)for(const t of s.mutations)t instanceof Le&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=sn(),r=sn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ui(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(F.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const o=this.Mn(e,i);return(Kt(e)||Qt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ie(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Qe(oe(t));return e.forEach((e,r)=>{se(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ie(e)),this.On.getDocumentsMatchingQuery(t,e,F.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new We(P),this.qn=new Ti(t=>St(t),At),this.Kn=F.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Fi(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function qi(t,e,n,r){return new $i(t,e,n,r)}async function Bi(t,e){const n=_(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Fi(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=sn();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function zi(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Tr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Hi(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Wi(t,e){const n=_(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return b(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Xe();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Gi(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(F.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Tr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Gi(t,e,n,r,i){let s=sn();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Xe();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(F.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Ki(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Qi(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,Tr.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new jr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Yi(t,e,n){const r=_(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Or(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Ji(t,e,n){const r=_(t);let i=F.min(),s=sn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=_(t),i=r.qn.get(n);return void 0!==i?Tr.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,te(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:F.min(),n?s:sn())).next(t=>({documents:t,Gn:s})))}function Xi(t,e){const n=_(t),r=_(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Tt(t,e).next(t=>t?t.target:null))}function Zi(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=_(t);let i=Xe(),s=$r(n);const o=Oi(e),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:hr.readTimeIndex,range:a},(t,e)=>{const n=Ur(r.N,e);i=i.insert(n.key,n),s=e.readTime}).next(()=>({En:i,readTime:qr(s)}))}(e.jn,t,e.Kn)).then(({En:t,readTime:n})=>(e.Kn=n,t))}async function ts(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Oi(t);let n=F.min();return e.Kt({index:hr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=qr(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.Kn=t})}async function es(t,e,n,r){const i=_(t);let s=sn(),o=Xe(),a=nn();for(const l of n){const t=e.zn(l.metadata.name);l.document&&(s=s.add(t)),o=o.insert(t,e.Hn(l)),a=a.insert(t,e.Jn(l.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Qi(i,function(t){return te(Gt(B.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>Gi(t,c,o,F.min(),a).next(e=>(c.apply(t),e)).next(e=>i.ze.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.ze.addMatchingKeys(t,s,u.targetId)).next(()=>i.Qn.vn(t,e)).next(()=>e)))}async function ns(t,e,n=sn()){const r=await Qi(t,te(Kr(e.bundledQuery))),i=_(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=Tn(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(t,e);const o=r.withResumeToken(K.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(t,o).next(()=>i.ze.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.ze.addMatchingKeys(t,n,r.targetId)).next(()=>i.Je.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Tr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Tn(n.createTime)}),Tr.resolve()}getNamedQuery(t,e){return Tr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Kr(t.bundledQuery),readTime:Tn(t.readTime)}}(e)),Tr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.Zn=new Qe(ss.ts),this.es=new Qe(ss.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ss(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new ss(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new st(new B([])),n=new ss(e,t),r=new ss(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new st(new B([])),n=new ss(e,t),r=new ss(e,t+1);let i=sn();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new ss(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ss{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return st.comparator(t.key,e.key)||P(t.ls,e.ls)}static ns(t,e){return P(t.ls,e.ls)||st.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Qe(ss.ts)}checkEmpty(t){return Tr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Lr(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new ss(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Tr.resolve(s)}lookupMutationBatch(t,e){return Tr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Tr.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Tr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Tr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ss(e,0),r=new ss(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),Tr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);return e.forEach(t=>{const e=new ss(t,0),r=new ss(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;st.isDocumentKey(i)||(i=i.child(""));const s=new ss(new st(i),0);let o=new Qe(P);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),Tr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Tr.forEach(e.mutations,r=>{const i=new ss(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new ss(e,0),r=this.ds.firstAfterOrEqual(n);return Tr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Tr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new We(st.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Tr.resolve(n?n.document.clone():It.newInvalidDocument(e))}getEntries(t,e){let n=Xe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():It.newInvalidDocument(t))}),Tr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Xe();const i=new st(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||se(e,i)&&(r=r.insert(i.key,i.clone()))}return Tr.resolve(r)}Ts(t,e){return Tr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new cs(this)}getSize(t){return Tr.resolve(this.size)}}class cs extends Ei{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Tr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.persistence=t,this.Es=new Ti(t=>St(t),At),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Is=0,this.As=new is,this.targetCount=0,this.Rs=hi.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),Tr.resolve()}getLastRemoteSnapshotVersion(t){return Tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Tr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Tr.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new hi(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Tr.resolve()}updateTargetData(t,e){return this.ce(e),Tr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Tr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Tr.waitFor(i).next(()=>r)}getTargetCount(t){return Tr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return Tr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Tr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Tr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Tr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Tr.resolve(n)}containsKey(t,e){return Tr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.bs={},this.Le=new N(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new us(this),this.Ht=new Xr,this.He=function(t,e){return new as(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new Fr(e),this.Je=new rs(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new os(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new hs(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Tr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class hs extends Ir{constructor(t){super(),this.currentSequenceNumber=t}}class ds{constructor(t){this.persistence=t,this.Ds=new is,this.Cs=null}static Ns(t){return new ds(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Tr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Tr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Tr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tr.forEach(this.xs,n=>{const r=st.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return Tr.or([()=>Tr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e){return`firestore_clients_${t}_${e}`}function ps(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function ms(t,e){return`firestore_targets_${t}_${e}`}class gs{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static $s(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new gs(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new vs(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ys{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=an();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=it(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ys(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class bs{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new bs(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class ws{constructor(){this.activeTargetIds=an()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _s{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new We(P),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=fs(this.persistenceKey,this.Ls),this.Qs=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ws),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Js=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.pn();for(const n of t){if(n===this.Ls)continue;const t=this.getItem(fs(this.persistenceKey,n));if(t){const e=ys.$s(n,t);e&&(this.qs=this.qs.insert(e.clientId,e))}}this.Ys();const e=this.storage.getItem(this.Hs);if(e){const t=this.Xs(e);t&&this.Zs(t)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Qs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(t){let e=!1;return this.qs.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ei(t,"pending")}updateMutationState(t,e,n){this.ei(t,e,n),this.ni(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ms(this.persistenceKey,t));if(n){const r=vs.$s(t,n);r&&(e=r.state)}}return this.si.Fs(t),this.Ys(),e}removeLocalQueryTarget(t){this.si.Ms(t),this.Ys()}isLocalQueryTarget(t){return this.si.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ms(this.persistenceKey,t))}updateQueryState(t,e,n){this.ii(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.ni(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.ri(t)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Us(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Ws.test(e.key)){if(null==e.newValue){const t=this.ci(e.key);return this.ai(t,null)}{const t=this.ui(e.key,e.newValue);if(t)return this.ai(t.clientId,t)}}else if(this.Gs.test(e.key)){if(null!==e.newValue){const t=this.hi(e.key,e.newValue);if(t)return this.li(t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.fi(e.key,e.newValue);if(t)return this.di(t)}}else if(e.key===this.Hs){if(null!==e.newValue){const t=this.Xs(e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.Qs){const t=function(t){let e=N.T;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==N.T&&this.sequenceNumberHandler(t)}else if(e.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(e)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(t,e,n){const r=new gs(this.currentUser,t,e,n),i=ps(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}ni(t){const e=ps(this.persistenceKey,this.currentUser,t);this.removeItem(e)}ri(t){const e={clientId:this.Ls,onlineState:t};this.storage.setItem(this.Hs,JSON.stringify(e))}ii(t,e,n){const r=ms(this.persistenceKey,t),i=new vs(t,e,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ci(t){const e=this.Ws.exec(t);return e?e[1]:null}ui(t,e){const n=this.ci(t);return ys.$s(n,e)}hi(t,e){const n=this.Gs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return gs.$s(new u(i),r,e)}fi(t,e){const n=this.zs.exec(t),r=Number(n[1]);return vs.$s(r,e)}Xs(t){return bs.$s(t)}async li(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine._i(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}di(t){return this.syncEngine.mi(t.targetId,t.state,t.error)}ai(t,e){const n=e?this.qs.insert(t,e):this.qs.remove(t),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(t){this.qs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ti(t){let e=an();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Is{constructor(){this.yi=new ws,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ws,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);p("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Ss[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(e)>=0?e:I.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");p("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new ks({vi:t=>{h?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,a["f"].EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())}),f(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),d.$i(new T(I.UNAVAILABLE,"The operation could not be completed")))}),f(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];b(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=qe[t];if(void 0!==e)return He(e)}(t),n=i.message;void 0===e&&(e=I.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new T(e,n)),u.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}}),f(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){return"undefined"!=typeof window?window:null}function Cs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return new bn(t,!0)}class Ns{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,r,i,s,o){this.Oe=t,this.er=n,this.nr=r,this.sr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Ns(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===I.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===I.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then(t=>{this.ir===e&&this.Er(t)},e=>{t(()=>{const t=new T(I.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)})})}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{e(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.Ir(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget(()=>this.ir===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rs extends Ds{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i),this.N=r}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=Ln(this.N,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?Tn(e.readTime):F.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=xn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Ot(r)?{documents:Un(t,r)}:{query:Vn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_n(t,e.resumeToken):e.snapshotVersion.compareTo(F.min())>0&&(n.readTime=wn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=qn(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=xn(this.N),e.removeTarget=t,this.mr(e)}}class Ps extends Ds{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const e=Fn(t.writeResults,t.commitTime),n=Tn(t.commitTime);return this.listener.Dr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=xn(this.N),this.mr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Mn(this.N,t))};this.mr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(I.UNKNOWN,t.toString())})}Ki(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(I.UNKNOWN,t.toString())})}terminate(){this.kr=!0}}class Ms{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+t.toString()),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(m(e),this.Mr=!1):p("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(t=>{n.enqueueAndForget(async()=>{Ws(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Wr.add(4),await Us(e),e.Hr.set("Unknown"),e.Wr.delete(4),await Fs(e)}(this))})}),this.Hr=new Ms(n,r)}}async function Fs(t){if(Ws(t))for(const e of t.Gr)await e(!0)}async function Us(t){for(const e of t.Gr)await e(!1)}function Vs(t,e){const n=_(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Hs(n)?zs(n):uo(n).hr()&&qs(n,e))}function $s(t,e){const n=_(t),r=uo(n);n.Qr.delete(e),r.hr()&&Bs(n,e),0===n.Qr.size&&(r.hr()?r.wr():Ws(n)&&n.Hr.set("Unknown"))}function qs(t,e){t.Jr.Y(e.targetId),uo(t).br(e)}function Bs(t,e){t.Jr.Y(e),uo(t).Pr(e)}function zs(t){t.Jr=new pn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),uo(t).start(),t.Hr.Lr()}function Hs(t){return Ws(t)&&!uo(t).ur()&&t.Qr.size>0}function Ws(t){return 0===_(t).Wr.size}function Gs(t){t.Jr=void 0}async function Ks(t){t.Qr.forEach((e,n)=>{qs(t,e)})}async function Qs(t,e){Gs(t),Hs(t)?(t.Hr.qr(e),zs(t)):t.Hr.set("Unknown")}async function Ys(t,e,n){if(t.Hr.set("Online"),e instanceof dn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Qr.delete(r),t.Jr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Js(t,n)}else if(e instanceof ln?t.Jr.rt(e):e instanceof hn?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(F.min()))try{const e=await Hi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Qr.get(r);i&&t.Qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(K.EMPTY_BYTE_STRING,n.snapshotVersion)),Bs(t,e);const r=new jr(n.target,e,1,n.sequenceNumber);qs(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Js(t,e)}}async function Js(t,e,n){if(!Or(e))throw e;t.Wr.add(1),await Us(t),t.Hr.set("Offline"),n||(n=()=>Hi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Fs(t)})}function Xs(t,e){return e().catch(n=>Js(t,n,e))}async function Zs(t){const e=_(t),n=lo(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;to(e);)try{const t=await Ki(e.localStore,r);if(null===t){0===e.jr.length&&n.wr();break}r=t.batchId,eo(e,t)}catch(t){await Js(e,t)}no(e)&&ro(e)}function to(t){return Ws(t)&&t.jr.length<10}function eo(t,e){t.jr.push(e);const n=lo(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function no(t){return Ws(t)&&!lo(t).ur()&&t.jr.length>0}function ro(t){lo(t).start()}async function io(t){lo(t).Nr()}async function so(t){const e=lo(t);for(const n of t.jr)e.Sr(n.mutations)}async function oo(t,e,n){const r=t.jr.shift(),i=Mr.from(r,e,n);await Xs(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zs(t)}async function ao(t,e){e&&lo(t).Vr&&await async function(t,e){if(n=e.code,ze(n)&&n!==I.ABORTED){const n=t.jr.shift();lo(t).dr(),await Xs(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Zs(t)}var n}(t,e),no(t)&&ro(t)}async function co(t,e){const n=_(t);e?(n.Wr.delete(2),await Fs(n)):e||(n.Wr.add(2),await Us(n),n.Hr.set("Unknown"))}function uo(t){return t.Yr||(t.Yr=function(t,e,n){const r=_(t);return r.$r(),new Rs(e,r.sr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Ks.bind(null,t),Ci:Qs.bind(null,t),Rr:Ys.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Hs(t)?zs(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Gs(t))})),t.Yr}function lo(t){return t.Xr||(t.Xr=function(t,e,n){const r=_(t);return r.$r(),new Ps(e,r.sr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:io.bind(null,t),Ci:ao.bind(null,t),Cr:so.bind(null,t),Dr:oo.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Zs(t)):(await t.Xr.stop(),t.jr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ho{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ho(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(t,e){if(m("AsyncQueue",`${e}: ${t}`),Or(t))return new T(I.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=tn(),this.sortedSet=new We(this.comparator)}static emptySet(t){return new po(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof po))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new po;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Zr=new We(st.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):y():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal((e,n)=>{t.push(n)}),t}}class go{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new go(t,e,po.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ne(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.no=void 0,this.listeners=[]}}class yo{constructor(){this.queries=new Ti(t=>re(t),ne),this.onlineState="Unknown",this.so=new Set}}async function bo(t,e){const n=_(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vo),i)try{s.no=await n.onListen(r)}catch(t){const n=fo(t,`Initialization of query '${ie(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&To(n)}async function wo(t,e){const n=_(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _o(t,e){const n=_(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ro(i)&&(r=!0);e.no=i}}r&&To(n)}function Io(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function To(t){t.so.forEach(t=>{t.next()})}class Eo{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new go(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.fo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e){this.payload=t,this.byteLength=e}wo(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){this.N=t}zn(t){return An(this.N,t)}Hn(t){return t.metadata.exists?Rn(this.N,t.document,!1):It.newNoDocument(this.zn(t.metadata.name),this.Jn(t.metadata.readTime))}Jn(t){return Tn(t)}}class Ao{constructor(t,e,n){this._o=t,this.localStore=e,this.N=n,this.queries=[],this.documents=[],this.progress=Oo(t)}mo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}yo(t){const e=new Map,n=new ko(this.N);for(const r of t)if(r.metadata.queries){const t=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||sn()).add(t);e.set(n,r)}}return e}async complete(){const t=await es(this.localStore,new ko(this.N),this.documents,this._o.id),e=this.yo(this.documents);for(const n of this.queries)await ns(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new ji(Object.assign({},this.progress),t)}}function Oo(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.key=t}}class xo{constructor(t){this.key=t}}class No{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=sn(),this.mutatedKeys=sn(),this.Io=oe(t),this.Ao=new po(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new mo,r=e?e.Ao:this.Ao;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Kt(this.query)&&r.size===this.query.limit?r.last():null,c=Qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=se(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Io(l,a)>0||c&&this.Io(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Kt(this.query)||Qt(this.query))for(;s.size>this.query.limit;){const t=Kt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ao:s,Po:n,Ln:o,mutatedKeys:i}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const i=t.Po.eo();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Io(t.doc,e.doc)),this.Vo(n);const s=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==i.length||a?{snapshot:new go(this.query,t.Ao,r,i,t.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new mo,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach(t=>this.po=this.po.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=sn(),this.Ao.forEach(t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))});const e=[];return t.forEach(t=>{this.Eo.has(t)||e.push(new xo(t))}),this.Eo.forEach(n=>{t.has(n)||e.push(new Co(n))}),e}No(t){this.po=t.Gn,this.Eo=sn();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return go.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Do{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ro{constructor(t){this.key=t,this.ko=!1}}class Po{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new Ti(t=>re(t),ne),this.Fo=new Map,this.Mo=new Set,this.Lo=new We(st.comparator),this.Bo=new Map,this.Uo=new is,this.qo={},this.Ko=new Map,this.jo=hi.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function Lo(t,e){const n=la(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Qi(n.localStore,te(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Mo(n,e,r,"current"===s),n.isPrimaryClient&&Vs(n.remoteStore,t)}return i}async function Mo(t,e,n,r){t.Wo=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Ln&&(i=await Ji(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Qo(t,e.targetId,o.Do),o.snapshot}(t,e,n,r);const i=await Ji(t.localStore,e,!0),s=new No(e,i.Gn),o=s.bo(i.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Qo(t,n,c.Do);const u=new Do(e,n,s);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function jo(t,e){const n=_(t),r=n.Oo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(t=>!ne(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$s(n.remoteStore,r.targetId),Go(n,r.targetId)}).catch(gi)):(Go(n,r.targetId),await Yi(n.localStore,r.targetId,!0))}async function Fo(t,e,n){const r=ha(t);try{const t=await function(t,e){const n=_(t),r=j.now(),i=e.reduce((t,e)=>t.add(e.key),sn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ne(t,s.get(t.key));null!=e&&o.push(new Le(t.key,e,_t(e.value.mapValue),ke.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qo[t.currentUser.toKey()];r||(r=new We(P)),r=r.insert(e,n),t.qo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Xo(r,t.changes),await Zs(r.remoteStore)}catch(t){const e=fo(t,"Failed to persist write");n.reject(e)}}async function Uo(t,e){const n=_(t);try{const t=await Wi(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Bo.get(e);r&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ko=!0:t.modifiedDocuments.size>0?b(r.ko):t.removedDocuments.size>0&&(b(r.ko),r.ko=!1))}),await Xo(n,t,e)}catch(t){await gi(t)}}function Vo(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.io(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.io(e)&&(r=!0)}),r&&To(n)}(r.eventManager,e),t.length&&r.$o.Rr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $o(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Bo.get(e),s=i&&i.key;if(s){let t=new We(st.comparator);t=t.insert(s,It.newNoDocument(s,F.min()));const n=sn().add(s),i=new cn(F.min(),new Map,new Qe(P),t,n);await Uo(r,i),r.Lo=r.Lo.remove(s),r.Bo.delete(e),Jo(r)}else await Yi(r.localStore,e,!1).then(()=>Go(r,e,n)).catch(gi)}async function qo(t,e){const n=_(t),r=e.batch.batchId;try{const t=await zi(n.localStore,e);Wo(n,r,null),Ho(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,t)}catch(t){await gi(t)}}async function Bo(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(b(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);Wo(r,e,n),Ho(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,t)}catch(n){await gi(n)}}async function zo(t,e){const n=_(t);Ws(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.In.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.Ko.get(t)||[];r.push(e),n.Ko.set(t,r)}catch(t){const n=fo(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ho(t,e){(t.Ko.get(e)||[]).forEach(t=>{t.resolve()}),t.Ko.delete(e)}function Wo(t,e,n){const r=_(t);let i=r.qo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.qo[r.currentUser.toKey()]=i}}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(e=>{t.Uo.containsKey(e)||Ko(t,e)})}function Ko(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&($s(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Jo(t))}function Qo(t,e,n){for(const r of n)r instanceof Co?(t.Uo.addReference(r.key,e),Yo(t,r)):r instanceof xo?(p("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||Ko(t,r.key)):y()}function Yo(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(p("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Jo(t))}function Jo(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new st(B.fromString(e)),r=t.jo.next();t.Bo.set(r,new Ro(n)),t.Lo=t.Lo.insert(n,r),Vs(t.remoteStore,new jr(te(Gt(n.path)),r,2,N.T))}}async function Xo(t,e,n){const r=_(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Wo(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ui.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.$o.Rr(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Tr.forEach(e,e=>Tr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Tr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Or(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function Zo(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Bi(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach(t=>{t.forEach(t=>{t.reject(new T(I.CANCELLED,e))})}),t.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xo(n,t.Wn)}}function ta(t,e){const n=_(t),r=n.Bo.get(e);if(r&&r.ko)return sn().add(r.key);{let t=sn();const r=n.Fo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Ro)}return t}}async function ea(t,e){const n=_(t),r=await Ji(n.localStore,e.query,!0),i=e.view.No(r);return n.isPrimaryClient&&Qo(n,e.targetId,i.Do),i}async function na(t){const e=_(t);return Zi(e.localStore).then(t=>Xo(e,t))}async function ra(t,e,n,r){const i=_(t),s=await function(t,e){const n=_(t),r=_(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Xt(t,e).next(e=>e?n.Qn.Pn(t,e):Tr.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await Zs(i.remoteStore):"acknowledged"===n||"rejected"===n?(Wo(i,e,r||null),Ho(i,e),function(t,e){_(_(t).In).te(e)}(i.localStore,e)):y(),await Xo(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ia(t,e){const n=_(t);if(la(n),ha(n),!0===e&&!0!==n.Qo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await sa(n,t.toArray());n.Qo=!0,await co(n.remoteStore,!0);for(const r of e)Vs(n.remoteStore,r)}else if(!1===e&&!1!==n.Qo){const t=[];let e=Promise.resolve();n.Fo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Go(n,i),Yi(n.localStore,i,!0))),$s(n.remoteStore,i)}),await e,await sa(n,t),function(t){const e=_(t);e.Bo.forEach((t,n)=>{$s(e.remoteStore,n)}),e.Uo.us(),e.Bo=new Map,e.Lo=new We(st.comparator)}(n),n.Qo=!1,await co(n.remoteStore,!1)}}async function sa(t,e,n){const r=_(t),i=[],s=[];for(const o of e){let t;const e=r.Fo.get(o);if(e&&0!==e.length){t=await Qi(r.localStore,te(e[0]));for(const t of e){const e=r.Oo.get(t),n=await ea(r,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await Xi(r.localStore,o);t=await Qi(r.localStore,e),await Mo(r,oa(e),o,!1)}i.push(t)}return r.$o.Rr(s),i}function oa(t){return Wt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function aa(t){const e=_(t);return _(_(e.localStore).persistence).pn()}async function ca(t,e,n,r){const i=_(t);if(i.Qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(e))switch(n){case"current":case"not-current":{const t=await Zi(i.localStore),r=cn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Xo(i,t,r);break}case"rejected":await Yi(i.localStore,e,!0),Go(i,e,r);break;default:y()}}async function ua(t,e,n){const r=la(t);if(r.Qo){for(const t of e){if(r.Fo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await Xi(r.localStore,t),n=await Qi(r.localStore,e);await Mo(r,oa(e),n.targetId,!1),Vs(r.remoteStore,n)}for(const t of n)r.Fo.has(t)&&await Yi(r.localStore,t,!1).then(()=>{$s(r.remoteStore,t),Go(r,t)}).catch(gi)}}function la(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ta.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$o.bind(null,e),e.$o.Rr=_o.bind(null,e.eventManager),e.$o.Go=Io.bind(null,e.eventManager),e}function ha(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bo.bind(null,e),e}function da(t,e,n){const r=_(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=_(t),r=Tn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Je.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(Oo(r));const i=new Ao(r,t.localStore,e.N);let s=await e.zo();for(;s;){const t=await i.mo(s);t&&n._updateProgress(t),s=await e.zo()}const o=await i.complete();await Xo(t,o.En,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Je.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class fa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=xs(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return qi(this.persistence,new Vi,t.initialUser,this.N)}Jo(t){return new ls(ds.Ns,this.N)}Ho(t){return new Is}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends fa{constructor(t,e,n){super(),this.Zo=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ts(this.localStore),await this.Zo.initialize(this,t),await ha(this.Zo.syncEngine),await Zs(this.Zo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Xo(t){return qi(this.persistence,new Vi,t.initialUser,this.N)}Yo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new bi(e,t.asyncQueue)}Jo(t){const e=Mi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ri.withCacheSize(this.cacheSizeBytes):ri.DEFAULT;return new Ri(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Os(),Cs(),this.N,this.sharedClientState,!!this.forceOwnership)}Ho(t){return new Is}}class ma extends pa{constructor(t,e){super(t,e,!1),this.Zo=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Zo.syncEngine;this.sharedClientState instanceof _s&&(this.sharedClientState.syncEngine={_i:ra.bind(null,e),mi:ca.bind(null,e),gi:ua.bind(null,e),pn:aa.bind(null,e),wi:na.bind(null,e)},await this.sharedClientState.start()),await this.persistence.nn(async t=>{await ia(this.Zo.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Ho(t){const e=Os();if(!_s.bt(e))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Mi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new _s(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ga{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zo.bind(null,this.syncEngine),await co(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yo}createDatastore(t){const e=xs(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new As(r));var r;return function(t,e,n){return new Ls(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Vo(this.syncEngine,t,0),s=Es.bt()?new Es:new Ts,new js(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Po(t,e,n,r,i,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await Us(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this.nc=t,this.N=e,this.metadata=new E,this.buffer=new Uint8Array,this.sc=new TextDecoder("utf-8"),this.ic().then(t=>{t&&t.wo()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.nc.cancel()}async getMetadata(){return this.metadata.promise}async zo(){return await this.getMetadata(),this.ic()}async ic(){const t=await this.rc();if(null===t)return null;const e=this.sc.decode(t),n=Number(e);isNaN(n)&&this.oc(`length string (${e}) is not valid number`);const r=await this.cc(n);return new So(JSON.parse(r),t.length+n)}ac(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async rc(){for(;this.ac()<0;)if(await this.uc())break;if(0===this.buffer.length)return null;const t=this.ac();t<0&&this.oc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async cc(t){for(;this.buffer.length<t;)await this.uc()&&this.oc("Reached the end of bundle when more is expected.");const e=this.sc.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}oc(t){throw this.nc.cancel(),new Error("Invalid bundle format: "+t)}async uc(){const t=await this.nc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={documents:e.map(t=>kn(n.N,t))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=Pn(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ue(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=st.fromPath(e);this.mutations.push(new Ve(n,this.precondition(n)))}),await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={writes:e.map(t=>Mn(n.N,t))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=F.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?ke.updateTime(e):ke.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(e)}return ke.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.hc=5,this.ar=new Ns(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const t=new wa(this.datastore),e=this.fc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.dc(t)}))}).catch(t=>{this.dc(t)})})}fc(t){try{const e=this.updateFunction(t);return!nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}dc(t){this.hc>0&&this.wc(t)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(t)}wc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!ze(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=R.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{p("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=fo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ta(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Bi(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ea(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sa(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.Wr.add(3),await Us(n),r&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await Fs(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Sa(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ta(t,new fa)),t.offlineComponents}async function ka(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ea(t,new ga)),t.onlineComponents}function Aa(t){return Sa(t).then(t=>t.persistence)}function Oa(t){return Sa(t).then(t=>t.localStore)}function Ca(t){return ka(t).then(t=>t.remoteStore)}function xa(t){return ka(t).then(t=>t.syncEngine)}async function Na(t){const e=await ka(t),n=e.eventManager;return n.onListen=Lo.bind(null,e.syncEngine),n.onUnlisten=jo.bind(null,e.syncEngine),n}function Da(t){return t.asyncQueue.enqueue(async()=>{const e=await Aa(t),n=await Ca(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Wr.delete(0),Fs(e)}(n)})}function Ra(t){return t.asyncQueue.enqueue(async()=>{const e=await Aa(t),n=await Ca(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Wr.add(0),await Us(e),e.Hr.set("Offline")}(n)})}function Pa(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Qn.An(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=fo(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Oa(t),e,n)),n.promise}function La(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new ya({next:s=>{e.enqueueAndForget(()=>wo(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Eo(Gt(n.path),s,{includeMetadataChanges:!0,fo:!0});return bo(t,o)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function Ma(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Ji(t,e,!0),i=new No(e,r.Gn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=fo(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Oa(t),e,n)),n.promise}function ja(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new ya({next:n=>{e.enqueueAndForget(()=>wo(t,o)),n.fromCache&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Eo(n,s,{includeMetadataChanges:!0,fo:!0});return bo(t,o)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function Fa(t,e){const n=new ya(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).so.add(e),e.next()}(await Na(t),n)),()=>{n.ec(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).so.delete(e)}(await Na(t),n))}}function Ua(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return ka(t).then(t=>t.datastore)}(t);new _a(t.asyncQueue,r,e,n).run()}),n.promise}function Va(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new ba(t,e)}(function(t,e){if(t instanceof Uint8Array)return va(t,e);if(t instanceof ArrayBuffer)return va(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,xs(e));t.asyncQueue.enqueueAndForget(async()=>{da(await xa(t),i,r)})}function $a(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Je.getNamedQuery(t,e))}(await Oa(t),e))}class qa{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ba{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ba&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wa(t,e,n,r){if(!0===e&&!0===r)throw new T(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ga(t){if(!st.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(st.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Ya(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new T(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ja(t,e){if(e<=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wa("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xa({}),this._settingsFrozen=!1,t instanceof Ba?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xa(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new k;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new x(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=za.get(t);e&&(p("ComponentProvider","Removing Datastore"),za.delete(t),e.terminate())}(this),Promise.resolve()}}function tc(t,e,n,r={}){var i;const s=(t=Ya(t,Za))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["f"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._credentials=new A(new S(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ec(this.firestore,t,this._key)}}class nc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nc(this.firestore,t,this._query)}}class rc extends nc{constructor(t,e,n){super(t,e,Gt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ec(this.firestore,null,new st(t))}withConverter(t){return new rc(this.firestore,t,this._path)}}function ic(t,e,...n){if(t=Object(o["k"])(t),Ha("collection","path",e),t instanceof Za){const r=B.fromString(e,...n);return Ka(r),new rc(t,null,r)}{if(!(t instanceof ec||t instanceof rc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ka(r),new rc(t.firestore,null,r)}}function sc(t,e){if(t=Ya(t,Za),Ha("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nc(t,null,function(t){return new Ht(B.emptyPath(),t)}(e))}function oc(t,e,...n){if(t=Object(o["k"])(t),1===arguments.length&&(e=R.I()),Ha("doc","path",e),t instanceof Za){const r=B.fromString(e,...n);return Ga(r),new ec(t,null,new st(r))}{if(!(t instanceof ec||t instanceof rc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ga(r),new ec(t.firestore,t instanceof rc?t.converter:null,new st(r))}}function ac(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),(t instanceof ec||t instanceof rc)&&(e instanceof ec||e instanceof rc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),t instanceof nc&&e instanceof nc&&t.firestore===e.firestore&&ne(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uc{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Ns(this,"async_queue_retry"),this.Rc=()=>{const t=Cs();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=Cs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=Cs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const e=new E;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!Or(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const e=this._c.then(()=>(this.Ec=!0,t().catch(t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ec=!1,t))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const r=ho.createAndSchedule(this,t,e,n,t=>this.Vc(t));return this.yc.push(r),r}bc(){this.Tc&&y()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}function lc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class hc{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=-1;class fc extends Za{constructor(t,e){super(t,e),this.type="firestore",this._queue=new uc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function pc(t){return t._firestoreClient||mc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new qa(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ia(t._credentials,t._queue,r)}function gc(t,e){Sc(t=Ya(t,fc));const n=pc(t),r=t._freezeSettings(),i=new ga;return yc(n,i,new pa(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function vc(t){Sc(t=Ya(t,fc));const e=pc(t),n=t._freezeSettings(),r=new ga;return yc(e,r,new ma(r,n.cacheSizeBytes))}function yc(t,e,n){const r=new E;return t.asyncQueue.enqueue(async()=>{try{await Ta(t,n),await Ea(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function bc(t){if(t._initialized&&!t._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new E;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Sr.bt())return Promise.resolve();const e=t+"main";await Sr.delete(e)}(Mi(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wc(t){return function(t){const e=new E;return t.asyncQueue.enqueueAndForget(async()=>zo(await xa(t),e)),e.promise}(pc(t=Ya(t,fc)))}function _c(t){return Da(pc(t=Ya(t,fc)))}function Ic(t){return Ra(pc(t=Ya(t,fc)))}function Tc(t,e){const n=pc(t=Ya(t,fc)),r=new hc;return Va(n,t._databaseId,e,r),r}function Ec(t,e){return $a(pc(t=Ya(t,fc)),e).then(e=>e?new nc(t,null,e.query):null)}function Sc(t){if(t._initialized||t._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ac(K.fromBase64String(t))}catch(t){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ac(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}class Dc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Pc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new Pc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.Mc(t),r}Lc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.xc(),r}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return tu(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Uc("Document fields must not be empty");if(Rc(this.kc)&&xc.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||xs(t)}jc(t,e,n,r=!1){return new Pc({kc:t,methodName:e,Kc:n,path:H.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=xs(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jc(t,e,n,r,i,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,i);Yc("Data must be an object, but it was:",o,r);const a=Kc(r,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Jc(e,r,n);if(!o.contains(i))throw new T(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);eu(t,i)||t.push(i)}c=new W(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Nc(new wt(a),c,u)}class Fc extends Oc{_toFieldTransform(t){if(2!==t.kc)throw 1===t.kc?t.Uc(this._methodName+"() can only appear at the top level of your update data"):t.Uc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fc}}function Uc(t,e,n){return new Pc({kc:3,Kc:e.settings.Kc,methodName:t._methodName,Fc:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Vc extends Oc{_toFieldTransform(t){return new Te(t.path,new me)}isEqual(t){return t instanceof Vc}}class $c extends Oc{constructor(t,e){super(t),this.Qc=e}_toFieldTransform(t){const e=Uc(this,t,!0),n=this.Qc.map(t=>Gc(t,e)),r=new ge(n);return new Te(t.path,r)}isEqual(t){return this===t}}class qc extends Oc{constructor(t,e){super(t),this.Qc=e}_toFieldTransform(t){const e=Uc(this,t,!0),n=this.Qc.map(t=>Gc(t,e)),r=new ye(n);return new Te(t.path,r)}isEqual(t){return this===t}}class Bc extends Oc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=new we(t.N,le(t.N,this.Wc));return new Te(t.path,e)}isEqual(t){return this===t}}function zc(t,e,n,r){const i=t.jc(1,e,n);Yc("Data must be an object, but it was:",i,r);const s=[],a=wt.empty();V(r,(t,r)=>{const c=Zc(e,t,n);r=Object(o["k"])(r);const u=i.Lc(c);if(r instanceof Fc)s.push(c);else{const t=Gc(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new W(s);return new Dc(a,c,i.fieldTransforms)}function Hc(t,e,n,r,i,s){const a=t.jc(1,e,n),c=[Jc(e,r,n)],u=[i];if(s.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Jc(e,s[o])),u.push(s[o+1]);const l=[],h=wt.empty();for(let f=c.length-1;f>=0;--f)if(!eu(l,c[f])){const t=c[f];let e=u[f];e=Object(o["k"])(e);const n=a.Lc(t);if(e instanceof Fc)l.push(t);else{const r=Gc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new W(l);return new Dc(h,d,a.fieldTransforms)}function Wc(t,e,n,r=!1){return Gc(n,t.jc(r?4:3,e))}function Gc(t,e){if(Qc(t=Object(o["k"])(t)))return Yc("Unsupported field value:",e,t),Kc(t,e);if(t instanceof Oc)return function(t,e){if(!Rc(e.kc))throw e.Uc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Uc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.kc)throw e.Uc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Gc(i,e.Bc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return le(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=j.fromDate(t);return{timestampValue:wn(e.N,n)}}if(t instanceof j){const n=new j(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wn(e.N,n)}}if(t instanceof Cc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ac)return{bytesValue:_n(e.N,t._byteString)};if(t instanceof ec){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:En(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Uc("Unsupported field value: "+Qa(t))}(t,e)}function Kc(t,e){const n={};return $(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,r)=>{const i=Gc(r,e.Oc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Qc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof j||t instanceof Cc||t instanceof Ac||t instanceof ec||t instanceof Oc)}function Yc(t,e,n){if(!Qc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qa(n);throw"an object"===r?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function Jc(t,e,n){if((e=Object(o["k"])(e))instanceof kc)return e._internalPath;if("string"==typeof e)return Zc(t,e);throw tu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Xc=new RegExp("[~\\*/\\[\\]]");function Zc(t,e,n){if(e.search(Xc)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch(r){throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(I.INVALID_ARGUMENT,a+t+c)}function eu(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ru(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ru extends nu{data(){return super.data()}}function iu(t,e){return"string"==typeof e?Zc(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ou extends nu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class au extends ou{data(t={}){return super.data(t)}}class cu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new su(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new au(this._firestore,this._userDataWriter,n.key,n,new su(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new au(t._firestore,t._userDataWriter,n.doc.key,n.doc,new su(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new au(t._firestore,t._userDataWriter,e.doc.key,e.doc,new su(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:uu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function lu(t,e){return t instanceof ou&&e instanceof ou?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof cu&&e instanceof cu&&t._firestore===e._firestore&&cc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){if(Qt(t)&&0===t.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}function fu(t,...e){for(const n of e)t=n._apply(t);return t}class pu extends du{constructor(t,e,n){super(),this.Gc=t,this.zc=e,this.Hc=n,this.type="where"}_apply(t){const e=Mc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Cu(o,s);const e=[];for(const n of o)e.push(Ou(r,t,n));a={arrayValue:{values:e}}}else a=Ou(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Cu(o,s),a=Wc(n,e,o,"in"===s||"not-in"===s);const c=Ct.create(i,s,a);return function(t,e){if(e.v()){const n=Jt(t);if(null!==n&&!n.isEqual(e.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Yt(t);null!==r&&xu(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Gc,this.zc,this.Hc);return new nc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function mu(t,e,n){const r=e,i=iu("where",t);return new pu(i,r,n)}class gu extends du{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new $t(e,n);return function(t,e){if(null===Yt(t)){const n=Jt(t);null!==n&&xu(t,n,e.field)}}(t,r),r}(t._query,this.Gc,this.Jc);return new nc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ht(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function vu(t,e="asc"){const n=e,r=iu("orderBy",t);return new gu(r,n)}class yu extends du{constructor(t,e,n){super(),this.type=t,this.Yc=e,this.Xc=n}_apply(t){return new nc(t.firestore,t.converter,ee(t._query,this.Yc,this.Xc))}}function bu(t){return Ja("limit",t),new yu("limit",t,"F")}function wu(t){return Ja("limitToLast",t),new yu("limitToLast",t,"L")}class _u extends du{constructor(t,e,n){super(),this.type=t,this.Zc=e,this.ta=n}_apply(t){const e=Au(t,this.type,this.Zc,this.ta);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Iu(...t){return new _u("startAt",t,!0)}function Tu(...t){return new _u("startAfter",t,!1)}class Eu extends du{constructor(t,e,n){super(),this.type=t,this.Zc=e,this.ta=n}_apply(t){const e=Au(t,this.type,this.Zc,this.ta);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Su(...t){return new Eu("endBefore",t,!0)}function ku(...t){return new Eu("endAt",t,!1)}function Au(t,e,n,r){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof nu)return function(t,e,n,r,i){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Zt(t))if(o.field.isKeyField())s.push(ft(e,r.key));else{const t=r.data.field(o.field);if(Z(t))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Ut(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Mc(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Xt(t)&&-1!==s.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(B.fromString(s));if(!st.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new st(n);a.push(ft(e,i))}else{const t=Wc(n,r,s);a.push(t)}}return new Ut(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Ou(t,e,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xt(e)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!st.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ft(t,new st(r))}if(n instanceof ec)return ft(t,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||0===t.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function xu(t,e,n){if(!n.isEqual(e))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(X(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return V(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Cc(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=tt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(et(t));default:return null}}convertTimestamp(t){const e=Y(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);b(Zn(n));const r=new Ba(n.get(1),n.get(3)),i=new st(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ru extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ac(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Mc(t)}set(t,e,n){this._verifyNotCommitted();const r=Lu(t,this._firestore),i=Du(r.converter,e,n),s=jc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ke.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof kc?Hc(this._dataReader,"WriteBatch.update",i._key,e,n,r):zc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,ke.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Lu(t,this._firestore);return this._mutations=this._mutations.concat(new Ue(e._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lu(t,e){if((t=Object(o["k"])(t)).firestore!==e)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){t=Ya(t,ec);const e=Ya(t.firestore,fc);return La(pc(e),t._key).then(n=>Yu(e,t,n))}class ju extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ac(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}function Fu(t){t=Ya(t,ec);const e=Ya(t.firestore,fc),n=pc(e),r=new ju(e);return Pa(n,t._key).then(n=>new ou(e,r,t._key,n,new su(null!==n&&n.hasLocalMutations,!0),t.converter))}function Uu(t){t=Ya(t,ec);const e=Ya(t.firestore,fc);return La(pc(e),t._key,{source:"server"}).then(n=>Yu(e,t,n))}function Vu(t){t=Ya(t,nc);const e=Ya(t.firestore,fc),n=pc(e),r=new ju(e);return hu(t._query),ja(n,t._query).then(n=>new cu(e,r,t,n))}function $u(t){t=Ya(t,nc);const e=Ya(t.firestore,fc),n=pc(e),r=new ju(e);return Ma(n,t._query).then(n=>new cu(e,r,t,n))}function qu(t){t=Ya(t,nc);const e=Ya(t.firestore,fc),n=pc(e),r=new ju(e);return ja(n,t._query,{source:"server"}).then(n=>new cu(e,r,t,n))}function Bu(t,e,n){t=Ya(t,ec);const r=Ya(t.firestore,fc),i=Du(t.converter,e,n);return Qu(r,[jc(Mc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ke.none())])}function zu(t,e,n,...r){t=Ya(t,ec);const i=Ya(t.firestore,fc),s=Mc(i);let a;return a="string"==typeof(e=Object(o["k"])(e))||e instanceof kc?Hc(s,"updateDoc",t._key,e,n,r):zc(s,"updateDoc",t._key,e),Qu(i,[a.toMutation(t._key,ke.exists(!0))])}function Hu(t){return Qu(Ya(t.firestore,fc),[new Ue(t._key,ke.none())])}function Wu(t,e){const n=Ya(t.firestore,fc),r=oc(t),i=Du(t.converter,e);return Qu(n,[jc(Mc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function Gu(t,...e){var n,r,i;t=Object(o["k"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||lc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(lc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof ec)l=Ya(t.firestore,fc),h=Gt(t._key.path),u={next:n=>{e[a]&&e[a](Yu(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Ya(t,nc);l=Ya(n.firestore,fc),h=n._query;const r=new ju(l);u={next:t=>{e[a]&&e[a](new cu(l,r,n,t))},error:e[a+1],complete:e[a+2]},hu(t._query)}return function(t,e,n,r){const i=new ya(r),s=new Eo(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>bo(await Na(t),s)),()=>{i.ec(),t.asyncQueue.enqueueAndForget(async()=>wo(await Na(t),s))}}(pc(l),h,c,u)}function Ku(t,e){return Fa(pc(t=Ya(t,fc)),lc(e)?e:{next:e})}function Qu(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>Fo(await xa(t),e,n)),n.promise}(pc(t),e)}function Yu(t,e,n){const r=n.docs.get(e._key),i=new ju(t);return new ou(t,i,e._key,r,new su(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Mc(t)}get(t){const e=Lu(t,this._firestore),n=new Ru(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const r=t[0];if(r.isFoundDocument())return new nu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new nu(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const r=Lu(t,this._firestore),i=Du(r.converter,e,n),s=jc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof kc?Hc(this._dataReader,"Transaction.update",i._key,e,n,r):zc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Lu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Lu(t,this._firestore),n=new ju(this._firestore);return super.get(t).then(t=>new ou(this._firestore,n,e._key,t._document,new su(!1,!1),e.converter))}}function Xu(t,e){return Ua(pc(t=Ya(t,fc)),n=>e(new Ju(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return new Fc("deleteField")}function tl(){return new Vc("serverTimestamp")}function el(...t){return new $c("arrayUnion",t)}function nl(...t){return new qc("arrayRemove",t)}function rl(t){return new Bc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new fc(r,new O(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.2.0",t),Object(r["registerVersion"])(c,"3.2.0","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),s=n("861d"),o=n("b622"),a=o("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===Array||r(e.prototype))?e=void 0:s(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var h=n+t.length,d=c.length,f=a;return void 0!==u&&(u=r(u),f=o),s.call(l,f,(function(r,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":o=u[s.slice(1,-1)];break;default:var a=+s;if(0===a)return r;if(a>d){var l=i(a/10);return 0===l?r:l<=d?void 0===c[l-1]?s.charAt(1):c[l-1]+s.charAt(1):r}o=c[a-1]}return void 0===o?"":o}))}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("825a"),i=n("1626"),s=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if(i(n)){var a=n.call(t,e);return null!==a&&r(a),a}if("RegExp"===s(t))return o.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1862:function(t,e,n){"use strict";var r=n("614a"),i=n("0829"),s=n("1fd5"),o=n("ffa6");const a="@firebase/firestore-compat",c="0.1.5";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(i["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new d(i["b"].fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t){return p(t,["next","error","complete"])}function p(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(t,e){return Object(i["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(i["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(i["x"])(t._delegate)}}class g{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(i["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(i["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new N(this,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","Firestore.collection()")}}doc(t){try{return new I(this,Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new O(this,Object(i["z"])(this._delegate,t))}catch(e){throw T(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(i["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,t=>Object(i["L"])(this._delegate,t)))}loadBundle(t){return Object(i["V"])(this._delegate,t)}namedQuery(t){return Object(i["W"])(this._delegate,t).then(t=>t?new O(this,t):null)}}class v extends i["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new i["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return I.forKey(e,this.firestore,null)}}function y(t){Object(i["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new v(t)}get(t){const e=D(t);return this._delegate.get(e).then(t=>new k(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=D(t);return n?(u("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}}class w{constructor(t){this._delegate=t}set(t,e,n){const r=D(t);return n?(u("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class _{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new A(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=_.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new _(t,new v(t),e),r.set(e,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}static forPath(t,e,n){if(t.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new I(e,new i["d"](e._delegate,n,new i["n"](t)))}static forKey(t,e,n){return new I(e,new i["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new N(this.firestore,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["k"])(t),t instanceof i["d"]&&Object(i["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(i["fb"])(this._delegate,t,e):Object(i["fb"])(this._delegate,t)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,t):Object(i["kb"])(this._delegate,t,e,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...t){const e=E(t),n=S(t,t=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),e.then(t=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new I(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function T(t,e,n){return t.message=t.message.replace(e,n),t}function E(t){for(const e of t)if("object"===typeof e&&!f(e))return e;return{}}function S(t,e){var n,r;let i;return i=f(t[0])?t[0]:f(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class k{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class A extends k{data(t){const e=this._delegate.data(t);return Object(i["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class O{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}where(t,e,n){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(t,e,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(t,e)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(t)))}catch(e){throw T(e,"limit()","Query.limit()")}}limitToLast(t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(t)))}catch(e){throw T(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...t)))}catch(e){throw T(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...t)))}catch(e){throw T(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...t)))}catch(e){throw T(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new O(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...t)))}catch(e){throw T(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(i["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),e.then(t=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=E(t),n=S(t,t=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(i["X"])(this._delegate,e,n)}withConverter(t){return new O(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new A(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new O(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new A(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new A(this._firestore,n))})}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class N extends O{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new I(this.firestore,t):null}doc(t){try{return new I(this.firestore,void 0===t?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","CollectionReference.doc()")}}add(t){return Object(i["u"])(this._delegate,t).then(t=>new I(this.firestore,t))}isEqual(t){return Object(i["cb"])(this._delegate,t._delegate)}withConverter(t){return new N(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function D(t){return Object(i["p"])(t,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...t){this._delegate=new i["f"](...t)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["k"])(t),t instanceof i["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(i["eb"])();return t._methodName="FieldValue.serverTimestamp",new P(t)}static delete(){const t=Object(i["C"])();return t._methodName="FieldValue.delete",new P(t)}static arrayUnion(...t){const e=Object(i["w"])(...t);return e._methodName="FieldValue.arrayUnion",new P(e)}static arrayRemove(...t){const e=Object(i["v"])(...t);return e._methodName="FieldValue.arrayRemove",new P(e)}static increment(t){const e=Object(i["S"])(t);return e._methodName="FieldValue.increment",new P(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:k,Query:O,QueryDocumentSnapshot:A,QuerySnapshot:x,CollectionReference:N,FieldPath:R,FieldValue:P,setLogLevel:y,CACHE_SIZE_UNLIMITED:i["c"]};function M(t,e){t.INTERNAL.registerComponent(new o["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)},"PUBLIC").setServiceProps(Object.assign({},L)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){M(t,(t,e)=>new g(t,e,new m)),t.registerVersion(a,c)}j(r["a"])},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f5a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return Ft})),n.d(e,"c",(function(){return ue})),n.d(e,"d",(function(){return fe})),n.d(e,"e",(function(){return me})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return Zt})),n.d(e,"h",(function(){return de})),n.d(e,"i",(function(){return xr})),n.d(e,"j",(function(){return zi})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return Ir})),n.d(e,"m",(function(){return ve})),n.d(e,"n",(function(){return ye})),n.d(e,"o",(function(){return I})),n.d(e,"p",(function(){return Nt})),n.d(e,"q",(function(){return v})),n.d(e,"r",(function(){return Rn})),n.d(e,"s",(function(){return k})),n.d(e,"t",(function(){return ri})),n.d(e,"u",(function(){return ft})),n.d(e,"w",(function(){return $e})),n.d(e,"x",(function(){return On})),n.d(e,"y",(function(){return $i})),n.d(e,"z",(function(){return xn})),n.d(e,"A",(function(){return qe})),n.d(e,"B",(function(){return Ve})),n.d(e,"C",(function(){return Rt})),n.d(e,"E",(function(){return ze})),n.d(e,"F",(function(){return d})),n.d(e,"G",(function(){return Ye})),n.d(e,"H",(function(){return dn})),n.d(e,"I",(function(){return mn})),n.d(e,"J",(function(){return ni})),n.d(e,"K",(function(){return dt})),n.d(e,"L",(function(){return er})),n.d(e,"M",(function(){return Ge})),n.d(e,"N",(function(){return De})),n.d(e,"O",(function(){return kr})),n.d(e,"P",(function(){return Vr})),n.d(e,"Q",(function(){return ti})),n.d(e,"R",(function(){return _n})),n.d(e,"S",(function(){return Re})),n.d(e,"T",(function(){return Ar})),n.d(e,"U",(function(){return Ur})),n.d(e,"V",(function(){return Xr})),n.d(e,"W",(function(){return Je})),n.d(e,"X",(function(){return Ue})),n.d(e,"Y",(function(){return We})),n.d(e,"Z",(function(){return Ie})),n.d(e,"ab",(function(){return Ne})),n.d(e,"bb",(function(){return Le})),n.d(e,"cb",(function(){return He})),n.d(e,"db",(function(){return Ke})),n.d(e,"eb",(function(){return Sr})),n.d(e,"fb",(function(){return Fr})),n.d(e,"gb",(function(){return Yr})),n.d(e,"hb",(function(){return ke})),n.d(e,"ib",(function(){return en})),n.d(e,"jb",(function(){return nn})),n.d(e,"kb",(function(){return Cr})),n.d(e,"lb",(function(){return tn})),n.d(e,"mb",(function(){return Xe})),n.d(e,"nb",(function(){return Be})),n.d(e,"v",(function(){return _s})),n.d(e,"D",(function(){return bs}));var r=n("1fd5"),i=n("5606"),s=n("9ab4"),o=n("4fc1"),a=n("ffa6");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(t,...e){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,...e){throw _(t,...e)}function y(t,...e){return _(t,...e)}function b(t,e,n){const i=Object.assign(Object.assign({},f()),{[e]:n}),s=new r["b"]("auth","Firebase",i);return s.create(e,{appName:t.name})}function w(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&v(t,"argument-error"),b(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p.create(t,...e)}function I(t,e,...n){if(!t)throw _(e,...n)}function T(t){const e="INTERNAL ASSERTION FAILED: "+t;throw g(e),new Error(e)}function E(t,e){t||T(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function k(t){E(t instanceof Function,"Expected a class definition");let e=S.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,S.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function C(){return"http:"===x()||"https:"===x()}function x(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function D(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["s"])()||Object(r["u"])()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function U(t,e,n,i,s={}){return V(t,s,()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["x"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(L.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),L.fetch()(q(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function V(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),e);try{const e=new B(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw z(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(t,a,o);v(t,a)}}catch(s){if(s instanceof r["c"])throw s;v(t,"network-request-failed")}}async function $(t,e,n,r,i={}){const s=await U(t,e,n,r,i);return"mfaPendingCredential"in s&&v(t,"multi-factor-auth-required",{_serverResponse:s}),s}function q(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?P(t.config,i):`${t.config.apiScheme}://${i}`}class B{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(y(this.auth,"timeout")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return U(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return U(t,"POST","/v1/accounts:update",e)}async function G(t,e){return U(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e=!1){const n=Object(r["k"])(t),i=await n.getIdToken(e),s=J(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:K(Y(s.auth_time)),issuedAtTime:K(Y(s.iat)),expirationTime:K(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(t){return 1e3*Number(t)}function J(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(t){const e=J(t);return I(e,"internal-error"),I("undefined"!==typeof e.exp,"internal-error"),I("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&tt(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Z(t,G(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?ot(s.providerUserInfo):[],a=st(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function it(t){const e=Object(r["k"])(t);await rt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ot(t){return t.map(t=>{var{providerId:e}=t,n=Object(s["d"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){const n=await V(t,{},()=>{const n=Object(r["x"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=q(t,i,"/v1/token","key="+s);return L.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){I(t.idToken,"internal-error"),I("undefined"!==typeof t.idToken,"internal-error"),I("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):X(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return I(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await at(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new ct;return n&&(I("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){I("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class lt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(s["d"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new nt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Z(this,this.stsTokenManager.getToken(this.auth,t));return I(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Q(this,t)}reload(){return it(this)}_assign(t){this!==t&&(I(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new lt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await rt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Z(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:T}=e;I(y&&T,t,"internal-error");const E=ct.fromJSON(this.name,T);I("string"===typeof y,t,"internal-error"),ut(l,t.name),ut(h,t.name),I("boolean"===typeof b,t,"internal-error"),I("boolean"===typeof w,t,"internal-error"),ut(d,t.name),ut(f,t.name),ut(p,t.name),ut(m,t.name),ut(g,t.name),ut(v,t.name);const S=new lt({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map(t=>Object.assign({},t))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new ct;r.updateFromServerResponse(e);const i=new lt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await rt(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ft(this.userKey,r.apiKey,i),this.fullPersistenceKey=ft("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(k(dt),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||k(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=lt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new pt(i,t,n)):new pt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(It(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=Object(r["l"])()){return/firefox\//i.test(t)}function vt(t=Object(r["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=Object(r["l"])()){return/crios\//i.test(t)}function bt(t=Object(r["l"])()){return/iemobile/i.test(t)}function wt(t=Object(r["l"])()){return/android/i.test(t)}function _t(t=Object(r["l"])()){return/blackberry/i.test(t)}function It(t=Object(r["l"])()){return/webos/i.test(t)}function Tt(t=Object(r["l"])()){return/iphone|ipad|ipod/i.test(t)}function Et(t=Object(r["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function St(t=Object(r["l"])()){var e;return Tt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function kt(){return Object(r["q"])()&&10===document.documentMode}function At(t=Object(r["l"])()){return Tt(t)||wt(t)||It(t)||_t(t)||/windows phone/i.test(t)||bt(t)}function Ot(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=mt(Object(r["l"])());break;case"Worker":n=`${mt(Object(r["l"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dt(this),this.idTokenSubscription=new Dt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=k(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await pt.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await rt(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["k"])(t):null;return e&&I(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&I(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&k(t)||this._popupRedirectResolver;I(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[k(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Nt(t){return Object(r["k"])(t)}class Dt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["g"])(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rt(t,e,n){const r=Nt(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Pt(e),{host:o,port:a}=Lt(e),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jt()}function Pt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lt(t){const e=Pt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Mt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Mt(e)}}}function Mt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return T("not implemented")}_getIdTokenResponse(t){return T("not implemented")}_linkToIdToken(t,e){return T("not implemented")}_getReauthenticationResolver(t){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return U(t,"POST","/v1/accounts:resetPassword",F(t,e))}async function Vt(t,e){return U(t,"POST","/v1/accounts:update",e)}async function $t(t,e){return U(t,"POST","/v1/accounts:update",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return $(t,"POST","/v1/accounts:signInWithPassword",F(t,e))}async function Bt(t,e){return U(t,"POST","/v1/accounts:sendOobCode",F(t,e))}async function zt(t,e){return Bt(t,e)}async function Ht(t,e){return Bt(t,e)}async function Wt(t,e){return Bt(t,e)}async function Gt(t,e){return Bt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}async function Qt(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ft{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Yt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Yt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return qt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Vt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qt(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return $(t,"POST","/v1/accounts:signInWithIdp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="http://localhost";class Zt extends Ft{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(s["d"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Zt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}buildRequest(){const t={requestUri:Xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["x"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return U(t,"POST","/v1/accounts:sendVerificationCode",F(t,e))}async function ee(t,e){return $(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e))}async function ne(t,e){const n=await $(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e));if(n.temporaryProof)throw z(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function ie(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ft{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ie(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new se({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=Object(r["y"])(Object(r["j"])(t))["link"],n=e?Object(r["y"])(Object(r["j"])(e))["deep_link_id"]:null,i=Object(r["y"])(Object(r["j"])(t))["deep_link_id"],s=i?Object(r["y"])(Object(r["j"])(i))["link"]:null;return s||i||n||e||t}class ce{constructor(t){var e,n,i,s,o,a;const c=Object(r["y"])(Object(r["j"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Yt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return I(n,"argument-error"),Yt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class de extends he{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return I("providerId"in e&&"signInMethod"in e,"argument-error"),Zt._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return I(t.idToken||t.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return de.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return de.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=t;if(!n&&!r&&!e&&!i)return null;if(!o)return null;try{return new de(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return pe.credential(e,n)}catch(r){return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com",pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="http://localhost";class ve extends Ft{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r,pendingToken:i}=e;return n&&r&&i&&n===r?new ve(n,i):null}static _create(t,e){return new ve(t,e)}buildRequest(){return{requestUri:ge,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ye.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function be(t,e){return $(t,"POST","/v1/accounts:signUp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.TWITTER_SIGN_IN_METHOD="twitter.com",ye.PROVIDER_ID="twitter.com";class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await lt._fromIdTokenResponse(t,n,r),s=_e(n),o=new we({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=_e(n);return new we({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function _e(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t){var e;const n=Nt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new we({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await be(n,{returnSecureToken:!0}),i=await we._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Te.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Te(t,e,n,r)}}function Ee(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Te._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return new Set(t.map(({providerId:t})=>t).filter(t=>!!t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e){const n=Object(r["k"])(t);await Oe(!0,n,e);const{providerUserInfo:i}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Se(i||[]);return n.providerData=n.providerData.filter(t=>s.has(t.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ae(t,e,n=!1){const r=await Z(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return we._forOperation(t,"link",r)}async function Oe(t,e,n){await rt(e);const r=Se(e.providerData),i=!1===t?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Z(t,Ee(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=J(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),we._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t,e,n=!1){const r="signIn",i=await Ee(t,r,e),s=await we._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ne(t,e){return xe(Nt(t),e)}async function De(t,e){const n=Object(r["k"])(t);return await Oe(!1,n,e.providerId),Ae(n,e)}async function Re(t,e){return Ce(Object(r["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e){return $(t,"POST","/v1/accounts:signInWithCustomToken",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e){const n=Nt(t),r=await Pe(n,{token:e,returnSecureToken:!0}),i=await we._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?je._fromServerResponse(t,e):v(t,"internal-error")}}class je extends Me{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new je(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(t,e,n){const i=Object(r["k"])(t),s={requestType:"PASSWORD_RESET",email:e};n&&Fe(i,s,n),await Ht(i,s)}async function Ve(t,e,n){await Ut(Object(r["k"])(t),{oobCode:e,newPassword:n})}async function $e(t,e){await $t(Object(r["k"])(t),{oobCode:e})}async function qe(t,e){const n=Object(r["k"])(t),i=await Ut(n,{oobCode:e}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Me._fromServerResponse(Nt(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Be(t,e){const{data:n}=await qe(Object(r["k"])(t),e);return n.email}async function ze(t,e,n){const r=Nt(t),i=await be(r,{returnSecureToken:!0,email:e,password:n}),s=await we._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function He(t,e,n){return Ne(Object(r["k"])(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e,n){const i=Object(r["k"])(t),s={requestType:"EMAIL_SIGNIN",email:e};I(n.handleCodeInApp,i,"argument-error"),n&&Fe(i,s,n),await Wt(i,s)}function Ge(t,e){const n=ce.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Ke(t,e,n){const i=Object(r["k"])(t),s=ue.credentialWithLink(e,n||O());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Ne(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t,e){return U(t,"POST","/v1/accounts:createAuthUri",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t,e){const n=C()?O():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:s}=await Qe(Object(r["k"])(t),i);return s||[]}async function Je(t,e){const n=Object(r["k"])(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&Fe(n.auth,s,e);const{email:o}=await zt(n.auth,s);o!==t.email&&await t.reload()}async function Xe(t,e,n){const i=Object(r["k"])(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Fe(i.auth,o,n);const{email:a}=await Gt(i.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(t,e){return U(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=Object(r["k"])(t),s=await i.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await Z(i,Ze(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function en(t,e){return rn(Object(r["k"])(t),e,null)}function nn(t,e){return rn(Object(r["k"])(t),null,e)}async function rn(t,e,n){const{auth:r}=t,i=await t.getIdToken(),s={idToken:i,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Z(t,Vt(r,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!r&&(null===t||void 0===t?void 0:t.idToken)){const r=null===(n=null===(e=J(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const t="anonymous"!==r&&"custom"!==r?r:null;return new on(s,t)}}if(!r)return null;switch(r){case"facebook.com":return new cn(s,i);case"github.com":return new un(s,i);case"google.com":return new ln(s,i);case"twitter.com":return new hn(s,i,t.screenName||null);case"custom":case"anonymous":return new on(s,null);default:return new on(s,r,i)}}class on{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class an extends on{constructor(t,e,n,r){super(t,e,n),this.username=r}}class cn extends on{constructor(t,e){super(t,"facebook.com",e)}}class un extends an{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class ln extends on{constructor(t,e){super(t,"google.com",e)}}class hn extends an{constructor(t,e,n){super(t,"twitter.com",e,n)}}function dn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:sn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new fn("enroll",t)}static _fromMfaPendingCredential(t){return new fn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return fn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return fn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=Nt(t),r=e.customData._serverResponse,i=(r.mfaInfo||[]).map(t=>Me._fromServerResponse(n,t));I(r.mfaPendingCredential,n,"internal-error");const s=fn._fromMfaPendingCredential(r.mfaPendingCredential);return new pn(s,i,async t=>{const i=await t._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(e.operationType){case"signIn":const t=await we._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return I(e.user,n,"internal-error"),we._forOperation(e.user,e.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function mn(t,e){var n;const i=Object(r["k"])(t),s=e;return I(e.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),pn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:start",F(t,e))}function vn(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:finalize",F(t,e))}function yn(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:withdraw",F(t,e))}class bn{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>Me._fromServerResponse(t.auth,e)))})}static _fromUser(t){return new bn(t)}async getSession(){return fn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,e));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),r=await Z(this.user,yn(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:t})=>t!==e),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const wn=new WeakMap;function _n(t){const e=Object(r["k"])(t);return wn.has(e)||wn.set(e,bn._fromUser(e)),wn.get(e)}const In="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){const t=Object(r["l"])();return vt(t)||Tt(t)}const Sn=1e3,kn=10;class An extends Tn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=En()&&Ot(),this.fallbackToPolling=At(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);kt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,kn):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}An.type="LOCAL";const On=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Tn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Cn.type="SESSION";const xn=Cn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Dn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await Nn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.receivers=[];class Pn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Rn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function Mn(t){Ln().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return"undefined"!==typeof Ln()["WorkerGlobalScope"]&&"function"===typeof Ln()["importScripts"]}async function Fn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Un(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Vn(){return jn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="firebaseLocalStorageDb",qn=1,Bn="firebaseLocalStorage",zn="fbase_key";class Hn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Wn(t,e){return t.transaction([Bn],e?"readwrite":"readonly").objectStore(Bn)}function Gn(){const t=indexedDB.deleteDatabase($n);return new Hn(t).toPromise()}function Kn(){const t=indexedDB.open($n,qn);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Bn,{keyPath:zn})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Bn)?e(n):(n.close(),await Gn(),e(await Kn()))})})}async function Qn(t,e,n){const r=Wn(t,!0).put({[zn]:e,value:n});return new Hn(r).toPromise()}async function Yn(t,e){const n=Wn(t,!1).get(e),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function Jn(t,e){const n=Wn(t,!0).delete(e);return new Hn(n).toPromise()}const Xn=800,Zn=3;class tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Kn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Zn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(Vn()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Fn(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kn();return await Qn(t,In,"1"),await Jn(t,In),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Yn(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Jn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Wn(t,!1).getAll();return new Hn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tr.type="LOCAL";const er=tr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){return U(t,"POST","/v2/accounts/mfaSignIn:start",F(t,e))}function rr(t,e){return U(t,"POST","/v2/accounts/mfaSignIn:finalize",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t){return(await U(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function or(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=y("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",sr().appendChild(r)})}function ar(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=500,ur=6e4,lr=1e12;class hr{constructor(t){this.auth=t,this.counter=lr,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new dr(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||lr;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||lr;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||lr;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class dr{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof t?document.getElementById(t):t;I(r,"argument-error",{appName:e}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=fr(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()},ur)},cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fr(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=ar("rcb"),mr=new R(3e4,6e4),gr="https://www.google.com/recaptcha/api.js?";class vr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ln().grecaptcha}load(t,e=""){return I(yr(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Ln().grecaptcha):new Promise((n,i)=>{const s=Ln().setTimeout(()=>{i(y(t,"network-request-failed"))},mr.get());Ln()[pr]=()=>{Ln().clearTimeout(s),delete Ln()[pr];const r=Ln().grecaptcha;if(!r)return void i(y(t,"internal-error"));const o=r.render;r.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(r)};const o=`${gr}?${Object(r["x"])({onload:pr,render:"explicit",hl:e})}`;or(o).catch(()=>{clearTimeout(s),i(y(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Ln().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yr(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class br{async load(t){return new hr(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="recaptcha",_r={theme:"light",type:"image"};class Ir{constructor(t,e=Object.assign({},_r),n){this.parameters=e,this.type=wr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Nt(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof t?document.getElementById(t):t;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new br:new vr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise(n=>{const r=t=>{t&&(this.tokenChangeListeners.delete(r),n(t))};this.tokenChangeListeners.add(r),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(t=>t(e)),"function"===typeof t)t(e);else if("string"===typeof t){const n=Ln()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){I(C()&&!jn(),this.auth,"internal-error"),await Tr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await ir(this.auth);I(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Tr(){let t=null;return new Promise(e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=se._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function Sr(t,e,n){const i=Nt(t),s=await Or(i,e,Object(r["k"])(n));return new Er(s,t=>Ne(i,t))}async function kr(t,e,n){const i=Object(r["k"])(t);await Oe(!1,i,"phone");const s=await Or(i.auth,e,Object(r["k"])(n));return new Er(s,t=>De(i,t))}async function Ar(t,e,n){const i=Object(r["k"])(t),s=await Or(i.auth,e,Object(r["k"])(n));return new Er(s,t=>Re(i,t))}async function Or(t,e,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,t,"argument-error"),I(n.type===wr,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){I("enroll"===e.type,t,"internal-error");const n=await gn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,t,"missing-multi-factor-info");const o=await nr(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}async function Cr(t,e){await Ae(Object(r["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.providerId=xr.PROVIDER_ID,this.auth=Nt(t)}verifyPhoneNumber(t,e){return Or(this.auth,t,Object(r["k"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return xr.credentialFromTaggedObject(e)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(t,e){return e?k(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr.PROVIDER_ID="phone",xr.PHONE_SIGN_IN_METHOD="phone";class Dr extends Ft{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Rr(t){return xe(t.auth,new Dr(t),t.bypassAuthState)}function Pr(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Ce(n,new Dr(t),t.bypassAuthState)}async function Lr(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Ae(n,new Dr(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Rr;case"linkViaPopup":case"linkViaRedirect":return Lr;case"reauthViaPopup":case"reauthViaRedirect":return Pr;default:v(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new R(2e3,1e4);async function Fr(t,e,n){const r=Nt(t);w(t,e,le);const i=Nr(r,n),s=new $r(r,"signInViaPopup",e,i);return s.executeNotNull()}async function Ur(t,e,n){const i=Object(r["k"])(t);w(i.auth,e,le);const s=Nr(i.auth,n),o=new $r(i.auth,"reauthViaPopup",e,s,i);return o.executeNotNull()}async function Vr(t,e,n){const i=Object(r["k"])(t);w(i.auth,e,le);const s=Nr(i.auth,n),o=new $r(i.auth,"linkViaPopup",e,s,i);return o.executeNotNull()}class $r extends Mr{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return I(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,jr.get())};t()}}$r.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qr="pendingRedirect",Br=new Map;class zr extends Mr{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Br.get(this.auth._key());if(!t){try{const e=await Hr(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Br.set(this.auth._key(),t)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(t,e){const n=Qr(e),r=Kr(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Wr(t,e){return Kr(t)._set(Qr(e),"true")}function Gr(){Br.clear()}function Kr(t){return k(t._redirectPersistence)}function Qr(t){return ft(qr,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e,n){return Jr(t,e,n)}async function Jr(t,e,n){const r=Nt(t);w(t,e,le);const i=Nr(r,n);return await Wr(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Xr(t,e,n){return Zr(t,e,n)}async function Zr(t,e,n){const i=Object(r["k"])(t);w(i.auth,e,le);const s=Nr(i.auth,n);await Wr(s,i.auth);const o=await ii(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",o)}function ti(t,e,n){return ei(t,e,n)}async function ei(t,e,n){const i=Object(r["k"])(t);w(i.auth,e,le);const s=Nr(i.auth,n);await Oe(!1,i,e.providerId),await Wr(s,i.auth);const o=await ii(i);return s._openRedirect(i.auth,e,"linkViaRedirect",o)}async function ni(t,e){return await Nt(t)._initializationPromise,ri(t,e,!1)}async function ri(t,e,n=!1){const r=Nt(t),i=Nr(r,e),s=new zr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function ii(t){const e=Rn(t.uid+":::");return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=6e5;class oi{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ui(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ci(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(y(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=si&&this.cachedEventUids.clear(),this.cachedEventUids.has(ai(t))}saveEventToCache(t){this.cachedEventUids.add(ai(t)),this.lastProcessedEventTime=Date.now()}}function ai(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function ci({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function ui(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ci(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e={}){return U(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,di=/^https?/;async function fi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await li(t);for(const r of e)try{if(pi(r))return}catch(n){}v(t,"unauthorized-domain")}function pi(t){const e=O(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!di.test(n))return!1;if(hi.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new R(3e4,6e4);function gi(){const t=Ln().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function vi(t){return new Promise((e,n)=>{var r,i,s;function o(){gi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gi(),n(y(t,"network-request-failed"))},timeout:mi.get()})}if(null===(i=null===(r=Ln().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ln().gapi)||void 0===s?void 0:s.load)){const e=ar("iframefcb");return Ln()[e]=()=>{gapi.load?o():n(y(t,"network-request-failed"))},or("https://apis.google.com/js/api.js?onload="+e)}o()}}).catch(t=>{throw yi=null,t})}let yi=null;function bi(t){return yi=yi||vi(t),yi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new R(5e3,15e3),_i="__/auth/iframe",Ii="emulator/auth/iframe",Ti={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},Ei=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Si(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,Ii):`https://${t.config.authDomain}/${_i}`,s={apiKey:e.apiKey,appName:t.name,v:i["SDK_VERSION"]},o=Ei.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["x"])(s).slice(1)}`}async function ki(t){const e=await bi(t),n=Ln().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:Si(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ti,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=y(t,"network-request-failed"),s=Ln().setTimeout(()=>{r(i)},wi.get());function o(){Ln().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oi=500,Ci=600,xi="_blank",Ni="http://localhost";class Di{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ri(t,e,n,i=Oi,s=Ci){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ai),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=yt(l)?xi:n),gt(l)&&(e=e||Ni,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(St(l)&&"_self"!==c)return Pi(e||"",c),new Di(null);const d=window.open(e||"",c,h);I(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Di(d)}function Pi(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="__/auth/handler",Mi="emulator/auth/handler";function ji(t,e,n,s,o,a){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["p"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Fi(t)}?${Object(r["x"])(u).slice(1)}`}function Fi({config:t}){return t.emulator?P(t,Mi):`https://${t.authDomain}/${Li}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class Vi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xn,this._completeRedirectFn=ri}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ji(t,e,n,O(),r);return Ri(t,s,Rn())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Mn(ji(t,e,n,O(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await ki(t),n=new oi(t);return e.register("authEvent",e=>{I(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ui,{type:Ui},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ui];void 0!==i&&e(!!i),v(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=fi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return At()||vt()||Tt()}}const $i=Vi;class qi{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return T("unexpected MultiFactorSessionType")}}}class Bi extends qi{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Bi(t)}_finalizeEnroll(t,e,n){return vn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return rr(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zi{constructor(){}static assertion(t){return Bi._fromCredential(t)}}zi.FACTOR_ID="phone";var Hi="@firebase/auth",Wi="0.19.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qi(t){Object(i["_registerComponent"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(e=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},o=new xt(e,r);return A(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",t=>{const e=Nt(t.getProvider("auth").getImmediate());return(t=>new Gi(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Hi,Wi,Ki(t)),Object(i["registerVersion"])(Hi,Wi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi("Browser");const Ji=2e3;async function Xi(t,e,n){var r;const{BuildInfo:i}=Yi();E(e.sessionId,"AuthEvent did not contain a session ID");const s=await rs(e.sessionId),o={};return Tt()?o["ibi"]=i.packageName:wt()?o["apn"]=i.packageName:v(t,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,ji(t,n,e.type,void 0,null!==(r=e.eventId)&&void 0!==r?r:void 0,o)}async function Zi(t){const{BuildInfo:e}=Yi(),n={};Tt()?n.iosBundleId=e.packageName:wt()?n.androidPackageName=e.packageName:v(t,"operation-not-supported-in-this-environment"),await li(t,n)}function ts(t){const{cordova:e}=Yi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Et()?"_blank":"_system","location=yes"),n(i)})})}async function es(t,e,n){const{cordova:r}=Yi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var t;s();const e=null===(t=r.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(t,"redirect-cancelled-by-user"))},Ji))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),wt()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ns(t){var e,n,r,i,s,o,a,c,u,l;const h=Yi();I("function"===typeof(null===(e=null===h||void 0===h?void 0:h.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rs(t){const e=is(t),n=await crypto.subtle.digest("SHA-256",e),r=Array.from(new Uint8Array(n));return r.map(t=>t.toString(16).padStart(2,"0")).join("")}function is(t){if(E(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=20;class os extends oi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function as(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:hs(),postBody:null,tenantId:t.tenantId,error:y(t,"no-auth-event")}}function cs(t,e){return ds()._set(fs(t),e)}async function us(t){const e=await ds()._get(fs(t));return e&&await ds()._remove(fs(t)),e}function ls(t,e){var n,r;const i=ms(e);if(i.includes("/__/auth/callback")){const e=gs(i),s=e["firebaseError"]?ps(decodeURIComponent(e["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?y(o):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function hs(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ss;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function ds(){return k(On)}function fs(t){return ft("authEvent",t.config.apiKey,t.name)}function ps(t){try{return JSON.parse(t)}catch(e){return null}}function ms(t){const e=gs(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,r=gs(n)["link"],i=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=gs(i)["link"];return s||i||r||n||t}function gs(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Object(r["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=500;class ys{constructor(){this._redirectPersistence=xn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ri}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new os(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){v(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,r){ns(t);const i=await this._initialize(t);await i.initialized(),i.resetRedirect(),Gr(),await this._originValidation(t);const s=as(t,n,r);await cs(t,s);const o=await Xi(t,s,e),a=await ts(o);return es(t,i,a)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Zi(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Yi(),s=setTimeout(async()=>{await us(t),e.onEvent(ws())},vs),o=async n=>{clearTimeout(s);const r=await us(t);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ls(r,n["url"])),e.onEvent(i||ws())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";Yi().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof a)try{a(t)}catch(e){console.error(e)}}}}const bs=ys;function ws(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){Nt(t)._logFramework(e)}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return M})),n.d(e,"h",(function(){return N})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return L})),n.d(e,"k",(function(){return V})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return x})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return T})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return m})),n.d(e,"u",(function(){return y})),n.d(e,"v",(function(){return I})),n.d(e,"w",(function(){return _})),n.d(e,"x",(function(){return R})),n.d(e,"y",(function(){return P}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&l(n)&&(t[n]=u(t[n],e[n]));return t}function l(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function A(t,e){return t.replace(O,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function N(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(D(n)&&D(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function P(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function L(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=new j(t,e);return n.subscribe.bind(n)}class j{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=F(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),s=n("07fa"),o=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,d,f,p,m,g,v,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),I=o(e,y,1+b+_),T=function(t){return h&&u(h,"normal",t),new l(!0,t)},E=function(t){return b?(r(t),_?I(t[0],t[1],T):I(t[0],t[1])):_?I(t,T):I(t)};if(w)h=t;else{if(d=c(t),!d)throw TypeError(String(t)+" is not iterable");if(i(d)){for(f=0,p=s(t);p>f;f++)if(m=E(t[f]),m&&m instanceof l)return m;return new l(!1)}h=a(t,d)}g=h.next;while(!(v=g.call(h)).done){try{m=E(v.value)}catch(S){u(h,"throw",S)}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"256a":function(t,e,n){"use strict";n("5994")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||s(t)||o(t)||a()}},"2a62":function(t,e,n){var r=n("825a"),i=n("dc4a");t.exports=function(t,e,n){var s,o;r(t);try{if(s=i(t,"return"),!s){if("throw"===e)throw n;return n}s=s.call(t)}catch(a){o=!0,s=a}if("throw"===e)throw n;if(o)throw s;return r(s),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,T=_((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),E=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,k=_((function(t){return t.replace(S,"-$1").toLowerCase()}));function A(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var C=Function.prototype.bind?O:A;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function R(t,e,n){}var P=function(t,e,n){return!1},L=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return M(t[n],e[n])}))}catch(u){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U="data-server-rendered",V=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:P,async:!0,_lifecycleHooks:$},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Q="__proto__"in{},Y="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Z=Y&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(Y)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(Eo){}var ct=function(){return void 0===K&&(K=!Y&&!J&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ut=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=R,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function vt(t){gt.push(t),mt.target=t}function yt(){gt.pop(),mt.target=gt[gt.length-1]}var bt=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function It(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Et=Array.prototype,St=Object.create(Et),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach((function(t){var e=Et[t];H(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var At=Object.getOwnPropertyNames(St),Ot=!0;function Ct(t){Ot=t}var xt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Q?Nt(t,St):Dt(t,St,At),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function Dt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];H(t,s,e[s])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:Ot&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,i){var s=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&jt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Rt(e),s.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&jt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var Ft=q.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&l(r)&&l(i)&&Ut(r,i):Lt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ut(r,i):i}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function $t(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Ft.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},$.forEach((function(t){Ft[t]=$t})),V.forEach((function(t){Ft[t+"s"]=Bt})),Ft.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in N(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Ft.provide=Vt;var zt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=T(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=T(a),o[s]=l(i)?i:{type:i};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?N({from:s},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Wt(e,n),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Kt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(r){var i=Ft[r]||zt;o[r]=i(t[r],e[r],n,r)}return o}function Qt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=E(s);if(w(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Yt(t,e,n,r){var i=e[t],s=!w(n,t),o=n[t],a=ee(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===k(t)){var c=ee(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Jt(r,i,t);var u=Ot;Ct(!0),Rt(o),Ct(u)}return o}function Jt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Xt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Xt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){vt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Eo){ie(Eo,r,"errorCaptured hook")}}}ie(t,e,n)}finally{yt()}}function re(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Eo){ne(Eo,r,i)}return s}function ie(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(Eo){Eo!==t&&se(Eo,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!Y&&!J||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),rt&&setTimeout(R)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Eo){ne(Eo,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new ht;function ve(t){ye(t,ge),ge.clear()}function ye(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)ye(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ye(t[r[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)re(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=we(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function Ie(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(o.fns,c)}r(a)?o=we([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=we([a,c]),o.merged=!0,t[e]=o}function Te(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=k(u);Ee(o,c,u,l,!0)||Ee(o,a,u,l,!1)}return o}}function Ee(t,e,n,r,s){if(i(e)){if(w(e,n))return t[n]=e[n],s||delete e[n],!0;if(w(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ke(t){return a(t)?[It(t)]:Array.isArray(t)?Oe(t):void 0}function Ae(t){return i(t)&&i(t.text)&&o(t.isComment)}function Oe(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=Oe(o,(e||"")+"_"+n),Ae(o[0])&&Ae(u)&&(l[c]=It(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Ae(u)?l[c]=It(u.text+o):""!==o&&l.push(It(o)):Ae(o)&&Ae(u)?l[c]=It(u.text+o.text):(s(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Ne(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Ct(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Re)&&delete n[u];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Me(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=je(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",o),H(i,"$key",a),H(i,"$hasNormal",s),i}function Me(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ke(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,s=t.length;r<s;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ue(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Ve(t){return Qt(this.$options,"filters",t,!0)||L}function $e(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var s=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?$e(i,r):s?$e(s,t):r?k(r)!==e:void 0===t}function Be(t,e,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||v(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||q.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(o),u=k(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(r,"__static__"+t,!1)),r}function He(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(l(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Qe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Qe(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Ye(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Xe(t){t._o=He,t._n=m,t._s=p,t._l=Fe,t._t=Ue,t._q=M,t._i=j,t._m=ze,t._f=Ve,t._k=qe,t._b=Be,t._v=It,t._e=_t,t._u=Qe,t._g=Ke,t._d=Ye,t._p=Je}function Ze(t,e,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=De(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=fn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,s,o){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Yt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=ke(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=en(f[m],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var s=Tt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Xe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Mn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Un(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,u),void 0===t))return In(l,e,n,o,a);e=e||{},Ir(t),i(e.model)&&ln(t.options,e);var h=Te(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=e[r],s=rn[r];i===s||i&&i._merged||(e[r]=i?un(s,i):s)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[r],a=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,s){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=ke(r):s===hn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),o=q.isReservedTag(e)?new bt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Qt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):on(c,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(a)&&mn(o,a),i(n)&&gn(n),o):_t()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function gn(t){c(t.style)&&ve(t.style),c(t.class)&&ve(t.class)}function vn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=De(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var s=r&&r.data;Pt(t,"$attrs",s&&s.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function wn(t){Xe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Eo){ne(Eo,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=i,t}}function _n(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function In(t,e,n,r,i){var s=_t();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Tn(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=_n(n,e),a?o.length=0:h(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?r(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(t.errorComp=_n(m.error,e)),i(m.loading)&&(t.loadingComp=_n(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function En(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Pe(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function kn(t,e){yn.$on(t,e)}function An(t,e){yn.$off(t,e)}function On(t,e){var n=yn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Cn(t,e,n){yn=t,_e(e,n||{},kn,An,On,t),yn=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,r,e,i)}return e}}var Nn=null;function Dn(t){var e=Nn;return Nn=t,function(){Nn=e}}function Rn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Dn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=_t),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function Mn(t,e,r,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Yt(f,p,e,t)}Ct(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,Cn(t,r,m),u&&(t.$slots=De(s,i.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Vn(t,"activated")}}function Un(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){vt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var $n=[],qn=[],Bn={},zn=!1,Hn=!1,Wn=0;function Gn(){Wn=$n.length=qn.length=0,Bn={},zn=Hn=!1}var Kn=0,Qn=Date.now;if(Y&&!tt){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Yn.now()})}function Jn(){var t,e;for(Kn=Qn(),Hn=!0,$n.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<$n.length;Wn++)t=$n[Wn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=qn.slice(),r=$n.slice();Gn(),tr(n),Xn(r),ut&&q.devtools&&ut.emit("flush")}function Xn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function Zn(t){t._inactive=!1,qn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Hn){var n=$n.length-1;while(n>Wn&&$n[n].id>t.id)n--;$n.splice(n+1,0,t)}else $n.push(t);zn||(zn=!0,me(Jn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;vt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Eo){if(!this.user)throw Eo;ne(Eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ve(t),yt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function sr(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function or(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&mr(t,e.methods),e.data?cr(t):Rt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==st&&gr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Ct(!1);var o=function(s){i.push(s);var o=Yt(s,e,n,t);Pt(r,s,o),s in t||sr(t,"_props",s)};for(var a in e)o(a);Ct(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&w(r,s)||z(s)||sr(t,"_data",s)}Rt(e,!0)}function ur(t,e){vt();try{return t.call(e,e)}catch(Eo){return ne(Eo,e,"data()"),{}}finally{yt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(t,o||R,R,lr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:C(e[n],t)}function gr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)vr(t,n,r[i]);else vr(t,n,r)}}function vr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function yr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return vr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';vt(),re(e,r,[i.value],r,s),yt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?_r(e,t):e.$options=Kt(Ir(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Rn(e),Sn(e),vn(e),Vn(e,"beforeCreate"),xe(e),or(e),Ce(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _r(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Ir(t){var e=t.options;if(t.super){var n=Ir(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&N(t.extendOptions,i),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Er(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function kr(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Ar(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&Or(o),o.options.computed&&Cr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,V.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=N({},o.options),i[r]=o,o}}function Or(t){var e=t.options.props;for(var n in e)sr(t.prototype,"_props",n)}function Cr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function xr(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Dr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Rr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pr(n,s,r,i)}}}function Pr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}wr(Er),yr(Er),xn(Er),Pn(Er),wn(Er);var Lr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Pr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Rr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Rr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=En(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Dr(s,r))||o&&r&&Dr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Mr};function Fr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:N,mergeOptions:Kt,defineReactive:Pt},t.set=Lt,t.delete=Mt,t.nextTick=me,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,jr),Sr(t),kr(t),Ar(t),xr(t)}Fr(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ct}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:Ze}),Er.version="2.6.14";var Ur=g("style,class"),Vr=g("input,textarea,option,select,progress"),$r=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=g("contenteditable,draggable,spellcheck"),Br=g("events,caret,typing,plaintext-only"),zr=function(t,e){return Qr(e)||"false"===e?"false":"contenteditable"===t&&Br(e)?e:"true"},Hr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wr="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return Gr(t)?t.slice(6,t.length):""},Qr=function(t){return null==t||!1===t};function Yr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Xr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Xr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(t){return ii(t)||si(t)};function ai(t){return si(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!Y)return!0;if(oi(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=g("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function gi(t,e,n){t.insertBefore(e,n)}function vi(t,e){t.removeChild(e)}function yi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function _i(t){return t.tagName}function Ii(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ei=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:gi,removeChild:vi,appendChild:yi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ii,setStyleScope:Ti}),Si={create:function(t,e){ki(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ki(t,!0),ki(e))},destroy:function(t){ki(t,!0)}};function ki(t,e){var n=t.data.ref;if(i(n)){var r=t.context,s=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Ai=new bt("",{},[]),Oi=["create","activate","update","remove","destroy"];function Ci(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xi(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function xi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Ni(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function Di(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<Oi.length;++e)for(o[Oi[e]]=[],n=0;n<c.length;++n)i(c[n][Oi[e]])&&o[Oi[e]].push(c[n][Oi[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function f(t,e,n,r,o,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!o,!p(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),I(t),b(t,h,e),i(l)&&_(t,e),y(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(i(o)){var a=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return m(t,e),y(n,t.elm,r),s(a)&&v(t,e,n,r),!0}}function m(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),I(t)):(ki(t),e.push(t))}function v(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Ai,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function _(t,n){for(var r=0;r<o.create.length;++r)o.create[r](Ai,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ai,t),i(e.insert)&&n.push(t))}function I(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Nn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,s){for(;r<=i;++r)f(n[r],s,t,e,!1,n,r)}function E(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)E(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(k(r),E(r)):d(r.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,r=o.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function A(t,e,n,s,o){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)r(g)?g=e[++d]:r(v)?v=e[--m]:Ci(g,b)?(C(g,b,s,n,p),g=e[++d],b=n[++p]):Ci(v,w)?(C(v,w,s,n,y),v=e[--m],w=n[--y]):Ci(g,w)?(C(g,w,s,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):Ci(v,b)?(C(v,b,s,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(r(a)&&(a=Ni(e,d,m)),c=i(b.key)?a[b.key]:O(b,e,d,m),r(c)?f(b,s,t,g.elm,!1,n,p):(l=e[c],Ci(l,b)?(C(l,b,s,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,s,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,s)):p>y&&S(e,d,m)}function O(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&Ci(t,o))return s}}function C(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(i(f)&&w(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(m)?p!==m&&A(h,p,m,n,l):i(m)?(i(t.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):i(p)?S(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function x(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=g("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return m(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!D(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,_(e,n);break}!f&&c["class"]&&ve(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Ci(t,e))C(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),s(n)&&D(t,e,h))return x(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),i(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Ai,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else ki(g);g=g.parent}}i(m)?S([t],0,0):i(t.tag)&&E(t)}}return x(e,h,c),e.elm}i(t)&&E(t)}}var Ri={create:Pi,update:Pi,destroy:function(t){Pi(t,Ai)}};function Pi(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,s=t===Ai,o=e===Ai,a=ji(t.data.directives,t.context),c=ji(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",e,t)};s?Ie(e,"insert",h):h()}if(l.length&&Ie(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Ui(a[n],"unbind",t,t,o)}var Mi=Object.create(null);function ji(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Qt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ui(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Eo){ne(Eo,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Si,Ri];function $i(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in i(l.__ob__)&&(l=e.data.attrs=N({},l)),l)o=l[s],a=u[s],a!==o&&qi(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&qi(c,"value",l.value),u)r(l[s])&&(Gr(s)?c.removeAttributeNS(Wr,Kr(s)):qr(s)||c.removeAttribute(s))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Bi(t,e,n):Hr(e)?Qr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,zr(e,n)):Gr(e)?Qr(n)?t.removeAttributeNS(Wr,Kr(e)):t.setAttributeNS(Wr,e,n):Bi(t,e,n)}function Bi(t,e,n){if(Qr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:$i,update:$i};function Hi(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Yr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wi,Gi={create:Hi,update:Hi},Ki="__r",Qi="__c";function Yi(t){if(i(t[Ki])){var e=tt?"change":"input";t[e]=[].concat(t[Ki],t[e]||[]),delete t[Ki]}i(t[Qi])&&(t.change=[].concat(t[Qi],t.change||[]),delete t[Qi])}function Ji(t,e,n){var r=Wi;return function i(){var s=e.apply(null,arguments);null!==s&&ts(t,i,n,r)}}var Xi=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Xi){var i=Kn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Wi.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ts(t,e,n,r){(r||Wi).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Wi=e.elm,Yi(n),_e(n,i,Zi,ts,Ji,e.context),Wi=void 0}}var ns,rs={create:es,update:es};function is(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Eo){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(Eo){}return n&&t.value!==e}function as(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:is,update:is},us=_((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?N(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?D(t):"string"===typeof t?us(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&N(r,n)}(n=ls(t.data))&&N(r,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&N(r,n);return r}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(ms.test(n))t.style.setProperty(k(e),n.replace(ms,""),"important");else{var r=ys(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},vs=["Webkit","Moz","ms"],ys=_((function(t){if(fs=fs||document.createElement("div").style,t=T(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<vs.length;n++){var r=vs[n]+e;if(r in fs)return r}}));function bs(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=ds(e,!0);for(a in h)r(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Is(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Es(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,Ss(t.name||"v")),N(e,t),e}return"string"===typeof t?Ss(t):void 0}}var Ss=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),ks=Y&&!et,As="transition",Os="animation",Cs="transition",xs="transitionend",Ns="animation",Ds="animationend";ks&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",xs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ds="webkitAnimationEnd"));var Rs=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Rs((function(){Rs(t)}))}function Ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Is(t,e))}function Ms(t,e){t._transitionClasses&&y(t._transitionClasses,e),Ts(t,e)}function js(t,e,n){var r=Us(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===As?xs:Ds,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Us(t,e){var n,r=window.getComputedStyle(t),i=(r[Cs+"Delay"]||"").split(", "),s=(r[Cs+"Duration"]||"").split(", "),o=Vs(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=Vs(a,c),l=0,h=0;e===As?o>0&&(n=As,l=o,h=s.length):e===Os?u>0&&(n=Os,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?As:Os:null,h=n?n===As?s.length:c.length:0);var d=n===As&&Fs.test(r[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Vs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return $s(e)+$s(t[n])})))}function $s(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qs(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Es(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,I=s.afterAppear,T=s.appearCancelled,E=s.duration,S=Nn,k=Nn.$vnode;while(k&&k.parent)S=k.context,k=k.parent;var A=!S._isMounted||!t.isRootInsert;if(!A||_||""===_){var O=A&&d?d:u,C=A&&p?p:h,x=A&&f?f:l,N=A&&w||g,D=A&&"function"===typeof _?_:v,R=A&&I||y,P=A&&T||b,L=m(c(E)?E.enter:E);0;var M=!1!==o&&!et,j=Hs(D),U=n._enterCb=F((function(){M&&(Ms(n,x),Ms(n,C)),U.cancelled?(M&&Ms(n,O),P&&P(n)):R&&R(n),n._enterCb=null}));t.data.show||Ie(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,U)})),N&&N(n),M&&(Ls(n,O),Ls(n,C),Ps((function(){Ms(n,O),U.cancelled||(Ls(n,x),j||(zs(L)?setTimeout(U,L):js(n,a,U)))}))),t.data.show&&(e&&e(),D&&D(n,U)),M||j||U()}}}function Bs(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Es(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!et,w=Hs(f),_=m(c(y)?y.leave:y);0;var I=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Ms(n,l),Ms(n,h)),I.cancelled?(b&&Ms(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){I.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ls(n,u),Ls(n,h),Ps((function(){Ms(n,u),I.cancelled||(Ls(n,l),w||(zs(_)?setTimeout(I,_):js(n,a,I)))}))),f&&f(n,I),b||w||I())}}function zs(t){return"number"===typeof t&&!isNaN(t)}function Hs(t){if(r(t))return!1;var e=t.fns;return i(e)?Hs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ws(t,e){!0!==e.data.show&&qs(e)}var Gs=Y?{create:Ws,activate:Ws,remove:function(t,e){!0!==t.data.show?Bs(t,e):e()}}:{},Ks=[zi,Gi,rs,cs,ws,Gs],Qs=Ks.concat(Vi),Ys=Di({nodeOps:Ei,modules:Qs});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Js={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ie(n,"postpatch",(function(){Js.componentUpdated(t,e,n)})):Xs(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Xs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,eo);if(i.some((function(t,e){return!M(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,i)})):e.value!==e.oldValue&&to(e.value,i);s&&io(t,"change")}}}};function Xs(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=j(r,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(M(eo(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!M(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=so(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qs(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?qs(n,(function(){t.style.display=t.__vOriginalDisplay})):Bs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ao={model:Js,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(En(e.children)):t}function lo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[T(s)]=i[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Pe(t)},go=function(t){return"show"===t.name},vo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,Ie(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,i);if("in-out"===r){if(Pe(s))return u;var d,f=function(){d()};Ie(c,"afterEnter",f),Ie(c,"enterCancelled",f),Ie(h,"delayLeave",(function(t){d=t}))}}return i}}},yo=N({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(_o),t.forEach(Io),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(xs,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(xs,t),n._moveCb=null,Ms(n,e))})}})))},methods:{hasMove:function(t,e){if(!ks)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ts(n,t)})),Is(n,e),n.style.display="none",this.$el.appendChild(n);var r=Us(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _o(t){t.data.newPos=t.elm.getBoundingClientRect()}function Io(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var To={Transition:vo,TransitionGroup:bo};Er.config.mustUseProp=$r,Er.config.isReservedTag=oi,Er.config.isReservedAttr=Ur,Er.config.getTagNamespace=ai,Er.config.isUnknownElement=ui,N(Er.options.directives,ao),N(Er.options.components,To),Er.prototype.__patch__=Y?Ys:R,Er.prototype.$mount=function(t,e){return t=t&&Y?hi(t):void 0,Ln(this,t,e)},Y&&setTimeout((function(){q.devtools&&ut&&ut.emit("init",Er)}),0),e["a"]=Er}).call(this,n("c8ba"))},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,v=a.process,y=a.MessageChannel,b=a.Dispatch,w=0,_={},I="onreadystatechange";try{r=a.location}catch(A){}var T=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},E=function(t){return function(){T(t)}},S=function(t){T(t.data)},k=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};m&&g||(m=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return _[++w]=function(){(c(t)?t:Function(t)).apply(void 0,e)},i(w),w},g=function(t){delete _[t]},p?i=function(t){v.nextTick(E(t))}:b&&b.now?i=function(t){b.now(E(t))}:y&&!f?(s=new y,o=s.port2,s.port1.onmessage=S,i=l(o.postMessage,o,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(k)?(i=k,a.addEventListener("message",S,!1)):i=I in d("script")?function(t){h.appendChild(d("script"))[I]=function(){h.removeChild(this),T(t)}}:function(t){setTimeout(E(t),0)}),t.exports={set:m,clear:g}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return M})),n.d(e,"c",(function(){return L})),n.d(e,"d",(function(){return R}));var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){u(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;g(t.concat(r),e.getChild(r),n.modules[r])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new f(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),I(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&o(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),I(t,n,e)}function I(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};u(i,(function(e,n){s[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&C(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=E(t,o,n);r.forEachMutation((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;O(t,r,e,u)})),r.forEachChild((function(r,s){T(t,e,n.concat(s),r,i)}))}function E(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function C(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function D(t){v&&t===v||(v=t,r(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),I(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var R=V((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),P=V((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=$(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=V((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=V((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=$(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:R.bind(null,t),mapGetters:L.bind(null,t),mapMutations:P.bind(null,t),mapActions:M.bind(null,t)}};function F(t){return U(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function U(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var r=t._modulesNamespaceMap[n];return r}function q(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=H(),u=i(t),d="mutation "+t.type+a;B(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),z(l)}h=o})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var r=H(),i=o(t),a="action "+t.type+r;B(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),z(l)}})))}}function B(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function G(t,e){return W("0",e-t.toString().length)+t}var K={Store:y,install:D,version:"3.6.2",mapState:R,mapMutations:P,mapGetters:L,mapActions:M,createNamespacedHelpers:j,createLogger:q};e["a"]=K}).call(this,n("c8ba"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"408a":function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),s="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("1626"),i=n("861d");t.exports=function(t,e){var n,s;if("string"===e&&r(n=t.toString)&&!i(s=n.call(t)))return s;if(r(n=t.valueOf)&&!i(s=n.call(t)))return s;if("string"!==e&&r(n=t.toString)&&!i(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),s=n("9bdd"),o=n("e95a"),a=n("68ee"),c=n("07fa"),u=n("8418"),l=n("9a1f"),h=n("35a1");t.exports=function(t){var e=i(t),n=a(this),d=arguments.length,f=d>1?arguments[1]:void 0,p=void 0!==f;p&&(f=r(f,d>2?arguments[2]:void 0,2));var m,g,v,y,b,w,_=h(e),I=0;if(!_||this==Array&&o(_))for(m=c(e),g=n?new this(m):Array(m);m>I;I++)w=p?f(e[I],I):e[I],u(g,I,w);else for(y=l(e,_),b=y.next,g=n?new this:[];!(v=b.call(y)).done;I++)w=p?s(y,f,[v.value,I],!0):v.value,u(g,I,w);return g.length=I,g}},"4f60":function(t,e,n){"use strict";var r=n("614a");n.d(e,"a",(function(){return r["a"]}));var i="firebase",s="9.2.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},5087:function(t,e,n){var r=n("68ee"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),s=n("825a"),o=n("1626"),a=n("5926"),c=n("50c4"),u=n("577e"),l=n("1d80"),h=n("8aa5"),d=n("dc4a"),f=n("0cb2"),p=n("14c3"),m=n("b622"),g=m("replace"),v=Math.max,y=Math.min,b=function(t){return void 0===t?t:String(t)},w=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[g]&&""===/./[g]("a","$0")}(),I=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=_?"$":"$0";return[function(t,n){var r=l(this),i=void 0==t?void 0:d(t,g);return i?i.call(t,r,n):e.call(u(r),t,n)},function(t,i){var l=s(this),d=u(t);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var m=n(e,l,d,i);if(m.done)return m.value}var g=o(i);g||(i=u(i));var w=l.global;if(w){var _=l.unicode;l.lastIndex=0}var I=[];while(1){var T=p(l,d);if(null===T)break;if(I.push(T),!w)break;var E=u(T[0]);""===E&&(l.lastIndex=h(d,c(l.lastIndex),_))}for(var S="",k=0,A=0;A<I.length;A++){T=I[A];for(var O=u(T[0]),C=v(y(a(T.index),d.length),0),x=[],N=1;N<T.length;N++)x.push(b(T[N]));var D=T.groups;if(g){var R=[O].concat(x,C,d);void 0!==D&&R.push(D);var P=u(i.apply(void 0,R))}else P=f(O,d,C,x,D,i);C>=k&&(S+=d.slice(k,C)+P,k=C+O.length)}return S+d.slice(k)}]}),!I||!w||_)},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5606:function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Q})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return M})),n.d(e,"_addComponent",(function(){return V})),n.d(e,"_addOrOverwriteComponent",(function(){return $})),n.d(e,"_apps",(function(){return F})),n.d(e,"_clearComponents",(function(){return H})),n.d(e,"_components",(function(){return U})),n.d(e,"_getProvider",(function(){return B})),n.d(e,"_registerComponent",(function(){return q})),n.d(e,"_removeServiceInstance",(function(){return z})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return J})),n.d(e,"getApps",(function(){return X})),n.d(e,"initializeApp",(function(){return Y})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var r=n("ffa6"),i=n("4fc1"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.5",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",A="@firebase/performance-compat",O="@firebase/remote-config",C="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",D="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.2.0",M="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[A]:"fire-perf-compat",[O]:"fire-rc",[C]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[D]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t,e){t.container.addOrOverwriteComponent(e)}function q(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function B(t,e){return t.container.getProvider(e)}function z(t,e,n=M){B(t,e).clearInstance(n)}function H(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=L;function Y(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["h"])(t,o.options)&&Object(s["h"])(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new K(t,n,a);return F.set(i,c),c}function J(t=M){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function X(){return Array.from(F.values())}async function Z(t){const e=t.name;F.has(e)&&(F.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var i;let s=null!==(i=j[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}q(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw G.create("invalid-log-argument");Object(i["d"])(t,e)}function nt(t){Object(i["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){q(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}rt("")},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),s=n("7418"),o=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(o(t)),n=s.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("f5df");t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("577e"),s=n("5899"),o="["+s+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=i(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},5994:function(t,e,n){"use strict";(function(t){var e=n("614a"),r=n("1f5a"),i=n("ffa6"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(t=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(t=Object(s["l"])()){return/Edge\/\d+/.test(t)}function m(t=Object(s["l"])()){return f()||p(t)}function g(){try{const t=self.localStorage,e=r["r"]();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!m()||Object(s["r"])()}catch(t){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof t&&"WorkerGlobalScope"in t&&"importScripts"in t}function y(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(t=>{const e=setTimeout(()=>{t(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={LOCAL:"local",NONE:"none",SESSION:"session"},I=r["o"],T="persistence";function E(t,e){I(Object.values(_).includes(e),t,"invalid-persistence-type"),Object(s["u"])()?I(e!==_.SESSION,t,"unsupported-persistence-type"):Object(s["t"])()?I(e===_.NONE,t,"unsupported-persistence-type"):v()?I(e===_.NONE||e===_.LOCAL&&Object(s["r"])(),t,"unsupported-persistence-type"):I(e===_.NONE||g(),t,"unsupported-persistence-type")}async function S(t){await t._initializationPromise;const e=A(),n=r["u"](T,t.config.apiKey,t.name);(null===e||void 0===e?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function k(t,e){const n=A();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["u"](T,t,e),s=n.sessionStorage.getItem(i);switch(s){case _.NONE:return[r["K"]];case _.LOCAL:return[r["L"],r["z"]];case _.SESSION:return[r["z"]];default:return[]}}function A(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=r["o"];class C{constructor(){this.browserResolver=r["s"](r["y"]),this.cordovaResolver=r["s"](r["D"]),this.underlyingResolver=null,this._redirectPersistence=r["z"],this._completeRedirectFn=r["t"]}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,r)}async _openRedirect(t,e,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,r)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return O(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await w();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return t.unwrap()}function N(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return P(t)}function R(t,e){var n;const i=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new j(t,r["I"](t,e))}else if(i){const t=P(e),n=e;t&&(n.credential=t,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function P(t){const{_tokenResponse:e}=t instanceof s["c"]?t.customData:t;if(!e)return null;if(!(t instanceof s["c"])&&"temporaryProof"in e&&"phoneNumber"in e)return r["i"].credentialFromResult(t);const n=e.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["n"];break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return s||o||t||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:t,accessToken:s}):new r["h"](n).credential({idToken:t,accessToken:s,rawNonce:c}):null}return t instanceof s["c"]?i.credentialFromError(t):i.credentialFromResult(t)}function L(t,e){return e.catch(e=>{throw e instanceof s["c"]&&R(t,e),e}).then(t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:D(t),additionalUserInfo:r["H"](t),user:F.getOrCreate(n)}})}async function M(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>L(t,n.confirm(e))}}class j{constructor(t,e){this.resolver=e,this.auth=N(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return L(x(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this._delegate=t,this.multiFactor=r["R"](t)}static getOrCreate(t){return F.USER_MAP.has(t)||F.USER_MAP.set(t,new F(t)),F.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return L(this.auth,r["N"](this._delegate,t))}async linkWithPhoneNumber(t,e){return M(this.auth,r["O"](this._delegate,t,e))}async linkWithPopup(t){return L(this.auth,r["P"](this._delegate,t,C))}async linkWithRedirect(t){return await S(r["p"](this.auth)),r["Q"](this._delegate,t,C)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return L(this.auth,r["S"](this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return M(this.auth,r["T"](this._delegate,t,e))}reauthenticateWithPopup(t){return L(this.auth,r["U"](this._delegate,t,C))}async reauthenticateWithRedirect(t){return await S(r["p"](this.auth)),r["V"](this._delegate,t,C)}sendEmailVerification(t){return r["W"](this._delegate,t)}async unlink(t){return await r["hb"](this._delegate,t),this}updateEmail(t){return r["ib"](this._delegate,t)}updatePassword(t){return r["jb"](this._delegate,t)}updatePhoneNumber(t){return r["kb"](this._delegate,t)}updateProfile(t){return r["lb"](this._delegate,t)}verifyBeforeUpdateEmail(t,e){return r["mb"](this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=r["o"];class V{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;U(n,"invalid-api-key",{appName:t.name});let i=[r["K"]];if("undefined"!==typeof window){i=k(n,t.name);for(const t of[r["L"],r["x"],r["z"]])i.includes(t)||i.push(t)}U(n,"invalid-api-key",{appName:t.name});const s="undefined"!==typeof window?C:void 0;this._delegate=e.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(r["F"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){r["C"](this._delegate,t,e)}applyActionCode(t){return r["w"](this._delegate,t)}checkActionCode(t){return r["A"](this._delegate,t)}confirmPasswordReset(t,e){return r["B"](this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return L(this._delegate,r["E"](this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return r["G"](this._delegate,t)}isSignInWithEmailLink(t){return r["M"](this._delegate,t)}async getRedirectResult(){U(y(),this._delegate,"operation-not-supported-in-this-environment");const t=await r["J"](this._delegate,C);return t?L(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){r["v"](this._delegate,t)}onAuthStateChanged(t,e,n){const{next:r,error:i,complete:s}=$(t,e,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(t,e,n){const{next:r,error:i,complete:s}=$(t,e,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(t,e){return r["Y"](this._delegate,t,e)}sendPasswordResetEmail(t,e){return r["X"](this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(E(this._delegate,t),t){case _.SESSION:e=r["z"];break;case _.LOCAL:const t=await r["s"](r["L"])._isAvailable();e=t?r["L"]:r["x"];break;case _.NONE:e=r["K"];break;default:return r["q"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return L(this._delegate,r["Z"](this._delegate))}signInWithCredential(t){return L(this._delegate,r["ab"](this._delegate,t))}signInWithCustomToken(t){return L(this._delegate,r["bb"](this._delegate,t))}signInWithEmailAndPassword(t,e){return L(this._delegate,r["cb"](this._delegate,t,e))}signInWithEmailLink(t,e){return L(this._delegate,r["db"](this._delegate,t,e))}signInWithPhoneNumber(t,e){return M(this._delegate,r["eb"](this._delegate,t,e))}async signInWithPopup(t){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["fb"](this._delegate,t,C))}async signInWithRedirect(t){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),r["gb"](this._delegate,t,C)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return r["nb"](this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function $(t,e,n){let r=t;"function"!==typeof t&&({next:r,error:e,complete:n}=t);const i=r,s=t=>i(t&&F.getOrCreate(t));return{next:s,error:e,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.Persistence=_;class q{constructor(){this.providerId="phone",this._delegate=new r["i"](x(e["a"].auth()))}static credential(t,e){return r["i"].credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}q.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,q.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B=r["o"];class z{constructor(t,n,i=e["a"].app()){var s;B(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](t,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-compat";function W(t){t.INTERNAL.registerComponent(new i["a"](H,t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new V(e,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],PhoneAuthProvider:q,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:z,TwitterAuthProvider:r["n"],Auth:V,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(o,a)}W(e["a"])}).call(this,n("c8ba"))},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),s=n("df75"),o=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||s(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=o.f,d=a.f;while(i>l){var f,p=u(arguments[l++]),m=h?s(p).concat(h(p)):s(p),g=m.length,v=0;while(g>v)f=m[v++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:l},"614a":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("1fd5"),i=n("ffa6"),s=n("5606"),o=n("4fc1");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["e"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function l(e){const i=e.name,a=i.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:i});return t[a]()};void 0!==e.serviceProps&&Object(r["i"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,i);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){Object(r["i"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.6";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){Object(s["registerVersion"])(p,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},6547:function(t,e,n){var r=n("5926"),i=n("577e"),s=n("1d80"),o=function(t){return function(e,n){var o,a,c=i(s(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("d039"),i=n("1626"),s=n("f5df"),o=n("d066"),a=n("8925"),c=[],u=o("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,d=!l.exec((function(){})),f=function(t){if(!i(t))return!1;try{return u(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!i(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(l,a(t))};t.exports=!u||r((function(){var t;return f(f.call)||!f(Object)||!f((function(){t=!0}))||t}))?p:f},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("1a2d"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var y=h.state||(h.state=new m),b=y.get,w=y.has,_=y.set;r=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,_.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},s=function(t){return w.call(y,t)}}else{var I=d("state");f[I]=!0,r=function(t,e){if(l(t,I))throw new TypeError(p);return e.facade=t,u(t,I,e),e},i=function(t){return l(t,I)?t[I]:{}},s=function(t){return l(t,I)}}t.exports={set:r,get:i,has:s,enforce:g,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),t!==r?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(t,e,n){var r=n("83ab"),i=n("df75"),s=n("fc6a"),o=n("d1e7").f,a=function(t){return function(e){var n,a=s(e),c=i(a),u=c.length,l=0,h=[];while(u>l)n=c[l++],r&&!o.call(a,n)||h.push(t?[n,a[n]]:a[n]);return h}};t.exports={entries:a(!0),values:a(!1)}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=i(t),n=new g,g[f]=null,n[m]=t):n=w(),void 0===e?n:s(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("5e77"),o=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),m=n("ae93"),g=s.PROPER,v=s.CONFIGURABLE,y=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=f("iterator"),_="keys",I="values",T="entries",E=function(){return this};t.exports=function(t,e,n,s,f,m,S){a(n,e,s);var k,A,O,C=function(t){if(t===f&&P)return P;if(!b&&t in D)return D[t];switch(t){case _:return function(){return new n(this,t)};case I:return function(){return new n(this,t)};case T:return function(){return new n(this,t)}}return function(){return new n(this)}},x=e+" Iterator",N=!1,D=t.prototype,R=D[w]||D["@@iterator"]||f&&D[f],P=!b&&R||C(f),L="Array"==e&&D.entries||R;if(L&&(k=c(L.call(new t)),k!==Object.prototype&&k.next&&(i||c(k)===y||(u?u(k,y):o(k[w])||d(k,w,E)),l(k,x,!0,!0),i&&(p[x]=E))),g&&f==I&&R&&R.name!==I&&(!i&&v?h(D,"name",I):(N=!0,P=function(){return R.call(this)})),f)if(A={values:C(I),keys:m?P:C(_),entries:C(T)},S)for(O in A)(b||N||!(O in D))&&d(D,O,A[O]);else r({target:e,proto:!0,forced:b||N},A);return i&&!S||D[w]===P||d(D,w,P,{name:f}),p[e]=P,A}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),i=n("c6cd"),s=Function.toString;r(i.inspectSource)||(i.inspectSource=function(t){return s.call(t)}),t.exports=i.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function i(t,e){for(var n in e)t[n]=e[n];return t}var s=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,c=function(t){return encodeURIComponent(t).replace(s,o).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var r,i=n||d;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function m(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=g(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:b(e,i),matched:t?y(t):[]};return n&&(o.redirectedFrom=b(n,i)),Object.freeze(o)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var v=m(null,{path:"/"});function y(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||f;return(n||"/")+s(r)+i}function w(t,e,n){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function I(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&T(t.query,e.query)}function T(t,e){for(var n in e)if(!(n in t))return!1;return!0}function E(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&k(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),E(u)};var y=g.props&&g.props[c];return y&&(i(l[c],{route:u,configProps:y}),k(v,o,u,y)),a(v,o,r)}};function k(t,e,n,r){var s=e.props=A(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/\//g,"/")}var N=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},D=J,R=F,P=U,L=q,M=Y,j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=j.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?z(I):v?".*":"[^"+B(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function U(t,e){return q(F(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",W(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function G(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function K(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(J(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",W(n));return H(s,e)}function Q(t,e,n){return Y(F(t,n),e,n)}function Y(t,e,n){N(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+s,W(n)),e)}function J(t,e,n){return N(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?G(t,e):N(t)?K(t,e,n):Q(t,e,n)}D.parse=R,D.compile=P,D.tokensToFunction=L,D.tokensToRegExp=M;var X=Object.create(null);function Z(t,e,n){e=e||{};try{var r=X[t]||(X[t]=D.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function tt(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Z(c,a,"path "+e.path)}else 0;return s}var u=C(s.path||""),h=e&&e.path||"/",d=u.path?O(u.path,h,n||s.append):h,f=l(u.query,s.query,r&&r.options.parseQuery),p=s.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var et,nt=[String,Object],rt=[String,Array],it=function(){},st={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?m(null,tt(a.redirectedFrom),null,n):a;u[g]=w(r,v,this.exactPath),u[p]=this.exact||this.exactPath?u[g]:I(r,v);var y=u[g]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(o,it):n.push(o,it))},_={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=b})):_[this.event]=b;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[p],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":y};else{var S=at(this.$slots.default);if(S){S.isStatic=!1;var k=S.data=i({},S.data);for(var A in k.on=k.on||{},k.on){var O=k.on[A];A in _&&(k.on[A]=Array.isArray(O)?O:[O])}for(var C in _)C in k.on?k.on[C].push(_[C]):k.on[C]=b;var x=S.data.attrs=i({},S.data.attrs);x.href=c,x["aria-current"]=y}else T.on=_}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",st);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function lt(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ht(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ht(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:dt(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?x(s+"/"+r.path):void 0;ht(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ht(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function dt(t,e){var n=D(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function pt(t,e){var n=lt(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){lt(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],r,i,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=tt(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(mt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(m(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var p=gt(c,t),g=Z(p,f,'redirect route with path "'+p+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):m(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function mt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function gt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var vt=ut&&window.performance&&window.performance.now?window.performance:Date;function yt(){return vt.now().toFixed(3)}var bt=yt();function wt(){return bt}function _t(t){return bt=t}var It=Object.create(null);function Tt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function Et(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=At(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Pt(t,s)})).catch((function(t){0})):Pt(o,s))}))}}function St(){var t=wt();t&&(It[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){St(),t.state&&t.state.key&&_t(t.state.key)}function At(){var t=wt();if(t)return It[t]}function Ot(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ct(t){return Dt(t.x)||Dt(t.y)}function xt(t){return{x:Dt(t.x)?t.x:window.pageXOffset,y:Dt(t.y)?t.y:window.pageYOffset}}function Nt(t){return{x:Dt(t.x)?t.x:0,y:Dt(t.y)?t.y:0}}function Dt(t){return"number"===typeof t}var Rt=/^#\d/;function Pt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Rt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Nt(i),e=Ot(r,i)}else Ct(t)&&(e=xt(t))}else n&&Ct(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Mt(t,e){St();var n=window.history;try{if(e){var r=i({},n.state);r.key=wt(),n.replaceState(r,"",t)}else n.pushState({key:_t(yt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function jt(t){Mt(t,!0)}function Ft(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return zt(t,e,Ut.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Wt(e)+'" via a navigation guard.')}function $t(t,e){var n=zt(t,e,Ut.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function qt(t,e){return zt(t,e,Ut.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Bt(t,e){return zt(t,e,Ut.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function Wt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Qt(t){return function(e,n,r){var i=!1,s=0,o=null;Yt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=te((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Gt(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Yt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,r){var i=Yt(t,(function(t,r,i,s){var o=se(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Jt(r?i.reverse():i)}function se(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function oe(t){return ie(t,"beforeRouteLeave",ce,!0)}function ae(t){return ie(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return ie(t,"beforeRouteEnter",(function(t,e,n,r){return le(t,n,r)}))}function le(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,Ut.redirected)&&s===v||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var i=this,s=this.current;this.pending=t;var o=function(t){!Kt(t)&&Gt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},a=t.matched.length-1,c=s.matched.length-1;if(w(t,s)&&a===c&&t.matched[a]===s.matched[c])return this.ensureURL(),o($t(s,t));var u=re(this.current.matched,t.matched),l=u.updated,h=u.deactivated,d=u.activated,f=[].concat(oe(h),this.router.beforeHooks,ae(l),d.map((function(t){return t.beforeEnter})),Qt(d)),p=function(e,n){if(i.pending!==t)return o(qt(s,t));try{e(t,s,(function(e){!1===e?(i.ensureURL(!0),o(Bt(s,t))):Gt(e)?(i.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Vt(s,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(r){o(r)}};Ft(f,p,(function(){var n=ue(d),r=n.concat(i.router.resolveHooks);Ft(r,p,(function(){if(i.pending!==t)return o(qt(s,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){E(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=de(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var n=t.current,i=de(t.base);t.current===v&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Et(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(x(r.base+t.fullPath)),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){jt(x(r.base+t.fullPath)),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(de(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Mt(e):jt(e)}},e.prototype.getCurrentLocation=function(){return de(this.base)},e}(ee);function de(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||me()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var e=t.current;me()&&t.transitionTo(ge(),(function(n){r&&Et(t.router,n,e,!0),Lt||be(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){be(t.fullPath),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ye(e):be(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(ee);function pe(t){var e=de(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function me(){var t=ge();return"/"===t.charAt(0)||(be("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ve(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ye(t){Lt?Mt(ve(t)):window.location.hash=t}function be(t){Lt?jt(ve(t)):window.location.replace(ve(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,Ut.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},Ie={currentRoute:{configurable:!0}};function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ee(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ie.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Lt&&i;s&&"fullPath"in t&&Et(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Te(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Ee(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,Ie),_e.install=ct,_e.version="3.5.2",_e.isNavigationFailure=Kt,_e.NavigationFailureType=Ut,_e.START_LOCATION=v,ut&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Or})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Dr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Pr})),n.d(e,"h",(function(){return kr})),n.d(e,"i",(function(){return Ar}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function E(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function k(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var O,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var D=a.navigator;if(D){var R=D.userAgent;if(R){O=R;break t}}O=""}function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,$=x(O,"Opera"),q=x(O,"Trident")||x(O,"MSIE"),B=x(O,"Edge"),z=B||q,H=x(O,"Gecko")&&!(x(O.toLowerCase(),"webkit")&&!x(O,"Edge"))&&!(x(O,"Trident")||x(O,"MSIE"))&&!x(O,"Edge"),W=x(O.toLowerCase(),"webkit")&&!x(O,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var K="",Q=function(){var t=O;return H?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):W?/WebKit\/(\S+)/.exec(t):$?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(K=Q?Q[1]:""),q){var Y=G();if(null!=Y&&Y>parseFloat(K)){V=String(Y);break t}}V=K}var J,X={};function Z(){return U((function(){let t=0;const e=C(String(V)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=G();J=tt||(parseInt(V,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=It;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function It(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var Et="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Et]||(t[Et]=function(e){return t.handleEvent(e)}),t[Et])}function kt(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),j(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ot(o,r,!0,e)&&i}if(o=e.g=t,i=Ot(o,r,!0,e)&&i,i=Ot(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ot(o,r,!1,e)&&i}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(kt,b),kt.prototype[ot]=!0,kt.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},kt.prototype.M=function(){if(kt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},kt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pt,t=>t.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Dt||jt(),Ft||(Dt(),Ft=!0),Ut.add(t,e)}function jt(){var t=a.Promise.resolve(void 0);Dt=function(){t.then(Vt)}}var Ft=!1,Ut=new Nt;function Vt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function $t(t,e){kt.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=Bt(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y($t,kt),r=$t.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){$t.Z.M.call(this),qt(this),delete this.g};class Ht extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(t){b.call(this),this.h=t,this.g={}}y(Wt,b);var Gt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var s=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Yt(){this.g=!0}function Jt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.Z.M.call(this),Qt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new kt}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();At(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(se,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function me(){}fe.prototype.h=null;var ge,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wt(this),this.P=Te,t=z?125:void 0,this.W=new $t(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ie}function Ie(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var Te=45e3,Ee={},Se={};function ke(t,e,n){t.K=1,t.v=Je(He(e)),t.s=n,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Ne(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ie,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(g(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ee){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Oe(t)&&r!=Se&&r!=Ee&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Pe(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ee:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(g(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&fr(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=je(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];$e(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],$e(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Kn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Kn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(Oe(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Ce(this,h,o),z&&this.i&&3==h&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),Pe(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Ce(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,Pe(this)):De(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return $e(this.h,t)?this.h[t]:e},r.set=function(t,e){$e(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,We(this,t.j),this.s=t.s,Ge(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,We(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),Ke(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function He(t){return new ze(t)}function We(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,mn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Je(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xe(t){return t instanceof ze?He(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&We(i,t),e&&Ge(i,e),n&&Ke(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),$e(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$e(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return ln(t),e=pn(t,e),$e(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),k(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var gn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function In(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function En(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function Sn(){}function kn(){this.g=new Sn}function An(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function On(t,e){const n=new Yt;if(a.Image){const r=new Image;r.onload=v(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=v(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(xn,fe),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),y(Nn,kt);var Dn=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Dn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Ln(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},r.Ta=function(t){this.g&&(this.response=t,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function jn(t){kt.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(jn,kt);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function $n(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Bn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Wn(t)}function zn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Kn(t)||2!=t.ba()))if(t.v&&4==Kn(t))Bt(t.Fa,0,t);else if(At(t,"readystatechange"),4==Kn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var c=2<Kn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Wn(t)}}}function Wn(t,e){if(t.g){Gn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,t),this.$a=Xn("retryDelaySeedMs",1e4,t),this.Ya=Xn("forwardChannelMaxRetries",2,t),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new kn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=He(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Je(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new gn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(g(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=He(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ar(t,r),t.o&&t.s&&Jn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),In(t.i,n),ke(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{An(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(g(t.Ga,t),mr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ar(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(He(e)),n.s=null,n.U=!0,Ae(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),At(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||We(n,"https"),Je(n)),On(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==En(t.i).length&&0==t.l.length||(t.i.i.length=0,k(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Xe(n);if(""!=r.i)e&&Ge(r,e+"."+r.i),Ke(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new xn({ib:!0})):new jn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Ir(t,e){kt.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Tr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Er(){be.call(this),this.status=1}function Sr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Bn(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=E(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=I(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Bt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Bn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),j(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=He(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Jn(n,this.o,s),In(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,ke(i,n,null)):ke(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Ir(t,e)},y(Ir,kt),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(g(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Ir.prototype.close=function(){tr(this.g)},Ir.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Ir.Z.M.call(this)},y(Tr,ye),y(Er,be),y(Sr,wr),Sr.prototype.xa=function(){At(this.g,"a")},Sr.prototype.wa=function(t){At(this.g,new Tr(t))},Sr.prototype.va=function(t){At(this.g,new Er(t))},Sr.prototype.ua=function(){At(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",me.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",kt.prototype.listen=kt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var kr=s.createWebChannelTransport=function(){return new _r},Ar=s.getStatEventTarget=function(){return ie()},Or=s.ErrorCode=he,Cr=s.EventType=de,xr=s.Event=ne,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dr=s.FetchXmlHttpFactory=xn,Rr=s.WebChannel=me,Pr=s.XhrIo=jn}).call(this,n("c8ba"))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),i=n("ad6d"),s=n("9f7f"),o=n("5692"),a=n("7c73"),c=n("69f3").get,u=n("fce3"),l=n("107c"),h=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),f=h,p=function(){var t=/a/,e=/b*/g;return h.call(t,"a"),h.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),m=s.UNSUPPORTED_Y||s.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],v=p||g||m||u||l;v&&(f=function(t){var e,n,s,o,u,l,v,y=this,b=c(y),w=r(t),_=b.raw;if(_)return _.lastIndex=y.lastIndex,e=f.call(_,w),y.lastIndex=_.lastIndex,e;var I=b.groups,T=m&&y.sticky,E=i.call(y),S=y.source,k=0,A=w;if(T&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),A=w.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==w.charAt(y.lastIndex-1))&&(S="(?: "+S+")",A=" "+A,k++),n=new RegExp("^(?:"+S+")",E)),g&&(n=new RegExp("^"+S+"$(?!\\s)",E)),p&&(s=y.lastIndex),o=h.call(T?n:y,A),T?o?(o.input=o.input.slice(k),o[0]=o[0].slice(k),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:p&&o&&(y.lastIndex=y.global?o.index+o[0].length:s),g&&o&&o.length>1&&d.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&I)for(o.groups=l=a(null),u=0;u<I.length;u++)v=I[u],l[v[0]]=o[v[1]];return o}),t.exports=f},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,s=Object.create(i.prototype),o=new C(r||[]);return s._invoke=S(t,n,o),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=y.prototype=g.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,s,o,a){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(t,e,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=k(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function x(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=y,c(I,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(I),t},t.awrap=function(t){return{__await:t}},T(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new E(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),s=n("e8b5"),o=n("861d"),a=n("7b0b"),c=n("07fa"),u=n("8418"),l=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),b=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},w=!v||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,i,s,o=a(this),h=l(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?o:arguments[e],b(s)){if(i=c(s),d+i>m)throw TypeError(g);for(n=0;n<i;n++,d++)n in s&&u(h,d,s[n])}else{if(d>=m)throw TypeError(g);u(h,d++,s)}return h.length=d,h}})},"9a1f":function(t,e,n){var r=n("59ed"),i=n("825a"),s=n("35a1");t.exports=function(t,e){var n=arguments.length<2?s(t):e;if(r(n))return i(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9ab4":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return c}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function i(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r["throw"](t))}catch(e){s(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=2&s[0]?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}Object.create;function o(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{while((void 0===e||e-- >0)&&!(r=s.next()).done)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s["return"])&&n.call(s)}finally{if(i)throw i.error}}return o}function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),s=n("825a"),o=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(s(t),e=o(e),s(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:s(1,n)}),o(t,u,!1,!0),a[u]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),s=n("fc6a"),o=n("a640"),a=[].join,c=i!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return a.call(s(this),void 0===t?",":t)}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("1a2d"),h=n("e8b5"),d=n("1626"),f=n("861d"),p=n("d9b5"),m=n("825a"),g=n("7b0b"),v=n("fc6a"),y=n("a04b"),b=n("577e"),w=n("5c6c"),_=n("7c73"),I=n("df75"),T=n("241c"),E=n("057f"),S=n("7418"),k=n("06cf"),A=n("9bf2"),O=n("d1e7"),C=n("6eeb"),x=n("5692"),N=n("f772"),D=n("d012"),R=n("90e3"),P=n("b622"),L=n("e538"),M=n("746f"),j=n("d44e"),F=n("69f3"),U=n("b727").forEach,V=N("hidden"),$="Symbol",q="prototype",B=P("toPrimitive"),z=F.set,H=F.getterFor($),W=Object[q],G=i.Symbol,K=s("JSON","stringify"),Q=k.f,Y=A.f,J=E.f,X=O.f,Z=x("symbols"),tt=x("op-symbols"),et=x("string-to-symbol-registry"),nt=x("symbol-to-string-registry"),rt=x("wks"),it=i.QObject,st=!it||!it[q]||!it[q].findChild,ot=a&&u((function(){return 7!=_(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(W,e);r&&delete W[e],Y(t,e,n),r&&t!==W&&Y(W,e,r)}:Y,at=function(t,e){var n=Z[t]=_(G[q]);return z(n,{type:$,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===W&&ct(tt,e,n),m(t);var r=y(e);return m(n),l(Z,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=_(n,{enumerable:w(0,!1)})):(l(t,V)||Y(t,V,w(1,{})),t[V][r]=!0),ot(t,r,n)):Y(t,r,n)},ut=function(t,e){m(t);var n=v(e),r=I(n).concat(pt(n));return U(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?_(t):ut(_(t),e)},ht=function(t){var e=y(t),n=X.call(this,e);return!(this===W&&l(Z,e)&&!l(tt,e))&&(!(n||!l(this,e)||!l(Z,e)||l(this,V)&&this[V][e])||n)},dt=function(t,e){var n=v(t),r=y(e);if(n!==W||!l(Z,r)||l(tt,r)){var i=Q(n,r);return!i||!l(Z,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},ft=function(t){var e=J(v(t)),n=[];return U(e,(function(t){l(Z,t)||l(D,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=J(e?tt:v(t)),r=[];return U(n,(function(t){!l(Z,t)||e&&!l(W,t)||r.push(Z[t])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,e=R(t),n=function(t){this===W&&n.call(tt,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,w(1,t))};return a&&st&&ot(W,e,{configurable:!0,set:n}),at(e,t)},C(G[q],"toString",(function(){return H(this).tag})),C(G,"withoutSetter",(function(t){return at(R(t),t)})),O.f=ht,A.f=ct,k.f=dt,T.f=E.f=ft,S.f=pt,L.f=function(t){return at(P(t),t)},a&&(Y(G[q],"description",{configurable:!0,get:function(){return H(this).description}}),o||C(W,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),U(I(rt),(function(t){M(t)})),r({target:$,stat:!0,forced:!c},{for:function(t){var e=b(t);if(l(et,e))return et[e];var n=G(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),K){var mt=!c||u((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=e,(f(e)||void 0!==t)&&!p(t))return h(e)||(e=function(t,e){if(d(r)&&(e=r.call(this,t,e)),!p(e))return e}),i[1]=e,K.apply(null,i)}})}if(!G[q][B]){var gt=G[q].valueOf;C(G[q],B,(function(){return gt.apply(this,arguments)}))}j(G,$),D[V]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),s=n("1c7e"),o=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},a925:function(t,e,n){"use strict";
/*!
 * vue-i18n v8.26.5 
 * (c) 2021 kazuya kawaguchi
 * Released under the MIT License.
 */var r=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function i(t,e){"undefined"!==typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function s(t,e){"undefined"!==typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}var o=Array.isArray;function a(t){return null!==t&&"object"===typeof t}function c(t){return"boolean"===typeof t}function u(t){return"string"===typeof t}var l=Object.prototype.toString,h="[object Object]";function d(t){return l.call(t)===h}function f(t){return null===t||void 0===t}function p(t){return"function"===typeof t}function m(){var t=[],e=arguments.length;while(e--)t[e]=arguments[e];var n=null,r=null;return 1===t.length?a(t[0])||o(t[0])?r=t[0]:"string"===typeof t[0]&&(n=t[0]):2===t.length&&("string"===typeof t[0]&&(n=t[0]),(a(t[1])||o(t[1]))&&(r=t[1])),{locale:n,params:r}}function g(t){return JSON.parse(JSON.stringify(t))}function v(t,e){if(t.delete(e))return t}function y(t){var e=[];return t.forEach((function(t){return e.push(t)})),e}function b(t,e){return!!~t.indexOf(e)}var w=Object.prototype.hasOwnProperty;function _(t,e){return w.call(t,e)}function I(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var i=e[r];if(void 0!==i&&null!==i){var s=void 0;for(s in i)_(i,s)&&(a(i[s])?n[s]=I(n[s],i[s]):n[s]=i[s])}}return n}function T(t,e){if(t===e)return!0;var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=o(t),s=o(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return T(t,e[n])}));if(i||s)return!1;var c=Object.keys(t),u=Object.keys(e);return c.length===u.length&&c.every((function(n){return T(t[n],e[n])}))}catch(l){return!1}}function E(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function S(t){return null!=t&&Object.keys(t).forEach((function(e){"string"==typeof t[e]&&(t[e]=E(t[e]))})),t}function k(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){var n=[],r=arguments.length-2;while(r-- >0)n[r]=arguments[r+2];var i=this.$i18n;return i._tc.apply(i,[t,i.locale,i._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}}function A(t){function e(){this!==this.$root&&this.$options.__INTLIFY_META__&&this.$el&&this.$el.setAttribute("data-intlify",this.$options.__INTLIFY_META__)}return void 0===t&&(t=!1),t?{mounted:e}:{beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n)if(t.i18n instanceof St){if(t.__i18nBridge||t.__i18n)try{var e=t.i18n&&t.i18n.messages?t.i18n.messages:{},n=t.__i18nBridge||t.__i18n;n.forEach((function(t){e=I(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(c){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(d(t.i18n)){var r=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof St?this.$root.$i18n:null;if(r&&(t.i18n.root=this.$root,t.i18n.formatter=r.formatter,t.i18n.fallbackLocale=r.fallbackLocale,t.i18n.formatFallbackMessages=r.formatFallbackMessages,t.i18n.silentTranslationWarn=r.silentTranslationWarn,t.i18n.silentFallbackWarn=r.silentFallbackWarn,t.i18n.pluralizationRules=r.pluralizationRules,t.i18n.preserveDirectiveContent=r.preserveDirectiveContent),t.__i18nBridge||t.__i18n)try{var i=t.i18n&&t.i18n.messages?t.i18n.messages:{},s=t.__i18nBridge||t.__i18n;s.forEach((function(t){i=I(i,JSON.parse(t))})),t.i18n.messages=i}catch(c){0}var o=t.i18n,a=o.sharedMessages;a&&d(a)&&(t.i18n.messages=I(t.i18n.messages,a)),this._i18n=new St(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),r&&r.onComponentInstanceCreated(this._i18n)}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof St?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof St&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n?(t.i18n instanceof St||d(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof St||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof St)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},mounted:e,beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}}}var O={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.data,r=e.parent,i=e.props,s=e.slots,o=r.$i18n;if(o){var a=i.path,c=i.locale,u=i.places,l=s(),h=o.i(a,c,C(l)||u?x(l.default,u):l),d=i.tag&&!0!==i.tag||!1===i.tag?i.tag:"span";return d?t(d,n,h):h}}};function C(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}function x(t,e){var n=e?N(e):{};if(!t)return n;t=t.filter((function(t){return t.tag||""!==t.text.trim()}));var r=t.every(P);return t.reduce(r?D:R,n)}function N(t){return Array.isArray(t)?t.reduce(R,{}):Object.assign({},t)}function D(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function R(t,e,n){return t[n]=e,t}function P(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var L,M={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,i=e.parent,s=e.data,o=i.$i18n;if(!o)return null;var c=null,l=null;u(n.format)?c=n.format:a(n.format)&&(n.format.key&&(c=n.format.key),l=Object.keys(n.format).reduce((function(t,e){var i;return b(r,e)?Object.assign({},t,(i={},i[e]=n.format[e],i)):t}),null));var h=n.locale||o.locale,d=o._ntp(n.value,h,c,l),f=d.map((function(t,e){var n,r=s.scopedSlots&&s.scopedSlots[t.type];return r?r((n={},n[t.type]=t.value,n.index=e,n.parts=d,n)):t.value})),p=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return p?t(p,{attrs:s.attrs,class:s["class"],staticClass:s.staticClass},f):f}};function j(t,e,n){V(t,n)&&q(t,e,n)}function F(t,e,n,r){if(V(t,n)){var i=n.context.$i18n;$(t,n)&&T(e.value,e.oldValue)&&T(t._localeMessage,i.getLocaleMessage(i.locale))||q(t,e,n)}}function U(t,e,n,r){var s=n.context;if(s){var o=n.context.$i18n||{};e.modifiers.preserve||o.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t["_vt"],t._locale=void 0,delete t["_locale"],t._localeMessage=void 0,delete t["_localeMessage"]}else i("Vue instance does not exists in VNode context")}function V(t,e){var n=e.context;return n?!!n.$i18n||(i("VueI18n instance does not exists in Vue instance"),!1):(i("Vue instance does not exists in VNode context"),!1)}function $(t,e){var n=e.context;return t._locale===n.$i18n.locale}function q(t,e,n){var r,s,o=e.value,a=B(o),c=a.path,u=a.locale,l=a.args,h=a.choice;if(c||u||l)if(c){var d=n.context;t._vt=t.textContent=null!=h?(r=d.$i18n).tc.apply(r,[c,h].concat(z(u,l))):(s=d.$i18n).t.apply(s,[c].concat(z(u,l))),t._locale=d.$i18n.locale,t._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else i("`path` is required in v-t directive");else i("value type not supported")}function B(t){var e,n,r,i;return u(t)?e=t:d(t)&&(e=t.path,n=t.locale,r=t.args,i=t.choice),{path:e,locale:n,args:r,choice:i}}function z(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||d(e))&&n.push(e),n}function H(t,e){void 0===e&&(e={bridge:!1}),H.installed=!0,L=t;L.version&&Number(L.version.split(".")[0]);k(L),L.mixin(A(e.bridge)),L.directive("t",{bind:j,update:F,unbind:U}),L.component(O.name,O),L.component(M.name,M);var n=L.config.optionMergeStrategies;n.i18n=function(t,e){return void 0===e?t:e}}var W=function(){this._caches=Object.create(null)};W.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=Q(t),this._caches[t]=n),Y(n,e)};var G=/^(?:\d)+/,K=/^(?:\w)+/;function Q(t){var e=[],n=0,r="";while(n<t.length){var i=t[n++];if("{"===i){r&&e.push({type:"text",value:r}),r="";var s="";i=t[n++];while(void 0!==i&&"}"!==i)s+=i,i=t[n++];var o="}"===i,a=G.test(s)?"list":o&&K.test(s)?"named":"unknown";e.push({value:s,type:a})}else"%"===i?"{"!==t[n]&&(r+=i):r+=i}return r&&e.push({type:"text",value:r}),e}function Y(t,e){var n=[],r=0,i=Array.isArray(e)?"list":a(e)?"named":"unknown";if("unknown"===i)return n;while(r<t.length){var s=t[r];switch(s.type){case"text":n.push(s.value);break;case"list":n.push(e[parseInt(s.value,10)]);break;case"named":"named"===i&&n.push(e[s.value]);break;case"unknown":0;break}r++}return n}var J=0,X=1,Z=2,tt=3,et=0,nt=1,rt=2,it=3,st=4,ot=5,at=6,ct=7,ut=8,lt=[];lt[et]={ws:[et],ident:[it,J],"[":[st],eof:[ct]},lt[nt]={ws:[nt],".":[rt],"[":[st],eof:[ct]},lt[rt]={ws:[rt],ident:[it,J],0:[it,J],number:[it,J]},lt[it]={ident:[it,J],0:[it,J],number:[it,J],ws:[nt,X],".":[rt,X],"[":[st,X],eof:[ct,X]},lt[st]={"'":[ot,J],'"':[at,J],"[":[st,Z],"]":[nt,tt],eof:ut,else:[st,J]},lt[ot]={"'":[st,J],eof:ut,else:[ot,J]},lt[at]={'"':[st,J],eof:ut,else:[at,J]};var ht=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function dt(t){return ht.test(t)}function ft(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function pt(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function mt(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(dt(e)?ft(e):"*"+e)}function gt(t){var e,n,r,i,s,o,a,c=[],u=-1,l=et,h=0,d=[];function f(){var e=t[u+1];if(l===ot&&"'"===e||l===at&&'"'===e)return u++,r="\\"+e,d[J](),!0}d[X]=function(){void 0!==n&&(c.push(n),n=void 0)},d[J]=function(){void 0===n?n=r:n+=r},d[Z]=function(){d[J](),h++},d[tt]=function(){if(h>0)h--,l=st,d[J]();else{if(h=0,void 0===n)return!1;if(n=mt(n),!1===n)return!1;d[X]()}};while(null!==l)if(u++,e=t[u],"\\"!==e||!f()){if(i=pt(e),a=lt[l],s=a[i]||a["else"]||ut,s===ut)return;if(l=s[0],o=d[s[1]],o&&(r=s[2],r=void 0===r?e:r,!1===o()))return;if(l===ct)return c}}var vt=function(){this._cache=Object.create(null)};vt.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=gt(t),e&&(this._cache[t]=e)),e||[]},vt.prototype.getPathValue=function(t,e){if(!a(t))return null;var n=this.parsePath(e);if(0===n.length)return null;var r=n.length,i=t,s=0;while(s<r){var o=i[n[s]];if(void 0===o||null===o)return null;i=o,s++}return i};var yt,bt=/<\/?[\w\s="/.':;#-\/]+>/,wt=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|./]+|\([\w\-_|./]+\)))/g,_t=/^@(?:\.([a-z]+))?:/,It=/[()]/g,Tt={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},Et=new W,St=function(t){var e=this;void 0===t&&(t={}),!L&&"undefined"!==typeof window&&window.Vue&&H(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),i=t.messages||{},s=t.dateTimeFormats||t.datetimeFormats||{},o=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||Et,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new vt,this._dataListeners=new Set,this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this._escapeParameterHtml=t.escapeParameterHtml||!1,"__VUE_I18N_BRIDGE__"in t&&(this.__VUE_I18N_BRIDGE__=t.__VUE_I18N_BRIDGE__),this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex){var i=r.getChoiceIndex;return i.call(e,t,n)}var s=function(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0};return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):s(t,n)},this._exist=function(t,n){return!(!t||!n)&&(!f(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(i).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,i[t])})),this._initVM({locale:n,fallbackLocale:r,messages:i,dateTimeFormats:s,numberFormats:o})},kt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0},sync:{configurable:!0}};St.prototype._checkLocaleMessage=function(t,e,n){var r=[],a=function(t,e,n,r){if(d(n))Object.keys(n).forEach((function(i){var s=n[i];d(s)?(r.push(i),r.push("."),a(t,e,s,r),r.pop(),r.pop()):(r.push(i),a(t,e,s,r),r.pop())}));else if(o(n))n.forEach((function(n,i){d(n)?(r.push("["+i+"]"),r.push("."),a(t,e,n,r),r.pop(),r.pop()):(r.push("["+i+"]"),a(t,e,n,r),r.pop())}));else if(u(n)){var c=bt.test(n);if(c){var l="Detected HTML in message '"+n+"' of keypath '"+r.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?i(l):"error"===t&&s(l)}}};a(e,t,n,r)},St.prototype._initVM=function(t){var e=L.config.silent;L.config.silent=!0,this._vm=new L({data:t,__VUE18N__INSTANCE__:!0}),L.config.silent=e},St.prototype.destroyVM=function(){this._vm.$destroy()},St.prototype.subscribeDataChanging=function(t){this._dataListeners.add(t)},St.prototype.unsubscribeDataChanging=function(t){v(this._dataListeners,t)},St.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){var e=y(t._dataListeners),n=e.length;while(n--)L.nextTick((function(){e[n]&&e[n].$forceUpdate()}))}),{deep:!0})},St.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){t.$set(t,"locale",e),t.$forceUpdate()}),{immediate:!0})},St.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},kt.vm.get=function(){return this._vm},kt.messages.get=function(){return g(this._getMessages())},kt.dateTimeFormats.get=function(){return g(this._getDateTimeFormats())},kt.numberFormats.get=function(){return g(this._getNumberFormats())},kt.availableLocales.get=function(){return Object.keys(this.messages).sort()},kt.locale.get=function(){return this._vm.locale},kt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},kt.fallbackLocale.get=function(){return this._vm.fallbackLocale},kt.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},kt.formatFallbackMessages.get=function(){return this._formatFallbackMessages},kt.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},kt.missing.get=function(){return this._missing},kt.missing.set=function(t){this._missing=t},kt.formatter.get=function(){return this._formatter},kt.formatter.set=function(t){this._formatter=t},kt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},kt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},kt.silentFallbackWarn.get=function(){return this._silentFallbackWarn},kt.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},kt.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},kt.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},kt.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},kt.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},kt.postTranslation.get=function(){return this._postTranslation},kt.postTranslation.set=function(t){this._postTranslation=t},kt.sync.get=function(){return this._sync},kt.sync.set=function(t){this._sync=t},St.prototype._getMessages=function(){return this._vm.messages},St.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},St.prototype._getNumberFormats=function(){return this._vm.numberFormats},St.prototype._warnDefault=function(t,e,n,r,i,s){if(!f(n))return n;if(this._missing){var o=this._missing.apply(null,[t,e,r,i]);if(u(o))return o}else 0;if(this._formatFallbackMessages){var a=m.apply(void 0,i);return this._render(e,s,a.params,e)}return e},St.prototype._isFallbackRoot=function(t){return!t&&!f(this._root)&&this._fallbackRoot},St.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},St.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},St.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},St.prototype._interpolate=function(t,e,n,r,i,s,a){if(!e)return null;var c,l=this._path.getPathValue(e,n);if(o(l)||d(l))return l;if(f(l)){if(!d(e))return null;if(c=e[n],!u(c)&&!p(c))return null}else{if(!u(l)&&!p(l))return null;c=l}return u(c)&&(c.indexOf("@:")>=0||c.indexOf("@.")>=0)&&(c=this._link(t,e,c,r,"raw",s,a)),this._render(c,i,s,n)},St.prototype._link=function(t,e,n,r,i,s,a){var c=n,u=c.match(wt);for(var l in u)if(u.hasOwnProperty(l)){var h=u[l],d=h.match(_t),f=d[0],p=d[1],m=h.replace(f,"").replace(It,"");if(b(a,m))return c;a.push(m);var g=this._interpolate(t,e,m,r,"raw"===i?"string":i,"raw"===i?void 0:s,a);if(this._isFallbackRoot(g)){if(!this._root)throw Error("unexpected error");var v=this._root.$i18n;g=v._translate(v._getMessages(),v.locale,v.fallbackLocale,m,r,i,s)}g=this._warnDefault(t,m,g,r,o(s)?s:[s],i),this._modifiers.hasOwnProperty(p)?g=this._modifiers[p](g):Tt.hasOwnProperty(p)&&(g=Tt[p](g)),a.pop(),c=g?c.replace(h,g):c}return c},St.prototype._createMessageContext=function(t,e,n,r){var i=this,s=o(t)?t:[],c=a(t)?t:{},u=function(t){return s[t]},l=function(t){return c[t]},h=this._getMessages(),d=this.locale;return{list:u,named:l,values:t,formatter:e,path:n,messages:h,locale:d,linked:function(t){return i._interpolate(d,h[d]||{},t,null,r,void 0,[t])}}},St.prototype._render=function(t,e,n,r){if(p(t))return t(this._createMessageContext(n,this._formatter||Et,r,e));var i=this._formatter.interpolate(t,n,r);return i||(i=Et.interpolate(t,n,r)),"string"!==e||u(i)?i:i.join("")},St.prototype._appendItemToChain=function(t,e,n){var r=!1;return b(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},St.prototype._appendLocaleToChain=function(t,e,n){var r,i=e.split("-");do{var s=i.join("-");r=this._appendItemToChain(t,s,n),i.splice(-1,1)}while(i.length&&!0===r);return r},St.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,i=0;i<e.length&&c(r);i++){var s=e[i];u(s)&&(r=this._appendLocaleToChain(t,s,n))}return r},St.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];var r,i=[t];while(o(i))i=this._appendBlockToChain(n,i,e);r=o(e)?e:a(e)?e["default"]?e["default"]:null:e,i=u(r)?[r]:r,i&&this._appendBlockToChain(n,i,null),this._localeChainCache[t]=n}return n},St.prototype._translate=function(t,e,n,r,i,s,o){for(var a,c=this._getLocaleChain(e,n),u=0;u<c.length;u++){var l=c[u];if(a=this._interpolate(l,t[l],r,i,s,o,[r]),!f(a))return a}return null},St.prototype._t=function(t,e,n,r){var i,s=[],o=arguments.length-4;while(o-- >0)s[o]=arguments[o+4];if(!t)return"";var a=m.apply(void 0,s);this._escapeParameterHtml&&(a.params=S(a.params));var c=a.locale||e,u=this._translate(n,c,this.fallbackLocale,t,r,"string",a.params);if(this._isFallbackRoot(u)){if(!this._root)throw Error("unexpected error");return(i=this._root).$t.apply(i,[t].concat(s))}return u=this._warnDefault(c,t,u,r,s,"string"),this._postTranslation&&null!==u&&void 0!==u&&(u=this._postTranslation(u,t)),u},St.prototype.t=function(t){var e,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},St.prototype._i=function(t,e,n,r,i){var s=this._translate(n,e,this.fallbackLocale,t,r,"raw",i);if(this._isFallbackRoot(s)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,i)}return this._warnDefault(e,t,s,r,[i],"raw")},St.prototype.i=function(t,e,n){return t?(u(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},St.prototype._tc=function(t,e,n,r,i){var s,o=[],a=arguments.length-5;while(a-- >0)o[a]=arguments[a+5];if(!t)return"";void 0===i&&(i=1);var c={count:i,n:i},u=m.apply(void 0,o);return u.params=Object.assign(c,u.params),o=null===u.locale?[u.params]:[u.locale,u.params],this.fetchChoice((s=this)._t.apply(s,[t,e,n,r].concat(o)),i)},St.prototype.fetchChoice=function(t,e){if(!t||!u(t))return null;var n=t.split("|");return e=this.getChoiceIndex(e,n.length),n[e]?n[e].trim():t},St.prototype.tc=function(t,e){var n,r=[],i=arguments.length-2;while(i-- >0)r[i]=arguments[i+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},St.prototype._te=function(t,e,n){var r=[],i=arguments.length-3;while(i-- >0)r[i]=arguments[i+3];var s=m.apply(void 0,r).locale||e;return this._exist(n[s],t)},St.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},St.prototype.getLocaleMessage=function(t){return g(this._vm.messages[t]||{})},St.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},St.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,I("undefined"!==typeof this._vm.messages[t]&&Object.keys(this._vm.messages[t]).length?Object.assign({},this._vm.messages[t]):{},e))},St.prototype.getDateTimeFormat=function(t){return g(this._vm.dateTimeFormats[t]||{})},St.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},St.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,I(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},St.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},St.prototype._localizeDateTime=function(t,e,n,r,i){for(var s=e,o=r[s],a=this._getLocaleChain(e,n),c=0;c<a.length;c++){var u=a[c];if(o=r[u],s=u,!f(o)&&!f(o[i]))break}if(f(o)||f(o[i]))return null;var l=o[i],h=s+"__"+i,d=this._dateTimeFormatters[h];return d||(d=this._dateTimeFormatters[h]=new Intl.DateTimeFormat(s,l)),d.format(t)},St.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},St.prototype.d=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var r=this.locale,i=null;return 1===e.length?u(e[0])?i=e[0]:a(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(i=e[0].key)):2===e.length&&(u(e[0])&&(i=e[0]),u(e[1])&&(r=e[1])),this._d(t,r,i)},St.prototype.getNumberFormat=function(t){return g(this._vm.numberFormats[t]||{})},St.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},St.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,I(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},St.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},St.prototype._getNumberFormatter=function(t,e,n,r,i,s){for(var o=e,a=r[o],c=this._getLocaleChain(e,n),u=0;u<c.length;u++){var l=c[u];if(a=r[l],o=l,!f(a)&&!f(a[i]))break}if(f(a)||f(a[i]))return null;var h,d=a[i];if(s)h=new Intl.NumberFormat(o,Object.assign({},d,s));else{var p=o+"__"+i;h=this._numberFormatters[p],h||(h=this._numberFormatters[p]=new Intl.NumberFormat(o,d))}return h},St.prototype._n=function(t,e,n,r){if(!St.availabilities.numberFormat)return"";if(!n){var i=r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e);return i.format(t)}var s=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),o=s&&s.format(t);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return o||""},St.prototype.n=function(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var i=this.locale,s=null,o=null;return 1===e.length?u(e[0])?s=e[0]:a(e[0])&&(e[0].locale&&(i=e[0].locale),e[0].key&&(s=e[0].key),o=Object.keys(e[0]).reduce((function(t,n){var i;return b(r,n)?Object.assign({},t,(i={},i[n]=e[0][n],i)):t}),null)):2===e.length&&(u(e[0])&&(s=e[0]),u(e[1])&&(i=e[1])),this._n(t,i,s,o)},St.prototype._ntp=function(t,e,n,r){if(!St.availabilities.numberFormat)return[];if(!n){var i=r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e);return i.formatToParts(t)}var s=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),o=s&&s.formatToParts(t);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return o||[]},Object.defineProperties(St.prototype,kt),Object.defineProperty(St,"availabilities",{get:function(){if(!yt){var t="undefined"!==typeof Intl;yt={dateTimeFormat:t&&"undefined"!==typeof Intl.DateTimeFormat,numberFormat:t&&"undefined"!==typeof Intl.NumberFormat}}return yt}}),St.install=H,St.version="8.26.5",e["a"]=St},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("94ca"),o=n("6eeb"),a=n("1a2d"),c=n("7156"),u=n("d9b5"),l=n("c04e"),h=n("d039"),d=n("241c").f,f=n("06cf").f,p=n("9bf2").f,m=n("408a"),g=n("58a8").trim,v="Number",y=i[v],b=y.prototype,w=function(t){var e=l(t,"number");return"bigint"===typeof e?e:_(e)},_=function(t){var e,n,r,i,s,o,a,c,h=l(t,"number");if(u(h))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=g(h),e=h.charCodeAt(0),43===e||45===e){if(n=h.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+h}for(s=h.slice(2),o=s.length,a=0;a<o;a++)if(c=s.charCodeAt(a),c<48||c>i)return NaN;return parseInt(s,r)}return+h};if(s(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,T=function(t){var e=arguments.length<1?0:y(w(t)),n=this;return n instanceof T&&h((function(){m(n)}))?c(Object(e),n,T):e},E=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;E.length>S;S++)a(y,I=E[S])&&!a(T,I)&&p(T,I,f(y,I));T.prototype=b,b.constructor=T,o(i,v,T)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!i&&s(o,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b166:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){return r(1,arguments),t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(r(1,arguments),!i(t)&&"number"!==typeof t)return!1;var e=s(t);return!isNaN(Number(e))}n.d(e,"a",(function(){return Lt}));var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},c=function(t,e,n){var r,i=a[t];return r="string"===typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},u=c;function l(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var h={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},d={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},p={date:l({formats:h,defaultWidth:"full"}),time:l({formats:d,defaultWidth:"full"}),dateTime:l({formats:f,defaultWidth:"full"})},m=p,g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},v=function(t,e,n,r){return g[t]},y=v;function b(t){return function(e,n){var r,i=n||{},s=i.context?String(i.context):"standalone";if("formatting"===s&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=i.width?String(i.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var c=t.defaultWidth,u=i.width?String(i.width):t.defaultWidth;r=t.values[u]||t.values[c]}var l=t.argumentCallback?t.argumentCallback(e):e;return r[l]}}var w={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},I={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},T={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},E={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},S={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},k=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},A={ordinalNumber:k,era:b({values:w,defaultWidth:"wide"}),quarter:b({values:_,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:b({values:I,defaultWidth:"wide"}),day:b({values:T,defaultWidth:"wide"}),dayPeriod:b({values:E,defaultWidth:"wide",formattingValues:S,defaultFormattingWidth:"wide"})},O=A;function C(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o,a=s[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?N(c,(function(t){return t.test(a)})):x(c,(function(t){return t.test(a)}));o=t.valueCallback?t.valueCallback(u):u,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(a.length);return{value:o,rest:l}}}function x(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function N(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function D(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var R=/^(\d+)(th|st|nd|rd)?/i,P=/\d+/i,L={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},M={any:[/^b/i,/^(a|c)/i]},j={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},F={any:[/1/i,/2/i,/3/i,/4/i]},U={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},V={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},q={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},B={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},z={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},H={ordinalNumber:D({matchPattern:R,parsePattern:P,valueCallback:function(t){return parseInt(t,10)}}),era:C({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any"}),quarter:C({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:C({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:C({matchPatterns:$,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:B,defaultMatchWidth:"any",parsePatterns:z,defaultParseWidth:"any"})},W=H,G={code:"en-US",formatDistance:u,formatLong:m,formatRelative:y,localize:O,match:W,options:{weekStartsOn:0,firstWeekContainsDate:1}},K=G;function Q(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Y(t,e){r(2,arguments);var n=s(t).getTime(),i=Q(e);return new Date(n+i)}function J(t,e){r(2,arguments);var n=Q(e);return Y(t,-n)}function X(t,e){var n=t<0?"-":"",r=Math.abs(t).toString();while(r.length<e)r="0"+r;return n+r}var Z={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return X("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):X(n+1,2)},d:function(t,e){return X(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return X(t.getUTCHours()%12||12,e.length)},H:function(t,e){return X(t.getUTCHours(),e.length)},m:function(t,e){return X(t.getUTCMinutes(),e.length)},s:function(t,e){return X(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,n-3));return X(i,e.length)}},tt=Z,et=864e5;function nt(t){r(1,arguments);var e=s(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=n-i;return Math.floor(o/et)+1}function rt(t){r(1,arguments);var e=1,n=s(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function it(t){r(1,arguments);var e=s(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=rt(i),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var c=rt(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function st(t){r(1,arguments);var e=it(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var i=rt(n);return i}var ot=6048e5;function at(t){r(1,arguments);var e=s(t),n=rt(e).getTime()-st(e).getTime();return Math.round(n/ot)+1}function ct(t,e){r(1,arguments);var n=e||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,a=null==o?0:Q(o),c=null==n.weekStartsOn?a:Q(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=s(t),l=u.getUTCDay(),h=(l<c?7:0)+l-c;return u.setUTCDate(u.getUTCDate()-h),u.setUTCHours(0,0,0,0),u}function ut(t,e){r(1,arguments);var n=s(t,e),i=n.getUTCFullYear(),o=e||{},a=o.locale,c=a&&a.options&&a.options.firstWeekContainsDate,u=null==c?1:Q(c),l=null==o.firstWeekContainsDate?u:Q(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,l),h.setUTCHours(0,0,0,0);var d=ct(h,e),f=new Date(0);f.setUTCFullYear(i,0,l),f.setUTCHours(0,0,0,0);var p=ct(f,e);return n.getTime()>=d.getTime()?i+1:n.getTime()>=p.getTime()?i:i-1}function lt(t,e){r(1,arguments);var n=e||{},i=n.locale,s=i&&i.options&&i.options.firstWeekContainsDate,o=null==s?1:Q(s),a=null==n.firstWeekContainsDate?o:Q(n.firstWeekContainsDate),c=ut(t,e),u=new Date(0);u.setUTCFullYear(c,0,a),u.setUTCHours(0,0,0,0);var l=ct(u,e);return l}var ht=6048e5;function dt(t,e){r(1,arguments);var n=s(t),i=ct(n,e).getTime()-lt(n,e).getTime();return Math.round(i/ht)+1}var ft={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},pt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return tt.y(t,e)},Y:function(t,e,n,r){var i=ut(t,r),s=i>0?i:1-i;if("YY"===e){var o=s%100;return X(o,2)}return"Yo"===e?n.ordinalNumber(s,{unit:"year"}):X(s,e.length)},R:function(t,e){var n=it(t);return X(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return X(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return X(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return X(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return tt.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return X(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=dt(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):X(i,e.length)},I:function(t,e,n){var r=at(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):X(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):tt.d(t,e)},D:function(t,e,n){var r=nt(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):X(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return X(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return X(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=0===r?7:r;switch(e){case"i":return String(i);case"ii":return X(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),i=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,i=t.getUTCHours();switch(r=12===i?ft.noon:0===i?ft.midnight:i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,i=t.getUTCHours();switch(r=i>=17?ft.evening:i>=12?ft.afternoon:i>=4?ft.morning:ft.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return tt.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):tt.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):X(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):X(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):tt.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):tt.s(t,e)},S:function(t,e){return tt.S(t,e)},X:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();if(0===s)return"Z";switch(e){case"X":return gt(s);case"XXXX":case"XX":return vt(s);case"XXXXX":case"XXX":default:return vt(s,":")}},x:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"x":return gt(s);case"xxxx":case"xx":return vt(s);case"xxxxx":case"xxx":default:return vt(s,":")}},O:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+mt(s,":");case"OOOO":default:return"GMT"+vt(s,":")}},z:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+mt(s,":");case"zzzz":default:return"GMT"+vt(s,":")}},t:function(t,e,n,r){var i=r._originalDate||t,s=Math.floor(i.getTime()/1e3);return X(s,e.length)},T:function(t,e,n,r){var i=r._originalDate||t,s=i.getTime();return X(s,e.length)}};function mt(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(0===s)return n+String(i);var o=e||"";return n+String(i)+o+X(s,2)}function gt(t,e){if(t%60===0){var n=t>0?"-":"+";return n+X(Math.abs(t)/60,2)}return vt(t,e)}function vt(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=X(Math.floor(i/60),2),o=X(i%60,2);return r+s+n+o}var yt=pt;function bt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function wt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function _t(t,e){var n,r=t.match(/(P+)(p+)?/),i=r[1],s=r[2];if(!s)return bt(t,e);switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",bt(i,e)).replace("{{time}}",wt(s,e))}var It={p:wt,P:_t},Tt=It;function Et(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var St=["D","DD"],kt=["YY","YYYY"];function At(t){return-1!==St.indexOf(t)}function Ot(t){return-1!==kt.indexOf(t)}function Ct(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dt=/^'([^]*?)'?$/,Rt=/''/g,Pt=/[a-zA-Z]/;function Lt(t,e,n){r(2,arguments);var i=String(e),a=n||{},c=a.locale||K,u=c.options&&c.options.firstWeekContainsDate,l=null==u?1:Q(u),h=null==a.firstWeekContainsDate?l:Q(a.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=c.options&&c.options.weekStartsOn,f=null==d?0:Q(d),p=null==a.weekStartsOn?f:Q(a.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var m=s(t);if(!o(m))throw new RangeError("Invalid time value");var g=Et(m),v=J(m,g),y={firstWeekContainsDate:h,weekStartsOn:p,locale:c,_originalDate:m},b=i.match(Nt).map((function(t){var e=t[0];if("p"===e||"P"===e){var n=Tt[e];return n(t,c.formatLong,y)}return t})).join("").match(xt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Mt(n);var i=yt[r];if(i)return!a.useAdditionalWeekYearTokens&&Ot(n)&&Ct(n,e,t),!a.useAdditionalDayOfYearTokens&&At(n)&&Ct(n,e,t),i(v,n,c.localize,y);if(r.match(Pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}function Mt(t){return t.match(Dt)[1].replace(Rt,"'")}},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,_=h.Promise,I=d(h,"queueMicrotask"),T=I&&I.value;T||(r=function(){var t,e;v&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},p||v||g||!y||!b?!m&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=u.then,o=function(){l.call(u,r)}):o=v?function(){w.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)&&(a||"string"==typeof u[t])||(a&&s(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),o=n("07fa"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,m,g,v){for(var y,b,w=s(p),_=i(w),I=r(m,g,3),T=o(_),E=0,S=v||a,k=e?S(p,T):n||d?S(p,0):void 0;T>E;E++)if((f||E in _)&&(y=_[E],b=I(y,E,w),t))if(e)k[E]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:c.call(k,y)}else switch(t){case 4:return!1;case 7:c.call(k,y)}return h?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),s=n("dc4a"),o=n("485a"),a=n("b622"),c=a("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,a=s(t,c);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,o=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(o,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~s(u,n)||u.push(n));return u}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,s=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(s){}return function(n,s){return r(n),i(s),e?t.call(n,s):n.__proto__=s,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),s=n("d039"),o=n("b622"),a=n("9112"),c=o("species"),u=RegExp.prototype;t.exports=function(t,e,n,l){var h=o(t),d=!s((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=d&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!d||!f||n){var p=/./[h],m=e(h,""[t],(function(t,e,n,r,s){var o=e.exec;return o===i||o===u.exec?d&&!s?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,m[0]),r(u,h,m[1])}l&&a(u[h],"sham",!0)}},d9b5:function(t,e,n){var r=n("1626"),i=n("d066"),s=n("fdbf");t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),s=n("da84"),o=n("1a2d"),a=n("1626"),c=n("861d"),u=n("9bf2").f,l=n("e893"),h=s.Symbol;if(i&&a(h)&&(!("description"in h.prototype)||void 0!==h().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new h(t):void 0===t?h():h(t);return""===t&&(d[e]=!0),e};l(f,h);var p=f.prototype=h.prototype;p.constructor=f;var m=p.toString,g="Symbol(test)"==String(h("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(o(d,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e163:function(t,e,n){var r=n("1a2d"),i=n("1626"),s=n("7b0b"),o=n("f772"),a=n("e177"),c=o("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof Object?u:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),v=n("59ed"),y=n("1626"),b=n("861d"),w=n("19aa"),_=n("8925"),I=n("2266"),T=n("1c7e"),E=n("4840"),S=n("2cf4").set,k=n("b575"),A=n("cdf9"),O=n("44de"),C=n("f069"),x=n("e667"),N=n("69f3"),D=n("94ca"),R=n("b622"),P=n("6069"),L=n("605d"),M=n("2d00"),j=R("species"),F="Promise",U=N.get,V=N.set,$=N.getterFor(F),q=h&&h.prototype,B=h,z=q,H=u.TypeError,W=u.document,G=u.process,K=C.f,Q=K,Y=!!(W&&W.createEvent&&u.dispatchEvent),J=y(u.PromiseRejectionEvent),X="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,it=2,st=!1,ot=D(F,(function(){var t=_(B),e=t!==String(B);if(!e&&66===M)return!0;if(c&&!z["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[j]=r,st=n.then((function(){}))instanceof r,!st||!e&&P&&!J})),at=ot||!T((function(t){B.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!b(t)||!y(e=t.then))&&e},ut=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;k((function(){var r=t.value,i=t.state==et,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,h=u.resolve,d=u.reject,f=u.domain;try{l?(i||(t.rejection===it&&ft(t),t.rejection=rt),!0===l?o=r:(f&&f.enter(),o=l(r),f&&(f.exit(),c=!0)),o===u.promise?d(H("Promise-chain cycle")):(a=ct(o))?a.call(o,h,d):h(o)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ht(t)}))}},lt=function(t,e,n){var r,i;Y?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!J&&(i=u["on"+t])?i(r):t===X&&O("Unhandled promise rejection",n)},ht=function(t){S.call(u,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=x((function(){L?G.emit("unhandledRejection",r,n):lt(X,n,r)})),t.rejection=L||dt(t)?it:rt,e.error))throw e.value}))},dt=function(t){return t.rejection!==rt&&!t.parent},ft=function(t){S.call(u,(function(){var e=t.facade;L?G.emit("rejectionHandled",e):lt(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},mt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,ut(t,!0))},gt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw H("Promise can't be resolved itself");var r=ct(e);r?k((function(){var n={done:!1};try{r.call(e,pt(gt,n,t),pt(mt,n,t))}catch(i){mt(n,i,t)}})):(t.value=e,t.state=et,ut(t,!1))}catch(i){mt({done:!1},i,t)}}};if(ot&&(B=function(t){w(this,B,F),v(t),r.call(this);var e=U(this);try{t(pt(gt,e),pt(mt,e))}catch(n){mt(e,n)}},z=B.prototype,r=function(t){V(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=f(z,{then:function(t,e){var n=$(this),r=K(E(this,B));return r.ok=!y(t)||t,r.fail=y(e)&&e,r.domain=L?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&ut(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=U(t);this.promise=t,this.resolve=pt(gt,e),this.reject=pt(mt,e)},C.f=K=function(t){return t===B||t===s?new i(t):Q(t)},!c&&y(h)&&q!==Object.prototype)){o=q.then,st||(d(q,"then",(function(t,e){var n=this;return new B((function(t,e){o.call(n,t,e)})).then(t,e)}),{unsafe:!0}),d(q,"catch",z["catch"],{unsafe:!0}));try{delete q.constructor}catch(vt){}p&&p(q,z)}a({global:!0,wrap:!0,forced:ot},{Promise:B}),m(B,F,!1,!0),g(F),s=l(F),a({target:F,stat:!0,forced:ot},{reject:function(t){var e=K(this);return e.reject.call(void 0,t),e.promise}}),a({target:F,stat:!0,forced:c||ot},{resolve:function(t){return A(c&&this===s?B:this,t)}}),a({target:F,stat:!0,forced:at},{all:function(t){var e=this,n=K(e),r=n.resolve,i=n.reject,s=x((function(){var n=v(e.resolve),s=[],o=0,a=1;I(t,(function(t){var c=o++,u=!1;s.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,i=x((function(){var i=v(e.resolve);I(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),s=n("c6b6"),o=n("b622"),a=o("toStringTag"),c="Arguments"==s(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),a))?n:c?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("23cb"),c=n("07fa"),u=n("fc6a"),l=n("8418"),h=n("b622"),d=n("1dde"),f=d("slice"),p=h("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,h,d=u(this),f=c(d),v=a(t,f),y=a(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,s(n)&&(n===Array||i(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===Array||void 0===n))return m.call(d,v,y);for(r=new(void 0===n?Array:n)(g(y-v,0)),h=0;v<y;v++,h++)v in d&&l(r,h,d[v]);return r.length=h,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("1fd5"),s=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),o="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(s){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(f){}try{for(var i=Object(r["f"])(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var a=Object(r["c"])(s.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(f){}}}catch(p){e={error:p}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=o),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["b"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["e"])(Object(r["e"])([],Object(r["c"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["c"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=o),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=o),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Object(r["f"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["c"])(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,s=this.onInitCallbacks.get(e);if(s)try{for(var o=Object(r["f"])(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(s){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=o),this.component?this.component.multipleInstances?t:o:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===o?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.27377a32.js.map