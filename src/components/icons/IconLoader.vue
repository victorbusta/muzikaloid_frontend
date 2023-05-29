<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
  div {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    width: 4px;
    height: 8px;
    border-radius: 4px;
    transform: translateY(-16px);
  }

  span:nth-child(9) {
    animation: 3s ease-out rotate infinite;
    background-color: #ED0180;
  }
  span:nth-child(8) {
    animation: 3s ease-out rotate 125ms infinite;
    background-color: #9A19E8;
  }
  span:nth-child(7) {
    animation: 3s ease-out rotate 250ms infinite;
    background-color: #17407C;
  }
  span:nth-child(6) {
    animation: 3s ease-out rotate 375ms infinite;
    background-color: #ED0180;
  }
  span:nth-child(5) {
    animation: 3s ease-out rotate 500ms infinite;
    background-color: #9A19E8;
  }
  span:nth-child(4) {
    animation: 3s ease-out rotate 625ms infinite;
    background-color: #17407C;
  }
  span:nth-child(3) {
    animation: 3s ease-out rotate 750ms infinite;
    background-color: #ED0180;
  }
  span:nth-child(2) {
    animation: 3s ease-out rotate 875ms infinite;
    background-color: #9A19E8;
  }
  span:nth-child(1) {
    animation: 3s ease-out rotate 1000ms infinite;
    background-color: #17407C;
  }

  @keyframes rotate {
    0%{
      rotate: 0;
    }
    33%{
      rotate: 360deg;
    }
    100%{
      rotate: 360deg;
    }
  }
</style>