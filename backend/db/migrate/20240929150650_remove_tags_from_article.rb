class RemoveTagsFromArticle < ActiveRecord::Migration[7.1]
  def change
    remove_column :Articles, :Tags, :string
  end
end
