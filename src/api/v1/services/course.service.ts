import Course from '../models/course.model';

const create = async (data: any) => {
  return await Course.create(data);
};
const findAll = async () => {
  return await await Course.findAll();
};
const findById = async (id: string) => {
  return await Course.findByPk(id);
};

const update = async (id: string, data: any) => {
  return await Course.update(data, {
    where: { id },
  });
};

const destroy = async (id: string) => {
  return await Course.destroy({ where: { id } });
};

export default {
  create,
  findAll,
  findById,
  update,
  destroy,
};
