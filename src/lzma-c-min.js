var e=function(){"use strict";function r(e){function r(){}return ht=r.prototype=e||new Nt,r}function t(e,r){postMessage({action:Mt,callback_num:r,result:e})}function n(e,r){var t=Array(r);if(e>0){var n=[null,0,!1,[0,0]][e];if("number"!=typeof n)for(var i=0;r>i;++i)t[i]=n}return t}function i(e,r){var t=n(r,e);return t}function o(e,r){var t,n;return t=e[1]+r[1],n=e[0]+r[0],c(n,t)}function s(){}function a(e,r){return d(~~Math.max(Math.min(e[1]/Ft,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/Ft,2147483647),-2147483648),p(e)&p(r))}function _(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],n=0>r[1],t&&!n?-1:!t&&n?1:k(e,r)[1]<0?-1:1)}function c(e,r){var t,n;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%Ft,n=Math.floor(e/Ft)*Ft,r=r-t+n,e=e-n+t;0>e;)e+=Ft,r-=Ft;for(;e>4294967295;)e-=Ft,r+=Ft;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function f(e,r){return e[0]==r[0]&&e[1]==r[1]}function u(e){var r,t;return e>-129&&128>e?(r=e+128,t=Gt[r],null==t&&(t=Gt[r]=m(e)),t):m(e)}function m(e){return e>=0?[e,0]:[e+Ft,-Ft]}function p(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-Ft,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function d(e,r){var t,n;return t=e*Ft,n=r,0>r&&(n+=Ft),[n,t]}function h(e){var r,t;return f(e,(S(),vt))?vt:(r=-e[1],t=-e[0],t>4294967295&&(t-=Ft,r+=Ft),0>t&&(t+=Ft,r-=Ft),[t,r])}function P(e){return 30>=e?1<<e:P(30)*P(e-30)}function l(e,r){var t,n,i,o;return r&=63,f(e,(S(),vt))?0==r?e:gt:0>e[1]?h(l(h(e),r)):(o=P(r),n=e[1]*o%0x10000000000000000,i=e[0]*o,t=i-i%Ft,n+=t,i-=t,n>=0x8000000000000000&&(n-=0x10000000000000000),[i,n])}function v(e,r){var t,n,i;return r&=63,i=P(r),t=e[1]/i,n=Math.floor(e[0]/i),c(n,t)}function B(e,r){var t;return r&=63,t=v(e,r),0>e[1]&&(t=o(t,l((S(),kt),63-r))),t}function S(){S=s,Pt=Math.log(2),lt=It,vt=Lt,Bt=u(-1),St=u(1),kt=u(2),bt=At,gt=u(0)}function k(e,r){var t,n;return t=e[1]-r[1],n=e[0]-r[0],c(n,t)}function b(e,r){return g(e,r,0,r.length),e}function g(e,r,t,n){return e.Ob=r,e.fc=t,e._=t+n,e._>r.length&&(e._=r.length),e}function E(e,r,t,n){return e.fc>=e._?-1:(n=w(n,e._-e.fc),x(e.Ob,e.fc,r,t,n),e.fc+=n,n)}function M(e){return e.Ob=i(32,1),e}function y(e,r){var t;e.Ob.length>=r||(r=z(r,2*e.Ob.length),t=i(r,1),x(e.Ob,0,t,0,e.Ob.length),e.Ob=t)}function F(e){var r;return r=i(e._,1),x(e.Ob,0,r,0,e._),r}function R(e,r){y(e,e._+1),e.Ob[e._++]=r<<24>>24}function L(e,r,t,n){y(e,e._+n),x(r,t,e.Ob,e._,n),e._+=n}function z(e,r){return e>r?e:r}function w(e,r){return r>e?e:r}function C(e,r,t,n,i){var o;for(o=r;t>o;++o)n[i++]=e.charCodeAt(o)}function x(e,r,t,n,i){var o,s,a;if(a=e.length,o=t.length,0>r||0>n||0>i||r+i>a||n+i>o)throw Error("IndexOutOfBoundsException");for(s=0;i>s;++s)t[n+s]=e[r+s]}function D(e,r){if(!(gr(r,1<<e.dicSize)&&yr(r,e.fb)&&Mr(r,e.matchFinder)&&Er(r,e.lc,e.lp,e.pb)))throw Error("unexpected failure")}function A(e){try{return nr(e.dc)}catch(r){return e.exception=r,!1}}function I(e,r,t,n,i){var o,s;if(_(n,Rt)<0)throw Error("invalid length "+n);for(e.hc=n,o=fr(new Ut),D(i,o),o.Zb=!0,Fr(o,t),s=0;64>s;s+=8)R(t,255&p(v(n,s)));e.dc=(o.S=!1,o.Nb=r,o.Mb=!1,cr(o),o.d.gc=t,vr(o),mr(o),ur(o),o.T.Y=o.i+1-2,Hr(o.T,1<<o.D),o.h.Y=o.i+1-2,Hr(o.h,1<<o.D),void(o.x=Ot),tr(new Qt,o))}function O(e,r,t){e.ec=M(new Zt);try{I(e,b(new Wt,r),e.ec,u(r.length),t)}catch(n){throw n}return e}function H(e,r,t,n){var o;e.Db=r,e.qb=t,o=r+t+n,(null==e.c||e.jb!=o)&&(e.c=null,e.jb=o,e.c=i(e.jb,1)),e.z=e.jb-t}function N(e,r){return e.c[e.e+e.w+r]}function G(e,r,t,n){var i,o;for(e.O&&e.w+r+n>e.q&&(n=e.q-(e.w+r)),++t,o=e.e+e.w+r,i=0;n>i&&e.c[o+i]==e.c[o+i-t];++i);return i}function T(e){return e.q-e.w}function W(e){var r,t,n;for(n=e.e+e.w-e.Db,n>0&&--n,t=e.e+e.q-n,r=0;t>r;++r)e.c[r]=e.c[n+r];e.e-=n}function Y(e){var r;++e.w,e.w>e.hb&&(r=e.e+e.w,r>e.z&&W(e),Z(e))}function Z(e){var r,t,n;if(!e.O)for(;;){if(n=-e.e+e.jb-e.q,0==n)return;if(r=E(e.cc,e.c,e.e+e.q,n),-1==r)return e.hb=e.q,t=e.e+e.hb,t>e.z&&(e.hb=e.z-e.e),void(e.O=!0);e.q+=r,e.q>=e.w+e.qb&&(e.hb=e.q-e.qb)}}function V(e,r){e.e+=r,e.hb-=r,e.w-=r,e.q-=r}function K(){K=s;var e,r,t;for(Jt=i(256,1),e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;Jt[e]=t}}function j(e,r,t,n,o){var s,a,_;return r>1073741567?!1:(e.Lb=16+(n>>1),_=~~((r+t+n+o)/2)+256,H(e,r+t,n+o,_),e.ib=n,s=r+1,e.k!=s&&(e.K=i(2*(e.k=s),1)),a=65536,e.ab&&(a=r-1,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a>>=1,a|=65535,a>16777216&&(a>>=1),e.Yb=a,++a,a+=e.E),a!=e.zb&&(e.ob=i(e.zb=a,1)),!0)}function q(e,r){var t,n,i,o,s,a,_,c,f,u,m,p,d,h,P,l,v,B,S,k,b;if(e.q>=e.w+e.ib)h=e.ib;else if(h=e.q-e.w,e.$>h)return Q(e),0;for(v=0,P=e.w>e.k?e.w-e.k:0,n=e.e+e.w,l=1,c=0,f=0,e.ab?(b=Jt[255&e.c[n]]^255&e.c[n+1],c=1023&b,b^=(255&e.c[n+2])<<8,f=65535&b,u=(b^Jt[255&e.c[n+3]]<<5)&e.Yb):u=255&e.c[n]^(255&e.c[n+1])<<8,i=e.ob[e.E+u],e.ab&&(o=e.ob[c],s=e.ob[1024+f],e.ob[c]=e.w,e.ob[1024+f]=e.w,o>P&&e.c[e.e+o]==e.c[n]&&(r[v++]=l=2,r[v++]=e.w-o-1),s>P&&e.c[e.e+s]==e.c[n]&&(s==o&&(v-=2),r[v++]=l=3,r[v++]=e.w-s-1,o=s),0!=v&&o==i&&(v-=2,l=1)),e.ob[e.E+u]=e.w,S=(e.g<<1)+1,k=e.g<<1,p=d=e.p,0!=e.p&&i>P&&e.c[e.e+i+e.p]!=e.c[n+e.p]&&(r[v++]=l=e.p,r[v++]=e.w-i-1),t=e.Lb;;){if(P>=i||0==t--){e.K[S]=e.K[k]=0;break}if(_=e.w-i,a=(e.g>=_?e.g-_:e.g-_+e.k)<<1,B=e.e+i,m=d>p?p:d,e.c[B+m]==e.c[n+m]){for(;++m!=h&&e.c[B+m]==e.c[n+m];);if(m>l&&(r[v++]=l=m,r[v++]=_-1,m==h)){e.K[k]=e.K[a],e.K[S]=e.K[a+1];break}}(255&e.c[n+m])>(255&e.c[B+m])?(e.K[k]=i,k=a+1,i=e.K[k],d=m):(e.K[S]=i,S=a,i=e.K[S],p=m)}return Q(e),v}function J(e){e.e=0,e.w=0,e.q=0,e.O=!1,Z(e),e.g=0,V(e,-1)}function Q(e){var r;++e.g>=e.k&&(e.g=0),Y(e),1073741823==e.w&&(r=e.w-e.k,U(e.K,2*e.k,r),U(e.ob,e.zb,r),V(e,r))}function U(e,r,t){var n,i;for(n=0;r>n;++n)i=e[n],t>=i?i=0:i-=t,e[n]=i}function X(e,r){e.ab=r>2,e.ab?(e.p=0,e.$=4,e.E=66560):(e.p=2,e.$=3,e.E=0)}function $(e,r){var t,n,i,o,s,a,_,c,f,u,m,p,d,h,P,l,v;do{if(e.q>=e.w+e.ib)p=e.ib;else if(p=e.q-e.w,e.$>p){Q(e);continue}for(d=e.w>e.k?e.w-e.k:0,n=e.e+e.w,e.ab?(v=Jt[255&e.c[n]]^255&e.c[n+1],a=1023&v,e.ob[a]=e.w,v^=(255&e.c[n+2])<<8,_=65535&v,e.ob[1024+_]=e.w,c=(v^Jt[255&e.c[n+3]]<<5)&e.Yb):c=255&e.c[n]^(255&e.c[n+1])<<8,i=e.ob[e.E+c],e.ob[e.E+c]=e.w,P=(e.g<<1)+1,l=e.g<<1,u=m=e.p,t=e.Lb;;){if(d>=i||0==t--){e.K[P]=e.K[l]=0;break}if(s=e.w-i,o=(e.g>=s?e.g-s:e.g-s+e.k)<<1,h=e.e+i,f=m>u?u:m,e.c[h+f]==e.c[n+f]){for(;++f!=p&&e.c[h+f]==e.c[n+f];);if(f==p){e.K[l]=e.K[o],e.K[P]=e.K[o+1];break}}(255&e.c[n+f])>(255&e.c[h+f])?(e.K[l]=i,l=o+1,i=e.K[l],m=f):(e.K[P]=i,P=o,i=e.K[P],u=f)}Q(e)}while(0!=--r)}function er(e){return e-=2,4>e?e:3}function rr(e){return 4>e?0:10>e?e-3:e-6}function tr(e,r){return e.fb=r,e.jc=null,e._b=!0,e}function nr(e){var r;if(!e._b)throw Error("IllegalStateException");r=!0;try{if(!e.fb)throw Error("No decoding");return ir(e),r=!1,e._b}finally{r&&(e._b=!1)}}function ir(e){_r(e.fb,e.fb.Ab,e.fb.Sb,e.fb.$b),e.Rb=e.fb.Ab[0],e.fb.$b[0]&&(br(e.fb),e._b=!1)}function or(){or=s;var e,r,t,n;for(Xt=i(2048,1),e=2,Xt[0]=0,Xt[1]=1,n=2;22>n;++n)for(t=1<<(n>>1)-1,r=0;t>r;++r,++e)Xt[e]=n<<24>>24}function sr(e,r){var t,n,i,o;e.Q=r,i=e.a[r].n,n=e.a[r].f;do e.a[r].r&&(Kr(e.a[i]),e.a[i].n=i-1,e.a[r].Ub&&(e.a[i-1].r=0,e.a[i-1].n=e.a[r].n2,e.a[i-1].f=e.a[r].f2)),o=i,t=n,n=e.a[o].f,i=e.a[o].n,e.a[o].f=t,e.a[o].n=r,r=o;while(r>0);return e.gb=e.a[0].f,e.l=e.a[0].n}function ar(e){var r;for(e.j=0,e.C=0,r=0;4>r;++r)e.t[r]=0}function _r(e,r,t,n){var i,s,a,c,m,d,h,P,l,v,B,S,b,g,E;if(r[0]=Ot,t[0]=Ot,n[0]=!0,e.Nb&&(e.b.cc=e.Nb,J(e.b),e.S=!0,e.Nb=null),!e.Mb){if(e.Mb=!0,g=e.x,f(e.x,Ot)){if(0==T(e.b))return void pr(e,p(e.x));Sr(e),b=p(e.x)&e.s,nt(e.d,e.A,(e.j<<4)+b,0),e.j=rr(e.j),a=N(e.b,-e.o),Wr(Gr(e.y,p(e.x),e.C),e.d,a),e.C=a,--e.o,e.x=o(e.x,Ht)}if(0==T(e.b))return void pr(e,p(e.x));for(;;){if(h=dr(e,p(e.x)),v=e.gb,b=p(e.x)&e.s,s=(e.j<<4)+b,1==h&&-1==v)nt(e.d,e.A,s,0),a=N(e.b,-e.o),E=Gr(e.y,p(e.x),e.C),7>e.j?Wr(E,e.d,a):(l=N(e.b,-e.t[0]-1-e.o),Yr(E,e.d,l,a)),e.C=a,e.j=rr(e.j);else{if(nt(e.d,e.A,s,1),4>v){if(nt(e.d,e.X,e.j,1),0==v?(nt(e.d,e.eb,e.j,0),1==h?nt(e.d,e.U,s,0):nt(e.d,e.U,s,1)):(nt(e.d,e.eb,e.j,1),1==v?nt(e.d,e.xb,e.j,0):(nt(e.d,e.xb,e.j,1),nt(e.d,e.Qb,e.j,v-2))),1==h?e.j=7>e.j?9:11:(Ar(e.h,e.d,h-2,b),e.j=7>e.j?8:11),c=e.t[v],0!=v){for(d=v;d>=1;--d)e.t[d]=e.t[d-1];e.t[0]=c}}else{for(nt(e.d,e.X,e.j,0),e.j=7>e.j?7:10,Ar(e.T,e.d,h-2,b),v-=4,S=Lr(v),P=er(h),Jr(e.H[P],e.d,S),S>=4&&(m=(S>>1)-1,i=(2|1&S)<<m,B=v-i,14>S?$r(e.ub,i-S-1,e.d,m,B):(it(e.d,B>>4,m-4),Ur(e.R,e.d,15&B),++e.bb)),c=v,d=3;d>=1;--d)e.t[d]=e.t[d-1];e.t[0]=c,++e.cb}e.C=N(e.b,h-1-e.o)}if(e.o-=h,e.x=o(e.x,u(h)),0==e.o){if(e.cb>=128&&mr(e),e.bb>=16&&ur(e),r[0]=e.x,t[0]=st(e.d),0==T(e.b))return void pr(e,p(e.x));if(_(k(e.x,g),wt)>=0)return e.Mb=!1,void(n[0]=!1)}}}}function cr(e){var r,t;e.b||(K(),r=new qt,t=4,0==e.P&&(t=2),X(r,t),e.b=r),Nr(e.y,e.F,e.J),(e.I!=e.V||e.tb!=e.i)&&(j(e.b,e.I,4096,e.i,274),e.V=e.I,e.tb=e.i)}function fr(e){var r;for(or(),e.t=i(4,1),e.a=i(4096,0),e.d=(tt(),new sn),e.A=i(192,1),e.X=i(12,1),e.eb=i(12,1),e.xb=i(12,1),e.Qb=i(12,1),e.U=i(192,1),e.H=i(4,0),e.ub=i(114,1),e.R=qr(new on,4),e.T=Ir(new en),e.h=Ir(new en),e.y=new rn,e.m=i(548,1),e.L=i(256,1),e.db=i(512,1),e.Kb=i(16,1),e.v=i(4,1),e.M=i(4,1),e.Ab=i(1,3),e.Sb=i(1,3),e.$b=i(1,2),e.Gb=i(5,1),e.Vb=i(128,1),r=0;4096>r;++r)e.a[r]=new nn;for(r=0;4>r;++r)e.H[r]=qr(new on,6);return e}function ur(e){var r;for(r=0;16>r;++r)e.Kb[r]=Xr(e.R,r);e.bb=0}function mr(e){var r,t,n,i,o,s,a,_;for(i=4;128>i;++i)s=Lr(i),n=(s>>1)-1,r=(2|1&s)<<n,e.Vb[i]=et(e.ub,r-s-1,n,i-r);for(o=0;4>o;++o){for(t=e.H[o],a=o<<6,s=0;e.rb>s;++s)e.L[a+s]=Qr(t,s);for(s=14;e.rb>s;++s)e.L[a+s]+=(s>>1)-1-4<<6;for(_=128*o,i=0;4>i;++i)e.db[_+i]=e.L[a+i];for(;128>i;++i)e.db[_+i]=e.L[a+Lr(i)]+e.Vb[i]}e.cb=0}function pr(e,r){kr(e),Rr(e,r&e.s),ot(e.d)}function dr(e,r){var t,n,i,o,s,a,_,c,f,u,m,p,d,h,P,l,v,B,S,k,b,g,E,M,y,F,R,L,z,C,x,D,A,I,O,H,W,Y,Z,V,K,j,q,J,Q,U,X,$,er,tr;if(e.Q!=e.l)return d=e.a[e.l].n-e.l,e.gb=e.a[e.l].f,e.l=e.a[e.l].n,d;if(e.l=e.Q=0,e.N?(p=e.pb,e.N=!1):p=Sr(e),R=e.B,y=T(e.b)+1,2>y)return e.gb=-1,1;for(y>273&&(y=273),V=0,f=0;4>f;++f)e.v[f]=e.t[f],e.M[f]=G(e.b,-1,e.v[f],273),e.M[f]>e.M[V]&&(V=f);if(e.M[V]>=e.i)return e.gb=V,d=e.M[V],Br(e,d-1),d;if(p>=e.i)return e.gb=e.m[R-1]+4,Br(e,p-1),p;if(_=N(e.b,-1),v=N(e.b,-e.t[0]-1-1),2>p&&_!=v&&2>e.M[V])return e.gb=-1,1;if(e.a[0].Tb=e.j,I=r&e.s,e.a[1].u=(tt(),an[e.A[(e.j<<4)+I]>>>2]+Vr(Gr(e.y,r,e.C),e.j>=7,v,_)),Kr(e.a[1]),B=an[2048-e.A[(e.j<<4)+I]>>>2],Z=B+an[2048-e.X[e.j]>>>2],v==_&&(K=Z+lr(e,e.j,I),e.a[1].u>K&&(e.a[1].u=K,jr(e.a[1]))),m=p>=e.M[V]?p:e.M[V],2>m)return e.gb=e.a[1].f,1;e.a[1].n=0,e.a[0].yb=e.v[0],e.a[0].wb=e.v[1],e.a[0].vb=e.v[2],e.a[0].Fb=e.v[3],u=m;do e.a[u--].u=268435455;while(u>=2);for(f=0;4>f;++f)if(Y=e.M[f],!(2>Y)){H=Z+Pr(e,f,e.j,I);do o=H+Or(e.h,Y-2,I),x=e.a[Y],x.u>o&&(x.u=o,x.n=0,x.f=f,x.r=0);while(--Y>=2)}if(M=B+an[e.X[e.j]>>>2],u=e.M[0]>=2?e.M[0]+1:2,p>=u){for(L=0;u>e.m[L];)L+=2;for(;c=e.m[L+1],o=M+hr(e,c,u,I),x=e.a[u],x.u>o&&(x.u=o,x.n=0,x.f=c+4,x.r=0),u!=e.m[L]||(L+=2,L!=R);++u);}for(t=0;;){if(++t,t==m)return sr(e,t);if(S=Sr(e),R=e.B,S>=e.i)return e.pb=S,e.N=!0,sr(e,t);if(++r,A=e.a[t].n,e.a[t].r?(--A,e.a[t].Ub?(q=e.a[e.a[t].n2].Tb,q=4>e.a[t].f2?7>q?8:11:7>q?7:10):q=e.a[A].Tb,q=rr(q)):q=e.a[A].Tb,A==t-1?q=0==e.a[t].f?7>q?9:11:rr(q):(e.a[t].r&&e.a[t].Ub?(A=e.a[t].n2,D=e.a[t].f2,q=7>q?8:11):(D=e.a[t].f,q=4>D?7>q?8:11:7>q?7:10),C=e.a[A],4>D?0==D?(e.v[0]=C.yb,e.v[1]=C.wb,e.v[2]=C.vb,e.v[3]=C.Fb):1==D?(e.v[0]=C.wb,e.v[1]=C.yb,e.v[2]=C.vb,e.v[3]=C.Fb):2==D?(e.v[0]=C.vb,e.v[1]=C.yb,e.v[2]=C.wb,e.v[3]=C.Fb):(e.v[0]=C.Fb,e.v[1]=C.yb,e.v[2]=C.wb,e.v[3]=C.vb):(e.v[0]=D-4,e.v[1]=C.yb,e.v[2]=C.wb,e.v[3]=C.vb)),e.a[t].Tb=q,e.a[t].yb=e.v[0],e.a[t].wb=e.v[1],e.a[t].vb=e.v[2],e.a[t].Fb=e.v[3],a=e.a[t].u,_=N(e.b,-1),v=N(e.b,-e.v[0]-1-1),I=r&e.s,n=a+an[e.A[(q<<4)+I]>>>2]+Vr(Gr(e.y,r,N(e.b,-2)),q>=7,v,_),g=e.a[t+1],k=!1,g.u>n&&(g.u=n,g.n=t,g.f=-1,g.r=0,k=!0),B=a+an[2048-e.A[(q<<4)+I]>>>2],Z=B+an[2048-e.X[q]>>>2],v!=_||t>g.n&&0==g.f||(K=Z+(an[e.eb[q]>>>2]+an[e.U[(q<<4)+I]>>>2]),g.u>=K&&(g.u=K,g.n=t,g.f=0,g.r=0,k=!0)),F=T(e.b)+1,F=F>4095-t?4095-t:F,y=F,!(2>y)){if(y>e.i&&(y=e.i),!k&&v!=_&&(Q=w(F-1,e.i),P=G(e.b,0,e.v[0],Q),P>=2)){for(J=rr(q),O=r+1&e.s,E=n+an[2048-e.A[(J<<4)+O]>>>2]+an[2048-e.X[J]>>>2],z=t+1+P;z>m;)e.a[++m].u=268435455;o=E+(U=Or(e.h,P-2,O),U+Pr(e,0,J,O)),x=e.a[z],x.u>o&&(x.u=o,x.n=t+1,x.f=0,x.r=1,x.Ub=0)}for(j=2,W=0;4>W;++W)if(h=G(e.b,-1,e.v[W],y),!(2>h)){l=h;do{for(;t+h>m;)e.a[++m].u=268435455;o=Z+(X=Or(e.h,h-2,I),X+Pr(e,W,q,I)),x=e.a[t+h],x.u>o&&(x.u=o,x.n=t,x.f=W,x.r=0)}while(--h>=2);if(h=l,0==W&&(j=h+1),F>h&&(Q=w(F-1-h,e.i),P=G(e.b,h,e.v[W],Q),P>=2)){for(J=7>q?8:11,O=r+h&e.s,i=Z+($=Or(e.h,h-2,I),$+Pr(e,W,q,I))+an[e.A[(J<<4)+O]>>>2]+Vr(Gr(e.y,r+h,N(e.b,h-1-1)),!0,N(e.b,h-1-(e.v[W]+1)),N(e.b,h-1)),J=rr(J),O=r+h+1&e.s,b=i+an[2048-e.A[(J<<4)+O]>>>2],E=b+an[2048-e.X[J]>>>2],z=h+1+P;t+z>m;)e.a[++m].u=268435455;o=E+(er=Or(e.h,P-2,O),er+Pr(e,0,J,O)),x=e.a[t+z],x.u>o&&(x.u=o,x.n=t+h+1,x.f=0,x.r=1,x.Ub=1,x.n2=t,x.f2=W)}}if(S>y){for(S=y,R=0;S>e.m[R];R+=2);e.m[R]=S,R+=2}if(S>=j){for(M=B+an[e.X[q]>>>2];t+S>m;)e.a[++m].u=268435455;for(L=0;j>e.m[L];)L+=2;for(h=j;;++h)if(s=e.m[L+1],o=M+hr(e,s,h,I),x=e.a[t+h],x.u>o&&(x.u=o,x.n=t,x.f=s+4,x.r=0),h==e.m[L]){if(F>h&&(Q=w(F-1-h,e.i),P=G(e.b,h,s,Q),P>=2)){for(J=7>q?7:10,O=r+h&e.s,i=o+an[e.A[(J<<4)+O]>>>2]+Vr(Gr(e.y,r+h,N(e.b,h-1-1)),!0,N(e.b,h-(s+1)-1),N(e.b,h-1)),J=rr(J),O=r+h+1&e.s,b=i+an[2048-e.A[(J<<4)+O]>>>2],E=b+an[2048-e.X[J]>>>2],z=h+1+P;t+z>m;)e.a[++m].u=268435455;o=E+(tr=Or(e.h,P-2,O),tr+Pr(e,0,J,O)),x=e.a[t+z],x.u>o&&(x.u=o,x.n=t+h+1,x.f=0,x.r=1,x.Ub=1,x.n2=t,x.f2=s+4)}if(L+=2,L==R)break}}}}}function hr(e,r,t,n){var i,o;return i=er(t),o=128>r?e.db[128*i+r]:e.L[(i<<6)+zr(r)]+e.Kb[15&r],o+Or(e.T,t-2,n)}function Pr(e,r,t,n){var i;return 0==r?(tt(),i=an[e.eb[t]>>>2],i+=an[2048-e.U[(t<<4)+n]>>>2]):(tt(),i=an[2048-e.eb[t]>>>2],1==r?i+=an[e.xb[t]>>>2]:(i+=an[2048-e.xb[t]>>>2],i+=ct(e.Qb[t],r-2))),i}function lr(e,r,t){return tt(),an[e.eb[r]>>>2]+an[e.U[(r<<4)+t]>>>2]}function vr(e){var r;for(ar(e),at(e.d),ft(e.A),ft(e.U),ft(e.X),ft(e.eb),ft(e.xb),ft(e.Qb),ft(e.ub),Tr(e.y),r=0;4>r;++r)rt(e.H[r].mb);xr(e.T,1<<e.D),xr(e.h,1<<e.D),rt(e.R.mb),e.N=!1,e.Q=0,e.l=0,e.o=0}function Br(e,r){r>0&&($(e.b,r),e.o+=r)}function Sr(e){var r;return r=0,e.B=q(e.b,e.m),e.B>0&&(r=e.m[e.B-2],r==e.i&&(r+=G(e.b,r-1,e.m[e.B-1],273-r))),++e.o,r}function kr(e){e.b&&e.S&&(e.b.cc=null,e.S=!1)}function br(e){kr(e),e.d.gc=null}function gr(e,r){var t;if(1>r||r>536870912)return!1;for(e.I=r,t=0;r>1<<t;++t);return e.rb=2*t,!0}function Er(e,r,t,n){return 0>t||t>4||0>r||r>8||0>n||n>4?!1:(e.F=t,e.J=r,e.D=n,e.s=(1<<e.D)-1,!0)}function Mr(e,r){var t;return 0>r||r>2?!1:(t=e.P,e.P=r,e.b&&t!=e.P&&(e.V=-1,e.b=null),!0)}function yr(e,r){return 5>r||r>273?!1:(e.i=r,!0)}function Fr(e,r){var t;for(e.Gb[0]=9*(5*e.D+e.F)+e.J<<24>>24,t=0;4>t;++t)e.Gb[1+t]=e.I>>8*t<<24>>24;L(r,e.Gb,0,5)}function Rr(e,r){var t;e.Zb&&(nt(e.d,e.A,(e.j<<4)+r,1),nt(e.d,e.X,e.j,0),e.j=7>e.j?7:10,Ar(e.T,e.d,0,r),t=er(2),Jr(e.H[t],e.d,63),it(e.d,67108863,26),Ur(e.R,e.d,15))}function Lr(e){return 2048>e?Xt[e]:2097152>e?Xt[e>>10]+20:Xt[e>>20]+40}function zr(e){return 131072>e?Xt[e>>6]+12:134217728>e?Xt[e>>16]+32:Xt[e>>26]+52}function wr(e,r,t,n){8>t?(nt(r,e.Z,0,0),Jr(e.Bb[n],r,t)):(t-=8,nt(r,e.Z,0,1),8>t?(nt(r,e.Z,1,0),Jr(e.Cb[n],r,t)):(nt(r,e.Z,1,1),Jr(e.Ib,r,t-8)))}function Cr(e){var r;for(e.Z=i(2,1),e.Bb=i(16,0),e.Cb=i(16,0),e.Ib=qr(new on,8),r=0;16>r;++r)e.Bb[r]=qr(new on,3),e.Cb[r]=qr(new on,3);return e}function xr(e,r){var t;for(ft(e.Z),t=0;r>t;++t)rt(e.Bb[t].mb),rt(e.Cb[t].mb);rt(e.Ib.mb)}function Dr(e,r,t,n,i){var o,s,a,_,c;for(tt(),o=an[e.Z[0]>>>2],s=an[2048-e.Z[0]>>>2],a=s+an[e.Z[1]>>>2],_=s+an[2048-e.Z[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[i+c]=o+Qr(e.Bb[r],c)}for(;16>c;++c){if(c>=t)return;n[i+c]=a+Qr(e.Cb[r],c-8)}for(;t>c;++c)n[i+c]=_+Qr(e.Ib,c-8-8)}function Ar(e,r,t,n){wr(e,r,t,n),0==--e.Jb[n]&&(Dr(e,n,e.Y,e.Wb,272*n),e.Jb[n]=e.Y)}function Ir(e){return Cr(e),e.Wb=i(4352,1),e.Jb=i(16,1),e}function Or(e,r,t){return e.Wb[272*t+r]}function Hr(e,r){var t;for(t=0;r>t;++t)Dr(e,t,e.Y,e.Wb,272*t),e.Jb[t]=e.Y}function Nr(e,r,t){var n,o;if(null==e.Hb||e.G!=t||e.nb!=r)for(e.nb=r,e.Xb=(1<<r)-1,e.G=t,o=1<<e.G+e.nb,e.Hb=i(o,0),n=0;o>n;++n)e.Hb[n]=Zr(new tn)}function Gr(e,r,t){return e.Hb[((r&e.Xb)<<e.G)+((255&t)>>>8-e.G)]}function Tr(e){var r,t;for(t=1<<e.G+e.nb,r=0;t>r;++r)ft(e.Hb[r].lb)}function Wr(e,r,t){var n,i,o;for(i=1,o=7;o>=0;--o)n=t>>o&1,nt(r,e.lb,i,n),i=i<<1|n}function Yr(e,r,t,n){var i,o,s,a,_,c;for(o=1,_=!0,s=7;s>=0;--s)i=n>>s&1,c=o,_&&(a=t>>s&1,c+=1+a<<8,_=a==i),nt(r,e.lb,c,i),o=o<<1|i}function Zr(e){return e.lb=i(768,1),e}function Vr(e,r,t,n){var i,o,s,a,_;if(_=0,o=1,s=7,r)for(;s>=0;--s)if(a=t>>s&1,i=n>>s&1,_+=ct(e.lb[(1+a<<8)+o],i),o=o<<1|i,a!=i){--s;break}for(;s>=0;--s)i=n>>s&1,_+=ct(e.lb[o],i),o=o<<1|i;return _}function Kr(e){e.f=-1,e.r=0}function jr(e){e.f=0,e.r=0}function qr(e,r){return e.W=r,e.mb=i(1<<r,1),e}function Jr(e,r,t){var n,i,o;for(o=1,i=e.W;0!=i;)--i,n=t>>>i&1,nt(r,e.mb,o,n),o=o<<1|n}function Qr(e,r){var t,n,i,o;for(o=0,i=1,n=e.W;0!=n;)--n,t=r>>>n&1,o+=ct(e.mb[i],t),i=(i<<1)+t;return o}function Ur(e,r,t){var n,i,o;for(o=1,i=0;e.W>i;++i)n=1&t,nt(r,e.mb,o,n),o=o<<1|n,t>>=1}function Xr(e,r){var t,n,i,o;for(o=0,i=1,n=e.W;0!=n;--n)t=1&r,r>>>=1,o+=ct(e.mb[i],t),i=i<<1|t;return o}function $r(e,r,t,n,i){var o,s,a;for(a=1,s=0;n>s;++s)o=1&i,nt(t,e,r+a,o),a=a<<1|o,i>>=1}function et(e,r,t,n){var i,o,s,a;for(a=0,s=1,o=t;0!=o;--o)i=1&n,n>>>=1,tt(),a+=an[(2047&(e[r+s]-i^-i))>>>2],s=s<<1|i;return a}function rt(e){var r;for(r=0;e.length>r;++r)e[r]=1024}function tt(){tt=s;var e,r,t,n;for(an=i(512,1),r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)an[t]=(r<<6)+(e-t<<6>>>9-r-1)}function nt(e,r,t,n){var i,s;s=r[t],i=(e.sb>>>11)*s,0==n?(e.sb=i,r[t]=s+(2048-s>>>5)<<16>>16):(e.Pb=o(e.Pb,a(u(i),Dt)),e.sb-=i,r[t]=s-(s>>>5)<<16>>16),0==(-16777216&e.sb)&&(e.sb<<=8,_t(e))}function it(e,r,t){var n;for(n=t-1;n>=0;--n)e.sb>>>=1,1==(r>>>n&1)&&(e.Pb=o(e.Pb,u(e.sb))),0==(-16777216&e.sb)&&(e.sb<<=8,_t(e))}function ot(e){var r;for(r=0;5>r;++r)_t(e)}function st(e){return o(o(u(e.kb),e.Eb),zt)}function at(e){e.Eb=Ot,e.Pb=Ot,e.sb=-1,e.kb=1,e.ac=0}function _t(e){var r,t;if(r=p(B(e.Pb,32)),0!=r||_(e.Pb,xt)<0){e.Eb=o(e.Eb,u(e.kb)),t=e.ac;do R(e.gc,t+r),t=255;while(0!=--e.kb);e.ac=p(e.Pb)>>>24}++e.kb,e.Pb=l(a(e.Pb,Ct),8)}function ct(e,r){return tt(),an[(2047&(e-r^-r))>>>2]}function ft(e){tt();var r;for(r=0;e.length>r;++r)e[r]=1024}function ut(e){var r,t,n,o,s,a,_;for(_=e.length,a=i(_,1),C(e,0,_,a,0),t=a,o=0,s=0;e.length>s;++s)r=t[s],r>=1&&127>=r?++o:o+=0==r||r>=128&&2047>=r?2:3;for(n=i(o,1),o=0,s=0;e.length>s;++s)r=t[s],r>=1&&127>=r?n[o++]=r<<24>>24:0==r||r>=128&&2047>=r?(n[o++]=(192|r>>6&31)<<24>>24,n[o++]=(128|63&r)<<24>>24):(n[o++]=(224|r>>12&15)<<24>>24,n[o++]=(128|r>>6&63)<<24>>24,n[o++]=(128|63&r)<<24>>24);return n}function mt(e){return e}function pt(e){return e[1]+e[0]}function dt(e,r,n,i){function o(){for(var e,r=(new Date).getTime();A(_.c);)if(s=pt(_.c.dc.Rb)/pt(_.c.hc),(new Date).getTime()-r>200)return i?i(s):void 0!==a&&t(s,a),yt(o,0),!1;i?i(1):void 0!==a&&t(1,a),e=F(_.c.ec),n?n(e):void 0!==a&&postMessage({action:Et,callback_num:a,result:e.slice(0)})}var s,a,_=mt(new _n);"function"!=typeof n&&(a=n,n=i=0),_.ic=cn(r),_.c=O(new Kt,ut(e),_.ic),i?i(0):void 0!==a&&t(0,a),yt(o,0)}var ht,Pt,lt,vt,Bt,St,kt,bt,gt,Et=1,Mt=3,yt="function"==typeof setImmediate?setImmediate:setTimeout,Ft=4294967296,Rt=[4294967295,-Ft],Lt=[0,-0x8000000000000000],zt=[4,0],wt=[4096,0],Ct=[16777215,0],xt=[4278190080,0],Dt=[4294967295,0],At=[16777216,0],It=[4294967295,0x7fffffff00000000],Ot=[0,0],Ht=[1,0],Nt=r({}),Gt=i(256,0),Tt=r(),Wt=r(new Tt);ht._=0,ht.fc=0;var Yt=r(),Zt=r(new Yt);ht._=0;var Vt=r(),Kt=r(new Vt),jt=r();ht.jb=0,ht.e=0,ht.qb=0,ht.Db=0,ht.z=0,ht.w=0,ht.hb=0,ht.q=0;var qt=r(new jt);ht.ab=!0,ht.Lb=255,ht.g=0,ht.k=0,ht.zb=0,ht.E=66560,ht.$=4,ht.p=0;var Jt,Qt=r(),Ut=r();ht.o=0,ht.bb=0,ht.I=4194304,ht.V=-1,ht.rb=44,ht.pb=0,ht.P=1,ht.cb=0,ht.B=0,ht.i=32,ht.tb=-1,ht.J=3,ht.F=0,ht.l=0,ht.Q=0,ht.D=2,ht.s=3,ht.C=0,ht.j=0,ht.gb=0,ht.x=Ot;var Xt,$t=r(),en=r(new $t);ht.Y=0;var rn=r();ht.nb=0,ht.G=0,ht.Xb=0;var tn=r(),nn=r();ht.f=0,ht.f2=0,ht.yb=0,ht.wb=0,ht.vb=0,ht.Fb=0,ht.n=0,ht.n2=0,ht.u=0,ht.Tb=0;var on=r();ht.W=0;var sn=r();ht.Pb=Ot,ht.sb=0,ht.ac=0,ht.kb=0,ht.Eb=Ot;var an,_n=r(),cn=function(){var e=[{dicSize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.bc&&r.bc.action==Et&&e.compress(r.bc.bc,r.bc.ic,r.bc.callback_num)}}(),{compress:dt}}();this.LZMA=this.LZMA_WORKER=e;