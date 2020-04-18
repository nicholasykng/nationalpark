class CommentsController < ApplicationController
    def index
        park = Park.find_by(id: params[:park_id])
        comments = park.comments
        render json: comments, except: [:created_at, :updated_at]
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, except: [:created_at, :updated_at]
    end

    def create
        park = Park.find_by(id: params[:park_id])
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment, except: [:created_at, :updated_at]
        end
    end

    def update
        comment = Comment.find(params[:id])
        if comment.update(comment_params)
            render json: comment, except: [:created_at, :updated_at]
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:content, :commenter, :park_id)
    end

end
