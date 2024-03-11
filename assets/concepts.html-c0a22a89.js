import{_ as r,r as o,o as s,c as a,a as e,b as t,d as n,e as l}from"./app-8a2f83c8.js";const c={},h=l('<h1 id="core-concepts" tabindex="-1"><a class="header-anchor" href="#core-concepts" aria-hidden="true">#</a> Core Concepts</h1><p>Each ZeroAuth SDK consists of mainly three decoupled components:</p><ul><li><p><strong>OAuth 2.0 and OpenID Connect (OIDC) client library</strong>: This library is responsible for handling the OAuth 2.0 and OIDC flows. It strives to directly map the requests and responses of those specifications and is responsible for making the necessary HTTP requests to the authorization server and handling the responses. It also provides a simple API for developers to use.</p></li><li><p><strong>Salt Service client library</strong>: This library is responsible for handling the communication with the Salt Service. It provides a simple API for developers to use.</p></li><li><p><strong>Proving Service client library</strong>: This library is responsible for handling the communication with a ZK Proving Service. It provides a simple API for developers to use.</p></li></ul><p>While you can use each of these components separately, you can delegate the entire process to the SDK, which is the recommended approach.</p><h2 id="oauth-2-0-and-openid-connect-oidc-client-library" tabindex="-1"><a class="header-anchor" href="#oauth-2-0-and-openid-connect-oidc-client-library" aria-hidden="true">#</a> OAuth 2.0 and OpenID Connect (OIDC) client library</h2>',5),d={href:"https://tools.ietf.org/html/rfc8252",target:"_blank",rel:"noopener noreferrer"},p={href:"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-12",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"It provides a generic API that allows developers to use any OAuth 2.0 and OIDC provider. It also provides a set of APIs for specific providers, which makes it easier to use.",-1),g=e("h2",{id:"salt-service-client-library",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#salt-service-client-library","aria-hidden":"true"},"#"),t(" Salt Service client library")],-1),v=e("p",null,[t("In "),e("strong",null,"zkLogin"),t(", the use of salting is a critical measure for protecting user identity and privacy. This technique involves appending a random data string to the user's identity (specifically, the OAuth identifier or 'sub'), thereby obscuring any direct connection between the user's Web2 and Web3 credentials. This process significantly enhances privacy by preventing cross-referencing of user credentials.")],-1),f=e("p",null,[t("The application can implement salting through several methods, generally categorized into two main approaches: "),e("strong",null,"client-side"),t(" and "),e("strong",null,"server-side"),t(".")],-1),m=e("li",null,[e("p",null,[e("strong",null,"Client-Side Salting"),t(": In this scenario, the responsibility of generating and maintaining the salt rests either with the application itself or the user. The application can directly manage salt creation and storage. Alternatively, it might transfer this duty to users, allowing for a more distributed form of security management, thus giving users direct control over their privacy.")])],-1),b=e("strong",null,"Server-Side Salting",-1),y={href:"https://salt.api.mystenlabs.com/get_salt",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[t("Utilizing the default Salt Service Client requires the application's backend to support REST operations, specifically accepting a JWT token encapsulated as "),e("code",null,'{"token": "$JWT_TOKEN"}'),t(" and responding with the corresponding salt in a JSON format, noted as "),e("code",null,'{salt: "salt"}'),t(". However, if the application's backend does not conform to these specifications or if there are other unique requirements, there is a need to develop a custom Salt Service Client. This tailored client would then integrate with the SDK, ensuring proper communication and data handling tailored to the application's specific needs.")],-1),w=e("p",null,"By choosing between client-side and server-side salting based on the application's structure, security needs, and resource allocation, developers can effectively bolster user privacy and the overall security posture of the system involved in the zkLogin process.",-1),S=e("h2",{id:"proving-service-client-library",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#proving-service-client-library","aria-hidden":"true"},"#"),t(" Proving Service client library")],-1),k=e("p",null,"Generating a cryptographic proof is a cornerstone of the zkLogin process, essential for the zkLogin protocol. This step, however, is known for being computationally demanding, which can lead to delays that impact the user experience.",-1),I=e("p",null,"To mitigate this challenge, the ZeroAuth SDKs introduce a Proving Service client library. This library acts as an intermediary, allowing the application to offload the intensive proof generation process to an external ZK Proving Service. The beauty of this approach lies in its flexibility — developers have the option to host their own service or engage a third-party provider.",-1),T={href:"https://docs.sui.io/build/zk_login#run-the-proving-service-in-your-backend",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mystenlabs.com/news",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"Regardless of the chosen setup, the Proving Service client library within the ZeroAuth SDKs simplifies interaction with the ZK Proving Service through a straightforward API, making it easier for developers to integrate these capabilities into their applications. However, suppose developers opt for a customized Proving Service that deviates from standard specifications. In that case, they will need to create a bespoke Proving Service client library. This custom library must be compatible with the overarching SDK environment, ensuring seamless communication and operational coherence within the zkLogin ecosystem.",-1),P=e("p",null,"This balanced combination of computational delegation and streamlined developer interfaces ensures that applications can perform rigorous zero-knowledge proofs without burdening the client-side resources or compromising the user experience, maintaining the delicate equilibrium between performance and privacy.",-1);function x(C,D){const i=o("ExternalLinkIcon");return s(),a("div",null,[h,e("p",null,[t("The OAuth 2.0 and OIDC client library is responsible for handling the OAuth 2.0 and OIDC flows. It follows best practices for native apps as outlined in "),e("a",d,[t("RFC 8252"),n(i)]),t(" and "),e("a",p,[t("OAuth 2.0 for Native Apps"),n(i)]),t(".")]),u,g,v,f,e("ol",null,[m,e("li",null,[e("p",null,[b,t(": Conversely, with server-side salting, the application entrusts the salt management role to an external entity known as the Salt Service. This delegation can involve mapping the user's identifier (like 'sub') to their respective salt. The architecture here can vary — ranging from using traditional databases (possibly integrating with existing user or password tables) to employing specialized services. One such dedicated solution is Mystenlabs' Salt Service, accessible via "),e("a",y,[t("their interface"),n(i)]),t(".")]),_])]),w,S,k,I,e("p",null,[t("For those interested in establishing their own ZK Proving Service, detailed guidelines are available in the "),e("a",T,[t("documentation"),n(i)]),t(". This resource provides comprehensive instructions, enabling developers to integrate the service smoothly into their backend systems.")]),e("p",null,[t("Alternatively, Mystenlabs offers a proprietary ZK Proving Service. However, access is currently restricted and available only on a whitelist basis. Developers seeking to explore this option or wishing to request access can reach out directly to "),e("a",A,[t("Mystenlabs"),n(i)]),t(" for more information.")]),O,P])}const K=r(c,[["render",x],["__file","concepts.html.vue"]]);export{K as default};
