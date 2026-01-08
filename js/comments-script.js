document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация комментариев...');
    
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
        
        const title = document.createElement('h1');
        title.textContent = 'Новый комментарий';
        
        const message = document.createElement('h2');
        message.textContent = text;
        
        const time = document.createElement('small');
        time.textContent = new Date().toLocaleTimeString();
        
        commentDiv.appendChild(title);
        commentDiv.appendChild(message);
        commentDiv.appendChild(time);
        
        commentsList.appendChild(commentDiv);
        
        commentInput.value = '';
    }
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('dsadsa');
        addComment();
    });
    
    submitButton.setAttribute('tabindex', '0');
    submitButton.setAttribute('role', 'button');
    
    submitButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            addComment();
        }
    });
});