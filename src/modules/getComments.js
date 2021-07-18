//Комментарии

const getComments = ()=> {
    const reviews = document.querySelector('#reviews'),
    loader = document.createElement('div');
    loader.classList.add('container');
    loader.innerHTML = `<div class="row text-center"><div class ="col-12"><div class="loadingio-spinner-spinner-5aucb47nhvp"><div class="ldio-yq4giadanxn">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div></div></div>`;
    reviews.append(loader);
    const elems = [];

    fetch(`https://moddle-diploma-default-rtdb.firebaseio.com/comments.json`)
        .then(response=>{
            loader.remove();
            return response.json();
        })
        .then(data => {
            loader.remove();
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('row');
                div.classList.add('comment-item');
                div.classList.add('review-margin-bottom');
                if(item.id === 0 || item.id === 3){
                    div.innerHTML = `
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${item.image ? item.image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-green review-arrow review-arrow-left">
                            <p class="text-normal">${item.author}</p>
                            <p>${item.comment}</p>
                        </div>
                    </div>
                    `;
                } 
                else if (item.id === 1 || item.id === 4) {div.innerHTML = `
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">${item.author}</p>
                        <p>${item.comment}</p>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/${item.image ? item.image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                    </div>
                </div>
                `;}
                else {div.innerHTML = `
                <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="images/users/${item.image ? item.image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                    </div>
                </div>
                <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-orange review-arrow review-arrow-left">
                        <p class="text-normal">${item.author}</p>
                        <p>${item.comment}</p>
                    </div>
                </div>
                `;
            } 
                elems.push(div);
            });
            for (let i = 0; i < 3; i++) {
                reviews.querySelector('.comments-container').append(elems[i]);
                if (i === 0) {
                    elems[i].querySelector('.review-inner');
                } 
               
            }
            let i = 3;
            setInterval(() => {
                reviews.querySelectorAll('.comment-item')[0].remove();
                if (i === 6) {
                    i = 0;
                }

                reviews.querySelector('.comments-container').append(elems[i]);

                i++;
            }, 10000);
        });
};

export default getComments;