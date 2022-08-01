import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTable1658158634753 implements MigrationInterface {
    name = 'updateTable1658158634753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blog_menu\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT '博客菜单id', \`title\` varchar(255) NOT NULL COMMENT '博客菜单标题', \`icon\` varchar(255) NULL COMMENT '博客菜单icon', \`sort\` int NOT NULL COMMENT '博客菜单排序' DEFAULT '0', \`menu_type\` int NOT NULL COMMENT '博客菜单类型：[1: 一级菜单 2: 二级菜单]' DEFAULT '1', \`parent_id\` int NULL COMMENT '父级菜单id', \`created\` int NOT NULL COMMENT '创建时间', \`updated\` int NOT NULL COMMENT '更新时间', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`blog_menu\` ADD CONSTRAINT \`FK_2ad74279af8075af44dc1595fd2\` FOREIGN KEY (\`parent_id\`) REFERENCES \`blog_menu\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blog_menu\` DROP FOREIGN KEY \`FK_2ad74279af8075af44dc1595fd2\``);
        await queryRunner.query(`DROP TABLE \`blog_menu\``);
    }

}
