import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');
export default function coursesNormalizer(data) {
  const normalizedData = normalize(data, [courses]);
  return normalizedData.entities.courses;
};
