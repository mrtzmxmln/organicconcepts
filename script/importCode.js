loadHTML('./templates/footer.html', '#footer');

function loadHTML(url, selector) {
    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        document.querySelector(selector).innerHTML = html;
      });
}