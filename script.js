const posts = [
    { id: 1, user: "User1", content: "This is my first post!", likes: 0, comments: [] },
    { id: 2, user: "User2", content: "Hello world!", likes: 0, comments: [] },
];

function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.user}</h3>
            <p>${post.content}</p>
            <button onclick="likePost(${post.id})">Like (${post.likes})</button>
            <input type="text" placeholder="Add a comment" id="comment-${post.id}">
            <button onclick="addComment(${post.id})">Comment</button>
            <div id="comments-${post.id}"></div>
        `;
        postList.appendChild(postDiv);
    });
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    renderPosts();
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-${postId}`);
    const commentText = commentInput.value;
    if (commentText) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(commentText);
        commentInput.value = '';
        renderPosts();
    }
}

window.onload = renderPosts;
