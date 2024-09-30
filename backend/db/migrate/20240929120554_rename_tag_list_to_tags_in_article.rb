class RenameTagListToTagsInArticle < ActiveRecord::Migration[7.1]
  def change
    rename_column :articles, :TagList, :Tags
  end
end
