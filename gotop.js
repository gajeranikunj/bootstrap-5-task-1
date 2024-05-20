function Gotop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  
  addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight - 10 > window.innerHeight) {
      document.getElementById('btn-gotop').classList.remove('hidden');
    } else {
      document.getElementById('btn-gotop').classList.add('hidden');
    }
  });
  