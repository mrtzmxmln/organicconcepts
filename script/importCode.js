loadHTML('./templates/footer.html', '#footer');
loadHTML('./templates/sidebar.html', '#sidebar');

function loadHTML(url, selector) {
    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        document.querySelector(selector).innerHTML = html;
      });
}