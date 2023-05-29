<template>
<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="logo">
<path id="R2" d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"/>
<path id="R1" d="M1 7C1 3.68629 3.68629 1 7 1H25C28.3137 1 31 3.68629 31 7V25C31 28.3137 28.3137 31 25 31H7C3.68629 31 1 28.3137 1 25V7Z"/>
<g id="magni">
<circle id="MC1" cx="14" cy="16" r="8"/>
<circle id="MC2" cx="14" cy="16" r="7"/>
<rect id="MR1" x="20.2856" y="20" width="13.6913" height="2" transform="rotate(40 20.2856 20)"/>
</g>
</g>
</svg>
</template>

<style scoped>
#R1 {
  fill: var(--color-background);
  transition: all 400ms ease-in-out;
}

#R2 {
  fill: var(--color-text);
  transition: all 400ms ease-in-out;
}

#MC1, #MR1 {
  fill: var(--color-text);
  transition: all 400ms ease-in-out;
}

#MC2 {
  fill: var(--color-background);
  transition: all 400ms ease-in-out;
}

#logo:hover > #R1 {
  fill: var(--color-text);
}

#logo:hover > #R2 {
  fill: var(--color-background);
}

#logo:hover > #magni > #MC1, #logo:hover > #magni > #MR1 {
  fill: var(--color-background);
}

#logo:hover > #magni > #MC2 {
  fill: var(--color-text);
}
</style>