import { AppDataSource } from '../app/database';
import Role from '../entity/Role';

// 插入角色数据
const insertUserRole = async (roleInfo: Role) => {
  await AppDataSource.createQueryBuilder().insert().into(Role).values(roleInfo).execute();
};

// 根据id获取角色数据
const getRoleById = async (roleId) => {
  const result = await AppDataSource.createQueryBuilder()
    .select('role')
    .from(Role, 'role')
    .addSelect('role.role_menu_permission')
    .where('role.id = :id', { id: roleId })
    .getOne();
  return result;
};


const updateRoleById = async (roleId, roleData) => {
  await AppDataSource.createQueryBuilder()
    .update(Role)
    .where('id = :id', {
      id: roleId
    })
    .set(roleData)
    .execute();
};

export { insertUserRole, getRoleById,updateRoleById };
