'use strict';
(() => {

  const bigPicture = document.querySelector(`.big-picture`);
  const bigPictureImg = bigPicture.querySelector(`.big-picture__img`);
  const img = bigPictureImg.querySelector(`img`);
  const socialComments = bigPicture.querySelector(`.social__comments`);

  const createComment = (comment) => {
    const node = document.createElement(`li`);
    node.classList.add(`social__comment`);
    const nodeImg = document.createElement(`img`);
    nodeImg.width = 35;
    nodeImg.height = 35;
    nodeImg.src = comment.avatar;
    nodeImg.alt = comment.name;
    nodeImg.classList.add(`social__picture`);

    node.appendChild(nodeImg);

    const p = document.createElement(`p`);
    p.classList.add(`social__text`);
    p.textContent = comment.message;

    node.appendChild(p);

    return node;

    //    document.body.insertAdjacentElement(`afterbegin`, node);

    /*
          <li class="social__comment">
              <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
            </li>
     */
  };

  const clearOldComments = () => {
    const comments = socialComments.querySelectorAll(`.social__comment`);
    let commentsArray = Array.prototype.slice.call(comments);

    commentsArray.forEach((item) => {
      item.remove();
    });
  };

  const close = () => {
    bigPicture.classList.add(`hidden`);
    document.body.classList.remove(`modal-open`);
  };

  const show = (obj) => {
    img.src = obj.data.url;
    img.alt = obj.data.description;

    // socialComments.querySelector(`.social__comment`);

    clearOldComments();

    let comments = obj.data.comments;

    let commentElement = null;
    const fragment = document.createDocumentFragment();
    comments.forEach((item) => {
      commentElement = createComment(item);
      fragment.appendChild(commentElement);
    });

    socialComments.appendChild(fragment);


    bigPicture.classList.remove(`hidden`);
    document.body.classList.add(`modal-open`);

    const bigPictureCancel = bigPicture.querySelector(`.big-picture__cancel`);
    bigPictureCancel.addEventListener(`click`, close);

  };

  window.card = {
    show,
  };
})();
