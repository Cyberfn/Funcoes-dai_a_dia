function obtem_parametros_url(url) {
    const params = new URLSearchParams(new URL(url).search);
    return Object.fromEntries(params.entries());
  }
  