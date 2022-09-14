import { DataTypes } from 'sequelize';
import config from '../config';
import { CourseInstance } from '../types/course.type';

const { db } = config;

const Course = db.define<CourseInstance>('Course', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
  },
  title: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  numberOfPages: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  author: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
});

export default Course;
