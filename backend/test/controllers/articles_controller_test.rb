# test/controllers/articles_controller_test.rb
require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    ArticleTag.delete_all
    Article.delete_all

    # テストデータを作成
    @article1 = Article.create!(title: "Test Article 1", description: "Description 1", body: "Body 1")
    @article2 = Article.create!(title: "Test Article 2", description: "Description 2", body: "Body 2")
  end

  test "should get index" do
    # GETリクエストを送信して、記事一覧を取得
    get "/api/articles"

    # ステータスコードが200 OKであることを確認
    assert_response :ok

    # JSONレスポンスをパースして、記事が2件含まれていることを確認
    json_response = JSON.parse(@response.body)
    assert_equal 2, json_response.length

    # 各記事のタイトルが正しく返ってきているか確認
    assert_equal "Test Article 1", json_response[0]['title']
    assert_equal "Test Article 2", json_response[1]['title']
  end
end
