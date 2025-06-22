// Posts
                const posts = [
                    {
                        id: 1,
                        title: "Getting Started with React",
                        content: "React is a JavaScript library for building user interfaces. This post helps you get started...",
                        author: "Jane Doe",
                        image: "Images/Getting Started with React.png"
                    },
                    {
                        id: 2,
                        title: "The Future of Web Development",
                        content: "Web development is evolving rapidly. In this post, we explore upcoming trends...",
                        author: "John Smith",
                        image: "Images/Future of Web Dev.png"
                    },
                    {
                        id: 3,
                        title: "Design Systems That Scale",
                        content: "Design systems help teams build consistent UIs. Learn how to create scalable systems...",
                        author: "Nate Bladwin",
                        image: "Images/Scalable Scales that Scale.png"
                    },
                    {
                        id: 4,
                        title: "TypeScript Best Practices",
                        content: "TypeScript adds types to JavaScript. Here are some best practices for using TypeScript...",
                        author: "Bob Lee",
                        image: "Images/TypeScript Practices.png"
                    }
                ];

                // clicks on post titles
                document.querySelectorAll('#post-titles li').forEach(li => {
                    li.addEventListener('click', function() {
                        const postId = Number(this.getAttribute('data-id'));
                        const post = posts.find(p => p.id === postId);
                        if (post) {
                            document.getElementById('post-detail').innerHTML = `
                                <h3 class="text-xl font-bold text-gray-800">${post.title}</h3>
                                <p class="text-gray-600 mb-2">By <span class="font-medium">${post.author}</span></p>
                                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full max-w-md rounded mb-4">` : ''}
                                <p class="text-gray-700">${post.content}</p>
                            `;
                        }
                    });
                });
            
                // render post titles
                function renderPostTitles() {
                    const postTitles = document.getElementById('post-titles');
                    postTitles.innerHTML = '';
                    posts.forEach(post => {
                        const li = document.createElement('li');
                        li.className = "text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-200 flex justify-between items-center";
                        li.setAttribute('data-id', post.id);
                        li.innerHTML = `
                            <span class="flex-1">${post.title}</span>
                            <button class="delete-btn ml-2 text-red-500 hover:text-red-700 font-bold" data-id="${post.id}" title="Delete">&times;</button>
                        `;
                        postTitles.appendChild(li);
                    });
                    // Re-attach click listeners for post selection
                    document.querySelectorAll('#post-titles li span').forEach(span => {
                        span.addEventListener('click', function() {
                            const postId = Number(this.parentElement.getAttribute('data-id'));
                            const post = posts.find(p => p.id === postId);
                            if (post) {
                                document.getElementById('post-detail').innerHTML = `
                                    <h3 class="text-xl font-bold text-gray-800">${post.title}</h3>
                                    <p class="text-gray-600 mb-2">By <span class="font-medium">${post.author}</span></p>
                                    ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full max-w-md rounded mb-4">` : ''}
                                    <p class="text-gray-700">${post.content}</p>
                                `;
                            }
                        });
                    });
                    // Attach delete listeners
                    document.querySelectorAll('.delete-btn').forEach(btn => {
                        btn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            const postId = Number(this.getAttribute('data-id'));
                            const idx = posts.findIndex(p => p.id === postId);
                            if (idx !== -1) {
                                posts.splice(idx, 1);
                                renderPostTitles();
                                document.getElementById('post-detail').innerHTML = `<p class="text-gray-500">Click on a post title to view details.</p>`;
                                showMessage('Post deleted.');
                            }
                        });
                    });
                    // Update post count
                    document.querySelector('#post-list p').textContent = `${posts.length} post${posts.length !== 1 ? 's' : ''}`;
                }

                // Utility to show message
                function showMessage(msg) {
                    const box = document.getElementById('message-box');
                    document.getElementById('message-text').textContent = msg;
                    box.classList.remove('hidden');
                    box.style.opacity = 1;
                    setTimeout(() => {
                        box.style.opacity = 0;
                        setTimeout(() => box.classList.add('hidden'), 300);
                    }, 2000);
                }
                document.getElementById('close-message').onclick = function() {
                    document.getElementById('message-box').classList.add('hidden');
                };

                // Handle new post form
                document.getElementById('new-post-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const title = document.getElementById('new-title').value.trim();
                    const content = document.getElementById('new-content').value.trim();
                    const author = document.getElementById('new-author').value.trim();
                    const image = document.getElementById('new-image').value.trim();
                    if (!title || !content || !author) {
                        showMessage('Please fill in all required fields.');
                        return;
                    }
                    const newPost = {
                        id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
                        title,
                        content,
                        author,
                        image
                    };
                    posts.push(newPost);
                    renderPostTitles();
                    this.reset();
                    showMessage('New post added!');
                });

                // Initial render
                renderPostTitles();
        // Show details for the first post on page load
        function showPostDetail(post) {
            document.getElementById('post-detail').innerHTML = `
                <h3 class="text-xl font-bold text-gray-800">${post.title}</h3>
                <p class="text-gray-600 mb-2">By <span class="font-medium">${post.author}</span></p>
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="w-full max-w-md rounded mb-4">` : ''}
                <p class="text-gray-700">${post.content}</p>
                <button id="edit-post-btn" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
            `;
            attachEditButton(post);
        }

        function attachEditButton(post) {
            const editBtn = document.getElementById('edit-post-btn');
            if (editBtn) {
                editBtn.addEventListener('click', function() {
                    document.getElementById('post-detail').innerHTML = `
                        <form id="edit-post-form" class="space-y-4">
                            <label class="block">
                                <span class="text-gray-700">Title</span>
                                <input type="text" id="edit-title" value="${post.title.replace(/"/g, '&quot;')}" class="mt-1 block w-full border rounded px-2 py-1" required>
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Content</span>
                                <textarea id="edit-content" class="mt-1 block w-full border rounded px-2 py-1" rows="4" required>${post.content.replace(/</g, '&lt;')}</textarea>
                            </label>
                            <div class="flex gap-2">
                                <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
                                <button type="button" id="cancel-edit" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                            </div>
                        </form>
                    `;
                    document.getElementById('edit-post-form').addEventListener('submit', function(e) {
                        e.preventDefault();
                        const newTitle = document.getElementById('edit-title').value.trim();
                        const newContent = document.getElementById('edit-content').value.trim();
                        if (!newTitle || !newContent) {
                            showMessage('Title and content are required.');
                            return;
                        }
                        post.title = newTitle;
                        post.content = newContent;
                        renderPostTitles();
                        showPostDetail(post);
                        showMessage('Post updated!');
                    });
                    document.getElementById('cancel-edit').addEventListener('click', function() {
                        showPostDetail(post);
                    });
                });
            }
        }

        // Override renderPostTitles to use showPostDetail for selection
        const originalRenderPostTitles = renderPostTitles;
        renderPostTitles = function() {
            originalRenderPostTitles();
            // Re-attach click listeners to use showPostDetail
            document.querySelectorAll('#post-titles li span').forEach(span => {
                span.addEventListener('click', function() {
                    const postId = Number(this.parentElement.getAttribute('data-id'));
                    const post = posts.find(p => p.id === postId);
                    if (post) showPostDetail(post);
                });
            });
        };

        // Show first post detail on load 
        if (posts.length) {
            showPostDetail(posts[0]);
        } else {
            document.getElementById('post-detail').innerHTML = `<p class="text-gray-500">Click on a post title to view details.</p>`;
        }