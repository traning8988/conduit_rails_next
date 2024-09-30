class RenameArticleColumnToarticle < ActiveRecord::Migration[7.1]
  def change
    rename_table :Articles, :articles unless table_exists?(:articles)

  end
end
