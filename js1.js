$(document).ready(() => {
  $(".load-more").bind("click",() => {
    let ajax = $.ajax({
      url: 'http://5d35c5105b83cd0014d0b359.mockapi.io/api/v1/product',
    });

    ajax.then( data => {
      if (data) {
          let start = $(".card").length;
          let end = start + 4;

          data.slice(start, end ).forEach(card => {

            let tempalate = 
            `
              <div class="col-md-3 col-xs-6 card">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${card.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">${card.price}</a>
                </div>
              </div>
            `;
            $(".load-items").append(tempalate);
          })


      }


    })
  })
})