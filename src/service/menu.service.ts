import { AppDataSource } from '../app/database';
import Menu from '../entity/Menu';
import { getRoleById } from './role.service';

// 获取全部菜单列表
const getMenuAllList = async () => {
  const result = await AppDataSource.createQueryBuilder().select('menu').from(Menu, 'menu').getMany();
  return result;
};

// 获取树形菜单列表
const getMenuList = async () => {
  const result = await AppDataSource.createQueryBuilder()
    .select('menu')
    .from(Menu, 'menu')
    .leftJoinAndSelect('menu.children', 'children')
    .where('menu.parent_id is null')
    .orderBy({
      'menu.sort': 'ASC',
      'children.sort': 'ASC'
    })
    .getMany();
  return result;
};

// 根据角色id获取对应角色的菜单列表
const getMenuListByRoleId = async (roleId) => {
  const roleData = await getRoleById(roleId);
  const roleMenuIds = roleData.role_menu_permission.split(',');
  const result = await AppDataSource.createQueryBuilder()
    .select('menu')
    .from(Menu, 'menu')
    .leftJoinAndSelect('menu.children', 'children', `children.id IN (${roleMenuIds})`)
    .where(`menu.parent_id is null and menu.id IN (:...roleMenuIds)`, {  roleMenuIds })
    .orderBy({
      'menu.sort': 'ASC',
      'children.sort': 'ASC'
    })
    .getMany();

  return result;
};

// 创建后台菜单
const insertMenu = async (menuInfos: Menu | Menu[]) => {
  await AppDataSource.createQueryBuilder().insert().into(Menu).values(menuInfos).execute();
};

export { insertMenu, getMenuList, getMenuListByRoleId, getMenuAllList };
