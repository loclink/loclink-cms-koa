import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import Menu from '../entity/Menu';
import { getMenuAllList } from '../service/menu.service';
import { updateRoleById } from '../service/role.service';

// 订阅
@EventSubscriber()
export class MenuSubscriber implements EntitySubscriberInterface {
  listenTo(): string | Function {
    return Menu;
  }

  // 每次插入菜单后更新超级管理员数据
  async afterInsert(event: InsertEvent<any>): Promise<any> {
    const result = await getMenuAllList();
    const menuIds = result.map((item) => item.id).join(',');
    await updateRoleById(1, { role_menu_permission: menuIds });
  }
}
