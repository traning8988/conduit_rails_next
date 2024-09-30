class Article < ActiveRecord::Migration[7.1]
  create_table "articles", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string :title
    t.text :body
    t.string :description
    t.string :tagList

    t.timestamps
  end
end
