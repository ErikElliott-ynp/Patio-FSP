json.post
    json.partial! 'post', post: @post
    json.commentsIds @post.comments.pluck(:id)
end

@post.comments.each do |comment|
    json.comments do
        json.partial! 'api/comments/comment', comment: comment
    end
end