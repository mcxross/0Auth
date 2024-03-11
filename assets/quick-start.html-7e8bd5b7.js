import{_ as u,r as i,o as p,c as d,a as n,d as e,w as t,b as s,e as k}from"./app-8a2f83c8.js";const h={},g=n("p",null,[n("strong",null,"Table of Contents")],-1),m={class:"table-of-contents"},v=n("h1",{id:"quick-start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),s(" Quick Start")],-1),_=n("p",null,"In this guide, we'll walk you through integrating zkLogin into your web application using the ZeroAuth Web SDK. Everything you need to kickstart the process is covered here, and the concepts are equally applicable to websites.",-1),b=n("h2",{id:"prerequisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),s(" Prerequisites")],-1),f={href:"https://docs.sui.io/build/zk_login",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"If you understand the above, you are ready to get started, but before we do, you must have the following:",-1),w=n("li",null,[n("strong",null,[s("OAuth client credentials ("),n("code",null,"clientId"),s(")")]),s(" from an OAuth provider. For this guide, we will use Google, but the process is similar for other providers. You typically get this from the OAuth provider's developer console.")],-1),z=n("strong",null,"A remote salting service",-1),L={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},I=n("strong",null,"remote",-1),q=n("em",null,"standard",-1),R=n("strong",null,"client credentials",-1),x={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},T=n("strong",null,"A remote proving service",-1),S={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},K=n("strong",null,"remote",-1),C=n("em",null,"standard",-1),D=n("strong",null,"client credentials",-1),N={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),s(" Installation")],-1),O=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("ZeroAuth zkLogin Web SDK is currently in "),n("code",null,"beta"),s(" stage, and the API is subject to rapid changes until the first stable release. Please report any issues you encounter. Currently only snapshot versions are available. Stable versions will be available soon.")])],-1),j=n("p",null,"To add ZeroAuth SDK to a web project depends on how you are building your project. For example, if you are using a bundler like Webpack or Vite, you can install the SDK using npm or yarn or pnpm:",-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` @mcxross/zero
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @mcxross/zero
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @mcxross/zero
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),G=k(`<p>If you are using a CDN, you can add the following to your HTML file:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@mcxross/zero@&lt;version&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The ZeroAuth Web SDK offers two library flavors to cater for different development needs:</p><ul><li>Release Flavor: This flavor is optimized for production environments.</li><li>A Snapshot Flavor: This version is tailored for development and testing phases. It includes additional logging to aid developers in troubleshooting and refining the ZeroAuth integration within their projects. The snapshot flavor is only available via npm, yarn, or pnpm. It is not available via CDN.</li></ul></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>`,4),W=n("h3",{id:"zkloginrequest",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#zkloginrequest","aria-hidden":"true"},"#"),s(" ZKLoginRequest")],-1),F=n("p",null,[s("Create an instance of the "),n("code",null,"ZKLoginRequest"),s(" object.")],-1),J=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" provider "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("zero"),n("span",{class:"token punctuation"},"."),s("Google")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" cfg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("zero"),n("span",{class:"token punctuation"},"."),s("OpenIDServiceConfiguration")]),n("span",{class:"token punctuation"},"("),s(`
    provider`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"YOUR_CLIENT_ID"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"YOUR_REDIRECT_URI"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" zkLoginRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("zero"),n("span",{class:"token punctuation"},"."),s("ZKLoginRequest")]),n("span",{class:"token punctuation"},"("),s(`
    cfg`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" provider"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("Google "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" cfg"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("OpenIDServiceConfiguration "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"OpenIDServiceConfiguration"),n("span",{class:"token punctuation"},"("),s(`
    provider`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"YOUR_CLIENT_ID"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"YOUR_REDIRECT_URI"'),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" zkLoginRequest"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("ZKLoginRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ZKLoginRequest"),n("span",{class:"token punctuation"},"("),s(`
    cfg
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"val"),s(" zkLoginRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ZKLoginRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"OpenIDServiceConfiguration"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Google"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" clientID "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"YOUR_CLIENT_ID"')]),n("span",{class:"token punctuation"},","),s(" redirectUri "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"YOUR_REDIRECT_URI"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=n("h3",{id:"trigger-zklogin-flow",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#trigger-zklogin-flow","aria-hidden":"true"},"#"),s(" Trigger zkLogin flow")],-1),V=n("p",null,[s("Pass the zkLogin request object to the "),n("code",null,"zkLogin"),s(" callable:")],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"zkLogin"),n("span",{class:"token punctuation"},"("),s("zkLoginRequest"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[s("zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"zkLogin"),n("span",{class:"token punctuation"},"("),s("zkLoginRequest"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token function"},"zkLogin"),n("span",{class:"token punctuation"},"("),s("zkLoginRequest"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),X=n("p",null,[s("This will trigger a redirect to the OAuth provider's login page. Once the user has successfully logged in, the OAuth provider redirects the user back to the "),n("code",null,"redirect_uri"),s(" you specified in the zkLogin request object.")],-1),$=n("h3",{id:"handle-the-redirect",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#handle-the-redirect","aria-hidden":"true"},"#"),s(" Handle the redirect")],-1),nn=n("code",null,"continueWithZKLogin",-1),sn=n("code",null,"redirect_uri",-1),en=n("code",null,"ZKLoginNotifier",-1),tn={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},an=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" zkLoginNotifier "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("zero"),n("span",{class:"token punctuation"},"."),s("ZKLoginNotifier")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" listener "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"invoke"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("request"),n("span",{class:"token punctuation"},","),s(" response"),n("span",{class:"token punctuation"},","),s(" error")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Do something with the response"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
zkLoginNotifier`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setListener"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
zero`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"continueWithZKLogin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" zkLoginNotifier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" zkLoginNotifier"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("ZKLoginNotifier "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"zero"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ZKLoginNotifier"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" listener"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("Listener "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"invoke"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),s("request"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("Request"),n("span",{class:"token punctuation"},","),s(" response"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("Response"),n("span",{class:"token punctuation"},","),s(" error"),n("span",{class:"token operator"},":"),s(" zero"),n("span",{class:"token punctuation"},"."),s("Error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Do something with the response"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
zkLoginNotifier`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setListener"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
zero`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"continueWithZKLogin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" zkLoginNotifier"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,`To be added
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),cn=n("p",null,"The notifier will deliver the results of the process to your provided listener, which you can use to handle the results",-1);function rn(un,pn){const o=i("router-link"),l=i("ExternalLinkIcon"),a=i("CodeGroupItem"),c=i("CodeGroup"),r=i("RouterLink");return p(),d("div",null,[g,n("nav",m,[n("ul",null,[n("li",null,[e(o,{to:"#prerequisites"},{default:t(()=>[s("Prerequisites")]),_:1})]),n("li",null,[e(o,{to:"#installation"},{default:t(()=>[s("Installation")]),_:1})]),n("li",null,[e(o,{to:"#usage"},{default:t(()=>[s("Usage")]),_:1}),n("ul",null,[n("li",null,[e(o,{to:"#zkloginrequest"},{default:t(()=>[s("ZKLoginRequest")]),_:1})]),n("li",null,[e(o,{to:"#trigger-zklogin-flow"},{default:t(()=>[s("Trigger zkLogin flow")]),_:1})]),n("li",null,[e(o,{to:"#handle-the-redirect"},{default:t(()=>[s("Handle the redirect")]),_:1})])])])])]),v,_,b,n("p",null,[s("This guide assumes you have a basic understanding of web development and JavaScript. It also assumes you have a conceptual understanding of zkLogin. If you are new to zkLogin, please refer to the "),n("a",f,[s("zkLogin documentation"),e(l)]),s(".")]),y,n("ul",null,[w,n("li",null,[z,s(". For this guide, we will use the default remote salting service provided by "),n("a",L,[s("Mysten Labs"),e(l)]),s(", but the process is similar for other "),I,s(" salting services including "),q,s(" self-hosted salting services. For this, your "),R,s(" must be whitelisted by "),n("a",x,[s("Mysten Labs"),e(l)]),s(".")]),n("li",null,[T,s(". For this guide, we will use the default remote proving service provided by "),n("a",S,[s("Mysten Labs"),e(l)]),s(", but the process is similar for other "),K,s(" proving services including "),C,s(" self-hosted proving services. For this, your "),D,s(" must be whitelisted by "),n("a",N,[s("Mysten Labs"),e(l)]),s(".")])]),Z,O,j,e(c,null,{default:t(()=>[e(a,{title:"pnpm"},{default:t(()=>[A]),_:1}),e(a,{title:"npm"},{default:t(()=>[E]),_:1}),e(a,{title:"yarn"},{default:t(()=>[U]),_:1})]),_:1}),G,n("p",null,[s("The usage (the code) of the ZeroAuth Web SDK matches the conceptual overview described in the "),e(r,{to:"/platform/web/conceptual-overview.html"},{default:t(()=>[s("Conceptual Overview")]),_:1}),s(" section.")]),W,F,e(c,null,{default:t(()=>[e(a,{title:"JavaScript"},{default:t(()=>[J]),_:1}),e(a,{title:"TypeScript"},{default:t(()=>[P]),_:1}),e(a,{title:"Kotlin/Js"},{default:t(()=>[Y]),_:1})]),_:1}),M,V,e(c,null,{default:t(()=>[e(a,{title:"JavaScript"},{default:t(()=>[B]),_:1}),e(a,{title:"TypeScript"},{default:t(()=>[H]),_:1}),e(a,{title:"Kotlin/Js"},{default:t(()=>[Q]),_:1})]),_:1}),X,$,n("p",null,[s("Okay, now we need to handle the redirect. To do this, we need to use a special "),nn,s(" function on the "),sn,s(" page. This takes in a Salting Service, a Proving Service, and a "),en,s(". If the first two are not provided, the default remote salting and proving services provided by "),n("a",tn,[s("Mysten Labs"),e(l)]),s(" will be attempted.")]),e(c,null,{default:t(()=>[e(a,{title:"JavaScript"},{default:t(()=>[an]),_:1}),e(a,{title:"TypeScript"},{default:t(()=>[on]),_:1}),e(a,{title:"Kotlin/Js"},{default:t(()=>[ln]),_:1})]),_:1}),cn])}const kn=u(h,[["render",rn],["__file","quick-start.html.vue"]]);export{kn as default};
