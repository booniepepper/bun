var k=function(f){var m=g({basename:f.basename.bind(f),dirname:f.dirname.bind(f),extname:f.extname.bind(f),format:f.format.bind(f),isAbsolute:f.isAbsolute.bind(f),join:f.join.bind(f),normalize:f.normalize.bind(f),parse:f.parse.bind(f),relative:f.relative.bind(f),resolve:f.resolve.bind(f),toNamespacedPath:f.toNamespacedPath.bind(f),sep:f.sep,delimiter:f.delimiter});return m.default=m,m},g=(f)=>Object.assign(Object.create(null),f),q=k(Bun._Path()),v=k(Bun._Path(!1)),y=k(Bun._Path(!0));q.win32=y;q.posix=v;var{basename:z,dirname:A,extname:B,format:C,isAbsolute:D,join:E,normalize:F,parse:G,relative:H,resolve:I,toNamespacedPath:J,sep:K,delimiter:L,__esModule:N}=q;q[Symbol.for("CommonJS")]=0;q.__esModule=!0;var P=q;export{y as win32,J as toNamespacedPath,K as sep,I as resolve,H as relative,v as posix,G as parse,F as normalize,E as join,D as isAbsolute,C as format,B as extname,A as dirname,L as delimiter,P as default,g as createModule,z as basename,N as __esModule};