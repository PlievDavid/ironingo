let numberOfComment = 0;
document.addEventListener('DOMContentLoaded', function() {    
    const submitButton = document.getElementById('addCommentLink');
    const commentInput = document.getElementById('commentText');
    const commentsList = document.querySelector('.commentsList');
    
    if (!submitButton || !commentInput || !commentsList) {
        console.error('Не все элементы найдены');
        return;
    }
    
    function addComment() {
        const text = commentInput.value.trim();
        
        if (!text) {
            alert('Введите текст комментария!');
            return;
        }
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.style.display = "flex";
        commentDiv.style.border = "1px solid";
        commentDiv.style.margin = "20px";
        commentDiv.style.padding = "10px";
        commentDiv.style.minWidth = "500px";
        commentDiv.style.alignItems = "flex-start";
        commentDiv.style.borderRadius = "12px";
        numberOfComment += 1;
        const title = document.createElement('h3');
        title.textContent = 'Комментарий №' + numberOfComment;
        
        const message = document.createElement('h4');
        message.textContent = text;
        
        const time = document.createElement('small');
        time.style.alignSelf = "end";
        time.textContent = new Date().toLocaleTimeString();
        
        commentDiv.appendChild(title);
        commentDiv.appendChild(message);
        commentDiv.appendChild(time);
        
        commentsList.appendChild(commentDiv);
        
        commentInput.value = '';
    }
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        addComment();
    });
    
    
    submitButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            addComment();
        }
    });
});