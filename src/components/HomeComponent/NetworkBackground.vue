<template>
  <svg class="bg-network" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#ff6c2a" stop-opacity="1"/>
        <stop offset="100%" stop-color="#ff6c2a" stop-opacity="0"/>
      </radialGradient>
      <filter id="glow-filter">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <g opacity="0.25" stroke="#ff6c2a" stroke-width="0.8">
      <line x1="200" y1="150" x2="100" y2="80"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite"/></line>
      <line x1="200" y1="150" x2="310" y2="90"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/></line>
      <line x1="200" y1="150" x2="130" y2="260"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.5s" repeatCount="indefinite"/></line>
      <line x1="200" y1="150" x2="290" y2="240"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite"/></line>
      <line x1="200" y1="150" x2="200" y2="300"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="4.5s" repeatCount="indefinite"/></line>
      <line x1="100" y1="80"  x2="310" y2="90"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite"/></line>
      <line x1="130" y1="260" x2="290" y2="240"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="5s" repeatCount="indefinite"/></line>
      <line x1="130" y1="260" x2="200" y2="300"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/></line>
      <line x1="290" y1="240" x2="340" y2="350"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.8s" repeatCount="indefinite"/></line>
      <line x1="200" y1="300" x2="100" y2="380"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.5s" repeatCount="indefinite"/></line>
      <line x1="200" y1="300" x2="340" y2="350"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4.2s" repeatCount="indefinite"/></line>
      <line x1="60"  y1="200" x2="130" y2="260"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite"/></line>
      <line x1="60"  y1="200" x2="100" y2="80"><animate attributeName="opacity" values="0.1;0.25;0.1" dur="5s" repeatCount="indefinite"/></line>
    </g>

    <circle r="2" fill="#ff6c2a" opacity="0.8" filter="url(#glow-filter)">
      <animateMotion dur="3s" repeatCount="indefinite"><mpath href="#path1"/></animateMotion>
    </circle>
    <circle r="1.5" fill="#ffffff" opacity="0.6" filter="url(#glow-filter)">
      <animateMotion dur="5s" repeatCount="indefinite" begin="1s"><mpath href="#path2"/></animateMotion>
    </circle>
    <circle r="2" fill="#ff6c2a" opacity="0.7" filter="url(#glow-filter)">
      <animateMotion dur="4s" repeatCount="indefinite" begin="0.5s"><mpath href="#path3"/></animateMotion>
    </circle>
    <circle r="1.5" fill="#ffffff" opacity="0.5" filter="url(#glow-filter)">
      <animateMotion dur="6s" repeatCount="indefinite" begin="2s"><mpath href="#path4"/></animateMotion>
    </circle>

    <path id="path1" d="M200,150 L100,80 L310,90 L200,150" fill="none"/>
    <path id="path2" d="M200,150 L290,240 L200,300 L130,260 L200,150" fill="none"/>
    <path id="path3" d="M130,260 L200,300 L340,350 L290,240 L130,260" fill="none"/>
    <path id="path4" d="M100,80 L60,200 L130,260 L200,150 L310,90 L100,80" fill="none"/>

    <g filter="url(#glow-filter)">
      <circle cx="200" cy="150" r="5" fill="#ff6c2a">
        <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="150" r="12" fill="url(#nodeGlow)" opacity="0.3">
        <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="80" r="3.5" fill="#ff6c2a">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" begin="0.5s"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="100" cy="80" r="8" fill="url(#nodeGlow)" opacity="0.25">
        <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
      <circle cx="310" cy="90" r="3.5" fill="#ff6c2a">
        <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" begin="1s"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <circle cx="310" cy="90" r="8" fill="url(#nodeGlow)" opacity="0.2">
        <animate attributeName="r" values="6;11;6" dur="4s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <circle cx="130" cy="260" r="3" fill="#ff8c50">
        <animate attributeName="r" values="2.5;4.5;2.5" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
      </circle>
      <circle cx="290" cy="240" r="3" fill="#ff8c50">
        <animate attributeName="r" values="2.5;4.5;2.5" dur="5s" repeatCount="indefinite" begin="1.5s"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" begin="1.5s"/>
      </circle>
      <circle cx="200" cy="300" r="3" fill="#ff6c2a">
        <animate attributeName="r" values="2.5;4.5;2.5" dur="4s" repeatCount="indefinite" begin="0.3s"/>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" begin="0.3s"/>
      </circle>
      <circle cx="60"  cy="200" r="2.5" fill="#ffffff" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="340" cy="350" r="2.5" fill="#ffffff" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <circle cx="100" cy="380" r="2" fill="#ff6c2a" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
</template>

<script>
export default { name: 'NetworkBackground' };
</script>
