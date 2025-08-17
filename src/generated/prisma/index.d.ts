
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserApiKey
 * 
 */
export type UserApiKey = $Result.DefaultSelection<Prisma.$UserApiKeyPayload>
/**
 * Model ApiKeyRequestLog
 * 
 */
export type ApiKeyRequestLog = $Result.DefaultSelection<Prisma.$ApiKeyRequestLogPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserApiKeys
 * const userApiKeys = await prisma.userApiKey.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserApiKeys
   * const userApiKeys = await prisma.userApiKey.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userApiKey`: Exposes CRUD operations for the **UserApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserApiKeys
    * const userApiKeys = await prisma.userApiKey.findMany()
    * ```
    */
  get userApiKey(): Prisma.UserApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKeyRequestLog`: Exposes CRUD operations for the **ApiKeyRequestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeyRequestLogs
    * const apiKeyRequestLogs = await prisma.apiKeyRequestLog.findMany()
    * ```
    */
  get apiKeyRequestLog(): Prisma.ApiKeyRequestLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserApiKey: 'UserApiKey',
    ApiKeyRequestLog: 'ApiKeyRequestLog',
    WebhookEvent: 'WebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userApiKey" | "apiKeyRequestLog" | "webhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserApiKey: {
        payload: Prisma.$UserApiKeyPayload<ExtArgs>
        fields: Prisma.UserApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          findFirst: {
            args: Prisma.UserApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          findMany: {
            args: Prisma.UserApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          create: {
            args: Prisma.UserApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          createMany: {
            args: Prisma.UserApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          delete: {
            args: Prisma.UserApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          update: {
            args: Prisma.UserApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.UserApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.UserApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          aggregate: {
            args: Prisma.UserApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserApiKey>
          }
          groupBy: {
            args: Prisma.UserApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<UserApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ApiKeyRequestLog: {
        payload: Prisma.$ApiKeyRequestLogPayload<ExtArgs>
        fields: Prisma.ApiKeyRequestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyRequestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyRequestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyRequestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyRequestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          findMany: {
            args: Prisma.ApiKeyRequestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>[]
          }
          create: {
            args: Prisma.ApiKeyRequestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          createMany: {
            args: Prisma.ApiKeyRequestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyRequestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyRequestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          update: {
            args: Prisma.ApiKeyRequestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyRequestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyRequestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyRequestLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyRequestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyRequestLogPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyRequestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKeyRequestLog>
          }
          groupBy: {
            args: Prisma.ApiKeyRequestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyRequestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyRequestLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyRequestLogCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userApiKey?: UserApiKeyOmit
    apiKeyRequestLog?: ApiKeyRequestLogOmit
    webhookEvent?: WebhookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserApiKeyCountOutputType
   */

  export type UserApiKeyCountOutputType = {
    requestLogs: number
  }

  export type UserApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestLogs?: boolean | UserApiKeyCountOutputTypeCountRequestLogsArgs
  }

  // Custom InputTypes
  /**
   * UserApiKeyCountOutputType without action
   */
  export type UserApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKeyCountOutputType
     */
    select?: UserApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserApiKeyCountOutputType without action
   */
  export type UserApiKeyCountOutputTypeCountRequestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyRequestLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserApiKey
   */

  export type AggregateUserApiKey = {
    _count: UserApiKeyCountAggregateOutputType | null
    _avg: UserApiKeyAvgAggregateOutputType | null
    _sum: UserApiKeySumAggregateOutputType | null
    _min: UserApiKeyMinAggregateOutputType | null
    _max: UserApiKeyMaxAggregateOutputType | null
  }

  export type UserApiKeyAvgAggregateOutputType = {
    totalRequests: number | null
  }

  export type UserApiKeySumAggregateOutputType = {
    totalRequests: number | null
  }

  export type UserApiKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    key: string | null
    scopes: string | null
    createdAt: Date | null
    lastUsed: Date | null
    totalRequests: number | null
  }

  export type UserApiKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    key: string | null
    scopes: string | null
    createdAt: Date | null
    lastUsed: Date | null
    totalRequests: number | null
  }

  export type UserApiKeyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    key: number
    scopes: number
    createdAt: number
    lastUsed: number
    totalRequests: number
    _all: number
  }


  export type UserApiKeyAvgAggregateInputType = {
    totalRequests?: true
  }

  export type UserApiKeySumAggregateInputType = {
    totalRequests?: true
  }

  export type UserApiKeyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    key?: true
    scopes?: true
    createdAt?: true
    lastUsed?: true
    totalRequests?: true
  }

  export type UserApiKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    key?: true
    scopes?: true
    createdAt?: true
    lastUsed?: true
    totalRequests?: true
  }

  export type UserApiKeyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    key?: true
    scopes?: true
    createdAt?: true
    lastUsed?: true
    totalRequests?: true
    _all?: true
  }

  export type UserApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiKey to aggregate.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserApiKeys
    **/
    _count?: true | UserApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserApiKeyMaxAggregateInputType
  }

  export type GetUserApiKeyAggregateType<T extends UserApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserApiKey[P]>
      : GetScalarType<T[P], AggregateUserApiKey[P]>
  }




  export type UserApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiKeyWhereInput
    orderBy?: UserApiKeyOrderByWithAggregationInput | UserApiKeyOrderByWithAggregationInput[]
    by: UserApiKeyScalarFieldEnum[] | UserApiKeyScalarFieldEnum
    having?: UserApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserApiKeyCountAggregateInputType | true
    _avg?: UserApiKeyAvgAggregateInputType
    _sum?: UserApiKeySumAggregateInputType
    _min?: UserApiKeyMinAggregateInputType
    _max?: UserApiKeyMaxAggregateInputType
  }

  export type UserApiKeyGroupByOutputType = {
    id: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt: Date
    lastUsed: Date | null
    totalRequests: number
    _count: UserApiKeyCountAggregateOutputType | null
    _avg: UserApiKeyAvgAggregateOutputType | null
    _sum: UserApiKeySumAggregateOutputType | null
    _min: UserApiKeyMinAggregateOutputType | null
    _max: UserApiKeyMaxAggregateOutputType | null
  }

  type GetUserApiKeyGroupByPayload<T extends UserApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], UserApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type UserApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    key?: boolean
    scopes?: boolean
    createdAt?: boolean
    lastUsed?: boolean
    totalRequests?: boolean
    requestLogs?: boolean | UserApiKey$requestLogsArgs<ExtArgs>
    _count?: boolean | UserApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    key?: boolean
    scopes?: boolean
    createdAt?: boolean
    lastUsed?: boolean
    totalRequests?: boolean
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    key?: boolean
    scopes?: boolean
    createdAt?: boolean
    lastUsed?: boolean
    totalRequests?: boolean
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    key?: boolean
    scopes?: boolean
    createdAt?: boolean
    lastUsed?: boolean
    totalRequests?: boolean
  }

  export type UserApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "key" | "scopes" | "createdAt" | "lastUsed" | "totalRequests", ExtArgs["result"]["userApiKey"]>
  export type UserApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestLogs?: boolean | UserApiKey$requestLogsArgs<ExtArgs>
    _count?: boolean | UserApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserApiKey"
    objects: {
      requestLogs: Prisma.$ApiKeyRequestLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      key: string
      scopes: string
      createdAt: Date
      lastUsed: Date | null
      totalRequests: number
    }, ExtArgs["result"]["userApiKey"]>
    composites: {}
  }

  type UserApiKeyGetPayload<S extends boolean | null | undefined | UserApiKeyDefaultArgs> = $Result.GetResult<Prisma.$UserApiKeyPayload, S>

  type UserApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserApiKeyCountAggregateInputType | true
    }

  export interface UserApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserApiKey'], meta: { name: 'UserApiKey' } }
    /**
     * Find zero or one UserApiKey that matches the filter.
     * @param {UserApiKeyFindUniqueArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserApiKeyFindUniqueArgs>(args: SelectSubset<T, UserApiKeyFindUniqueArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserApiKeyFindUniqueOrThrowArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindFirstArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserApiKeyFindFirstArgs>(args?: SelectSubset<T, UserApiKeyFindFirstArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindFirstOrThrowArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserApiKeys
     * const userApiKeys = await prisma.userApiKey.findMany()
     * 
     * // Get first 10 UserApiKeys
     * const userApiKeys = await prisma.userApiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserApiKeyFindManyArgs>(args?: SelectSubset<T, UserApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserApiKey.
     * @param {UserApiKeyCreateArgs} args - Arguments to create a UserApiKey.
     * @example
     * // Create one UserApiKey
     * const UserApiKey = await prisma.userApiKey.create({
     *   data: {
     *     // ... data to create a UserApiKey
     *   }
     * })
     * 
     */
    create<T extends UserApiKeyCreateArgs>(args: SelectSubset<T, UserApiKeyCreateArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserApiKeys.
     * @param {UserApiKeyCreateManyArgs} args - Arguments to create many UserApiKeys.
     * @example
     * // Create many UserApiKeys
     * const userApiKey = await prisma.userApiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserApiKeyCreateManyArgs>(args?: SelectSubset<T, UserApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserApiKeys and returns the data saved in the database.
     * @param {UserApiKeyCreateManyAndReturnArgs} args - Arguments to create many UserApiKeys.
     * @example
     * // Create many UserApiKeys
     * const userApiKey = await prisma.userApiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserApiKeys and only return the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserApiKey.
     * @param {UserApiKeyDeleteArgs} args - Arguments to delete one UserApiKey.
     * @example
     * // Delete one UserApiKey
     * const UserApiKey = await prisma.userApiKey.delete({
     *   where: {
     *     // ... filter to delete one UserApiKey
     *   }
     * })
     * 
     */
    delete<T extends UserApiKeyDeleteArgs>(args: SelectSubset<T, UserApiKeyDeleteArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserApiKey.
     * @param {UserApiKeyUpdateArgs} args - Arguments to update one UserApiKey.
     * @example
     * // Update one UserApiKey
     * const userApiKey = await prisma.userApiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserApiKeyUpdateArgs>(args: SelectSubset<T, UserApiKeyUpdateArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserApiKeys.
     * @param {UserApiKeyDeleteManyArgs} args - Arguments to filter UserApiKeys to delete.
     * @example
     * // Delete a few UserApiKeys
     * const { count } = await prisma.userApiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserApiKeyDeleteManyArgs>(args?: SelectSubset<T, UserApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserApiKeys
     * const userApiKey = await prisma.userApiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserApiKeyUpdateManyArgs>(args: SelectSubset<T, UserApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiKeys and returns the data updated in the database.
     * @param {UserApiKeyUpdateManyAndReturnArgs} args - Arguments to update many UserApiKeys.
     * @example
     * // Update many UserApiKeys
     * const userApiKey = await prisma.userApiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserApiKeys and only return the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserApiKey.
     * @param {UserApiKeyUpsertArgs} args - Arguments to update or create a UserApiKey.
     * @example
     * // Update or create a UserApiKey
     * const userApiKey = await prisma.userApiKey.upsert({
     *   create: {
     *     // ... data to create a UserApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserApiKey we want to update
     *   }
     * })
     */
    upsert<T extends UserApiKeyUpsertArgs>(args: SelectSubset<T, UserApiKeyUpsertArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyCountArgs} args - Arguments to filter UserApiKeys to count.
     * @example
     * // Count the number of UserApiKeys
     * const count = await prisma.userApiKey.count({
     *   where: {
     *     // ... the filter for the UserApiKeys we want to count
     *   }
     * })
    **/
    count<T extends UserApiKeyCountArgs>(
      args?: Subset<T, UserApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserApiKeyAggregateArgs>(args: Subset<T, UserApiKeyAggregateArgs>): Prisma.PrismaPromise<GetUserApiKeyAggregateType<T>>

    /**
     * Group by UserApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: UserApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserApiKey model
   */
  readonly fields: UserApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestLogs<T extends UserApiKey$requestLogsArgs<ExtArgs> = {}>(args?: Subset<T, UserApiKey$requestLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserApiKey model
   */
  interface UserApiKeyFieldRefs {
    readonly id: FieldRef<"UserApiKey", 'String'>
    readonly userId: FieldRef<"UserApiKey", 'String'>
    readonly name: FieldRef<"UserApiKey", 'String'>
    readonly key: FieldRef<"UserApiKey", 'String'>
    readonly scopes: FieldRef<"UserApiKey", 'String'>
    readonly createdAt: FieldRef<"UserApiKey", 'DateTime'>
    readonly lastUsed: FieldRef<"UserApiKey", 'DateTime'>
    readonly totalRequests: FieldRef<"UserApiKey", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserApiKey findUnique
   */
  export type UserApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey findUniqueOrThrow
   */
  export type UserApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey findFirst
   */
  export type UserApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiKeys.
     */
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey findFirstOrThrow
   */
  export type UserApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiKeys.
     */
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey findMany
   */
  export type UserApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKeys to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey create
   */
  export type UserApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserApiKey.
     */
    data: XOR<UserApiKeyCreateInput, UserApiKeyUncheckedCreateInput>
  }

  /**
   * UserApiKey createMany
   */
  export type UserApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserApiKeys.
     */
    data: UserApiKeyCreateManyInput | UserApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApiKey createManyAndReturn
   */
  export type UserApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many UserApiKeys.
     */
    data: UserApiKeyCreateManyInput | UserApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApiKey update
   */
  export type UserApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserApiKey.
     */
    data: XOR<UserApiKeyUpdateInput, UserApiKeyUncheckedUpdateInput>
    /**
     * Choose, which UserApiKey to update.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey updateMany
   */
  export type UserApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserApiKeys.
     */
    data: XOR<UserApiKeyUpdateManyMutationInput, UserApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserApiKeys to update
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to update.
     */
    limit?: number
  }

  /**
   * UserApiKey updateManyAndReturn
   */
  export type UserApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update UserApiKeys.
     */
    data: XOR<UserApiKeyUpdateManyMutationInput, UserApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserApiKeys to update
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to update.
     */
    limit?: number
  }

  /**
   * UserApiKey upsert
   */
  export type UserApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserApiKey to update in case it exists.
     */
    where: UserApiKeyWhereUniqueInput
    /**
     * In case the UserApiKey found by the `where` argument doesn't exist, create a new UserApiKey with this data.
     */
    create: XOR<UserApiKeyCreateInput, UserApiKeyUncheckedCreateInput>
    /**
     * In case the UserApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserApiKeyUpdateInput, UserApiKeyUncheckedUpdateInput>
  }

  /**
   * UserApiKey delete
   */
  export type UserApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter which UserApiKey to delete.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey deleteMany
   */
  export type UserApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiKeys to delete
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to delete.
     */
    limit?: number
  }

  /**
   * UserApiKey.requestLogs
   */
  export type UserApiKey$requestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    where?: ApiKeyRequestLogWhereInput
    orderBy?: ApiKeyRequestLogOrderByWithRelationInput | ApiKeyRequestLogOrderByWithRelationInput[]
    cursor?: ApiKeyRequestLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyRequestLogScalarFieldEnum | ApiKeyRequestLogScalarFieldEnum[]
  }

  /**
   * UserApiKey without action
   */
  export type UserApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ApiKeyRequestLog
   */

  export type AggregateApiKeyRequestLog = {
    _count: ApiKeyRequestLogCountAggregateOutputType | null
    _min: ApiKeyRequestLogMinAggregateOutputType | null
    _max: ApiKeyRequestLogMaxAggregateOutputType | null
  }

  export type ApiKeyRequestLogMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    userId: string | null
    timestamp: Date | null
    endpoint: string | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type ApiKeyRequestLogMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    userId: string | null
    timestamp: Date | null
    endpoint: string | null
    userAgent: string | null
    ipAddress: string | null
  }

  export type ApiKeyRequestLogCountAggregateOutputType = {
    id: number
    apiKeyId: number
    userId: number
    timestamp: number
    endpoint: number
    userAgent: number
    ipAddress: number
    _all: number
  }


  export type ApiKeyRequestLogMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    userId?: true
    timestamp?: true
    endpoint?: true
    userAgent?: true
    ipAddress?: true
  }

  export type ApiKeyRequestLogMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    userId?: true
    timestamp?: true
    endpoint?: true
    userAgent?: true
    ipAddress?: true
  }

  export type ApiKeyRequestLogCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    userId?: true
    timestamp?: true
    endpoint?: true
    userAgent?: true
    ipAddress?: true
    _all?: true
  }

  export type ApiKeyRequestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyRequestLog to aggregate.
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyRequestLogs to fetch.
     */
    orderBy?: ApiKeyRequestLogOrderByWithRelationInput | ApiKeyRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeyRequestLogs
    **/
    _count?: true | ApiKeyRequestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyRequestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyRequestLogMaxAggregateInputType
  }

  export type GetApiKeyRequestLogAggregateType<T extends ApiKeyRequestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKeyRequestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKeyRequestLog[P]>
      : GetScalarType<T[P], AggregateApiKeyRequestLog[P]>
  }




  export type ApiKeyRequestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyRequestLogWhereInput
    orderBy?: ApiKeyRequestLogOrderByWithAggregationInput | ApiKeyRequestLogOrderByWithAggregationInput[]
    by: ApiKeyRequestLogScalarFieldEnum[] | ApiKeyRequestLogScalarFieldEnum
    having?: ApiKeyRequestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyRequestLogCountAggregateInputType | true
    _min?: ApiKeyRequestLogMinAggregateInputType
    _max?: ApiKeyRequestLogMaxAggregateInputType
  }

  export type ApiKeyRequestLogGroupByOutputType = {
    id: string
    apiKeyId: string | null
    userId: string
    timestamp: Date
    endpoint: string | null
    userAgent: string | null
    ipAddress: string | null
    _count: ApiKeyRequestLogCountAggregateOutputType | null
    _min: ApiKeyRequestLogMinAggregateOutputType | null
    _max: ApiKeyRequestLogMaxAggregateOutputType | null
  }

  type GetApiKeyRequestLogGroupByPayload<T extends ApiKeyRequestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyRequestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyRequestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyRequestLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyRequestLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeyRequestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    userId?: boolean
    timestamp?: boolean
    endpoint?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyRequestLog"]>

  export type ApiKeyRequestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    userId?: boolean
    timestamp?: boolean
    endpoint?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyRequestLog"]>

  export type ApiKeyRequestLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    userId?: boolean
    timestamp?: boolean
    endpoint?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["apiKeyRequestLog"]>

  export type ApiKeyRequestLogSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    userId?: boolean
    timestamp?: boolean
    endpoint?: boolean
    userAgent?: boolean
    ipAddress?: boolean
  }

  export type ApiKeyRequestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "userId" | "timestamp" | "endpoint" | "userAgent" | "ipAddress", ExtArgs["result"]["apiKeyRequestLog"]>
  export type ApiKeyRequestLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }
  export type ApiKeyRequestLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }
  export type ApiKeyRequestLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyRequestLog$apiKeyArgs<ExtArgs>
  }

  export type $ApiKeyRequestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKeyRequestLog"
    objects: {
      apiKey: Prisma.$UserApiKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string | null
      userId: string
      timestamp: Date
      endpoint: string | null
      userAgent: string | null
      ipAddress: string | null
    }, ExtArgs["result"]["apiKeyRequestLog"]>
    composites: {}
  }

  type ApiKeyRequestLogGetPayload<S extends boolean | null | undefined | ApiKeyRequestLogDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyRequestLogPayload, S>

  type ApiKeyRequestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyRequestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyRequestLogCountAggregateInputType | true
    }

  export interface ApiKeyRequestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKeyRequestLog'], meta: { name: 'ApiKeyRequestLog' } }
    /**
     * Find zero or one ApiKeyRequestLog that matches the filter.
     * @param {ApiKeyRequestLogFindUniqueArgs} args - Arguments to find a ApiKeyRequestLog
     * @example
     * // Get one ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyRequestLogFindUniqueArgs>(args: SelectSubset<T, ApiKeyRequestLogFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKeyRequestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyRequestLogFindUniqueOrThrowArgs} args - Arguments to find a ApiKeyRequestLog
     * @example
     * // Get one ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyRequestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyRequestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyRequestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogFindFirstArgs} args - Arguments to find a ApiKeyRequestLog
     * @example
     * // Get one ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyRequestLogFindFirstArgs>(args?: SelectSubset<T, ApiKeyRequestLogFindFirstArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKeyRequestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogFindFirstOrThrowArgs} args - Arguments to find a ApiKeyRequestLog
     * @example
     * // Get one ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyRequestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyRequestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeyRequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeyRequestLogs
     * const apiKeyRequestLogs = await prisma.apiKeyRequestLog.findMany()
     * 
     * // Get first 10 ApiKeyRequestLogs
     * const apiKeyRequestLogs = await prisma.apiKeyRequestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyRequestLogWithIdOnly = await prisma.apiKeyRequestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyRequestLogFindManyArgs>(args?: SelectSubset<T, ApiKeyRequestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKeyRequestLog.
     * @param {ApiKeyRequestLogCreateArgs} args - Arguments to create a ApiKeyRequestLog.
     * @example
     * // Create one ApiKeyRequestLog
     * const ApiKeyRequestLog = await prisma.apiKeyRequestLog.create({
     *   data: {
     *     // ... data to create a ApiKeyRequestLog
     *   }
     * })
     * 
     */
    create<T extends ApiKeyRequestLogCreateArgs>(args: SelectSubset<T, ApiKeyRequestLogCreateArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeyRequestLogs.
     * @param {ApiKeyRequestLogCreateManyArgs} args - Arguments to create many ApiKeyRequestLogs.
     * @example
     * // Create many ApiKeyRequestLogs
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyRequestLogCreateManyArgs>(args?: SelectSubset<T, ApiKeyRequestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeyRequestLogs and returns the data saved in the database.
     * @param {ApiKeyRequestLogCreateManyAndReturnArgs} args - Arguments to create many ApiKeyRequestLogs.
     * @example
     * // Create many ApiKeyRequestLogs
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeyRequestLogs and only return the `id`
     * const apiKeyRequestLogWithIdOnly = await prisma.apiKeyRequestLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyRequestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyRequestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKeyRequestLog.
     * @param {ApiKeyRequestLogDeleteArgs} args - Arguments to delete one ApiKeyRequestLog.
     * @example
     * // Delete one ApiKeyRequestLog
     * const ApiKeyRequestLog = await prisma.apiKeyRequestLog.delete({
     *   where: {
     *     // ... filter to delete one ApiKeyRequestLog
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyRequestLogDeleteArgs>(args: SelectSubset<T, ApiKeyRequestLogDeleteArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKeyRequestLog.
     * @param {ApiKeyRequestLogUpdateArgs} args - Arguments to update one ApiKeyRequestLog.
     * @example
     * // Update one ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyRequestLogUpdateArgs>(args: SelectSubset<T, ApiKeyRequestLogUpdateArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeyRequestLogs.
     * @param {ApiKeyRequestLogDeleteManyArgs} args - Arguments to filter ApiKeyRequestLogs to delete.
     * @example
     * // Delete a few ApiKeyRequestLogs
     * const { count } = await prisma.apiKeyRequestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyRequestLogDeleteManyArgs>(args?: SelectSubset<T, ApiKeyRequestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeyRequestLogs
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyRequestLogUpdateManyArgs>(args: SelectSubset<T, ApiKeyRequestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeyRequestLogs and returns the data updated in the database.
     * @param {ApiKeyRequestLogUpdateManyAndReturnArgs} args - Arguments to update many ApiKeyRequestLogs.
     * @example
     * // Update many ApiKeyRequestLogs
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeyRequestLogs and only return the `id`
     * const apiKeyRequestLogWithIdOnly = await prisma.apiKeyRequestLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyRequestLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyRequestLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKeyRequestLog.
     * @param {ApiKeyRequestLogUpsertArgs} args - Arguments to update or create a ApiKeyRequestLog.
     * @example
     * // Update or create a ApiKeyRequestLog
     * const apiKeyRequestLog = await prisma.apiKeyRequestLog.upsert({
     *   create: {
     *     // ... data to create a ApiKeyRequestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKeyRequestLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyRequestLogUpsertArgs>(args: SelectSubset<T, ApiKeyRequestLogUpsertArgs<ExtArgs>>): Prisma__ApiKeyRequestLogClient<$Result.GetResult<Prisma.$ApiKeyRequestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeyRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogCountArgs} args - Arguments to filter ApiKeyRequestLogs to count.
     * @example
     * // Count the number of ApiKeyRequestLogs
     * const count = await prisma.apiKeyRequestLog.count({
     *   where: {
     *     // ... the filter for the ApiKeyRequestLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyRequestLogCountArgs>(
      args?: Subset<T, ApiKeyRequestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyRequestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKeyRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyRequestLogAggregateArgs>(args: Subset<T, ApiKeyRequestLogAggregateArgs>): Prisma.PrismaPromise<GetApiKeyRequestLogAggregateType<T>>

    /**
     * Group by ApiKeyRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyRequestLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyRequestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyRequestLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyRequestLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyRequestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyRequestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKeyRequestLog model
   */
  readonly fields: ApiKeyRequestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKeyRequestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyRequestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyRequestLog$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyRequestLog$apiKeyArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKeyRequestLog model
   */
  interface ApiKeyRequestLogFieldRefs {
    readonly id: FieldRef<"ApiKeyRequestLog", 'String'>
    readonly apiKeyId: FieldRef<"ApiKeyRequestLog", 'String'>
    readonly userId: FieldRef<"ApiKeyRequestLog", 'String'>
    readonly timestamp: FieldRef<"ApiKeyRequestLog", 'DateTime'>
    readonly endpoint: FieldRef<"ApiKeyRequestLog", 'String'>
    readonly userAgent: FieldRef<"ApiKeyRequestLog", 'String'>
    readonly ipAddress: FieldRef<"ApiKeyRequestLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKeyRequestLog findUnique
   */
  export type ApiKeyRequestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyRequestLog to fetch.
     */
    where: ApiKeyRequestLogWhereUniqueInput
  }

  /**
   * ApiKeyRequestLog findUniqueOrThrow
   */
  export type ApiKeyRequestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyRequestLog to fetch.
     */
    where: ApiKeyRequestLogWhereUniqueInput
  }

  /**
   * ApiKeyRequestLog findFirst
   */
  export type ApiKeyRequestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyRequestLog to fetch.
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyRequestLogs to fetch.
     */
    orderBy?: ApiKeyRequestLogOrderByWithRelationInput | ApiKeyRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyRequestLogs.
     */
    cursor?: ApiKeyRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyRequestLogs.
     */
    distinct?: ApiKeyRequestLogScalarFieldEnum | ApiKeyRequestLogScalarFieldEnum[]
  }

  /**
   * ApiKeyRequestLog findFirstOrThrow
   */
  export type ApiKeyRequestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyRequestLog to fetch.
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyRequestLogs to fetch.
     */
    orderBy?: ApiKeyRequestLogOrderByWithRelationInput | ApiKeyRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeyRequestLogs.
     */
    cursor?: ApiKeyRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeyRequestLogs.
     */
    distinct?: ApiKeyRequestLogScalarFieldEnum | ApiKeyRequestLogScalarFieldEnum[]
  }

  /**
   * ApiKeyRequestLog findMany
   */
  export type ApiKeyRequestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeyRequestLogs to fetch.
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeyRequestLogs to fetch.
     */
    orderBy?: ApiKeyRequestLogOrderByWithRelationInput | ApiKeyRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeyRequestLogs.
     */
    cursor?: ApiKeyRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeyRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeyRequestLogs.
     */
    skip?: number
    distinct?: ApiKeyRequestLogScalarFieldEnum | ApiKeyRequestLogScalarFieldEnum[]
  }

  /**
   * ApiKeyRequestLog create
   */
  export type ApiKeyRequestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKeyRequestLog.
     */
    data: XOR<ApiKeyRequestLogCreateInput, ApiKeyRequestLogUncheckedCreateInput>
  }

  /**
   * ApiKeyRequestLog createMany
   */
  export type ApiKeyRequestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeyRequestLogs.
     */
    data: ApiKeyRequestLogCreateManyInput | ApiKeyRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKeyRequestLog createManyAndReturn
   */
  export type ApiKeyRequestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeyRequestLogs.
     */
    data: ApiKeyRequestLogCreateManyInput | ApiKeyRequestLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyRequestLog update
   */
  export type ApiKeyRequestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKeyRequestLog.
     */
    data: XOR<ApiKeyRequestLogUpdateInput, ApiKeyRequestLogUncheckedUpdateInput>
    /**
     * Choose, which ApiKeyRequestLog to update.
     */
    where: ApiKeyRequestLogWhereUniqueInput
  }

  /**
   * ApiKeyRequestLog updateMany
   */
  export type ApiKeyRequestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeyRequestLogs.
     */
    data: XOR<ApiKeyRequestLogUpdateManyMutationInput, ApiKeyRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyRequestLogs to update
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * Limit how many ApiKeyRequestLogs to update.
     */
    limit?: number
  }

  /**
   * ApiKeyRequestLog updateManyAndReturn
   */
  export type ApiKeyRequestLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeyRequestLogs.
     */
    data: XOR<ApiKeyRequestLogUpdateManyMutationInput, ApiKeyRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeyRequestLogs to update
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * Limit how many ApiKeyRequestLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKeyRequestLog upsert
   */
  export type ApiKeyRequestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKeyRequestLog to update in case it exists.
     */
    where: ApiKeyRequestLogWhereUniqueInput
    /**
     * In case the ApiKeyRequestLog found by the `where` argument doesn't exist, create a new ApiKeyRequestLog with this data.
     */
    create: XOR<ApiKeyRequestLogCreateInput, ApiKeyRequestLogUncheckedCreateInput>
    /**
     * In case the ApiKeyRequestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyRequestLogUpdateInput, ApiKeyRequestLogUncheckedUpdateInput>
  }

  /**
   * ApiKeyRequestLog delete
   */
  export type ApiKeyRequestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
    /**
     * Filter which ApiKeyRequestLog to delete.
     */
    where: ApiKeyRequestLogWhereUniqueInput
  }

  /**
   * ApiKeyRequestLog deleteMany
   */
  export type ApiKeyRequestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeyRequestLogs to delete
     */
    where?: ApiKeyRequestLogWhereInput
    /**
     * Limit how many ApiKeyRequestLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiKeyRequestLog.apiKey
   */
  export type ApiKeyRequestLog$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    where?: UserApiKeyWhereInput
  }

  /**
   * ApiKeyRequestLog without action
   */
  export type ApiKeyRequestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyRequestLog
     */
    select?: ApiKeyRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKeyRequestLog
     */
    omit?: ApiKeyRequestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyRequestLogInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    timestamp: Date | null
    processed: boolean | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    timestamp: Date | null
    processed: boolean | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    payload: number
    timestamp: number
    processed: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    timestamp?: true
    processed?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    timestamp?: true
    processed?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    payload?: true
    timestamp?: true
    processed?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    userId: string
    eventType: string
    payload: JsonValue
    timestamp: Date
    processed: boolean
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    payload?: boolean
    timestamp?: boolean
    processed?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    payload?: boolean
    timestamp?: boolean
    processed?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    payload?: boolean
    timestamp?: boolean
    processed?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    payload?: boolean
    timestamp?: boolean
    processed?: boolean
  }

  export type WebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventType" | "payload" | "timestamp" | "processed", ExtArgs["result"]["webhookEvent"]>

  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventType: string
      payload: Prisma.JsonValue
      timestamp: Date
      processed: boolean
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEvent model
   */
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly userId: FieldRef<"WebhookEvent", 'String'>
    readonly eventType: FieldRef<"WebhookEvent", 'String'>
    readonly payload: FieldRef<"WebhookEvent", 'Json'>
    readonly timestamp: FieldRef<"WebhookEvent", 'DateTime'>
    readonly processed: FieldRef<"WebhookEvent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent updateManyAndReturn
   */
  export type WebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserApiKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    key: 'key',
    scopes: 'scopes',
    createdAt: 'createdAt',
    lastUsed: 'lastUsed',
    totalRequests: 'totalRequests'
  };

  export type UserApiKeyScalarFieldEnum = (typeof UserApiKeyScalarFieldEnum)[keyof typeof UserApiKeyScalarFieldEnum]


  export const ApiKeyRequestLogScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    userId: 'userId',
    timestamp: 'timestamp',
    endpoint: 'endpoint',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress'
  };

  export type ApiKeyRequestLogScalarFieldEnum = (typeof ApiKeyRequestLogScalarFieldEnum)[keyof typeof ApiKeyRequestLogScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    payload: 'payload',
    timestamp: 'timestamp',
    processed: 'processed'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserApiKeyWhereInput = {
    AND?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    OR?: UserApiKeyWhereInput[]
    NOT?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    id?: StringFilter<"UserApiKey"> | string
    userId?: StringFilter<"UserApiKey"> | string
    name?: StringFilter<"UserApiKey"> | string
    key?: StringFilter<"UserApiKey"> | string
    scopes?: StringFilter<"UserApiKey"> | string
    createdAt?: DateTimeFilter<"UserApiKey"> | Date | string
    lastUsed?: DateTimeNullableFilter<"UserApiKey"> | Date | string | null
    totalRequests?: IntFilter<"UserApiKey"> | number
    requestLogs?: ApiKeyRequestLogListRelationFilter
  }

  export type UserApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    key?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    totalRequests?: SortOrder
    requestLogs?: ApiKeyRequestLogOrderByRelationAggregateInput
  }

  export type UserApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    OR?: UserApiKeyWhereInput[]
    NOT?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    userId?: StringFilter<"UserApiKey"> | string
    name?: StringFilter<"UserApiKey"> | string
    scopes?: StringFilter<"UserApiKey"> | string
    createdAt?: DateTimeFilter<"UserApiKey"> | Date | string
    lastUsed?: DateTimeNullableFilter<"UserApiKey"> | Date | string | null
    totalRequests?: IntFilter<"UserApiKey"> | number
    requestLogs?: ApiKeyRequestLogListRelationFilter
  }, "id" | "key">

  export type UserApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    key?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    totalRequests?: SortOrder
    _count?: UserApiKeyCountOrderByAggregateInput
    _avg?: UserApiKeyAvgOrderByAggregateInput
    _max?: UserApiKeyMaxOrderByAggregateInput
    _min?: UserApiKeyMinOrderByAggregateInput
    _sum?: UserApiKeySumOrderByAggregateInput
  }

  export type UserApiKeyScalarWhereWithAggregatesInput = {
    AND?: UserApiKeyScalarWhereWithAggregatesInput | UserApiKeyScalarWhereWithAggregatesInput[]
    OR?: UserApiKeyScalarWhereWithAggregatesInput[]
    NOT?: UserApiKeyScalarWhereWithAggregatesInput | UserApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserApiKey"> | string
    userId?: StringWithAggregatesFilter<"UserApiKey"> | string
    name?: StringWithAggregatesFilter<"UserApiKey"> | string
    key?: StringWithAggregatesFilter<"UserApiKey"> | string
    scopes?: StringWithAggregatesFilter<"UserApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserApiKey"> | Date | string
    lastUsed?: DateTimeNullableWithAggregatesFilter<"UserApiKey"> | Date | string | null
    totalRequests?: IntWithAggregatesFilter<"UserApiKey"> | number
  }

  export type ApiKeyRequestLogWhereInput = {
    AND?: ApiKeyRequestLogWhereInput | ApiKeyRequestLogWhereInput[]
    OR?: ApiKeyRequestLogWhereInput[]
    NOT?: ApiKeyRequestLogWhereInput | ApiKeyRequestLogWhereInput[]
    id?: StringFilter<"ApiKeyRequestLog"> | string
    apiKeyId?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userId?: StringFilter<"ApiKeyRequestLog"> | string
    timestamp?: DateTimeFilter<"ApiKeyRequestLog"> | Date | string
    endpoint?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    ipAddress?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    apiKey?: XOR<UserApiKeyNullableScalarRelationFilter, UserApiKeyWhereInput> | null
  }

  export type ApiKeyRequestLogOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    apiKey?: UserApiKeyOrderByWithRelationInput
  }

  export type ApiKeyRequestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiKeyRequestLogWhereInput | ApiKeyRequestLogWhereInput[]
    OR?: ApiKeyRequestLogWhereInput[]
    NOT?: ApiKeyRequestLogWhereInput | ApiKeyRequestLogWhereInput[]
    apiKeyId?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userId?: StringFilter<"ApiKeyRequestLog"> | string
    timestamp?: DateTimeFilter<"ApiKeyRequestLog"> | Date | string
    endpoint?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    ipAddress?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    apiKey?: XOR<UserApiKeyNullableScalarRelationFilter, UserApiKeyWhereInput> | null
  }, "id">

  export type ApiKeyRequestLogOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    _count?: ApiKeyRequestLogCountOrderByAggregateInput
    _max?: ApiKeyRequestLogMaxOrderByAggregateInput
    _min?: ApiKeyRequestLogMinOrderByAggregateInput
  }

  export type ApiKeyRequestLogScalarWhereWithAggregatesInput = {
    AND?: ApiKeyRequestLogScalarWhereWithAggregatesInput | ApiKeyRequestLogScalarWhereWithAggregatesInput[]
    OR?: ApiKeyRequestLogScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyRequestLogScalarWhereWithAggregatesInput | ApiKeyRequestLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKeyRequestLog"> | string
    apiKeyId?: StringNullableWithAggregatesFilter<"ApiKeyRequestLog"> | string | null
    userId?: StringWithAggregatesFilter<"ApiKeyRequestLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ApiKeyRequestLog"> | Date | string
    endpoint?: StringNullableWithAggregatesFilter<"ApiKeyRequestLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiKeyRequestLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ApiKeyRequestLog"> | string | null
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    userId?: StringFilter<"WebhookEvent"> | string
    eventType?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    timestamp?: DateTimeFilter<"WebhookEvent"> | Date | string
    processed?: BoolFilter<"WebhookEvent"> | boolean
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    userId?: StringFilter<"WebhookEvent"> | string
    eventType?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    timestamp?: DateTimeFilter<"WebhookEvent"> | Date | string
    processed?: BoolFilter<"WebhookEvent"> | boolean
  }, "id">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    userId?: StringWithAggregatesFilter<"WebhookEvent"> | string
    eventType?: StringWithAggregatesFilter<"WebhookEvent"> | string
    payload?: JsonWithAggregatesFilter<"WebhookEvent">
    timestamp?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
    processed?: BoolWithAggregatesFilter<"WebhookEvent"> | boolean
  }

  export type UserApiKeyCreateInput = {
    id?: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt?: Date | string
    lastUsed?: Date | string | null
    totalRequests?: number
    requestLogs?: ApiKeyRequestLogCreateNestedManyWithoutApiKeyInput
  }

  export type UserApiKeyUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt?: Date | string
    lastUsed?: Date | string | null
    totalRequests?: number
    requestLogs?: ApiKeyRequestLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type UserApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    requestLogs?: ApiKeyRequestLogUpdateManyWithoutApiKeyNestedInput
  }

  export type UserApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
    requestLogs?: ApiKeyRequestLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type UserApiKeyCreateManyInput = {
    id?: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt?: Date | string
    lastUsed?: Date | string | null
    totalRequests?: number
  }

  export type UserApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
  }

  export type UserApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
  }

  export type ApiKeyRequestLogCreateInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    apiKey?: UserApiKeyCreateNestedOneWithoutRequestLogsInput
  }

  export type ApiKeyRequestLogUncheckedCreateInput = {
    id?: string
    apiKeyId?: string | null
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ApiKeyRequestLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: UserApiKeyUpdateOneWithoutRequestLogsNestedInput
  }

  export type ApiKeyRequestLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyRequestLogCreateManyInput = {
    id?: string
    apiKeyId?: string | null
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ApiKeyRequestLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyRequestLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebhookEventCreateInput = {
    id?: string
    userId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type WebhookEventUncheckedCreateInput = {
    id?: string
    userId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebhookEventCreateManyInput = {
    id?: string
    userId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    processed?: boolean
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApiKeyRequestLogListRelationFilter = {
    every?: ApiKeyRequestLogWhereInput
    some?: ApiKeyRequestLogWhereInput
    none?: ApiKeyRequestLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyRequestLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    key?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    lastUsed?: SortOrder
    totalRequests?: SortOrder
  }

  export type UserApiKeyAvgOrderByAggregateInput = {
    totalRequests?: SortOrder
  }

  export type UserApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    key?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    lastUsed?: SortOrder
    totalRequests?: SortOrder
  }

  export type UserApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    key?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    lastUsed?: SortOrder
    totalRequests?: SortOrder
  }

  export type UserApiKeySumOrderByAggregateInput = {
    totalRequests?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserApiKeyNullableScalarRelationFilter = {
    is?: UserApiKeyWhereInput | null
    isNot?: UserApiKeyWhereInput | null
  }

  export type ApiKeyRequestLogCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type ApiKeyRequestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type ApiKeyRequestLogMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    endpoint?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    timestamp?: SortOrder
    processed?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApiKeyRequestLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput> | ApiKeyRequestLogCreateWithoutApiKeyInput[] | ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput | ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyRequestLogCreateManyApiKeyInputEnvelope
    connect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
  }

  export type ApiKeyRequestLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput> | ApiKeyRequestLogCreateWithoutApiKeyInput[] | ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput | ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: ApiKeyRequestLogCreateManyApiKeyInputEnvelope
    connect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiKeyRequestLogUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput> | ApiKeyRequestLogCreateWithoutApiKeyInput[] | ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput | ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyRequestLogUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyRequestLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyRequestLogCreateManyApiKeyInputEnvelope
    set?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    disconnect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    delete?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    connect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    update?: ApiKeyRequestLogUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyRequestLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyRequestLogUpdateManyWithWhereWithoutApiKeyInput | ApiKeyRequestLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyRequestLogScalarWhereInput | ApiKeyRequestLogScalarWhereInput[]
  }

  export type ApiKeyRequestLogUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput> | ApiKeyRequestLogCreateWithoutApiKeyInput[] | ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput | ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: ApiKeyRequestLogUpsertWithWhereUniqueWithoutApiKeyInput | ApiKeyRequestLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ApiKeyRequestLogCreateManyApiKeyInputEnvelope
    set?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    disconnect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    delete?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    connect?: ApiKeyRequestLogWhereUniqueInput | ApiKeyRequestLogWhereUniqueInput[]
    update?: ApiKeyRequestLogUpdateWithWhereUniqueWithoutApiKeyInput | ApiKeyRequestLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ApiKeyRequestLogUpdateManyWithWhereWithoutApiKeyInput | ApiKeyRequestLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ApiKeyRequestLogScalarWhereInput | ApiKeyRequestLogScalarWhereInput[]
  }

  export type UserApiKeyCreateNestedOneWithoutRequestLogsInput = {
    create?: XOR<UserApiKeyCreateWithoutRequestLogsInput, UserApiKeyUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutRequestLogsInput
    connect?: UserApiKeyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserApiKeyUpdateOneWithoutRequestLogsNestedInput = {
    create?: XOR<UserApiKeyCreateWithoutRequestLogsInput, UserApiKeyUncheckedCreateWithoutRequestLogsInput>
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutRequestLogsInput
    upsert?: UserApiKeyUpsertWithoutRequestLogsInput
    disconnect?: UserApiKeyWhereInput | boolean
    delete?: UserApiKeyWhereInput | boolean
    connect?: UserApiKeyWhereUniqueInput
    update?: XOR<XOR<UserApiKeyUpdateToOneWithWhereWithoutRequestLogsInput, UserApiKeyUpdateWithoutRequestLogsInput>, UserApiKeyUncheckedUpdateWithoutRequestLogsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApiKeyRequestLogCreateWithoutApiKeyInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ApiKeyRequestLogCreateOrConnectWithoutApiKeyInput = {
    where: ApiKeyRequestLogWhereUniqueInput
    create: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyRequestLogCreateManyApiKeyInputEnvelope = {
    data: ApiKeyRequestLogCreateManyApiKeyInput | ApiKeyRequestLogCreateManyApiKeyInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyRequestLogUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyRequestLogWhereUniqueInput
    update: XOR<ApiKeyRequestLogUpdateWithoutApiKeyInput, ApiKeyRequestLogUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ApiKeyRequestLogCreateWithoutApiKeyInput, ApiKeyRequestLogUncheckedCreateWithoutApiKeyInput>
  }

  export type ApiKeyRequestLogUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ApiKeyRequestLogWhereUniqueInput
    data: XOR<ApiKeyRequestLogUpdateWithoutApiKeyInput, ApiKeyRequestLogUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiKeyRequestLogUpdateManyWithWhereWithoutApiKeyInput = {
    where: ApiKeyRequestLogScalarWhereInput
    data: XOR<ApiKeyRequestLogUpdateManyMutationInput, ApiKeyRequestLogUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ApiKeyRequestLogScalarWhereInput = {
    AND?: ApiKeyRequestLogScalarWhereInput | ApiKeyRequestLogScalarWhereInput[]
    OR?: ApiKeyRequestLogScalarWhereInput[]
    NOT?: ApiKeyRequestLogScalarWhereInput | ApiKeyRequestLogScalarWhereInput[]
    id?: StringFilter<"ApiKeyRequestLog"> | string
    apiKeyId?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userId?: StringFilter<"ApiKeyRequestLog"> | string
    timestamp?: DateTimeFilter<"ApiKeyRequestLog"> | Date | string
    endpoint?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
    ipAddress?: StringNullableFilter<"ApiKeyRequestLog"> | string | null
  }

  export type UserApiKeyCreateWithoutRequestLogsInput = {
    id?: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt?: Date | string
    lastUsed?: Date | string | null
    totalRequests?: number
  }

  export type UserApiKeyUncheckedCreateWithoutRequestLogsInput = {
    id?: string
    userId: string
    name: string
    key: string
    scopes: string
    createdAt?: Date | string
    lastUsed?: Date | string | null
    totalRequests?: number
  }

  export type UserApiKeyCreateOrConnectWithoutRequestLogsInput = {
    where: UserApiKeyWhereUniqueInput
    create: XOR<UserApiKeyCreateWithoutRequestLogsInput, UserApiKeyUncheckedCreateWithoutRequestLogsInput>
  }

  export type UserApiKeyUpsertWithoutRequestLogsInput = {
    update: XOR<UserApiKeyUpdateWithoutRequestLogsInput, UserApiKeyUncheckedUpdateWithoutRequestLogsInput>
    create: XOR<UserApiKeyCreateWithoutRequestLogsInput, UserApiKeyUncheckedCreateWithoutRequestLogsInput>
    where?: UserApiKeyWhereInput
  }

  export type UserApiKeyUpdateToOneWithWhereWithoutRequestLogsInput = {
    where?: UserApiKeyWhereInput
    data: XOR<UserApiKeyUpdateWithoutRequestLogsInput, UserApiKeyUncheckedUpdateWithoutRequestLogsInput>
  }

  export type UserApiKeyUpdateWithoutRequestLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
  }

  export type UserApiKeyUncheckedUpdateWithoutRequestLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRequests?: IntFieldUpdateOperationsInput | number
  }

  export type ApiKeyRequestLogCreateManyApiKeyInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    endpoint?: string | null
    userAgent?: string | null
    ipAddress?: string | null
  }

  export type ApiKeyRequestLogUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyRequestLogUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyRequestLogUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}