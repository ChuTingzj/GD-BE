
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Article
 * 
 */
export type Article = {
  id: string
  article_title: string
  article_description: string
  article_content: string
  article_bigCover: string | null
  article_cover: string | null
  author_id: string
  isExist: boolean
  browse_times: number
  like_times: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: string
  cate_name: string
  background: string
  cate_pic: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  user_name: string
  avatar: string
  isExist: boolean
}

/**
 * Model FollowerMap
 * 
 */
export type FollowerMap = {
  id: string
  master_id: string
}

/**
 * Model FocuserMap
 * 
 */
export type FocuserMap = {
  id: string
  follower_id: string
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: string
  parent_id: string
  comment: string
  user_id: string
  like_times: number
  dislike_times: number
  createdAt: Date
  article_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.followerMap`: Exposes CRUD operations for the **FollowerMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowerMaps
    * const followerMaps = await prisma.followerMap.findMany()
    * ```
    */
  get followerMap(): Prisma.FollowerMapDelegate<GlobalReject>;

  /**
   * `prisma.focuserMap`: Exposes CRUD operations for the **FocuserMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocuserMaps
    * const focuserMaps = await prisma.focuserMap.findMany()
    * ```
    */
  get focuserMap(): Prisma.FocuserMapDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Article: 'Article',
    Category: 'Category',
    User: 'User',
    FollowerMap: 'FollowerMap',
    FocuserMap: 'FocuserMap',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticleCountOutputType
   */


  export type ArticleCountOutputType = {
    category_list: number
    comment_list: number
  }

  export type ArticleCountOutputTypeSelect = {
    category_list?: boolean
    comment_list?: boolean
  }

  export type ArticleCountOutputTypeGetPayload<S extends boolean | null | undefined | ArticleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArticleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ArticleCountOutputTypeArgs)
    ? ArticleCountOutputType 
    : S extends { select: any } & (ArticleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ArticleCountOutputType ? ArticleCountOutputType[P] : never
  } 
      : ArticleCountOutputType




  // Custom InputTypes

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     * 
    **/
    select?: ArticleCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    article_list: number
  }

  export type CategoryCountOutputTypeSelect = {
    article_list?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    article_list: number
    follower_list: number
    focuser_list: number
    comment_list: number
  }

  export type UserCountOutputTypeSelect = {
    article_list?: boolean
    follower_list?: boolean
    focuser_list?: boolean
    comment_list?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Article
   */


  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    browse_times: number | null
    like_times: number | null
  }

  export type ArticleSumAggregateOutputType = {
    browse_times: number | null
    like_times: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    article_title: string | null
    article_description: string | null
    article_content: string | null
    article_bigCover: string | null
    article_cover: string | null
    author_id: string | null
    isExist: boolean | null
    browse_times: number | null
    like_times: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    article_title: string | null
    article_description: string | null
    article_content: string | null
    article_bigCover: string | null
    article_cover: string | null
    author_id: string | null
    isExist: boolean | null
    browse_times: number | null
    like_times: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    article_title: number
    article_description: number
    article_content: number
    article_bigCover: number
    article_cover: number
    author_id: number
    isExist: number
    browse_times: number
    like_times: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    browse_times?: true
    like_times?: true
  }

  export type ArticleSumAggregateInputType = {
    browse_times?: true
    like_times?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    article_title?: true
    article_description?: true
    article_content?: true
    article_bigCover?: true
    article_cover?: true
    author_id?: true
    isExist?: true
    browse_times?: true
    like_times?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    article_title?: true
    article_description?: true
    article_content?: true
    article_bigCover?: true
    article_cover?: true
    author_id?: true
    isExist?: true
    browse_times?: true
    like_times?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    article_title?: true
    article_description?: true
    article_content?: true
    article_bigCover?: true
    article_cover?: true
    author_id?: true
    isExist?: true
    browse_times?: true
    like_times?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs = {
    /**
     * Filter which Article to aggregate.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs = {
    where?: ArticleWhereInput
    orderBy?: Enumerable<ArticleOrderByWithAggregationInput>
    by: Array<ArticleScalarFieldEnum>
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }


  export type ArticleGroupByOutputType = {
    id: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover: string | null
    article_cover: string | null
    author_id: string
    isExist: boolean
    browse_times: number
    like_times: number
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect = {
    id?: boolean
    article_title?: boolean
    article_description?: boolean
    article_content?: boolean
    article_bigCover?: boolean
    article_cover?: boolean
    category_list?: boolean | Article$category_listArgs
    comment_list?: boolean | Article$comment_listArgs
    author?: boolean | UserArgs
    author_id?: boolean
    isExist?: boolean
    browse_times?: boolean
    like_times?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ArticleCountOutputTypeArgs
  }


  export type ArticleInclude = {
    category_list?: boolean | Article$category_listArgs
    comment_list?: boolean | Article$comment_listArgs
    author?: boolean | UserArgs
    _count?: boolean | ArticleCountOutputTypeArgs
  } 

  export type ArticleGetPayload<S extends boolean | null | undefined | ArticleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Article :
    S extends undefined ? never :
    S extends { include: any } & (ArticleArgs | ArticleFindManyArgs)
    ? Article  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category_list' ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'comment_list' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? ArticleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArticleArgs | ArticleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category_list' ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'comment_list' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? ArticleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Article ? Article[P] : never
  } 
      : Article


  type ArticleCountArgs = Merge<
    Omit<ArticleFindManyArgs, 'select' | 'include'> & {
      select?: ArticleCountAggregateInputType | true
    }
  >

  export interface ArticleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArticleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Article'> extends True ? Prisma__ArticleClient<ArticleGetPayload<T>> : Prisma__ArticleClient<ArticleGetPayload<T> | null, null>

    /**
     * Find one Article that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindUniqueOrThrowArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArticleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Article'> extends True ? Prisma__ArticleClient<ArticleGetPayload<T>> : Prisma__ArticleClient<ArticleGetPayload<T> | null, null>

    /**
     * Find the first Article that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleFindManyArgs>(
      args?: SelectSubset<T, ArticleFindManyArgs>
    ): PrismaPromise<Array<ArticleGetPayload<T>>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
    **/
    create<T extends ArticleCreateArgs>(
      args: SelectSubset<T, ArticleCreateArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Create many Articles.
     *     @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const article = await prisma.article.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArticleCreateManyArgs>(
      args?: SelectSubset<T, ArticleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
    **/
    delete<T extends ArticleDeleteArgs>(
      args: SelectSubset<T, ArticleDeleteArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleUpdateArgs>(
      args: SelectSubset<T, ArticleUpdateArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleDeleteManyArgs>(
      args?: SelectSubset<T, ArticleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleUpdateManyArgs>(
      args: SelectSubset<T, ArticleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleUpsertArgs>(
      args: SelectSubset<T, ArticleUpsertArgs>
    ): Prisma__ArticleClient<ArticleGetPayload<T>>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArticleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category_list<T extends Article$category_listArgs= {}>(args?: Subset<T, Article$category_listArgs>): PrismaPromise<Array<CategoryGetPayload<T>>| Null>;

    comment_list<T extends Article$comment_listArgs= {}>(args?: Subset<T, Article$comment_listArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Article base type for findUnique actions
   */
  export type ArticleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUnique
   */
  export interface ArticleFindUniqueArgs extends ArticleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article base type for findFirst actions
   */
  export type ArticleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     * 
    **/
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }

  /**
   * Article findFirst
   */
  export interface ArticleFindFirstArgs extends ArticleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Article to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     * 
    **/
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Article findMany
   */
  export type ArticleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter, which Articles to fetch.
     * 
    **/
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     * 
    **/
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     * 
    **/
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Article create
   */
  export type ArticleCreateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The data needed to create a Article.
     * 
    **/
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }


  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs = {
    /**
     * The data used to create many Articles.
     * 
    **/
    data: Enumerable<ArticleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Article update
   */
  export type ArticleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The data needed to update a Article.
     * 
    **/
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs = {
    /**
     * The data used to update Articles.
     * 
    **/
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     * 
    **/
    where?: ArticleWhereInput
  }


  /**
   * Article upsert
   */
  export type ArticleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * The filter to search for the Article to update in case it exists.
     * 
    **/
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     * 
    **/
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }


  /**
   * Article delete
   */
  export type ArticleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    /**
     * Filter which Article to delete.
     * 
    **/
    where: ArticleWhereUniqueInput
  }


  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs = {
    /**
     * Filter which Articles to delete
     * 
    **/
    where?: ArticleWhereInput
  }


  /**
   * Article.category_list
   */
  export type Article$category_listArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Article.comment_list
   */
  export type Article$comment_listArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Article without action
   */
  export type ArticleArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    cate_name: string | null
    background: string | null
    cate_pic: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    cate_name: string | null
    background: string | null
    cate_pic: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    cate_name: number
    background: number
    cate_pic: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    cate_name?: true
    background?: true
    cate_pic?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    cate_name?: true
    background?: true
    cate_pic?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    cate_name?: true
    background?: true
    cate_pic?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    cate_name: string
    background: string
    cate_pic: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    cate_name?: boolean
    background?: boolean
    cate_pic?: boolean
    article_list?: boolean | Category$article_listArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    article_list?: boolean | Category$article_listArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  } 

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'article_list' ? Array < ArticleGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'article_list' ? Array < ArticleGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article_list<T extends Category$article_listArgs= {}>(args?: Subset<T, Category$article_listArgs>): PrismaPromise<Array<ArticleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category.article_list
   */
  export type Category$article_listArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    where?: ArticleWhereInput
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    user_name: string | null
    avatar: string | null
    isExist: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    avatar: string | null
    isExist: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    user_name: number
    avatar: number
    isExist: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    user_name?: true
    avatar?: true
    isExist?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    user_name?: true
    avatar?: true
    isExist?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    user_name?: true
    avatar?: true
    isExist?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    user_name: string
    avatar: string
    isExist: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    user_name?: boolean
    avatar?: boolean
    article_list?: boolean | User$article_listArgs
    follower_list?: boolean | User$follower_listArgs
    focuser_list?: boolean | User$focuser_listArgs
    comment_list?: boolean | User$comment_listArgs
    isExist?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    article_list?: boolean | User$article_listArgs
    follower_list?: boolean | User$follower_listArgs
    focuser_list?: boolean | User$focuser_listArgs
    comment_list?: boolean | User$comment_listArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'article_list' ? Array < ArticleGetPayload<S['include'][P]>>  :
        P extends 'follower_list' ? Array < FollowerMapGetPayload<S['include'][P]>>  :
        P extends 'focuser_list' ? Array < FocuserMapGetPayload<S['include'][P]>>  :
        P extends 'comment_list' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'article_list' ? Array < ArticleGetPayload<S['select'][P]>>  :
        P extends 'follower_list' ? Array < FollowerMapGetPayload<S['select'][P]>>  :
        P extends 'focuser_list' ? Array < FocuserMapGetPayload<S['select'][P]>>  :
        P extends 'comment_list' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    article_list<T extends User$article_listArgs= {}>(args?: Subset<T, User$article_listArgs>): PrismaPromise<Array<ArticleGetPayload<T>>| Null>;

    follower_list<T extends User$follower_listArgs= {}>(args?: Subset<T, User$follower_listArgs>): PrismaPromise<Array<FollowerMapGetPayload<T>>| Null>;

    focuser_list<T extends User$focuser_listArgs= {}>(args?: Subset<T, User$focuser_listArgs>): PrismaPromise<Array<FocuserMapGetPayload<T>>| Null>;

    comment_list<T extends User$comment_listArgs= {}>(args?: Subset<T, User$comment_listArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.article_list
   */
  export type User$article_listArgs = {
    /**
     * Select specific fields to fetch from the Article
     * 
    **/
    select?: ArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArticleInclude | null
    where?: ArticleWhereInput
    orderBy?: Enumerable<ArticleOrderByWithRelationInput>
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArticleScalarFieldEnum>
  }


  /**
   * User.follower_list
   */
  export type User$follower_listArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    where?: FollowerMapWhereInput
    orderBy?: Enumerable<FollowerMapOrderByWithRelationInput>
    cursor?: FollowerMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FollowerMapScalarFieldEnum>
  }


  /**
   * User.focuser_list
   */
  export type User$focuser_listArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    where?: FocuserMapWhereInput
    orderBy?: Enumerable<FocuserMapOrderByWithRelationInput>
    cursor?: FocuserMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FocuserMapScalarFieldEnum>
  }


  /**
   * User.comment_list
   */
  export type User$comment_listArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model FollowerMap
   */


  export type AggregateFollowerMap = {
    _count: FollowerMapCountAggregateOutputType | null
    _min: FollowerMapMinAggregateOutputType | null
    _max: FollowerMapMaxAggregateOutputType | null
  }

  export type FollowerMapMinAggregateOutputType = {
    id: string | null
    master_id: string | null
  }

  export type FollowerMapMaxAggregateOutputType = {
    id: string | null
    master_id: string | null
  }

  export type FollowerMapCountAggregateOutputType = {
    id: number
    master_id: number
    _all: number
  }


  export type FollowerMapMinAggregateInputType = {
    id?: true
    master_id?: true
  }

  export type FollowerMapMaxAggregateInputType = {
    id?: true
    master_id?: true
  }

  export type FollowerMapCountAggregateInputType = {
    id?: true
    master_id?: true
    _all?: true
  }

  export type FollowerMapAggregateArgs = {
    /**
     * Filter which FollowerMap to aggregate.
     * 
    **/
    where?: FollowerMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FollowerMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowerMaps
    **/
    _count?: true | FollowerMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerMapMaxAggregateInputType
  }

  export type GetFollowerMapAggregateType<T extends FollowerMapAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowerMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowerMap[P]>
      : GetScalarType<T[P], AggregateFollowerMap[P]>
  }




  export type FollowerMapGroupByArgs = {
    where?: FollowerMapWhereInput
    orderBy?: Enumerable<FollowerMapOrderByWithAggregationInput>
    by: Array<FollowerMapScalarFieldEnum>
    having?: FollowerMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerMapCountAggregateInputType | true
    _min?: FollowerMapMinAggregateInputType
    _max?: FollowerMapMaxAggregateInputType
  }


  export type FollowerMapGroupByOutputType = {
    id: string
    master_id: string
    _count: FollowerMapCountAggregateOutputType | null
    _min: FollowerMapMinAggregateOutputType | null
    _max: FollowerMapMaxAggregateOutputType | null
  }

  type GetFollowerMapGroupByPayload<T extends FollowerMapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FollowerMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowerMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowerMapGroupByOutputType[P]>
            : GetScalarType<T[P], FollowerMapGroupByOutputType[P]>
        }
      >
    >


  export type FollowerMapSelect = {
    id?: boolean
    master?: boolean | UserArgs
    master_id?: boolean
  }


  export type FollowerMapInclude = {
    master?: boolean | UserArgs
  } 

  export type FollowerMapGetPayload<S extends boolean | null | undefined | FollowerMapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FollowerMap :
    S extends undefined ? never :
    S extends { include: any } & (FollowerMapArgs | FollowerMapFindManyArgs)
    ? FollowerMap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'master' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FollowerMapArgs | FollowerMapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'master' ? UserGetPayload<S['select'][P]> :  P extends keyof FollowerMap ? FollowerMap[P] : never
  } 
      : FollowerMap


  type FollowerMapCountArgs = Merge<
    Omit<FollowerMapFindManyArgs, 'select' | 'include'> & {
      select?: FollowerMapCountAggregateInputType | true
    }
  >

  export interface FollowerMapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one FollowerMap that matches the filter.
     * @param {FollowerMapFindUniqueArgs} args - Arguments to find a FollowerMap
     * @example
     * // Get one FollowerMap
     * const followerMap = await prisma.followerMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowerMapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FollowerMapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FollowerMap'> extends True ? Prisma__FollowerMapClient<FollowerMapGetPayload<T>> : Prisma__FollowerMapClient<FollowerMapGetPayload<T> | null, null>

    /**
     * Find one FollowerMap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowerMapFindUniqueOrThrowArgs} args - Arguments to find a FollowerMap
     * @example
     * // Get one FollowerMap
     * const followerMap = await prisma.followerMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowerMapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FollowerMapFindUniqueOrThrowArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Find the first FollowerMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapFindFirstArgs} args - Arguments to find a FollowerMap
     * @example
     * // Get one FollowerMap
     * const followerMap = await prisma.followerMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowerMapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FollowerMapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FollowerMap'> extends True ? Prisma__FollowerMapClient<FollowerMapGetPayload<T>> : Prisma__FollowerMapClient<FollowerMapGetPayload<T> | null, null>

    /**
     * Find the first FollowerMap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapFindFirstOrThrowArgs} args - Arguments to find a FollowerMap
     * @example
     * // Get one FollowerMap
     * const followerMap = await prisma.followerMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowerMapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FollowerMapFindFirstOrThrowArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Find zero or more FollowerMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowerMaps
     * const followerMaps = await prisma.followerMap.findMany()
     * 
     * // Get first 10 FollowerMaps
     * const followerMaps = await prisma.followerMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followerMapWithIdOnly = await prisma.followerMap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowerMapFindManyArgs>(
      args?: SelectSubset<T, FollowerMapFindManyArgs>
    ): PrismaPromise<Array<FollowerMapGetPayload<T>>>

    /**
     * Create a FollowerMap.
     * @param {FollowerMapCreateArgs} args - Arguments to create a FollowerMap.
     * @example
     * // Create one FollowerMap
     * const FollowerMap = await prisma.followerMap.create({
     *   data: {
     *     // ... data to create a FollowerMap
     *   }
     * })
     * 
    **/
    create<T extends FollowerMapCreateArgs>(
      args: SelectSubset<T, FollowerMapCreateArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Create many FollowerMaps.
     *     @param {FollowerMapCreateManyArgs} args - Arguments to create many FollowerMaps.
     *     @example
     *     // Create many FollowerMaps
     *     const followerMap = await prisma.followerMap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowerMapCreateManyArgs>(
      args?: SelectSubset<T, FollowerMapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FollowerMap.
     * @param {FollowerMapDeleteArgs} args - Arguments to delete one FollowerMap.
     * @example
     * // Delete one FollowerMap
     * const FollowerMap = await prisma.followerMap.delete({
     *   where: {
     *     // ... filter to delete one FollowerMap
     *   }
     * })
     * 
    **/
    delete<T extends FollowerMapDeleteArgs>(
      args: SelectSubset<T, FollowerMapDeleteArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Update one FollowerMap.
     * @param {FollowerMapUpdateArgs} args - Arguments to update one FollowerMap.
     * @example
     * // Update one FollowerMap
     * const followerMap = await prisma.followerMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowerMapUpdateArgs>(
      args: SelectSubset<T, FollowerMapUpdateArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Delete zero or more FollowerMaps.
     * @param {FollowerMapDeleteManyArgs} args - Arguments to filter FollowerMaps to delete.
     * @example
     * // Delete a few FollowerMaps
     * const { count } = await prisma.followerMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowerMapDeleteManyArgs>(
      args?: SelectSubset<T, FollowerMapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowerMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowerMaps
     * const followerMap = await prisma.followerMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowerMapUpdateManyArgs>(
      args: SelectSubset<T, FollowerMapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowerMap.
     * @param {FollowerMapUpsertArgs} args - Arguments to update or create a FollowerMap.
     * @example
     * // Update or create a FollowerMap
     * const followerMap = await prisma.followerMap.upsert({
     *   create: {
     *     // ... data to create a FollowerMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowerMap we want to update
     *   }
     * })
    **/
    upsert<T extends FollowerMapUpsertArgs>(
      args: SelectSubset<T, FollowerMapUpsertArgs>
    ): Prisma__FollowerMapClient<FollowerMapGetPayload<T>>

    /**
     * Count the number of FollowerMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapCountArgs} args - Arguments to filter FollowerMaps to count.
     * @example
     * // Count the number of FollowerMaps
     * const count = await prisma.followerMap.count({
     *   where: {
     *     // ... the filter for the FollowerMaps we want to count
     *   }
     * })
    **/
    count<T extends FollowerMapCountArgs>(
      args?: Subset<T, FollowerMapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowerMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowerMapAggregateArgs>(args: Subset<T, FollowerMapAggregateArgs>): PrismaPromise<GetFollowerMapAggregateType<T>>

    /**
     * Group by FollowerMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerMapGroupByArgs} args - Group by arguments.
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
      T extends FollowerMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowerMapGroupByArgs['orderBy'] }
        : { orderBy?: FollowerMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FollowerMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerMapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowerMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FollowerMapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    master<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FollowerMap base type for findUnique actions
   */
  export type FollowerMapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter, which FollowerMap to fetch.
     * 
    **/
    where: FollowerMapWhereUniqueInput
  }

  /**
   * FollowerMap findUnique
   */
  export interface FollowerMapFindUniqueArgs extends FollowerMapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FollowerMap findUniqueOrThrow
   */
  export type FollowerMapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter, which FollowerMap to fetch.
     * 
    **/
    where: FollowerMapWhereUniqueInput
  }


  /**
   * FollowerMap base type for findFirst actions
   */
  export type FollowerMapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter, which FollowerMap to fetch.
     * 
    **/
    where?: FollowerMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowerMaps.
     * 
    **/
    cursor?: FollowerMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowerMaps.
     * 
    **/
    distinct?: Enumerable<FollowerMapScalarFieldEnum>
  }

  /**
   * FollowerMap findFirst
   */
  export interface FollowerMapFindFirstArgs extends FollowerMapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FollowerMap findFirstOrThrow
   */
  export type FollowerMapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter, which FollowerMap to fetch.
     * 
    **/
    where?: FollowerMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowerMaps.
     * 
    **/
    cursor?: FollowerMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowerMaps.
     * 
    **/
    distinct?: Enumerable<FollowerMapScalarFieldEnum>
  }


  /**
   * FollowerMap findMany
   */
  export type FollowerMapFindManyArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter, which FollowerMaps to fetch.
     * 
    **/
    where?: FollowerMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowerMaps.
     * 
    **/
    cursor?: FollowerMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerMaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FollowerMapScalarFieldEnum>
  }


  /**
   * FollowerMap create
   */
  export type FollowerMapCreateArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * The data needed to create a FollowerMap.
     * 
    **/
    data: XOR<FollowerMapCreateInput, FollowerMapUncheckedCreateInput>
  }


  /**
   * FollowerMap createMany
   */
  export type FollowerMapCreateManyArgs = {
    /**
     * The data used to create many FollowerMaps.
     * 
    **/
    data: Enumerable<FollowerMapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FollowerMap update
   */
  export type FollowerMapUpdateArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * The data needed to update a FollowerMap.
     * 
    **/
    data: XOR<FollowerMapUpdateInput, FollowerMapUncheckedUpdateInput>
    /**
     * Choose, which FollowerMap to update.
     * 
    **/
    where: FollowerMapWhereUniqueInput
  }


  /**
   * FollowerMap updateMany
   */
  export type FollowerMapUpdateManyArgs = {
    /**
     * The data used to update FollowerMaps.
     * 
    **/
    data: XOR<FollowerMapUpdateManyMutationInput, FollowerMapUncheckedUpdateManyInput>
    /**
     * Filter which FollowerMaps to update
     * 
    **/
    where?: FollowerMapWhereInput
  }


  /**
   * FollowerMap upsert
   */
  export type FollowerMapUpsertArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * The filter to search for the FollowerMap to update in case it exists.
     * 
    **/
    where: FollowerMapWhereUniqueInput
    /**
     * In case the FollowerMap found by the `where` argument doesn't exist, create a new FollowerMap with this data.
     * 
    **/
    create: XOR<FollowerMapCreateInput, FollowerMapUncheckedCreateInput>
    /**
     * In case the FollowerMap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FollowerMapUpdateInput, FollowerMapUncheckedUpdateInput>
  }


  /**
   * FollowerMap delete
   */
  export type FollowerMapDeleteArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
    /**
     * Filter which FollowerMap to delete.
     * 
    **/
    where: FollowerMapWhereUniqueInput
  }


  /**
   * FollowerMap deleteMany
   */
  export type FollowerMapDeleteManyArgs = {
    /**
     * Filter which FollowerMaps to delete
     * 
    **/
    where?: FollowerMapWhereInput
  }


  /**
   * FollowerMap without action
   */
  export type FollowerMapArgs = {
    /**
     * Select specific fields to fetch from the FollowerMap
     * 
    **/
    select?: FollowerMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerMapInclude | null
  }



  /**
   * Model FocuserMap
   */


  export type AggregateFocuserMap = {
    _count: FocuserMapCountAggregateOutputType | null
    _min: FocuserMapMinAggregateOutputType | null
    _max: FocuserMapMaxAggregateOutputType | null
  }

  export type FocuserMapMinAggregateOutputType = {
    id: string | null
    follower_id: string | null
  }

  export type FocuserMapMaxAggregateOutputType = {
    id: string | null
    follower_id: string | null
  }

  export type FocuserMapCountAggregateOutputType = {
    id: number
    follower_id: number
    _all: number
  }


  export type FocuserMapMinAggregateInputType = {
    id?: true
    follower_id?: true
  }

  export type FocuserMapMaxAggregateInputType = {
    id?: true
    follower_id?: true
  }

  export type FocuserMapCountAggregateInputType = {
    id?: true
    follower_id?: true
    _all?: true
  }

  export type FocuserMapAggregateArgs = {
    /**
     * Filter which FocuserMap to aggregate.
     * 
    **/
    where?: FocuserMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocuserMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FocuserMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FocuserMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocuserMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocuserMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocuserMaps
    **/
    _count?: true | FocuserMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocuserMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocuserMapMaxAggregateInputType
  }

  export type GetFocuserMapAggregateType<T extends FocuserMapAggregateArgs> = {
        [P in keyof T & keyof AggregateFocuserMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocuserMap[P]>
      : GetScalarType<T[P], AggregateFocuserMap[P]>
  }




  export type FocuserMapGroupByArgs = {
    where?: FocuserMapWhereInput
    orderBy?: Enumerable<FocuserMapOrderByWithAggregationInput>
    by: Array<FocuserMapScalarFieldEnum>
    having?: FocuserMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocuserMapCountAggregateInputType | true
    _min?: FocuserMapMinAggregateInputType
    _max?: FocuserMapMaxAggregateInputType
  }


  export type FocuserMapGroupByOutputType = {
    id: string
    follower_id: string
    _count: FocuserMapCountAggregateOutputType | null
    _min: FocuserMapMinAggregateOutputType | null
    _max: FocuserMapMaxAggregateOutputType | null
  }

  type GetFocuserMapGroupByPayload<T extends FocuserMapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FocuserMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocuserMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocuserMapGroupByOutputType[P]>
            : GetScalarType<T[P], FocuserMapGroupByOutputType[P]>
        }
      >
    >


  export type FocuserMapSelect = {
    id?: boolean
    follower?: boolean | UserArgs
    follower_id?: boolean
  }


  export type FocuserMapInclude = {
    follower?: boolean | UserArgs
  } 

  export type FocuserMapGetPayload<S extends boolean | null | undefined | FocuserMapArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FocuserMap :
    S extends undefined ? never :
    S extends { include: any } & (FocuserMapArgs | FocuserMapFindManyArgs)
    ? FocuserMap  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'follower' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FocuserMapArgs | FocuserMapFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'follower' ? UserGetPayload<S['select'][P]> :  P extends keyof FocuserMap ? FocuserMap[P] : never
  } 
      : FocuserMap


  type FocuserMapCountArgs = Merge<
    Omit<FocuserMapFindManyArgs, 'select' | 'include'> & {
      select?: FocuserMapCountAggregateInputType | true
    }
  >

  export interface FocuserMapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one FocuserMap that matches the filter.
     * @param {FocuserMapFindUniqueArgs} args - Arguments to find a FocuserMap
     * @example
     * // Get one FocuserMap
     * const focuserMap = await prisma.focuserMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FocuserMapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FocuserMapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FocuserMap'> extends True ? Prisma__FocuserMapClient<FocuserMapGetPayload<T>> : Prisma__FocuserMapClient<FocuserMapGetPayload<T> | null, null>

    /**
     * Find one FocuserMap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FocuserMapFindUniqueOrThrowArgs} args - Arguments to find a FocuserMap
     * @example
     * // Get one FocuserMap
     * const focuserMap = await prisma.focuserMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FocuserMapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FocuserMapFindUniqueOrThrowArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Find the first FocuserMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapFindFirstArgs} args - Arguments to find a FocuserMap
     * @example
     * // Get one FocuserMap
     * const focuserMap = await prisma.focuserMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FocuserMapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FocuserMapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FocuserMap'> extends True ? Prisma__FocuserMapClient<FocuserMapGetPayload<T>> : Prisma__FocuserMapClient<FocuserMapGetPayload<T> | null, null>

    /**
     * Find the first FocuserMap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapFindFirstOrThrowArgs} args - Arguments to find a FocuserMap
     * @example
     * // Get one FocuserMap
     * const focuserMap = await prisma.focuserMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FocuserMapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FocuserMapFindFirstOrThrowArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Find zero or more FocuserMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocuserMaps
     * const focuserMaps = await prisma.focuserMap.findMany()
     * 
     * // Get first 10 FocuserMaps
     * const focuserMaps = await prisma.focuserMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focuserMapWithIdOnly = await prisma.focuserMap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FocuserMapFindManyArgs>(
      args?: SelectSubset<T, FocuserMapFindManyArgs>
    ): PrismaPromise<Array<FocuserMapGetPayload<T>>>

    /**
     * Create a FocuserMap.
     * @param {FocuserMapCreateArgs} args - Arguments to create a FocuserMap.
     * @example
     * // Create one FocuserMap
     * const FocuserMap = await prisma.focuserMap.create({
     *   data: {
     *     // ... data to create a FocuserMap
     *   }
     * })
     * 
    **/
    create<T extends FocuserMapCreateArgs>(
      args: SelectSubset<T, FocuserMapCreateArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Create many FocuserMaps.
     *     @param {FocuserMapCreateManyArgs} args - Arguments to create many FocuserMaps.
     *     @example
     *     // Create many FocuserMaps
     *     const focuserMap = await prisma.focuserMap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FocuserMapCreateManyArgs>(
      args?: SelectSubset<T, FocuserMapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FocuserMap.
     * @param {FocuserMapDeleteArgs} args - Arguments to delete one FocuserMap.
     * @example
     * // Delete one FocuserMap
     * const FocuserMap = await prisma.focuserMap.delete({
     *   where: {
     *     // ... filter to delete one FocuserMap
     *   }
     * })
     * 
    **/
    delete<T extends FocuserMapDeleteArgs>(
      args: SelectSubset<T, FocuserMapDeleteArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Update one FocuserMap.
     * @param {FocuserMapUpdateArgs} args - Arguments to update one FocuserMap.
     * @example
     * // Update one FocuserMap
     * const focuserMap = await prisma.focuserMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FocuserMapUpdateArgs>(
      args: SelectSubset<T, FocuserMapUpdateArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Delete zero or more FocuserMaps.
     * @param {FocuserMapDeleteManyArgs} args - Arguments to filter FocuserMaps to delete.
     * @example
     * // Delete a few FocuserMaps
     * const { count } = await prisma.focuserMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FocuserMapDeleteManyArgs>(
      args?: SelectSubset<T, FocuserMapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocuserMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocuserMaps
     * const focuserMap = await prisma.focuserMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FocuserMapUpdateManyArgs>(
      args: SelectSubset<T, FocuserMapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FocuserMap.
     * @param {FocuserMapUpsertArgs} args - Arguments to update or create a FocuserMap.
     * @example
     * // Update or create a FocuserMap
     * const focuserMap = await prisma.focuserMap.upsert({
     *   create: {
     *     // ... data to create a FocuserMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocuserMap we want to update
     *   }
     * })
    **/
    upsert<T extends FocuserMapUpsertArgs>(
      args: SelectSubset<T, FocuserMapUpsertArgs>
    ): Prisma__FocuserMapClient<FocuserMapGetPayload<T>>

    /**
     * Count the number of FocuserMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapCountArgs} args - Arguments to filter FocuserMaps to count.
     * @example
     * // Count the number of FocuserMaps
     * const count = await prisma.focuserMap.count({
     *   where: {
     *     // ... the filter for the FocuserMaps we want to count
     *   }
     * })
    **/
    count<T extends FocuserMapCountArgs>(
      args?: Subset<T, FocuserMapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocuserMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocuserMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FocuserMapAggregateArgs>(args: Subset<T, FocuserMapAggregateArgs>): PrismaPromise<GetFocuserMapAggregateType<T>>

    /**
     * Group by FocuserMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocuserMapGroupByArgs} args - Group by arguments.
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
      T extends FocuserMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocuserMapGroupByArgs['orderBy'] }
        : { orderBy?: FocuserMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FocuserMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocuserMapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FocuserMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FocuserMapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    follower<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FocuserMap base type for findUnique actions
   */
  export type FocuserMapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter, which FocuserMap to fetch.
     * 
    **/
    where: FocuserMapWhereUniqueInput
  }

  /**
   * FocuserMap findUnique
   */
  export interface FocuserMapFindUniqueArgs extends FocuserMapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FocuserMap findUniqueOrThrow
   */
  export type FocuserMapFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter, which FocuserMap to fetch.
     * 
    **/
    where: FocuserMapWhereUniqueInput
  }


  /**
   * FocuserMap base type for findFirst actions
   */
  export type FocuserMapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter, which FocuserMap to fetch.
     * 
    **/
    where?: FocuserMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocuserMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FocuserMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocuserMaps.
     * 
    **/
    cursor?: FocuserMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocuserMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocuserMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocuserMaps.
     * 
    **/
    distinct?: Enumerable<FocuserMapScalarFieldEnum>
  }

  /**
   * FocuserMap findFirst
   */
  export interface FocuserMapFindFirstArgs extends FocuserMapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FocuserMap findFirstOrThrow
   */
  export type FocuserMapFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter, which FocuserMap to fetch.
     * 
    **/
    where?: FocuserMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocuserMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FocuserMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocuserMaps.
     * 
    **/
    cursor?: FocuserMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocuserMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocuserMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocuserMaps.
     * 
    **/
    distinct?: Enumerable<FocuserMapScalarFieldEnum>
  }


  /**
   * FocuserMap findMany
   */
  export type FocuserMapFindManyArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter, which FocuserMaps to fetch.
     * 
    **/
    where?: FocuserMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocuserMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<FocuserMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocuserMaps.
     * 
    **/
    cursor?: FocuserMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocuserMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocuserMaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FocuserMapScalarFieldEnum>
  }


  /**
   * FocuserMap create
   */
  export type FocuserMapCreateArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * The data needed to create a FocuserMap.
     * 
    **/
    data: XOR<FocuserMapCreateInput, FocuserMapUncheckedCreateInput>
  }


  /**
   * FocuserMap createMany
   */
  export type FocuserMapCreateManyArgs = {
    /**
     * The data used to create many FocuserMaps.
     * 
    **/
    data: Enumerable<FocuserMapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FocuserMap update
   */
  export type FocuserMapUpdateArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * The data needed to update a FocuserMap.
     * 
    **/
    data: XOR<FocuserMapUpdateInput, FocuserMapUncheckedUpdateInput>
    /**
     * Choose, which FocuserMap to update.
     * 
    **/
    where: FocuserMapWhereUniqueInput
  }


  /**
   * FocuserMap updateMany
   */
  export type FocuserMapUpdateManyArgs = {
    /**
     * The data used to update FocuserMaps.
     * 
    **/
    data: XOR<FocuserMapUpdateManyMutationInput, FocuserMapUncheckedUpdateManyInput>
    /**
     * Filter which FocuserMaps to update
     * 
    **/
    where?: FocuserMapWhereInput
  }


  /**
   * FocuserMap upsert
   */
  export type FocuserMapUpsertArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * The filter to search for the FocuserMap to update in case it exists.
     * 
    **/
    where: FocuserMapWhereUniqueInput
    /**
     * In case the FocuserMap found by the `where` argument doesn't exist, create a new FocuserMap with this data.
     * 
    **/
    create: XOR<FocuserMapCreateInput, FocuserMapUncheckedCreateInput>
    /**
     * In case the FocuserMap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FocuserMapUpdateInput, FocuserMapUncheckedUpdateInput>
  }


  /**
   * FocuserMap delete
   */
  export type FocuserMapDeleteArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
    /**
     * Filter which FocuserMap to delete.
     * 
    **/
    where: FocuserMapWhereUniqueInput
  }


  /**
   * FocuserMap deleteMany
   */
  export type FocuserMapDeleteManyArgs = {
    /**
     * Filter which FocuserMaps to delete
     * 
    **/
    where?: FocuserMapWhereInput
  }


  /**
   * FocuserMap without action
   */
  export type FocuserMapArgs = {
    /**
     * Select specific fields to fetch from the FocuserMap
     * 
    **/
    select?: FocuserMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FocuserMapInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    like_times: number | null
    dislike_times: number | null
  }

  export type CommentSumAggregateOutputType = {
    like_times: number | null
    dislike_times: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    parent_id: string | null
    comment: string | null
    user_id: string | null
    like_times: number | null
    dislike_times: number | null
    createdAt: Date | null
    article_id: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    parent_id: string | null
    comment: string | null
    user_id: string | null
    like_times: number | null
    dislike_times: number | null
    createdAt: Date | null
    article_id: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    parent_id: number
    comment: number
    user_id: number
    like_times: number
    dislike_times: number
    createdAt: number
    article_id: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    like_times?: true
    dislike_times?: true
  }

  export type CommentSumAggregateInputType = {
    like_times?: true
    dislike_times?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    parent_id?: true
    comment?: true
    user_id?: true
    like_times?: true
    dislike_times?: true
    createdAt?: true
    article_id?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    parent_id?: true
    comment?: true
    user_id?: true
    like_times?: true
    dislike_times?: true
    createdAt?: true
    article_id?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    parent_id?: true
    comment?: true
    user_id?: true
    like_times?: true
    dislike_times?: true
    createdAt?: true
    article_id?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: string
    parent_id: string
    comment: string
    user_id: string
    like_times: number
    dislike_times: number
    createdAt: Date
    article_id: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    parent_id?: boolean
    comment?: boolean
    commentBy?: boolean | UserArgs
    user_id?: boolean
    like_times?: boolean
    dislike_times?: boolean
    createdAt?: boolean
    article?: boolean | ArticleArgs
    article_id?: boolean
  }


  export type CommentInclude = {
    commentBy?: boolean | UserArgs
    article?: boolean | ArticleArgs
  } 

  export type CommentGetPayload<S extends boolean | null | undefined | CommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comment :
    S extends undefined ? never :
    S extends { include: any } & (CommentArgs | CommentFindManyArgs)
    ? Comment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'commentBy' ? UserGetPayload<S['include'][P]> :
        P extends 'article' ? ArticleGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CommentArgs | CommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'commentBy' ? UserGetPayload<S['select'][P]> :
        P extends 'article' ? ArticleGetPayload<S['select'][P]> :  P extends keyof Comment ? Comment[P] : never
  } 
      : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): PrismaPromise<Array<CommentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    commentBy<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    article<T extends ArticleArgs= {}>(args?: Subset<T, ArticleArgs>): Prisma__ArticleClient<ArticleGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Comment base type for findUnique actions
   */
  export type CommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUnique
   */
  export interface CommentFindUniqueArgs extends CommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment base type for findFirst actions
   */
  export type CommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment findFirst
   */
  export interface CommentFindFirstArgs extends CommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     * 
    **/
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     * 
    **/
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ArticleScalarFieldEnum: {
    id: 'id',
    article_title: 'article_title',
    article_description: 'article_description',
    article_content: 'article_content',
    article_bigCover: 'article_bigCover',
    article_cover: 'article_cover',
    author_id: 'author_id',
    isExist: 'isExist',
    browse_times: 'browse_times',
    like_times: 'like_times',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    cate_name: 'cate_name',
    background: 'background',
    cate_pic: 'cate_pic'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    comment: 'comment',
    user_id: 'user_id',
    like_times: 'like_times',
    dislike_times: 'dislike_times',
    createdAt: 'createdAt',
    article_id: 'article_id'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FocuserMapScalarFieldEnum: {
    id: 'id',
    follower_id: 'follower_id'
  };

  export type FocuserMapScalarFieldEnum = (typeof FocuserMapScalarFieldEnum)[keyof typeof FocuserMapScalarFieldEnum]


  export const FollowerMapScalarFieldEnum: {
    id: 'id',
    master_id: 'master_id'
  };

  export type FollowerMapScalarFieldEnum = (typeof FollowerMapScalarFieldEnum)[keyof typeof FollowerMapScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    avatar: 'avatar',
    isExist: 'isExist'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: Enumerable<ArticleWhereInput>
    OR?: Enumerable<ArticleWhereInput>
    NOT?: Enumerable<ArticleWhereInput>
    id?: StringFilter | string
    article_title?: StringFilter | string
    article_description?: StringFilter | string
    article_content?: StringFilter | string
    article_bigCover?: StringNullableFilter | string | null
    article_cover?: StringNullableFilter | string | null
    category_list?: CategoryListRelationFilter
    comment_list?: CommentListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    author_id?: StringFilter | string
    isExist?: BoolFilter | boolean
    browse_times?: IntFilter | number
    like_times?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    article_title?: SortOrder
    article_description?: SortOrder
    article_content?: SortOrder
    article_bigCover?: SortOrder
    article_cover?: SortOrder
    category_list?: CategoryOrderByRelationAggregateInput
    comment_list?: CommentOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    author_id?: SortOrder
    isExist?: SortOrder
    browse_times?: SortOrder
    like_times?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleWhereUniqueInput = {
    id?: string
    article_title?: string
  }

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    article_title?: SortOrder
    article_description?: SortOrder
    article_content?: SortOrder
    article_bigCover?: SortOrder
    article_cover?: SortOrder
    author_id?: SortOrder
    isExist?: SortOrder
    browse_times?: SortOrder
    like_times?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArticleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    article_title?: StringWithAggregatesFilter | string
    article_description?: StringWithAggregatesFilter | string
    article_content?: StringWithAggregatesFilter | string
    article_bigCover?: StringNullableWithAggregatesFilter | string | null
    article_cover?: StringNullableWithAggregatesFilter | string | null
    author_id?: StringWithAggregatesFilter | string
    isExist?: BoolWithAggregatesFilter | boolean
    browse_times?: IntWithAggregatesFilter | number
    like_times?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    cate_name?: StringFilter | string
    background?: StringFilter | string
    cate_pic?: StringFilter | string
    article_list?: ArticleListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    cate_name?: SortOrder
    background?: SortOrder
    cate_pic?: SortOrder
    article_list?: ArticleOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: string
    cate_name?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    cate_name?: SortOrder
    background?: SortOrder
    cate_pic?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cate_name?: StringWithAggregatesFilter | string
    background?: StringWithAggregatesFilter | string
    cate_pic?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    user_name?: StringFilter | string
    avatar?: StringFilter | string
    article_list?: ArticleListRelationFilter
    follower_list?: FollowerMapListRelationFilter
    focuser_list?: FocuserMapListRelationFilter
    comment_list?: CommentListRelationFilter
    isExist?: BoolFilter | boolean
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    avatar?: SortOrder
    article_list?: ArticleOrderByRelationAggregateInput
    follower_list?: FollowerMapOrderByRelationAggregateInput
    focuser_list?: FocuserMapOrderByRelationAggregateInput
    comment_list?: CommentOrderByRelationAggregateInput
    isExist?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    user_name?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    avatar?: SortOrder
    isExist?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_name?: StringWithAggregatesFilter | string
    avatar?: StringWithAggregatesFilter | string
    isExist?: BoolWithAggregatesFilter | boolean
  }

  export type FollowerMapWhereInput = {
    AND?: Enumerable<FollowerMapWhereInput>
    OR?: Enumerable<FollowerMapWhereInput>
    NOT?: Enumerable<FollowerMapWhereInput>
    id?: StringFilter | string
    master?: XOR<UserRelationFilter, UserWhereInput>
    master_id?: StringFilter | string
  }

  export type FollowerMapOrderByWithRelationInput = {
    id?: SortOrder
    master?: UserOrderByWithRelationInput
    master_id?: SortOrder
  }

  export type FollowerMapWhereUniqueInput = {
    id?: string
  }

  export type FollowerMapOrderByWithAggregationInput = {
    id?: SortOrder
    master_id?: SortOrder
    _count?: FollowerMapCountOrderByAggregateInput
    _max?: FollowerMapMaxOrderByAggregateInput
    _min?: FollowerMapMinOrderByAggregateInput
  }

  export type FollowerMapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FollowerMapScalarWhereWithAggregatesInput>
    OR?: Enumerable<FollowerMapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FollowerMapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    master_id?: StringWithAggregatesFilter | string
  }

  export type FocuserMapWhereInput = {
    AND?: Enumerable<FocuserMapWhereInput>
    OR?: Enumerable<FocuserMapWhereInput>
    NOT?: Enumerable<FocuserMapWhereInput>
    id?: StringFilter | string
    follower?: XOR<UserRelationFilter, UserWhereInput>
    follower_id?: StringFilter | string
  }

  export type FocuserMapOrderByWithRelationInput = {
    id?: SortOrder
    follower?: UserOrderByWithRelationInput
    follower_id?: SortOrder
  }

  export type FocuserMapWhereUniqueInput = {
    id?: string
  }

  export type FocuserMapOrderByWithAggregationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    _count?: FocuserMapCountOrderByAggregateInput
    _max?: FocuserMapMaxOrderByAggregateInput
    _min?: FocuserMapMinOrderByAggregateInput
  }

  export type FocuserMapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FocuserMapScalarWhereWithAggregatesInput>
    OR?: Enumerable<FocuserMapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FocuserMapScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    follower_id?: StringWithAggregatesFilter | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: StringFilter | string
    parent_id?: StringFilter | string
    comment?: StringFilter | string
    commentBy?: XOR<UserRelationFilter, UserWhereInput>
    user_id?: StringFilter | string
    like_times?: IntFilter | number
    dislike_times?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    article?: XOR<ArticleRelationFilter, ArticleWhereInput>
    article_id?: StringFilter | string
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    comment?: SortOrder
    commentBy?: UserOrderByWithRelationInput
    user_id?: SortOrder
    like_times?: SortOrder
    dislike_times?: SortOrder
    createdAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    article_id?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: string
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    like_times?: SortOrder
    dislike_times?: SortOrder
    createdAt?: SortOrder
    article_id?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    parent_id?: StringWithAggregatesFilter | string
    comment?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    like_times?: IntWithAggregatesFilter | number
    dislike_times?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    article_id?: StringWithAggregatesFilter | string
  }

  export type ArticleCreateInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryCreateNestedManyWithoutArticle_listInput
    comment_list?: CommentCreateNestedManyWithoutArticleInput
    author: UserCreateNestedOneWithoutArticle_listInput
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryUncheckedCreateNestedManyWithoutArticle_listInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutArticleInput
    author_id: string
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUpdateManyWithoutArticle_listNestedInput
    comment_list?: CommentUpdateManyWithoutArticleNestedInput
    author?: UserUpdateOneRequiredWithoutArticle_listNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUncheckedUpdateManyWithoutArticle_listNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutArticleNestedInput
    author_id?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    author_id: string
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    cate_name: string
    background: string
    cate_pic: string
    article_list?: ArticleCreateNestedManyWithoutCategory_listInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    cate_name: string
    background: string
    cate_pic: string
    article_list?: ArticleUncheckedCreateNestedManyWithoutCategory_listInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUpdateManyWithoutCategory_listNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUncheckedUpdateManyWithoutCategory_listNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    cate_name: string
    background: string
    cate_pic: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapCreateNestedManyWithoutFollowerInput
    comment_list?: CommentCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserUncheckedCreateInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapUncheckedCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapUncheckedCreateNestedManyWithoutFollowerInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUncheckedUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUncheckedUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInput = {
    id?: string
    user_name: string
    avatar: string
    isExist?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowerMapCreateInput = {
    id?: string
    master: UserCreateNestedOneWithoutFollower_listInput
  }

  export type FollowerMapUncheckedCreateInput = {
    id?: string
    master_id: string
  }

  export type FollowerMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    master?: UserUpdateOneRequiredWithoutFollower_listNestedInput
  }

  export type FollowerMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    master_id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerMapCreateManyInput = {
    id?: string
    master_id: string
  }

  export type FollowerMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    master_id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapCreateInput = {
    id?: string
    follower: UserCreateNestedOneWithoutFocuser_listInput
  }

  export type FocuserMapUncheckedCreateInput = {
    id?: string
    follower_id: string
  }

  export type FocuserMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower?: UserUpdateOneRequiredWithoutFocuser_listNestedInput
  }

  export type FocuserMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapCreateManyInput = {
    id?: string
    follower_id: string
  }

  export type FocuserMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    parent_id?: string
    comment: string
    commentBy: UserCreateNestedOneWithoutComment_listInput
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article: ArticleCreateNestedOneWithoutComment_listInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    parent_id?: string
    comment: string
    user_id: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article_id: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    commentBy?: UserUpdateOneRequiredWithoutComment_listNestedInput
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutComment_listNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    parent_id?: string
    comment: string
    user_id: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article_id: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    article_title?: SortOrder
    article_description?: SortOrder
    article_content?: SortOrder
    article_bigCover?: SortOrder
    article_cover?: SortOrder
    author_id?: SortOrder
    isExist?: SortOrder
    browse_times?: SortOrder
    like_times?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    browse_times?: SortOrder
    like_times?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    article_title?: SortOrder
    article_description?: SortOrder
    article_content?: SortOrder
    article_bigCover?: SortOrder
    article_cover?: SortOrder
    author_id?: SortOrder
    isExist?: SortOrder
    browse_times?: SortOrder
    like_times?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    article_title?: SortOrder
    article_description?: SortOrder
    article_content?: SortOrder
    article_bigCover?: SortOrder
    article_cover?: SortOrder
    author_id?: SortOrder
    isExist?: SortOrder
    browse_times?: SortOrder
    like_times?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    browse_times?: SortOrder
    like_times?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    cate_name?: SortOrder
    background?: SortOrder
    cate_pic?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    cate_name?: SortOrder
    background?: SortOrder
    cate_pic?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    cate_name?: SortOrder
    background?: SortOrder
    cate_pic?: SortOrder
  }

  export type FollowerMapListRelationFilter = {
    every?: FollowerMapWhereInput
    some?: FollowerMapWhereInput
    none?: FollowerMapWhereInput
  }

  export type FocuserMapListRelationFilter = {
    every?: FocuserMapWhereInput
    some?: FocuserMapWhereInput
    none?: FocuserMapWhereInput
  }

  export type FollowerMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocuserMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    avatar?: SortOrder
    isExist?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    avatar?: SortOrder
    isExist?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    avatar?: SortOrder
    isExist?: SortOrder
  }

  export type FollowerMapCountOrderByAggregateInput = {
    id?: SortOrder
    master_id?: SortOrder
  }

  export type FollowerMapMaxOrderByAggregateInput = {
    id?: SortOrder
    master_id?: SortOrder
  }

  export type FollowerMapMinOrderByAggregateInput = {
    id?: SortOrder
    master_id?: SortOrder
  }

  export type FocuserMapCountOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
  }

  export type FocuserMapMaxOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
  }

  export type FocuserMapMinOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
  }

  export type ArticleRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    like_times?: SortOrder
    dislike_times?: SortOrder
    createdAt?: SortOrder
    article_id?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    like_times?: SortOrder
    dislike_times?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    like_times?: SortOrder
    dislike_times?: SortOrder
    createdAt?: SortOrder
    article_id?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    like_times?: SortOrder
    dislike_times?: SortOrder
    createdAt?: SortOrder
    article_id?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    like_times?: SortOrder
    dislike_times?: SortOrder
  }

  export type CategoryCreateNestedManyWithoutArticle_listInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutArticle_listInput>, Enumerable<CategoryUncheckedCreateWithoutArticle_listInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutArticle_listInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutArticle_listInput = {
    create?: XOR<UserCreateWithoutArticle_listInput, UserUncheckedCreateWithoutArticle_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticle_listInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutArticle_listInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutArticle_listInput>, Enumerable<CategoryUncheckedCreateWithoutArticle_listInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutArticle_listInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateManyWithoutArticle_listNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutArticle_listInput>, Enumerable<CategoryUncheckedCreateWithoutArticle_listInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutArticle_listInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutArticle_listInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutArticle_listInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutArticle_listInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutArticle_listNestedInput = {
    create?: XOR<UserCreateWithoutArticle_listInput, UserUncheckedCreateWithoutArticle_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticle_listInput
    upsert?: UserUpsertWithoutArticle_listInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutArticle_listInput, UserUncheckedUpdateWithoutArticle_listInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUncheckedUpdateManyWithoutArticle_listNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutArticle_listInput>, Enumerable<CategoryUncheckedCreateWithoutArticle_listInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutArticle_listInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutArticle_listInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutArticle_listInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutArticle_listInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutArticleInput>, Enumerable<CommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ArticleCreateNestedManyWithoutCategory_listInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategory_listInput>, Enumerable<ArticleUncheckedCreateWithoutCategory_listInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategory_listInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type ArticleUncheckedCreateNestedManyWithoutCategory_listInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategory_listInput>, Enumerable<ArticleUncheckedCreateWithoutCategory_listInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategory_listInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type ArticleUpdateManyWithoutCategory_listNestedInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategory_listInput>, Enumerable<ArticleUncheckedCreateWithoutCategory_listInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategory_listInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutCategory_listInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutCategory_listInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutCategory_listInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type ArticleUncheckedUpdateManyWithoutCategory_listNestedInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutCategory_listInput>, Enumerable<ArticleUncheckedCreateWithoutCategory_listInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutCategory_listInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutCategory_listInput>
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutCategory_listInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutCategory_listInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutAuthorInput>, Enumerable<ArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutAuthorInput>
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type FollowerMapCreateNestedManyWithoutMasterInput = {
    create?: XOR<Enumerable<FollowerMapCreateWithoutMasterInput>, Enumerable<FollowerMapUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<FollowerMapCreateOrConnectWithoutMasterInput>
    createMany?: FollowerMapCreateManyMasterInputEnvelope
    connect?: Enumerable<FollowerMapWhereUniqueInput>
  }

  export type FocuserMapCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FocuserMapCreateWithoutFollowerInput>, Enumerable<FocuserMapUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FocuserMapCreateOrConnectWithoutFollowerInput>
    createMany?: FocuserMapCreateManyFollowerInputEnvelope
    connect?: Enumerable<FocuserMapWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutCommentByInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentByInput>, Enumerable<CommentUncheckedCreateWithoutCommentByInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentByInput>
    createMany?: CommentCreateManyCommentByInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutAuthorInput>, Enumerable<ArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutAuthorInput>
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<ArticleWhereUniqueInput>
  }

  export type FollowerMapUncheckedCreateNestedManyWithoutMasterInput = {
    create?: XOR<Enumerable<FollowerMapCreateWithoutMasterInput>, Enumerable<FollowerMapUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<FollowerMapCreateOrConnectWithoutMasterInput>
    createMany?: FollowerMapCreateManyMasterInputEnvelope
    connect?: Enumerable<FollowerMapWhereUniqueInput>
  }

  export type FocuserMapUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FocuserMapCreateWithoutFollowerInput>, Enumerable<FocuserMapUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FocuserMapCreateOrConnectWithoutFollowerInput>
    createMany?: FocuserMapCreateManyFollowerInputEnvelope
    connect?: Enumerable<FocuserMapWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutCommentByInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentByInput>, Enumerable<CommentUncheckedCreateWithoutCommentByInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentByInput>
    createMany?: CommentCreateManyCommentByInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutAuthorInput>, Enumerable<ArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type FollowerMapUpdateManyWithoutMasterNestedInput = {
    create?: XOR<Enumerable<FollowerMapCreateWithoutMasterInput>, Enumerable<FollowerMapUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<FollowerMapCreateOrConnectWithoutMasterInput>
    upsert?: Enumerable<FollowerMapUpsertWithWhereUniqueWithoutMasterInput>
    createMany?: FollowerMapCreateManyMasterInputEnvelope
    set?: Enumerable<FollowerMapWhereUniqueInput>
    disconnect?: Enumerable<FollowerMapWhereUniqueInput>
    delete?: Enumerable<FollowerMapWhereUniqueInput>
    connect?: Enumerable<FollowerMapWhereUniqueInput>
    update?: Enumerable<FollowerMapUpdateWithWhereUniqueWithoutMasterInput>
    updateMany?: Enumerable<FollowerMapUpdateManyWithWhereWithoutMasterInput>
    deleteMany?: Enumerable<FollowerMapScalarWhereInput>
  }

  export type FocuserMapUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<Enumerable<FocuserMapCreateWithoutFollowerInput>, Enumerable<FocuserMapUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FocuserMapCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FocuserMapUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FocuserMapCreateManyFollowerInputEnvelope
    set?: Enumerable<FocuserMapWhereUniqueInput>
    disconnect?: Enumerable<FocuserMapWhereUniqueInput>
    delete?: Enumerable<FocuserMapWhereUniqueInput>
    connect?: Enumerable<FocuserMapWhereUniqueInput>
    update?: Enumerable<FocuserMapUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FocuserMapUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FocuserMapScalarWhereInput>
  }

  export type CommentUpdateManyWithoutCommentByNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentByInput>, Enumerable<CommentUncheckedCreateWithoutCommentByInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentByInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCommentByInput>
    createMany?: CommentCreateManyCommentByInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCommentByInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCommentByInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ArticleCreateWithoutAuthorInput>, Enumerable<ArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<ArticleWhereUniqueInput>
    disconnect?: Enumerable<ArticleWhereUniqueInput>
    delete?: Enumerable<ArticleWhereUniqueInput>
    connect?: Enumerable<ArticleWhereUniqueInput>
    update?: Enumerable<ArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ArticleScalarWhereInput>
  }

  export type FollowerMapUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: XOR<Enumerable<FollowerMapCreateWithoutMasterInput>, Enumerable<FollowerMapUncheckedCreateWithoutMasterInput>>
    connectOrCreate?: Enumerable<FollowerMapCreateOrConnectWithoutMasterInput>
    upsert?: Enumerable<FollowerMapUpsertWithWhereUniqueWithoutMasterInput>
    createMany?: FollowerMapCreateManyMasterInputEnvelope
    set?: Enumerable<FollowerMapWhereUniqueInput>
    disconnect?: Enumerable<FollowerMapWhereUniqueInput>
    delete?: Enumerable<FollowerMapWhereUniqueInput>
    connect?: Enumerable<FollowerMapWhereUniqueInput>
    update?: Enumerable<FollowerMapUpdateWithWhereUniqueWithoutMasterInput>
    updateMany?: Enumerable<FollowerMapUpdateManyWithWhereWithoutMasterInput>
    deleteMany?: Enumerable<FollowerMapScalarWhereInput>
  }

  export type FocuserMapUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<Enumerable<FocuserMapCreateWithoutFollowerInput>, Enumerable<FocuserMapUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FocuserMapCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FocuserMapUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FocuserMapCreateManyFollowerInputEnvelope
    set?: Enumerable<FocuserMapWhereUniqueInput>
    disconnect?: Enumerable<FocuserMapWhereUniqueInput>
    delete?: Enumerable<FocuserMapWhereUniqueInput>
    connect?: Enumerable<FocuserMapWhereUniqueInput>
    update?: Enumerable<FocuserMapUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FocuserMapUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FocuserMapScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutCommentByNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentByInput>, Enumerable<CommentUncheckedCreateWithoutCommentByInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentByInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCommentByInput>
    createMany?: CommentCreateManyCommentByInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCommentByInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCommentByInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFollower_listInput = {
    create?: XOR<UserCreateWithoutFollower_listInput, UserUncheckedCreateWithoutFollower_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollower_listInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollower_listNestedInput = {
    create?: XOR<UserCreateWithoutFollower_listInput, UserUncheckedCreateWithoutFollower_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollower_listInput
    upsert?: UserUpsertWithoutFollower_listInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollower_listInput, UserUncheckedUpdateWithoutFollower_listInput>
  }

  export type UserCreateNestedOneWithoutFocuser_listInput = {
    create?: XOR<UserCreateWithoutFocuser_listInput, UserUncheckedCreateWithoutFocuser_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocuser_listInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFocuser_listNestedInput = {
    create?: XOR<UserCreateWithoutFocuser_listInput, UserUncheckedCreateWithoutFocuser_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocuser_listInput
    upsert?: UserUpsertWithoutFocuser_listInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFocuser_listInput, UserUncheckedUpdateWithoutFocuser_listInput>
  }

  export type UserCreateNestedOneWithoutComment_listInput = {
    create?: XOR<UserCreateWithoutComment_listInput, UserUncheckedCreateWithoutComment_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutComment_listInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutComment_listInput = {
    create?: XOR<ArticleCreateWithoutComment_listInput, ArticleUncheckedCreateWithoutComment_listInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutComment_listInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutComment_listNestedInput = {
    create?: XOR<UserCreateWithoutComment_listInput, UserUncheckedCreateWithoutComment_listInput>
    connectOrCreate?: UserCreateOrConnectWithoutComment_listInput
    upsert?: UserUpsertWithoutComment_listInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutComment_listInput, UserUncheckedUpdateWithoutComment_listInput>
  }

  export type ArticleUpdateOneRequiredWithoutComment_listNestedInput = {
    create?: XOR<ArticleCreateWithoutComment_listInput, ArticleUncheckedCreateWithoutComment_listInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutComment_listInput
    upsert?: ArticleUpsertWithoutComment_listInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<ArticleUpdateWithoutComment_listInput, ArticleUncheckedUpdateWithoutComment_listInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CategoryCreateWithoutArticle_listInput = {
    id?: string
    cate_name: string
    background: string
    cate_pic: string
  }

  export type CategoryUncheckedCreateWithoutArticle_listInput = {
    id?: string
    cate_name: string
    background: string
    cate_pic: string
  }

  export type CategoryCreateOrConnectWithoutArticle_listInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArticle_listInput, CategoryUncheckedCreateWithoutArticle_listInput>
  }

  export type CommentCreateWithoutArticleInput = {
    id?: string
    parent_id?: string
    comment: string
    commentBy: UserCreateNestedOneWithoutComment_listInput
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: string
    parent_id?: string
    comment: string
    user_id: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateManyArticleInputEnvelope = {
    data: Enumerable<CommentCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutArticle_listInput = {
    id?: string
    user_name: string
    avatar: string
    follower_list?: FollowerMapCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapCreateNestedManyWithoutFollowerInput
    comment_list?: CommentCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserUncheckedCreateWithoutArticle_listInput = {
    id?: string
    user_name: string
    avatar: string
    follower_list?: FollowerMapUncheckedCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapUncheckedCreateNestedManyWithoutFollowerInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserCreateOrConnectWithoutArticle_listInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticle_listInput, UserUncheckedCreateWithoutArticle_listInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutArticle_listInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutArticle_listInput, CategoryUncheckedUpdateWithoutArticle_listInput>
    create: XOR<CategoryCreateWithoutArticle_listInput, CategoryUncheckedCreateWithoutArticle_listInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutArticle_listInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutArticle_listInput, CategoryUncheckedUpdateWithoutArticle_listInput>
  }

  export type CategoryUpdateManyWithWhereWithoutArticle_listInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategory_listInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: StringFilter | string
    cate_name?: StringFilter | string
    background?: StringFilter | string
    cate_pic?: StringFilter | string
  }

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutComment_listInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: StringFilter | string
    parent_id?: StringFilter | string
    comment?: StringFilter | string
    user_id?: StringFilter | string
    like_times?: IntFilter | number
    dislike_times?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    article_id?: StringFilter | string
  }

  export type UserUpsertWithoutArticle_listInput = {
    update: XOR<UserUpdateWithoutArticle_listInput, UserUncheckedUpdateWithoutArticle_listInput>
    create: XOR<UserCreateWithoutArticle_listInput, UserUncheckedCreateWithoutArticle_listInput>
  }

  export type UserUpdateWithoutArticle_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    follower_list?: FollowerMapUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutArticle_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    follower_list?: FollowerMapUncheckedUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUncheckedUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArticleCreateWithoutCategory_listInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    comment_list?: CommentCreateNestedManyWithoutArticleInput
    author: UserCreateNestedOneWithoutArticle_listInput
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutCategory_listInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    comment_list?: CommentUncheckedCreateNestedManyWithoutArticleInput
    author_id: string
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutCategory_listInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCategory_listInput, ArticleUncheckedCreateWithoutCategory_listInput>
  }

  export type ArticleUpsertWithWhereUniqueWithoutCategory_listInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutCategory_listInput, ArticleUncheckedUpdateWithoutCategory_listInput>
    create: XOR<ArticleCreateWithoutCategory_listInput, ArticleUncheckedCreateWithoutCategory_listInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutCategory_listInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutCategory_listInput, ArticleUncheckedUpdateWithoutCategory_listInput>
  }

  export type ArticleUpdateManyWithWhereWithoutCategory_listInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutArticle_listInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: Enumerable<ArticleScalarWhereInput>
    OR?: Enumerable<ArticleScalarWhereInput>
    NOT?: Enumerable<ArticleScalarWhereInput>
    id?: StringFilter | string
    article_title?: StringFilter | string
    article_description?: StringFilter | string
    article_content?: StringFilter | string
    article_bigCover?: StringNullableFilter | string | null
    article_cover?: StringNullableFilter | string | null
    author_id?: StringFilter | string
    isExist?: BoolFilter | boolean
    browse_times?: IntFilter | number
    like_times?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ArticleCreateWithoutAuthorInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryCreateNestedManyWithoutArticle_listInput
    comment_list?: CommentCreateNestedManyWithoutArticleInput
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryUncheckedCreateNestedManyWithoutArticle_listInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutArticleInput
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleCreateManyAuthorInputEnvelope = {
    data: Enumerable<ArticleCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type FollowerMapCreateWithoutMasterInput = {
    id?: string
  }

  export type FollowerMapUncheckedCreateWithoutMasterInput = {
    id?: string
  }

  export type FollowerMapCreateOrConnectWithoutMasterInput = {
    where: FollowerMapWhereUniqueInput
    create: XOR<FollowerMapCreateWithoutMasterInput, FollowerMapUncheckedCreateWithoutMasterInput>
  }

  export type FollowerMapCreateManyMasterInputEnvelope = {
    data: Enumerable<FollowerMapCreateManyMasterInput>
    skipDuplicates?: boolean
  }

  export type FocuserMapCreateWithoutFollowerInput = {
    id?: string
  }

  export type FocuserMapUncheckedCreateWithoutFollowerInput = {
    id?: string
  }

  export type FocuserMapCreateOrConnectWithoutFollowerInput = {
    where: FocuserMapWhereUniqueInput
    create: XOR<FocuserMapCreateWithoutFollowerInput, FocuserMapUncheckedCreateWithoutFollowerInput>
  }

  export type FocuserMapCreateManyFollowerInputEnvelope = {
    data: Enumerable<FocuserMapCreateManyFollowerInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutCommentByInput = {
    id?: string
    parent_id?: string
    comment: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article: ArticleCreateNestedOneWithoutComment_listInput
  }

  export type CommentUncheckedCreateWithoutCommentByInput = {
    id?: string
    parent_id?: string
    comment: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article_id: string
  }

  export type CommentCreateOrConnectWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput>
  }

  export type CommentCreateManyCommentByInputEnvelope = {
    data: Enumerable<CommentCreateManyCommentByInput>
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutArticle_listInput>
  }

  export type FollowerMapUpsertWithWhereUniqueWithoutMasterInput = {
    where: FollowerMapWhereUniqueInput
    update: XOR<FollowerMapUpdateWithoutMasterInput, FollowerMapUncheckedUpdateWithoutMasterInput>
    create: XOR<FollowerMapCreateWithoutMasterInput, FollowerMapUncheckedCreateWithoutMasterInput>
  }

  export type FollowerMapUpdateWithWhereUniqueWithoutMasterInput = {
    where: FollowerMapWhereUniqueInput
    data: XOR<FollowerMapUpdateWithoutMasterInput, FollowerMapUncheckedUpdateWithoutMasterInput>
  }

  export type FollowerMapUpdateManyWithWhereWithoutMasterInput = {
    where: FollowerMapScalarWhereInput
    data: XOR<FollowerMapUpdateManyMutationInput, FollowerMapUncheckedUpdateManyWithoutFollower_listInput>
  }

  export type FollowerMapScalarWhereInput = {
    AND?: Enumerable<FollowerMapScalarWhereInput>
    OR?: Enumerable<FollowerMapScalarWhereInput>
    NOT?: Enumerable<FollowerMapScalarWhereInput>
    id?: StringFilter | string
    master_id?: StringFilter | string
  }

  export type FocuserMapUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FocuserMapWhereUniqueInput
    update: XOR<FocuserMapUpdateWithoutFollowerInput, FocuserMapUncheckedUpdateWithoutFollowerInput>
    create: XOR<FocuserMapCreateWithoutFollowerInput, FocuserMapUncheckedCreateWithoutFollowerInput>
  }

  export type FocuserMapUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FocuserMapWhereUniqueInput
    data: XOR<FocuserMapUpdateWithoutFollowerInput, FocuserMapUncheckedUpdateWithoutFollowerInput>
  }

  export type FocuserMapUpdateManyWithWhereWithoutFollowerInput = {
    where: FocuserMapScalarWhereInput
    data: XOR<FocuserMapUpdateManyMutationInput, FocuserMapUncheckedUpdateManyWithoutFocuser_listInput>
  }

  export type FocuserMapScalarWhereInput = {
    AND?: Enumerable<FocuserMapScalarWhereInput>
    OR?: Enumerable<FocuserMapScalarWhereInput>
    NOT?: Enumerable<FocuserMapScalarWhereInput>
    id?: StringFilter | string
    follower_id?: StringFilter | string
  }

  export type CommentUpsertWithWhereUniqueWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCommentByInput, CommentUncheckedUpdateWithoutCommentByInput>
    create: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCommentByInput, CommentUncheckedUpdateWithoutCommentByInput>
  }

  export type CommentUpdateManyWithWhereWithoutCommentByInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutComment_listInput>
  }

  export type UserCreateWithoutFollower_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleCreateNestedManyWithoutAuthorInput
    focuser_list?: FocuserMapCreateNestedManyWithoutFollowerInput
    comment_list?: CommentCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserUncheckedCreateWithoutFollower_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    focuser_list?: FocuserMapUncheckedCreateNestedManyWithoutFollowerInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserCreateOrConnectWithoutFollower_listInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollower_listInput, UserUncheckedCreateWithoutFollower_listInput>
  }

  export type UserUpsertWithoutFollower_listInput = {
    update: XOR<UserUpdateWithoutFollower_listInput, UserUncheckedUpdateWithoutFollower_listInput>
    create: XOR<UserCreateWithoutFollower_listInput, UserUncheckedCreateWithoutFollower_listInput>
  }

  export type UserUpdateWithoutFollower_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUpdateManyWithoutAuthorNestedInput
    focuser_list?: FocuserMapUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutFollower_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    focuser_list?: FocuserMapUncheckedUpdateManyWithoutFollowerNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutFocuser_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapCreateNestedManyWithoutMasterInput
    comment_list?: CommentCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserUncheckedCreateWithoutFocuser_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapUncheckedCreateNestedManyWithoutMasterInput
    comment_list?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    isExist?: boolean
  }

  export type UserCreateOrConnectWithoutFocuser_listInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFocuser_listInput, UserUncheckedCreateWithoutFocuser_listInput>
  }

  export type UserUpsertWithoutFocuser_listInput = {
    update: XOR<UserUpdateWithoutFocuser_listInput, UserUncheckedUpdateWithoutFocuser_listInput>
    create: XOR<UserCreateWithoutFocuser_listInput, UserUncheckedCreateWithoutFocuser_listInput>
  }

  export type UserUpdateWithoutFocuser_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUpdateManyWithoutMasterNestedInput
    comment_list?: CommentUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutFocuser_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUncheckedUpdateManyWithoutMasterNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutComment_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapCreateNestedManyWithoutFollowerInput
    isExist?: boolean
  }

  export type UserUncheckedCreateWithoutComment_listInput = {
    id?: string
    user_name: string
    avatar: string
    article_list?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    follower_list?: FollowerMapUncheckedCreateNestedManyWithoutMasterInput
    focuser_list?: FocuserMapUncheckedCreateNestedManyWithoutFollowerInput
    isExist?: boolean
  }

  export type UserCreateOrConnectWithoutComment_listInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComment_listInput, UserUncheckedCreateWithoutComment_listInput>
  }

  export type ArticleCreateWithoutComment_listInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryCreateNestedManyWithoutArticle_listInput
    author: UserCreateNestedOneWithoutArticle_listInput
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutComment_listInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    category_list?: CategoryUncheckedCreateNestedManyWithoutArticle_listInput
    author_id: string
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutComment_listInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutComment_listInput, ArticleUncheckedCreateWithoutComment_listInput>
  }

  export type UserUpsertWithoutComment_listInput = {
    update: XOR<UserUpdateWithoutComment_listInput, UserUncheckedUpdateWithoutComment_listInput>
    create: XOR<UserCreateWithoutComment_listInput, UserUncheckedCreateWithoutComment_listInput>
  }

  export type UserUpdateWithoutComment_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUpdateManyWithoutFollowerNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutComment_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    article_list?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    follower_list?: FollowerMapUncheckedUpdateManyWithoutMasterNestedInput
    focuser_list?: FocuserMapUncheckedUpdateManyWithoutFollowerNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArticleUpsertWithoutComment_listInput = {
    update: XOR<ArticleUpdateWithoutComment_listInput, ArticleUncheckedUpdateWithoutComment_listInput>
    create: XOR<ArticleCreateWithoutComment_listInput, ArticleUncheckedCreateWithoutComment_listInput>
  }

  export type ArticleUpdateWithoutComment_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUpdateManyWithoutArticle_listNestedInput
    author?: UserUpdateOneRequiredWithoutArticle_listNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutComment_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUncheckedUpdateManyWithoutArticle_listNestedInput
    author_id?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyArticleInput = {
    id?: string
    parent_id?: string
    comment: string
    user_id: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutArticle_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutArticle_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutCategory_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    cate_name?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    cate_pic?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    commentBy?: UserUpdateOneRequiredWithoutComment_listNestedInput
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutComment_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpdateWithoutCategory_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    comment_list?: CommentUpdateManyWithoutArticleNestedInput
    author?: UserUpdateOneRequiredWithoutArticle_listNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutCategory_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    comment_list?: CommentUncheckedUpdateManyWithoutArticleNestedInput
    author_id?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutArticle_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyAuthorInput = {
    id?: string
    article_title: string
    article_description: string
    article_content: string
    article_bigCover?: string | null
    article_cover?: string | null
    isExist?: boolean
    browse_times?: number
    like_times?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowerMapCreateManyMasterInput = {
    id?: string
  }

  export type FocuserMapCreateManyFollowerInput = {
    id?: string
  }

  export type CommentCreateManyCommentByInput = {
    id?: string
    parent_id?: string
    comment: string
    like_times?: number
    dislike_times?: number
    createdAt?: Date | string
    article_id: string
  }

  export type ArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUpdateManyWithoutArticle_listNestedInput
    comment_list?: CommentUpdateManyWithoutArticleNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_title?: StringFieldUpdateOperationsInput | string
    article_description?: StringFieldUpdateOperationsInput | string
    article_content?: StringFieldUpdateOperationsInput | string
    article_bigCover?: NullableStringFieldUpdateOperationsInput | string | null
    article_cover?: NullableStringFieldUpdateOperationsInput | string | null
    category_list?: CategoryUncheckedUpdateManyWithoutArticle_listNestedInput
    comment_list?: CommentUncheckedUpdateManyWithoutArticleNestedInput
    isExist?: BoolFieldUpdateOperationsInput | boolean
    browse_times?: IntFieldUpdateOperationsInput | number
    like_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerMapUpdateWithoutMasterInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerMapUncheckedUpdateWithoutMasterInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerMapUncheckedUpdateManyWithoutFollower_listInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FocuserMapUncheckedUpdateManyWithoutFocuser_listInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutCommentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutComment_listNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    like_times?: IntFieldUpdateOperationsInput | number
    dislike_times?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article_id?: StringFieldUpdateOperationsInput | string
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