import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';

// 全局订阅
@EventSubscriber()
export class GlobalSubscriber implements EntitySubscriberInterface {
  /**
   * 在实体插入之前调用。
   */
  beforeInsert(event: InsertEvent<any>) {
    const nowTime = new Date().getTime() / 1000;
    event.entity.updated = nowTime;
    event.entity.created = nowTime;
  }

  beforeUpdate(event: UpdateEvent<any>): void | Promise<any> {
    event.entity.updated = new Date().getTime() / 1000;
  }
}
