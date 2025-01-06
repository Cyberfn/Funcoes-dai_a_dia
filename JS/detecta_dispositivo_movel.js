function detecta_dispositivo_movel() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
