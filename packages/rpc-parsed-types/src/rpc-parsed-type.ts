export type RpcParsedType<TType extends string, TInfo> = Readonly<{
    info: TInfo;
    type: TType;
}>;
