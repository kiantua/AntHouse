/**
 * Created by Антон on 23.10.2017.
 */
(function () {


    var commentsField = document.querySelector('.comments'),
        commentButton = document.querySelector('.comment-form button');





    function addComment() {
        var comment = document.querySelector('.comment-form textarea'),
            commentWrap = document.createElement('div');


        commentWrap.classList.add('comment-item');
        commentWrap.innerHTML = '<span class="comment-author">Author</span><span class="comment-date">SomeDate</span><div class="comment">'+comment.value+'</div>';

        commentsField.appendChild(commentWrap);
        comment.value = " ";
    }

   commentButton.addEventListener("click", addComment);

} ());