// スクロールを監視してヘッダーの背景を変化させる
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    // 現在のスクロール位置を取得
    const scrollPosition = window.scrollY;
  
    // スクロール位置が0なら透過背景、そうでない場合は白背景
    if (scrollPosition > 0) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.add('transparent');
      header.classList.remove('scrolled');
    }
  });
  
  // ページ読み込み時にもヘッダーを透過
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.classList.add('transparent');
  });
  window.addEventListener('scroll', function() {
    const theme = document.querySelector('.theme');
    const themePosition = theme.getBoundingClientRect().top; // theme要素の位置
    const windowHeight = window.innerHeight; // ウィンドウの高さ
  
    // theme要素がウィンドウ内に入ったらvisibleクラスを追加
    if (themePosition < windowHeight - 130) { // 少し余裕を持たせて100px引く
      theme.classList.add('visible');
    }
  });
  

  // スクロールを監視
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  // 100px 以上スクロールされた場合ボタンを表示
  if (window.scrollY > 2000) {
      scrollTopBtn.style.display = 'block';
  } else {
      scrollTopBtn.style.display = 'none';
  }
});

// ボタンクリックでトップに戻る
document.getElementById('scroll-top-btn').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーズにスクロール
  });
  
});

