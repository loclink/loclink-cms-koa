import { AppDataSource } from '../app/database';
import Role from '../entity/Role';

// 插入角色数据
const insertUserRole = async (roleInfo: Role | Role[]) => {
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

// 根据id更新角色数据
const updateRoleById = async (roleId, roleData) => {
  await AppDataSource.createQueryBuilder()
    .update(Role)
    .where('id = :id', {
      id: roleId
    })
    .set(roleData)
    .execute();
};

// 根据注册码查询角色数据
const getRoleBySignUpCode = async (sign_up_code) => {
  const result = await AppDataSource.createQueryBuilder()
    .select('role')
    .from(Role, 'role')
    .where('role.sign_up_code = :sign_up_code', {
      sign_up_code
    })
    .getOne();

  return result;
};
export { insertUserRole, getRoleById, updateRoleById, getRoleBySignUpCode };
