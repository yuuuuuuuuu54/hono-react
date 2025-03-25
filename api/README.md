```
npm install
npm run dev
```

```
open http://localhost:3000
```

メモ
```
src/
├── domain/
│   ├── entities/
│   │   └── User.ts
│   ├── value-objects/
│   │   └── Email.ts
│   ├── repositories/
│   │   └── UserRepository.ts      # Interface（ポート）
│   └── services/
│       └── PasswordHasher.ts
│
├── application/
│   ├── usecases/
│   │   ├── CreateUserUseCase.ts
│   │   └── GetUserUseCase.ts
│   ├── dtos/
│   │   └── UserDTO.ts
│   └── errors/
│       └── NotFoundError.ts
│
├── infrastructure/
│   ├── database/
│   │   ├── prismaClient.ts        # PrismaなどORM設定
│   │   └── repositories/
│   │       └── UserRepositoryImpl.ts  # Adapter: implements domain/repository interface
│   ├── external/
│   │   └── EmailService.ts        # 外部APIクライアント
│   └── logger/
│       └── Logger.ts
│
├── interfaces/
│   ├── http/
│   │   ├── controllers/
│   │   │   └── UserController.ts
│   │   ├── routes.ts              # Hono Router登録
│   │   └── middleware/
│   │       ├── AuthMiddleware.ts
│   │       └── ErrorHandler.ts
│   └── cli/                      # CLIツールやバッチ処理
│
├── config/
│   ├── index.ts                  # 環境変数ロード
│   └── validation.ts
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── app.ts                        # Honoインスタンス作成 + routes登録
├── server.ts                     # サーバ起動スクリプト
└── deps.ts                       # 依存管理エイリアス
```
サービスなしのコントローラからusecaseを呼び出し、usecaseにコンテキストに隠していたリポジトリ(prisma clientかな？)を引数として入力して依存関係をクリア