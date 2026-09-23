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
    .common-site-nav{
      width:100%;max-width:680px;margin:18px auto 8px;padding:13px 10px;
      border-top:1px solid #b9d8d2;border-bottom:1px solid #b9d8d2;
      display:flex;flex-wrap:wrap;justify-content:center;gap:8px 14px;
      font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;
      font-size:12px;line-height:1.5
    }
    .common-site-nav a{color:#175e62;text-decoration:underline;text-underline-offset:3px;font-weight:800}
    .common-site-nav a:focus-visible{outline:3px solid #7fc9bd;outline-offset:3px;border-radius:3px}
  `;
  document.head.append(style);

  const badge = document.createElement('a');
  badge.className = 'city-site-identity';
  badge.href = '/takarazuka/';
  badge.setAttribute('aria-label', '宝塚市トップへ');
  badge.textContent = '宝塚市 町名記憶ゲーム';
  document.body.append(badge);

  const commonNav = document.createElement('nav');
  commonNav.className = 'common-site-nav';
  commonNav.setAttribute('aria-label', 'サイト共通情報');
  commonNav.innerHTML = `
    <a href="/about/">このサイトについて</a>
    <a href="/privacy/">プライバシーポリシー</a>
    <a href="/sources/">データ出典</a>
    <a href="/terms/">利用上の注意</a>
  `;
  const host = document.querySelector('main') || document.body;
  const footer = host.querySelector('footer');
  if (footer) footer.before(commonNav);
  else host.append(commonNav);

  document.querySelectorAll('a,button').forEach(element => {
    const text = element.textContent.trim();
    if (!/^(← )?(ゲームトップへ|トップページ)$/.test(text)) return;
    element.textContent = text.startsWith('←') ? '← 宝塚市トップへ' : '宝塚市トップへ';
  });
})();
