import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTable1658206159692 implements MigrationInterface {
    name = 'updateTable1658206159692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`logs\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT '日志id', \`content\` varchar(255) NOT NULL COMMENT '日志内容', \`operator\` varchar(255) NULL COMMENT '操作人', \`created\` int NOT NULL COMMENT '创建时间', \`updated\` int NOT NULL COMMENT '更新时间', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`menu\` CHANGE \`created\` \`created\` int NOT NULL COMMENT '创建时间'`);
        await queryRunner.query(`ALTER TABLE \`menu\` CHANGE \`updated\` \`updated\` int NOT NULL COMMENT '更新时间'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`menu\` CHANGE \`updated\` \`updated\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`menu\` CHANGE \`created\` \`created\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`logs\``);
    }

}
