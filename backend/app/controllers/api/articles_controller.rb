module Api
  class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]
    before_action :authenticate, only: [:create, :update, :destroy]
    def index
      @articles = Article.all
      render json: @articles, status: :ok
    end

    def show
      render json: @article
    end

    def create
      @article = Article.new(article_params)
      @article.tagList = params[:article][:tagList]
      if @article.save
        render json: @article.as_json(include: { tags: { only: :name } }), status: :created
      else
        render json: @article.errors, status: :unprocessable_entity
      end
    end

    def update
      if @article.update(article_params)
        render json: @article
      else
        render json: @article.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @article.destroy
      render json: { message:'Article successfully deleted' }, status: :ok
    end


  private
    def article_params
      params.require(:article).permit(:title, :description, :body, :tags)
    end

    def set_article
      @article = Article.find(params[:id])
    end
  end
end
