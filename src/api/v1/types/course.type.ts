import { Model, Optional } from 'sequelize';

export interface CourseAttributes {
  id: string;
  title: string;
  numberOfPages: number;
  author: string;
}

export interface CourseCreationAttributes
  extends Optional<CourseAttributes, 'id'> {}

export interface CourseInstance
  extends Model<CourseAttributes, CourseCreationAttributes>,
    CourseAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
