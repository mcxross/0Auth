import{_ as r,r as i,o as c,c as u,a as e,d as s,w as t,b as n,e as p}from"./app-8a2f83c8.js";const d={},h=e("p",null,[e("strong",null,"Table of Contents")],-1),g={class:"table-of-contents"},k=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),n(" Quick Start")],-1),v=e("p",null,"In this guide, we'll walk you through integrating zkLogin into your iOS application using the ZeroAuth SDK. Everything you need to kickstart the process is covered here.",-1),m=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),f={href:"https://docs.sui.io/build/zk_login",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"If you understand the above, you are ready to get started, but before we do, you must have the following:",-1),b=e("li",null,[e("strong",null,[n("OAuth client credentials ("),e("code",null,"clientId"),n(")")]),n(" from an OAuth provider. For this guide, we will use Google, but the process is similar for other providers. You typically get this from the OAuth provider's developer console.")],-1),w=e("strong",null,"A remote salting service",-1),y=e("strong",null,"remote",-1),S=e("em",null,"standard",-1),L=e("strong",null,"client credentials",-1),q={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"A remote proving service",-1),z={href:"https://mystenlabs.com/",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"remote",-1),O=e("em",null,"standard",-1),A=p(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>ZeroAuth <code>ZeroAuth</code> iOS SDK is currently in <code>beta</code> stage, and the API is subject to rapid unannounced changes until the first stable release. Please report any issues you encounter. Stable versions will be available soon.</p></div><p><code>ZeroAuth</code> iOS SDK current only supports Swift Package Manager. To add ZeroAuth SDK to an iOS project, add the following to your <code>Package.swift</code> file:</p><h3 id="swift-package-manager" tabindex="-1"><a class="header-anchor" href="#swift-package-manager" aria-hidden="true">#</a> Swift Package Manager</h3><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>dependencies<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token function">package</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://github.com/mcxross/swift-zeroauth.git&quot;</span></span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token function">upToNextMajor</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;0.1.0-beta&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Once you have the ZeroAuth SDK installed, you can start using it in your iOS application.</p><p>The main entry for the SDK is the <code>ZKLoginModel</code>. This utilizes the <code>ObservableObject</code> protocol to allow you to observe the zkLogin response. It also has methods for accessing models, <code>UnauthenticatedViewModel</code>, and <code>AuthenticatedViewModel</code> for both <strong>unauthenticated</strong> and <strong>authenticated</strong> views respectively. The <code>UnauthenticatedViewModel</code> is used to initiate the zkLogin request and the <code>AuthenticatedViewModel</code> is used to log out the user.</p><p>In your main <code>struct</code>, add an observer to listen for the zkLogin response:</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token attribute atrule">@ObservedObject</span> <span class="token keyword">private</span> <span class="token keyword">var</span> zklModel<span class="token punctuation">:</span> <span class="token class-name">ZKLoginModel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>On the <code>zklModel</code>, you can check the published <code>response</code> property to get the current state of the zkLogin flow. You can then use this to determine the view to display to the user.</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">if</span> zkLModel<span class="token punctuation">.</span>response <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
      <span class="token comment">// User is logged in</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// User is not logged in</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In your <strong>Unauthenticated</strong> view, you can use the <code>UnauthenticatedViewModel</code> to initiate the zkLogin request:</p><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">let</span> google <span class="token operator">=</span> <span class="token class-name">ZKLoginRequest</span><span class="token punctuation">(</span>openIDServiceConfiguration<span class="token punctuation">:</span> <span class="token class-name">OpenIDServiceConfiguration</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token class-name">Google</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                                                  clientId<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;YOUR_CLIENT_ID&quot;</span></span><span class="token punctuation">,</span>
                                                  redirectUri<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;YOUR_REDIRECT_URI&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                                   
model<span class="token punctuation">.</span><span class="token function">zkLogin</span><span class="token punctuation">(</span>zkLoginRequest<span class="token punctuation">:</span> google<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>UnauthenticatedViewModel</code> will handle the zkLogin flow and return the result, a <code>ZKLoginResponse</code>, to the observer. This has all the necessary data to make transactions.</p>`,15),M={href:"https://github.com/mcxross/swift-zeroauth/tree/main/Sample/ZeroAuth%20iOS%20Demo",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"That's it! You have successfully integrated zkLogin into your iOS application using the ZeroAuth SDK.",-1);function T(U,Z){const a=i("router-link"),l=i("RouterLink"),o=i("ExternalLinkIcon");return c(),u("div",null,[h,e("nav",g,[e("ul",null,[e("li",null,[s(a,{to:"#prerequisites"},{default:t(()=>[n("Prerequisites")]),_:1})]),e("li",null,[s(a,{to:"#installation"},{default:t(()=>[n("Installation")]),_:1}),e("ul",null,[e("li",null,[s(a,{to:"#swift-package-manager"},{default:t(()=>[n("Swift Package Manager")]),_:1})])])]),e("li",null,[s(a,{to:"#usage"},{default:t(()=>[n("Usage")]),_:1})])])]),k,v,m,e("p",null,[n("This guide assumes you have a basic understanding of iOS development. It also assumes you have a "),s(l,{to:"/platform/ios/ihttps:/zeroauth.dev/platform/ios/conceptual-overview.html"},{default:t(()=>[n("conceptual")]),_:1}),n(" understanding of zkLogin. If you are new to zkLogin, please refer to the "),e("a",f,[n("zkLogin documentation"),s(o)]),n(".")]),_,e("ul",null,[b,e("li",null,[w,n(". For this guide, we will use the default remote salting service that implements using Mysten's salting service, but the process is similar for other "),y,n(" salting services including "),S,n(" self-hosted salting services. For this, your "),L,n(" must be whitelisted by "),e("a",q,[n("Mysten Labs"),s(o)]),n(".")]),e("li",null,[x,n(". For this guide, we will use the default remote proving service provided by "),e("a",z,[n("Mysten Labs"),s(o)]),n(", but the process is similar for other "),I,n(" proving services including "),O,n(" self-hosted proving services. White listing for this is not needed since the devnet proving service is open to all.")])]),A,e("p",null,[n("For a complete example, see the "),e("a",M,[n("ZeroAuth iOS SDK Example"),s(o)]),n(".")]),D])}const R=r(d,[["render",T],["__file","quick-start.html.vue"]]);export{R as default};
