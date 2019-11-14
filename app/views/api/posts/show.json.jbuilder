json.post
    json.partial! 'post', post: @post
    json.commentsIds @post.comment_ids
end

json.comments
    @post.comments.each do |comment|
        json.sent! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end