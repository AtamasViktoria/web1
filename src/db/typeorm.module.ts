import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        NestTypeOrmModule.forRoot({
            type: 'postgres',
            host: "127.0.0.1", // Исправлено
            port: 5432, // Исправлено
            username: "nest_test", // Исправлено
            password: "nest_test",
            database: "nest_test", // Исправлено
            entities: ['dist/entities/**/*.entity.js'],
            // migrations: ['dist/db/migrations/**/*.js'],
            synchronize: true,
            // cli: { migrationsDir: 'src/db/migrations' },
        }),
    ],
})
export class TypeOrmModule {}
