import { Module } from '@nestjs/common';
import { resolve } from 'path';
import { ConfigModule } from 'nestjs-configure';
import { configName, databaseConnectName } from './constant';
import {DatabaseModule, GrpcModule} from 'nestapp';
import {ProtobufLoader} from "./protobufs/protobuf-loader";

@Module({
    imports: [
        // 加载配置
        ConfigModule.load(resolve(__dirname, 'bootstrap.yml'), 'auth'),
        // grpc 模块
        GrpcModule.init({
            configName,
            packages: ProtobufLoader.load(),
        }),
    ],
})
export default class AppModule {
}
