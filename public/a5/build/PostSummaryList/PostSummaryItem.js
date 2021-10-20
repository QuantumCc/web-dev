const PostSummaryItem = (post) => {
    return(`
          <div class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <p class="text-secondary mb-1">${post.topic}</p>
                    <b>${post.userName}</b>
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary">${post.time}</span>
                    <b>${post.title}</b>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html">
                        <img src=${post.image} width="30px" height="25px" />
                    </a>
                </div>
            </div>
          </div>
    `);
}
export default PostSummaryItem;