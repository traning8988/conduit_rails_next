class Article < ApplicationRecord
  has_many :article_tags, dependent: :destroy
  has_many :tags, through: :article_tags

  def tagList
    tags.pluck(:name)
  end

  def tagList=(names)
    self.tags = names.map { |name| Tag.find_or_create_by(name: name.strip) }
  end

end
