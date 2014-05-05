class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :uuid
      t.string :name0
      t.boolean :gender0
      t.string :school0
      t.string :major0
      t.string :email0
      t.string :qq0
      t.string :mobile0
      t.string :name1
      t.boolean :gender1
      t.string :school1
      t.string :major1
      t.string :email1
      t.string :qq1
      t.string :mobile1
      t.string :name2
      t.boolean :gender2
      t.string :school2
      t.string :major2
      t.string :email2
      t.string :qq2
      t.string :mobile2
      t.string :name3
      t.boolean :gende3
      t.string :school3
      t.string :major3
      t.string :email3
      t.string :qq3
      t.string :mobile3
      t.string :name4
      t.boolean :gender4
      t.string :school4
      t.string :major4
      t.string :email4
      t.string :qq4
      t.string :mobile4
      t.string :project_name
      t.boolean :is_tech
      t.text :project_target
      t.text :project_meaning
      t.text :project_schedule
      t.string :project_category
      t.text :project_abstract
      t.text :project_details

      t.timestamps
    end
  end
end
