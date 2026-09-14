(() => {
  const style = document.createElement('style');
  style.textContent = `
    .city-site-identity{
      position:fixed;z-index:2000;top:calc(6px + env(safe-area-inset-top));right:9px;
      display:flex;align-items:center;min-height:25px;padding:4px 9px;
      border:1px solid #9bc9c4;border-radius:999px;background:#f5fcfaed;
      box-shadow:0 1px 5px #155e6224;color:#175e62;text-decoration:none;
      font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;
      font-size:10px;font-weight:900;letter-spacing:.02em;backdrop-filter:blur(4px)
    }
    .city-site-identity::before{content:"●";margin-right:4px;color:#398b86;font-size:8px}
  `;
  document.head.append(style);

  const badge = document.createElement('a');
  badge.className = 'city-site-identity';
  badge.href = '/takarazuka/';
  badge.setAttribute('aria-label', '宝塚市トップへ');
  badge.textContent = '宝塚市 町名記憶ゲーム';
  document.body.append(badge);

  document.querySelectorAll('a,button').forEach(element => {
    const text = element.textContent.trim();
    if (!/^(← )?(ゲームトップへ|トップページ)$/.test(text)) return;
    element.textContent = text.startsWith('←') ? '← 宝塚市トップへ' : '宝塚市トップへ';
  });
})();
