class AddTimestampsToArticles < ActiveRecord::Migration[7.1]
  def change
    add_timestamps :articles, null: true
    
    # 既存のレコードに対してタイムスタンプを設定
    now = Time.current
    Article.update_all(created_at: now, updated_at: now)
    
    # NULL制約を追加
    change_column_null :articles, :created_at, false
    change_column_null :articles, :updated_at, false
  end
end
